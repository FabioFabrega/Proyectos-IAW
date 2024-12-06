import React, { useState } from 'react';
import Image from "next/image";
import Dropdown from 'react-bootstrap/Dropdown';
import { getDictionary } from "@/componentes/diccionario";

const Nav = ({ setGeneration }) => {
    let [idioma, setIdioma] = useState('en');
    let dict = getDictionary(idioma);

    const changeLanguage = (lang) => {
        setIdioma(lang);
    };

    return (
        <div>
            <nav>
                <h5>
                    <button type="button" className="btn btn-secondary" onClick={() => setGeneration(0)}>
                        {dict.home}
                    </button> -
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {dict.Gens}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <button className="dropdown-item" onClick={() => setGeneration(1)}>
                                    {dict.Gen} 1
                                </button>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <button className="dropdown-item" onClick={() => setGeneration(2)}>
                                    {dict.Gen} 2
                                </button>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <button className="dropdown-item" onClick={() => setGeneration(3)}>
                                    {dict.Gen} 3
                                </button>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> -
                    <button onClick={() => changeLanguage('es')} className="button">
                        <Image src="/Españita.jpeg" alt="Español" width={24} height={24} />
                    </button>
                    <button onClick={() => changeLanguage('en')} className="button">
                        <Image src="/uk.png" alt="Inglés" width={24} height={24} />
                    </button>
                    <button onClick={() => changeLanguage('it')} className="button">
                        <Image src="/italiano.png" alt="italiano" width={24} height={24} />
                    </button>
                </h5>
            </nav>
            <main>
                <h1>{dict.title}</h1>
                <h2>{dict.description}</h2>
            </main>
            
        </div>
    );
};

export default Nav;