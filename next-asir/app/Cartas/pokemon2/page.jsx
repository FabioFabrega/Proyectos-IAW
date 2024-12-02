import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import './stylo.css';

export const Pokemon2 = ({ id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [pokemon, setName] = useState([]);

  useEffect(() => {
    const idAleatorio = Math.floor(Math.random() * 250) + 1;
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