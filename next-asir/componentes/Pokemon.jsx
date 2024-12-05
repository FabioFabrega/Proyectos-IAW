import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import '../app/globals.css';

export const Pokemon = ({ generation }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [pokemon] = useState([]);
  
  const fetchRandomPokemons = async () => {
    let min, max;

    if (generation === 1) {
      min = 1;
      max = 151;
    } else if (generation === 2) {
      min = 152;
      max = 251;
    } else if (generation === 3) {
      min = 252;
      max = 386;
    } else if (generation === 0) {
      min = 1;
      max = 1010;
    }
    const idAleatorio = () => Math.floor(Math.random() * (max - min + 1)) + min;
        
    const Aleatorio = Array.from({ length: generation === 0 ? 1 : 10 }, idAleatorio);

    const pokemonData = await Promise.all(
      Aleatorio.map(async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return {
          id: data.id,
          nombre: data.name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          especial: data.stats[3].base_stat,
        };
      })
    );
    setPokemonList(pokemon);
    useEffect(() => {
      fetchRandomPokemons();
    }, [generation]); 
  }

  return (
    <div>
    <img src={pokemon.img} alt="pokemon" className="pokemon-image" />
      <h1><p className="pokemon-nombre">{pokemon.nombre}:</p></h1>
      <h2><p className="pokemon-numero">Número {pokemon.id}</p></h2>
      <h4><p className="extra"><Button variant="primary" onClick={handleShow}>
        Saber más
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Número {pokemon.numero}  {pokemon.nombre}:</Modal.Title>
        </Modal.Header>
        <Modal.Body><p><img src={pokemon.img} alt="pokemon" className="pokemon-image" /></p>
        <h2><p>
        HP: {pokemon.hp} Ataque: {pokemon.ataque} </p>
        <p>Defensa: {pokemon.defensa} Especial: {pokemon.especial}
      </p></h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal></p></h4>
    </div>
  );
};