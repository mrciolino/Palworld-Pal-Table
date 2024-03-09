import { NameImageTemplate, ElementTemplate, PartnerSkillTemplate, ProfessionTemplate } from './components.jsx';
import { paldeckData, Elements, Professions } from './data.js';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { DataTable } from 'primereact/datatable';
import { ScrollTop } from 'primereact/scrolltop';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import React, { useState, useRef } from 'react';
import './App.scss';

import { Toast } from 'primereact/toast';


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
  const toast = useRef(null);
  const onRowSelect = (event) => {
    toast.current.show({ severity: 'info', summary: 'Product Selected', detail: `Name: ${event.data.name}`, life: 3000 });
  };

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
      <Toast ref={toast} />

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

      <DataTable value={filteredPalsData}
        stripedRows sortMode="multiple" paginator rows={25} rowsPerPageOptions={[25, 111]}
        size="small" tableStyle={{ minWidth: '1rem', padding: '0 0' }} onRowSelect={onRowSelect}>

        <Column field="paldeck" header="#" sortable bodyStyle={{ textAlign: 'center' }} style={{ width: '5%' }}></Column>
        <Column header="Pal" body={NameImageTemplate} sortField='name' sortable style={{ width: '5%' }}></Column>
        <Column header="Element" body={ElementTemplate} style={{ width: '5%' }}></Column>
        <Column header="Skill" body={PartnerSkillTemplate} sortable sortField="type" style={{ width: '5%' }}> </Column>


        {Professions.map((profession) => (
          <Column
            key={profession}
            header={<img src={`assets/images/professions/${profession}.webp`} alt={profession} width="40" height="40" />}
            body={(product) => ProfessionTemplate(product, profession)}
            sortable
            sortField={profession}
            style={{ width: '1%' }}
          ></Column>
        ))}

      </DataTable>

      <ScrollTop />

    </main >
  )
};
