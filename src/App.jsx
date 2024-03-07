import { NameImageTemplate, ElementTemplate, PartnerSkillTemplate, ProfessionTemplate, DropTemplate } from './components.jsx';
import { paldeckData, Elements, Professions } from './data.js';
import { DataTable } from 'primereact/datatable';
import Container from 'react-bootstrap/Container';
import { Column } from 'primereact/column';
import { React, useState } from 'react';


const App = () => {

  // dark mode switch


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
    <Container id="main" fluid>
      <h1 className="text-center p-3">Palworld Pals</h1>
      <div className="text-center p-1 text-muted">
        Ctrl-Click on Multiple Columns to Sort <div className="vr"></div> Toggle the Element Buttons to Filter the Data <div className="vr"></div> Click on a Row for a Detailed Modal
      </div>

      <div className="text-center p-3">
        {Elements.map((element) => (
          <button key={element} className={`btn btn-sm m-1 ${selectedElements.includes(element) ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => toggleElement(element)}>
            <img src={`assets/images/elements/palworld-${element.toLowerCase()}-element.webp`} alt={element} width="40" height="40" />
          </button>
        ))}
      </div>

      <DataTable value={filteredPalsData} stripedRows sortMode="multiple" size="small" paginator rows={25} rowsPerPageOptions={[25, 111]} tableStyle={{ minWidth: '1rem', padding: '0 0' }}>
        <Column field="paldeck" header="#" sortable bodyStyle={{ textAlign: 'center' }} style={{ width: '1%' }}></Column>
        <Column header="Pal" body={NameImageTemplate} sortField='name' sortable style={{ width: '1%' }}></Column>
        <Column header="Element" body={ElementTemplate} style={{ width: '1%' }}></Column>
        <Column header="Skill" body={PartnerSkillTemplate} sortable sortField="type" style={{ width: '1%' }}></Column>
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
        {/* <Column header="Drops" body={DropTemplate}></Column> */}
      </DataTable>

    </Container >
  )
};

export default App;
