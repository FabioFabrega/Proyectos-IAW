import React, { useState, useEffect } from 'react';
import './styles.css';

export const Digimon = () => {
  const [digimon, setDigimon] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const idAleatorio = Math.floor(Math.random() * 1459) + 1;
    const url = `https://digi-api.com/api/v1/digimon/${idAleatorio}`;


    fetch(url)
      .then((res) => res.json())
      .then((data) => {
          setDigimon({
            nombre: data.name,
            numero: data.id,
            img: `https://digi-api.com/images/digimon/w/${data.name}.png`,
            level: data.levels.level,
            type: data.types.type,
            atribute: data.attributes.attribute ,
          });
         
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="digimon-container">
      <h4>
        Digimon {digimon.numero}: {digimon.nombre}
      </h4>
      <img src={digimon.img} alt={digimon.nombre} className="digimon-image" />
      <p><strong>Nivel:</strong> {digimon.level} <strong>Tipo:</strong> {digimon.type}</p>
      <p><strong>Atributo:</strong> {digimon.atribute}</p>
    </div>
  );
};