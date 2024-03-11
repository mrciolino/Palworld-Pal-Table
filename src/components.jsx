import { strongAgainst, weakAgainst } from './data.js';
import { Tooltip } from 'primereact/tooltip';
import React from 'react';

const NameImageTemplate = (product) => {
    return (
        <div className="text-center">
            <div><b>{product.name}</b></div>
            <img src={product.image} alt={product.name} className="w-6rem shadow-2 border-round img-fluid" style={{ maxWidth: '8rem', maxHeight: '8rem' }} />
        </div>
    );
};


const PartnerSkillTemplate = (product) => {
    const sanitizedSkill = product.skill.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, ''); // Replace spaces and remove invalid characters
    const targetClassName = `custom-target-${sanitizedSkill}-${product.paldeck}`;
    return (
        <div className={`card flex justify-content-center bg-transparent border ${window.darkMode ? 'border-dark' : 'border-light'}`}>
            <Tooltip target={`.${targetClassName}`}>
                <div style={{ maxWidth: '15rem' }}>
                    {product.description}
                </div>
            </Tooltip>
            <div className={`text-center ${targetClassName} p-1 text`}>
                {product.skill}
                <hr className={`border border-2 opacity-50 ${window.darkMode ? 'border-dark' : 'border-light'}`}></hr>
                <div className='text-center small muted'>{product.type}</div>
            </div>
        </div>
    );
};

function ProfessionTemplate(product, type) {
    let professionLevel = product[type] || "0";
    return (
        <div className="text-center">
            {professionLevel}
        </div>
    );
};

function ElementTemplate(product) {
    const targetClassName = `custom-target-${product.element}-${product.paldeck}`;
    let element = product.element.split("-");

    // for each element, find its strong and weak elements and add them to the strongElements and weakElements arrays
    // Fire-Ground is [Fire, Ground] with strong [Grass-Ice, Electric] and weak [Water, Grass]
    // [[Fire, [Grass, Ice], [Water]], 
    //  [Ground, [Electric], [Grass]]]
    let elements = []
    for (let i = 0; i < element.length; i++) {
        let elementStrong = [strongAgainst[element[i]]];
        let elementWeak = weakAgainst[element[i]];
        if (elementStrong[0].includes("-")) {
            elementStrong = elementStrong[0].split("-");
        }
        elements.push([element[i], elementStrong, elementWeak]);
    }

    // for each element, find its strong and weak elements and add them to the strongElements and weakElements arrays and display in tooltip/icons
    return (
        <div className={`card flex justify-content-center bg-transparent border ${window.darkMode ? 'border-dark' : 'border-light'}`}>
            <Tooltip target={`.${targetClassName}`}>
                {elements.map((element, index) => {
                    return (
                        <div key={index} className="text-center">
                            <img src={`assets/images/elements/palworld-${element[2].toLowerCase()}-element.webp`} alt={element[0]} className="w-6rem shadow-2 border-round" width="40" height="40" />
                            -&gt;
                            <img src={`assets/images/elements/palworld-${element[0].toLowerCase()}-element.webp`} alt={element[0]} className="w-6rem shadow-2 border-round img-fluid" width="40" height="40" />
                            -&gt;
                            {element[1].map((strongElement, index) => {
                                return (
                                    <img key={index} src={`assets/images/elements/palworld-${strongElement.toLowerCase()}-element.webp`} alt={strongElement} className="w-6rem shadow-2 border-round" width="40" height="40" />
                                );
                            })}
                        </div>
                    );
                })}
            </Tooltip >
            <div className={`text-center ${targetClassName} p-1`}>
                {elements.map((element, index) => {
                    return (
                        <div key={index} className="text-center">
                            <img src={`assets/images/elements/palworld-${element[0].toLowerCase()}-element.webp`} alt={element[0]} className="w-6rem shadow-2 border-round" width="40" height="40" />
                        </div>
                    );
                })}
            </div>
        </div >
    );
};

const PalDialogContent = ({ selectedProduct }) => {
    return (
        <>
            <div className="d-flex flex-wrap">

                <div className="col-lg-6 col-sm-6 p-3">
                    <div className="row text-center">
                        <h3>{selectedProduct.name}</h3>
                        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-6rem shadow-2 border-round img-fluid" />
                    </div>
                </div>

                <div className="col-lg-6 col-sm-6 p-3">

                    <div className='col-lg-12 col-sm-12 p-1'>
                        <h5>Element</h5>
                        <ElementTemplate {...selectedProduct} />
                    </div>
                    <div className='col-lg-12 col-sm-12 p-1'>
                        <h5>Partner Skill</h5>
                        <PartnerSkillTemplate {...selectedProduct} />
                    </div>
                    <div className='col-lg-12 col-sm-12 p-1'>
                        <h5>Drops</h5>
                        <div>
                            {selectedProduct.drops.split(',').map((drop, index) => (
                                <>
                                    <img src={`assets/images/drops/${drop.replace(/^\s+|\s+$/g, '').replace(/\s/g, '_')}_icon.webp`} alt={drop} className="thumbnail shadow-2 border-round" />
                                    <span>{drop}</span>
                                </>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <div className="d-flex flex-wrap">
                <div className='row' style={{ '--bs-gutter-x': '0' }}>
                    <div className='d-flex flex-wrap pt-3' style={{ '--bs-gutter-x': '0' }}>
                        <div className='col-12 p-1 small'>
                            <h5>Professions</h5>
                            <div className='row' style={{ '--bs-gutter-x': '0' }}>
                                <div className='col-lg-3 col-sm-4'>
                                    <strong style={{ fontWeight: selectedProduct.Cooling ? 'bold' : 'normal', textAlign: 'right' }}>
                                        Cooling
                                        <img src="assets/images/professions/Cooling.webp" alt="Cooling" className="thumbnail shadow-2 border-round" />
                                        {selectedProduct.Cooling || 0}
                                    </strong>
                                </div>
                                <div className='col-lg-3 col-sm-4'>
                                    <strong style={{ fontWeight: selectedProduct.Generating ? 'bold' : 'normal' }}>
                                        Electricity:
                                        <img src="assets/images/professions/Electricity.webp" alt="Electricity" className="thumbnail shadow-2 border-round" />
                                        {selectedProduct.Generating || 0}
                                    </strong>
                                </div>
                                <div className='col-lg-3 col-sm-4'>
                                    <strong style={{ fontWeight: selectedProduct.Farming ? 'bold' : 'normal' }}>
                                        Farming:
                                        <img src="assets/images/professions/Farming.webp" alt="Farming" className="thumbnail shadow-2 border-round" />
                                        {selectedProduct.Farming || 0}
                                    </strong>
                                </div>
                                <div className='col-lg-3 col-sm-4'>
                                    <strong style={{ fontWeight: selectedProduct.Gathering ? 'bold' : 'normal' }}>
                                        Gathering:
                                        <img src="assets/images/professions/Gathering.webp" alt="Gathering" className="thumbnail shadow-2 border-round" />
                                        {selectedProduct.Gathering || 0}
                                    </strong>
                                </div>
                                <div className='col-lg-3 col-sm-4'>
                                    <strong style={{ fontWeight: selectedProduct.Handiwork ? 'bold' : 'normal' }}>
                                        Handiwork:
                                        <img src="assets/images/professions/Handiwork.webp" alt="Handiwork" className="thumbnail shadow-2 border-round" />
                                        {selectedProduct.Handiwork || 0}
                                    </strong>
                                </div>
                                <div className='col-lg-3 col-sm-4'>
                                    <strong style={{ fontWeight: selectedProduct.Kindling ? 'bold' : 'normal' }}>
                                        Kindling:
                                        <img src="assets/images/professions/Kindling.webp" alt="Kindling" className="thumbnail shadow-2 border-round" />
                                        {selectedProduct.Kindling || 0}
                                    </strong>
                                </div>
                                <div className='col-lg-3 col-sm-4'>
                                    <strong style={{ fontWeight: selectedProduct.Lumbering ? 'bold' : 'normal' }}>
                                        Lumbering:
                                        <img src="assets/images/professions/Lumbering.webp" alt="Lumbering" className="thumbnail shadow-2 border-round" />
                                        {selectedProduct.Lumbering || 0}
                                    </strong>
                                </div>
                                <div className='col-lg-3 col-sm-4'>
                                    <strong style={{ fontWeight: selectedProduct.Medicine ? 'bold' : 'normal' }}>
                                        Medicine:
                                        <img src="assets/images/professions/Medicine.webp" alt="Medicine" className="thumbnail shadow-2 border-round" />
                                        {selectedProduct.Medicine || 0}
                                    </strong>
                                </div>
                                <div className='col-lg-3 col-sm-4'>
                                    <strong style={{ fontWeight: selectedProduct.Mining ? 'bold' : 'normal' }}>
                                        Mining:
                                        <img src="assets/images/professions/Mining.webp" alt="Mining" className="thumbnail shadow-2 border-round" />
                                        {selectedProduct.Mining || 0}
                                    </strong>
                                </div>
                                <div className='col-lg-3 col-sm-4'>
                                    <strong style={{ fontWeight: selectedProduct.Planting ? 'bold' : 'normal' }}>
                                        Planting:
                                        <img src="assets/images/professions/Planting.webp" alt="Planting" className="thumbnail shadow-2 border-round" />
                                        {selectedProduct.Planting || 0}
                                    </strong>
                                </div>
                                <div className='col-lg-3 col-sm-4'>
                                    <strong style={{ fontWeight: selectedProduct.Transporting ? 'bold' : 'normal' }}>
                                        Transporting:
                                        <img src="assets/images/professions/Transporting.webp" alt="Transporting" className="thumbnail shadow-2 border-round" />
                                        {selectedProduct.Transporting || 0}
                                    </strong>
                                </div>
                                <div className='col-lg-3 col-sm-4'>
                                    <strong style={{ fontWeight: selectedProduct.Watering ? 'bold' : 'normal' }}>
                                        Watering:
                                        <img src="assets/images/professions/Watering.webp" alt="Watering" className="thumbnail shadow-2 border-round" />
                                        {selectedProduct.Watering || 0}
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { NameImageTemplate, ElementTemplate, PartnerSkillTemplate, ProfessionTemplate, PalDialogContent };