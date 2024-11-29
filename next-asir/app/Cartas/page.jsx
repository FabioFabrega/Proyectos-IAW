import React, { useState, useEffect } from 'react';
import './stylo.css';

export const Pokemon2 = ({ id }) => {
  const [pokemon, setName] = useState([]);

  useEffect(() => {
    const idAleatorio = Math.floor(Math.random() * 898) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`)
      .then((res) => res.json())
      .then((data) =>
        setName({
          numero: data.id,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          imgJuego: data.sprites.front_default,
          imgCvg: data.sprites.other.dream_world.front_default,
          nombre: data.name,
          experiencia: data.base_experience,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          especial: data.stats[3].base_stat,
        })
      );
  }, []);

  return (
    <div>
    <img src={pokemon.img} alt="pokemon" className="pokemon-image" />
      <h1><p className="pokemon-nombre">{pokemon.nombre}:</p></h1>
      <h2><p className="pokemon-numero">Número {pokemon.numero}</p></h2>
      <h4><p className="extra">Saber más</p></h4>
    </div>
  );
};