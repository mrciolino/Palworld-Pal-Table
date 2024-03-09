import { strongAgainst, weakAgainst } from './data.js';
import { Tooltip } from 'primereact/tooltip';
import React from 'react';


const NameImageTemplate = (product) => {
    return (
        <div className="text-center">
            <div><b>{product.name}</b></div>
            <img src={product.image} alt={product.name} className="w-6rem shadow-2 border-round img-fluid" />
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
                            <img src={`assets/images/elements/palworld-${element[2]}-element.webp`} alt={element[0]} className="w-6rem shadow-2 border-round" width="40" height="40" />
                            -&gt;
                            <img src={`assets/images/elements/palworld-${element[0]}-element.webp`} alt={element[0]} className="w-6rem shadow-2 border-round img-fluid" width="40" height="40" />
                            -&gt;
                            {element[1].map((strongElement, index) => {
                                return (
                                    <img key={index} src={`assets/images/elements/palworld-${strongElement}-element.webp`} alt={strongElement} className="w-6rem shadow-2 border-round" width="40" height="40" />
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
                            <img src={`assets/images/elements/palworld-${element[0]}-element.webp`} alt={element[0]} className="w-6rem shadow-2 border-round" width="40" height="40" />
                        </div>
                    );
                })}
            </div>
        </div >
    );
};

export { NameImageTemplate, ElementTemplate, PartnerSkillTemplate, ProfessionTemplate };