import { NameImageTemplate, ElementTemplate, PartnerSkillTemplate, ProfessionTemplate, DropTemplate } from './components.jsx';
import { palsData } from './data.js';
import { DataTable } from 'primereact/datatable';
import Container from 'react-bootstrap/Container';
import { Column } from 'primereact/column';
import { React, useState } from 'react';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

const App = () => {
  const [selectedElements, setSelectedElements] = useState([]);

  const toggleElement = (element) => {
    // Check if the element is already selected 
    if (selectedElements.includes(element)) {
      setSelectedElements(selectedElements.filter(el => el !== element));
    } else {
      setSelectedElements([...selectedElements, element]);
    }
  };

  const filteredPalsData = palsData.filter((pal) => {
    // If no elements are selected, show all data
    if (selectedElements.length === 0) {
      return true;
    }
    // Check if the pal's element is among the selected elements
    return selectedElements.some(selected => pal.element.includes(selected));
  });


  return (
    // i want datatable to take up whole screen
    <Container fluid>
      <h1 className="text-center">Palworld Pals</h1>
      <div className="text-center">
        <button className={`btn btn-sm m-1 ${selectedElements.includes("Dark") ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => toggleElement("Dark")}>
          <img src={"assets/images/elements/palworld-dark-element.webp"} alt="Dark" width="30" height="30" />
        </button>
        <button className={`btn btn-sm m-1 ${selectedElements.includes("Dragon") ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => toggleElement("Dragon")}>
          <img src={"assets/images/elements/palworld-dragon-element.webp"} alt="Dragon" width="30" height="30" />
        </button>
        <button className={`btn btn-sm m-1 ${selectedElements.includes("Electric") ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => toggleElement("Electric")}>
          <img src={"assets/images/elements/palworld-electric-element.webp"} alt="Electric" width="30" height="30" />
        </button>
        <button className={`btn btn-sm m-1 ${selectedElements.includes("Fire") ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => toggleElement("Fire")}>
          <img src={"assets/images/elements/palworld-fire-element.webp"} alt="Fire" width="30" height="30" />
        </button>
        <button className={`btn btn-sm m-1 ${selectedElements.includes("Grass") ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => toggleElement("Grass")}>
          <img src={"assets/images/elements/palworld-grass-element.webp"} alt="Grass" width="30" height="30" />
        </button>
        <button className={`btn btn-sm m-1 ${selectedElements.includes("Ground") ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => toggleElement("Ground")}>
          <img src={"assets/images/elements/palworld-ground-element.webp"} alt="Ground" width="30" height="30" />
        </button>
        <button className={`btn btn-sm m-1 ${selectedElements.includes("Ice") ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => toggleElement("Ice")}>
          <img src={"assets/images/elements/palworld-ice-element.webp"} alt="Ice" width="30" height="30" />
        </button>
        <button className={`btn btn-sm m-1 ${selectedElements.includes("Neutral") ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => toggleElement("Neutral")}>
          <img src={"assets/images/elements/palworld-neutral-element.webp"} alt="Neutral" width="30" height="30" />
        </button>
        <button className={`btn btn-sm m-1 ${selectedElements.includes("Water") ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => toggleElement("Water")}>
          <img src={"assets/images/elements/palworld-water-element.webp"} alt="Water" width="30" height="30" />
        </button>
      </div>

      <DataTable value={filteredPalsData} stripedRows sortMode="multiple" size="small" paginator rows={25} tableStyle={{ minWidth: '50rem' }}>
        <Column field="paldeck" header="Paldeck" sortable bodyStyle={{ textAlign: 'center' }} style={{ width: '3%' }}></Column>
        <Column header="Pal" body={NameImageTemplate} sortField='name' sortable  style={{ width: '10%' }}></Column>
        <Column header="Element" body={ElementTemplate} style={{ width: '15%' }}></Column>
        <Column header="Partner Skill" body={PartnerSkillTemplate} style={{ width: '12%' }}></Column>
        <Column header={<img src={"assets/images/professions/Cooling.webp"} alt="Cooling" width="30" height="30" />} body={(product) => ProfessionTemplate(product, "Cooling")} sortable sortField="Cooling"></Column>
        <Column header={<img src={"assets/images/professions/Electricity.webp"} alt="Electricity" width="30" height="30" />} body={(product) => ProfessionTemplate(product, "Electricity")} sortable sortField="Electricity"></Column>
        <Column header={<img src={"assets/images/professions/Farming.webp"} alt="Farming" width="30" height="30" />} body={(product) => ProfessionTemplate(product, "Farming")} sortable sortField="Farming"></Column>
        <Column header={<img src={"assets/images/professions/Gathering.webp"} alt="Gathering" width="30" height="30" />} body={(product) => ProfessionTemplate(product, "Gathering")} sortable sortField="Gathering"></Column>
        <Column header={<img src={"assets/images/professions/Handiwork.webp"} alt="Handiwork" width="30" height="30" />} body={(product) => ProfessionTemplate(product, "Handiwork")} sortable sortField="Handiwork"></Column>
        <Column header={<img src={"assets/images/professions/Kindling.webp"} alt="Kindling" width="30" height="30" />} body={(product) => ProfessionTemplate(product, "Kindling")} sortable sortField="Kindling"></Column>
        <Column header={<img src={"assets/images/professions/Lumbering.webp"} alt="Lumbering" width="30" height="30" />} body={(product) => ProfessionTemplate(product, "Lumbering")} sortable sortField="Lumbering"></Column>
        <Column header={<img src={"assets/images/professions/Medicine.webp"} alt="Medicine" width="30" height="30" />} body={(product) => ProfessionTemplate(product, "Medicine")} sortable sortField="Medicine"></Column>
        <Column header={<img src={"assets/images/professions/Mining.webp"} alt="Mining" width="30" height="30" />} body={(product) => ProfessionTemplate(product, "Mining")} sortable sortField="Mining"></Column>
        <Column header={<img src={"assets/images/professions/Planting.webp"} alt="Planting" width="30" height="30" />} body={(product) => ProfessionTemplate(product, "Planting")} sortable sortField="Planting"></Column>
        <Column header={<img src={"assets/images/professions/Transporting.webp"} alt="Transporting" width="30" height="30" />} body={(product) => ProfessionTemplate(product, "Transporting")} sortable sortField="Transporting"></Column>
        <Column header={<img src={"assets/images/professions/Watering.webp"} alt="Watering" width="30" height="30" />} body={(product) => ProfessionTemplate(product, "Watering")} sortable sortField="Watering"></Column>
        <Column Header="Drops" body={DropTemplate} sortable sortField='Drops'></Column>
      </DataTable>
    </Container>
  )
};

export default App;
