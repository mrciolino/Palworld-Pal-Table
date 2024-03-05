import { strongAgainst, weakAgainst, partnerSkills, palsData } from './data.js';
import { Tooltip } from 'primereact/tooltip';
import React from 'react';

const NameImageTemplate = (product) => {
    return (
        <div className="text-center">
            <div>{product.name}</div>
            <img src={product.image} alt={product.name} className="w-6rem shadow-2 border-round" width="75" height="75" />
        </div>
    );
};

function ComboElementTemplate(product, element) {
    let element1 = element.split("-")[0];
    let element2 = element.split("-")[1];
    let elementWeak1 = weakAgainst[element1];
    let elementStrong1 = strongAgainst[element1];
    let elementWeak2 = weakAgainst[element2];
    let elementStrong2 = strongAgainst[element2];
    let elementImage1 = `assets/images/elements/palworld-${element1}-element.webp`;
    let elementImage2 = `assets/images/elements/palworld-${element2}-element.webp`;
    let element_strong_against_image1 = `assets/images/elements/palworld-${elementStrong1}-element.webp`;
    let element_weak_against_image1 = `assets/images/elements/palworld-${elementWeak1}-element.webp`;
    let element_strong_against_image2 = `assets/images/elements/palworld-${elementStrong2}-element.webp`;
    let element_weak_against_image2 = `assets/images/elements/palworld-${elementWeak2}-element.webp`;
    const targetClassName = `custom-target-${product.element}-${product.paldeck}`;

    return (
        <div className="card flex justify-content-center">
            <Tooltip target={`.${targetClassName}`}>
                <img src={element_weak_against_image1} alt={elementWeak1} className="w-6rem shadow-2 border-round" width="30" height="30" />-&gt;
                <img src={elementImage1} alt={element1} className="w-6rem shadow-2 border-round" width="30" height="30" />-&gt;
                <img src={element_strong_against_image1} alt={elementStrong1} className="w-6rem shadow-2 border-round" width="30" height="30" />
                <hr />
                <img src={element_weak_against_image2} alt={elementWeak2} className="w-6rem shadow-2 border-round" width="30" height="30" />-&gt;
                <img src={elementImage2} alt={element2} className="w-6rem shadow-2 border-round" width="30" height="30" />-&gt;
                <img src={element_strong_against_image2} alt={elementStrong2} className="w-6rem shadow-2 border-round" width="30" height="30" />
            </Tooltip>
            <div className={`text-center ${targetClassName}`}>
                <div style={{ alignItems: 'center' }}>
                    <img src={elementImage1} alt={element1} className="w-6rem shadow-2 border-round" width="30" height="30" />
                    <img src={elementImage2} alt={element2} className="w-6rem shadow-2 border-round" width="30" height="30" />
                </div>
                <div>
                    {product.element}
                </div>
            </div>
        </div>
    );
};

function ElementTemplate(product) {
    let element = product.element;
    let elementWeak = weakAgainst[element];
    let elementStrong = strongAgainst[element];
    let elementImage = `assets/images/elements/palworld-${product.element}-element.webp`;
    let element_strong_against_image = `assets/images/elements/palworld-${elementStrong}-element.webp`;
    let element_weak_against_image = `assets/images/elements/palworld-${elementWeak}-element.webp`;
    const targetClassName = `custom-target-${product.element}-${product.paldeck}`;

    let combo_elements = ["Water-Ice", "Fire-Dark", "Ice-Dragon", "Grass-Dragon", "Electric-Dragon"];
    if (combo_elements.includes(element)) {
        return ComboElementTemplate(product, element);
    }

    return (
        <div className="card flex justify-content-center">
            <Tooltip target={`.${targetClassName}`}>
                <img src={element_weak_against_image} alt={elementWeak} className="w-6rem shadow-2 border-round" width="30" height="30" />-&gt;
                <img src={elementImage} alt={element} className="w-6rem shadow-2 border-round" width="30" height="30" />-&gt;
                <img src={element_strong_against_image} alt={elementStrong} className="w-6rem shadow-2 border-round" width="30" height="30" />
            </Tooltip>
            <div className={`text-center ${targetClassName} p-1`}>
                <img src={elementImage} alt={element} className="w-6rem shadow-2 border-round" width="30" height="30" style={{ float: 'left', paddingLeft: '1px' }} />
                {product.element}
            </div>
        </div>
    );
};

const PartnerSkillTemplate = (product) => {
    const partnerSkillDescription = partnerSkills[product.skill]?.description || "None";
    const sanitizedSkill = product.skill.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, ''); // Replace spaces and remove invalid characters
    const targetClassName = `custom-target-${sanitizedSkill}-${product.paldeck}`;
    const palsWithSkill = partnerSkills[product.skill]?.pal || [];

    // get the image path of the pal from palsData for each pal in palsWithSkill
    let palImages = palsWithSkill.length > 0
        ? palsData
            .filter(palData => palsWithSkill.includes(palData.name))
            .map(palData => palData.image)
        : [];

    return (
        <div className="card flex justify-content-center">
            <Tooltip target={`.${targetClassName}`}>
                <div style={{ maxWidth: '15rem' }}>
                    {partnerSkillDescription}
                    <hr />
                    <div className="text-center">
                        {palsWithSkill.map((pal, index) => (
                            <div key={index}>
                                <div> {pal} </div>
                                <img src={palImages[index]} alt={pal} className="w-6rem shadow-2 border-round" width="50" height="50" />
                            </div>
                        ))}
                    </div>
                </div>
            </Tooltip>
            <div className={`text-center ${targetClassName} p-1`}>
                {product.skill}
            </div>
        </div>
    );
};

function ProfessionTemplate(product, type) {
    let profession = product.profession;
    let professionLevels = {};
    profession.forEach(prof => {
        let [profType, profLevel] = prof.split(" ");
        professionLevels[profType] = profLevel.replace("Lv", "");
    });

    let professionLevel = professionLevels[type] || "0";
    return (
        <div className="text-center">
            {professionLevel}
        </div>
    );
};

function DropTemplate(product) {
    let drop = product.drops;
    drop = drop.join(", ") || "None"
    return (
        <div className="text-center">
            {drop}
        </div>
    );
}

export { NameImageTemplate, ElementTemplate, PartnerSkillTemplate, ProfessionTemplate, DropTemplate };