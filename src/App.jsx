import { NameImageTemplate, ElementTemplate, PartnerSkillTemplate, ProfessionTemplate, PalDialogContent } from './components.jsx';
import { paldeckData, Elements, Professions } from './data.js';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { ScrollTop } from 'primereact/scrolltop';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
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
    setDisplayDialog(false);
  };
  useEffect(() => {
    if (selectedProduct) {
      setDisplayDialog(true);
    }
  }, [selectedProduct]);

  // Element filitering
  const [selectedElements, setSelectedElements] = useState([]);

  const toggleElement = (element) => {
    if (selectedElements.includes(element)) {
      setSelectedElements(selectedElements.filter(el => el !== element));
    } else {
      setSelectedElements([...selectedElements, element]);
    }
  };

  const filteredPalsData = paldeckData.filter((pal) => {
    if (selectedElements.length === 0) {
      return true;
    }
    return selectedElements.some(selected => pal.element.includes(selected));
  });

  // html code
  return (
    <main className='body'>
      <DarkModeSwitch className="darkmodeswitch m-4" onChange={toggleDarkMode} checked={!darkMode} />

      <h1 className="text-center p-3">Palworld Pals</h1>
      <div className="text-center p-1 text">
        Ctrl-Click on Multiple Columns to Sort <div className="vr"></div> Toggle the Element Buttons to Filter the Data
      </div>

      <div className="text-center p-3">
        {Elements.map((element) => (
          <Button key={element} className={`btn btn-sm m-1 ${selectedElements.includes(element) ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => toggleElement(element)}>
            <img src={`assets/images/elements/palworld-${element.toLowerCase()}-element.webp`} alt={element} width="40" height="40" />
          </Button>
        ))}
      </div>

      <Dialog visible={displayDialog} style={{ width: '55vw' }} header="Pal Information" modal onHide={onHide}
        footer={<Button icon="pi pi-times" onClick={onHide} label="Close" className="p-button-text" />}>
        {selectedProduct && <PalDialogContent selectedProduct={selectedProduct} />}
      </Dialog>

      <DataTable value={filteredPalsData}
        stripedRows sortMode="multiple" paginator rows={25} rowsPerPageOptions={[25, 111]}
        size="small" tableStyle={{ minWidth: '1rem', padding: '0 0' }}
        selectionMode="single" selection={selectedProduct} dataKey="name"
        onSelectionChange={(e) => setSelectedProduct(e.value)} metaKeySelection={false}>

        <Column field="paldeck" header="#" sortable bodyStyle={{ textAlign: 'center' }} style={{ width: '5%' }}></Column>
        <Column header="Pal" body={NameImageTemplate} sortField='name' sortable style={{ width: '5%' }}></Column>
        <Column header="Element" body={ElementTemplate} style={{ width: '5%' }}></Column>
        <Column header="Skill" body={PartnerSkillTemplate} sortable sortField="type" style={{ width: '5%' }}> </Column>
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
