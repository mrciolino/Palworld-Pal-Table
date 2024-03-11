import { NameImageTemplate, ElementTemplate, PartnerSkillTemplate, ProfessionTemplate, PalDialogContent } from './components.jsx';
import React, { useState, useEffect, useRef } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { OverlayPanel } from 'primereact/overlaypanel';
import { paldeckData, Elements } from './data.js';
import { DataTable } from 'primereact/datatable';
import { ScrollTop } from 'primereact/scrolltop';
import { Checkbox } from 'primereact/checkbox';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import 'primeicons/primeicons.css';
import './App.scss';


export default function App() {

  // dark mode switch
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = (theme) => {
    let themeLink = document.getElementById('app-theme');
    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    window.darkMode = !darkMode;
    changeTheme(darkMode ? '/themes/viva-dark/theme' : '/themes/viva-light/theme');
  }

  // row select
  const [displayDialog, setDisplayDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onHide = () => {
    setSelectedProduct(null);
    setDisplayDialog(false);
  };

  useEffect(() => {
    if (selectedProduct) {
      setDisplayDialog(true);
    }
  }, [selectedProduct]);

  // filters
  const op = useRef(null);
  const categories = [
    { name: "Flying", key: "Flying" },
    { name: "Combat", key: "Combat" },
    { name: "Mount", key: "Mount" },
    { name: "Utility", key: "Utility" },
    { name: "Farming", key: "Farming" },
    { name: "Glider", key: "Glider" },
  ];
  const [selectedCategories, setSelectedCategories] = useState([]);

  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];
    if (e.checked)
      _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);
    setSelectedCategories(_selectedCategories);
  };

  const [selectedElements, setSelectedElements] = useState([]);

  const toggleElement = (element) => {
    if (selectedElements.includes(element)) {
      setSelectedElements(selectedElements.filter(el => el !== element));
    } else {
      setSelectedElements([...selectedElements, element]);
    }
  };

  // row filitering
  function checkSelectedCategory(pal, selectedCategories) {
    const selectedCategoriesNames = selectedCategories.map((category) => category.name); // ["Flying", "Combat"]
    const palCategories = pal.type.split(" / "); // ["Flying", "Utility"]
    return palCategories.some((category) => selectedCategoriesNames.includes(category));
  }

  function checkSelectedElement(pal, selectedElements) {
    return selectedElements.some((element) => pal.element.includes(element));
  }

  const filteredPalsData = paldeckData.filter((pal) => {
    let numElements = selectedElements.length
    let numCategories = selectedCategories.length
    if (numElements === 0 && numCategories === 0) {
      return true;
    }
    if (numElements === 0 && numCategories > 0) {
      return checkSelectedCategory(pal, selectedCategories);
    }
    if (numElements > 0 && numCategories === 0) {
      return checkSelectedElement(pal, selectedElements);
    }
    return checkSelectedCategory(pal, selectedCategories) && checkSelectedElement(pal, selectedElements);
  });

  // html code
  return (
    <main id="Content" className='body'>
      <DarkModeSwitch className="darkmodeswitch m-4" onChange={toggleDarkMode} checked={!darkMode} />

      <div>
        <h1 className="text-center p-3">PalTable</h1>
        <div className="text-center p-1 small txt">
          Ctrl-Click on Multiple Columns to Sort <div className="vr"></div> Toggle the Element Buttons to Filter <div className="vr"></div> Filter by Partner Skill <i className="pi pi-filter" style={{ fontSize: '0.75rem' }}></i>  <div className="vr"></div> Click on Pal Image for More Information
        </div>
      </div>

      <div className="text-center p-3 flex">
        {Elements.map((element) => (
          <Button
            key={element}
            className={`btn btn-sm m-1 ${selectedElements.includes(element) ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => toggleElement(element)}
            style={{
              backgroundColor: selectedElements.includes(element) ? (darkMode ? '#282c34' : '#697489') : 'transparent',
              color: selectedElements.includes(element) ? '#fff' : (darkMode ? '#282c34' : '#000')
            }}
          >
            <img className="img-fluid" src={`assets/images/elements/palworld-${element.toLowerCase()}-element.webp`} alt={element} width="40" height="40" />
          </Button>
        ))}
      </div>

      <Dialog id="modal" visible={displayDialog} header="Pal Information" modal onHide={onHide} footer={<Button icon="pi pi-times" onClick={onHide} label="Close" className="p-button-text" />}>  {selectedProduct && <PalDialogContent selectedProduct={selectedProduct} />}</Dialog>

      <DataTable value={filteredPalsData} stripedRows sortMode="multiple" paginator rows={25} rowsPerPageOptions={[25, 111]} size="small" tableStyle={{ minWidth: '1rem', padding: '0 0' }} selectionMode="single" selection={selectedProduct} dataKey="name" onSelectionChange={(e) => setSelectedProduct(e.value)}>
        <Column field="paldeck" header="# &nbsp;" sortable bodyStyle={{ textAlign: 'center' }} style={{ width: '5%' }}></Column>
        <Column header="Pal &nbsp;" body={NameImageTemplate} sortField='name' sortable style={{ width: '5%' }} sortMode></Column>
        <Column header="Element &nbsp;" body={ElementTemplate} style={{ width: '5%' }}></Column>

        <Column
          header={
            <div className='justify-content-between'>
              <span className='mr-auto'>Skill &nbsp;</span>
              <Button type="button" onClick={(e) => op.current.toggle(e)} className={`btn btn-sm ${darkMode ? 'btn-outline-dark' : 'btn-outline-light'} no-pad-btn`} icon="mt-1 p-0 pi pi-filter" />
              <OverlayPanel ref={op}>
                {categories.map((category) => {
                  return (
                    <div key={category.key} className="flex align-items-center">
                      <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                      <label htmlFor={category.key} className="px-1">
                        {category.name}
                      </label>
                    </div>
                  );
                })}
              </OverlayPanel>
            </div>
          }
          body={PartnerSkillTemplate}
          style={{ width: '5%' }}
        ></Column>

        <Column key="Cooling" header={<img src={`assets/images/professions/Cooling.webp`} alt="Cooling" width="40" height="40" />} body={(product) => ProfessionTemplate(product, "Cooling")} sortable sortField="Cooling" style={{ width: '1%' }}></Column>
        <Column key="Generating" header={<img src={`assets/images/professions/Electricity.webp`} alt="Electricity" width="40" height="40" />} body={(product) => ProfessionTemplate(product, "Generating")} sortable sortField="Generating" style={{ width: '1%' }}></Column>
        <Column key="Farming" header={<img src={`assets/images/professions/Farming.webp`} alt="Farming" width="40" height="40" />} body={(product) => ProfessionTemplate(product, "Farming")} sortable sortField="Farming" style={{ width: '1%' }} ></Column>
        <Column key="Gathering" header={<img src={`assets/images/professions/Gathering.webp`} alt="Gathering" width="40" height="40" />} body={(product) => ProfessionTemplate(product, "Gathering")} sortable sortField="Gathering" style={{ width: '1%' }}></Column>
        <Column key="Handiwork" header={<img src={`assets/images/professions/Handiwork.webp`} alt="Handiwork" width="40" height="40" />} body={(product) => ProfessionTemplate(product, "Handiwork")} sortable sortField="Handiwork" style={{ width: '1%' }}></Column>
        <Column key="Kindling" header={<img src={`assets/images/professions/Kindling.webp`} alt="Kindling" width="40" height="40" />} body={(product) => ProfessionTemplate(product, "Kindling")} sortable sortField="Kindling" style={{ width: '1%' }}></Column>
        <Column key="Lumbering" header={<img src={`assets/images/professions/Lumbering.webp`} alt="Lumbering" width="40" height="40" />} body={(product) => ProfessionTemplate(product, "Lumbering")} sortable sortField="Lumbering" style={{ width: '1%' }}></Column>
        <Column key="Medicine" header={<img src={`assets/images/professions/Medicine.webp`} alt="Medicine" width="40" height="40" />} body={(product) => ProfessionTemplate(product, "Medicine")} sortable sortField="Medicine" style={{ width: '1%' }}></Column>
        <Column key="Mining" header={<img src={`assets/images/professions/Mining.webp`} alt="Mining" width="40" height="40" />} body={(product) => ProfessionTemplate(product, "Mining")} sortable sortField="Mining" style={{ width: '1%' }}></Column>
        <Column key="Planting" header={<img src={`assets/images/professions/Planting.webp`} alt="Planting" width="40" height="40" />} body={(product) => ProfessionTemplate(product, "Planting")} sortable sortField="Planting" style={{ width: '1%' }}></Column>
        <Column key="Transporting" header={<img src={`assets/images/professions/Transporting.webp`} alt="Transporting" width="40" height="40" />} body={(product) => ProfessionTemplate(product, "Transporting")} sortable sortField="Transporting" style={{ width: '1%' }}></Column>
        <Column key="Watering" header={<img src={`assets/images/professions/Watering.webp`} alt="Watering" width="40" height="40" />} body={(product) => ProfessionTemplate(product, "Watering")} sortable sortField="Watering" style={{ width: '1%' }}></Column>
      </DataTable>
      <ScrollTop />
    </main >
  )
};
