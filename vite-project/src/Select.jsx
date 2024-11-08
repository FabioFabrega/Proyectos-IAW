import React, { useState } from 'react';
import heroes from './heroes.json'; // Asegúrate de tener el archivo JSON en la misma carpeta o importa desde la ubicación correcta

function SuperheroSelect() {
  const [selectedHero, setSelectedHero] = useState(""); // Estado para el héroe seleccionado

  const handleChange = (event) => {
    setSelectedHero(event.target.value); // Actualiza el estado cuando el usuario cambia la selección
  };

  return (
    <div>
      <h4>Seleccione un Superhéroe</h4>
      <select value={selectedHero} onChange={handleChange}>
        <option value="">Seleccione un superhéroe</option>
        {/* Mapea el JSON para crear las opciones en el select */}
        {heroes.map(hero => (
          <option key={hero.superhero} value={hero.superhero}>
            {hero.superhero} ({hero.publisher})
          </option>
        ))}
      </select>
      
      {/* Mostrar detalles del héroe seleccionado */}
      {selectedHero && (
        <div>
          <h2>Detalles del Superhéroe</h2>
          <p><strong>Superhéroe:</strong> {selectedHero}</p>
          {/* Buscar el héroe seleccionado para mostrar más detalles */}
          {heroes
            .filter(hero => hero.superhero === selectedHero)
            .map(hero => (
              <div key={hero.superhero}>
                <p><strong>Alter Ego:</strong> {hero.alter_ego}</p>
                <p><strong>Primera Aparición:</strong> {hero.first_appearance}</p>
                <p><strong>Personajes:</strong> {hero.characters}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SuperheroSelect;
