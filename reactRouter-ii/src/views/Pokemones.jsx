import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Pokemones = () => {
    const navigate = useNavigate();
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState('');

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
                const data = await response.json();
                setPokemonList(data.results);
            } catch (error) {
                console.error('Error fetching Pokemon list:', error);
            }
        };

        fetchPokemonList();
    }, []);

    const handleSelectChange = (event) => {
        setSelectedPokemon(event.target.value);
    };

    const handleVerDetallesClick = () => {
        navigate(`/pokemones/${selectedPokemon}`);
    };

    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1 className="text-center">
                        Selecciona un Pokémon
                    </h1>
                    <Form className='form'>
                        <Form.Group controlId="pokemonSelect">
                            <Form.Control
                                as="select"
                                value={selectedPokemon}
                                onChange={handleSelectChange}>
                                    <option>
                                        Pokémon
                                    </option>
                                {pokemonList.map((pokemon) => (
                                    <option
                                        key={pokemon.name}>
                                        {pokemon.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Button
                            variant="dark"
                            onClick={handleVerDetallesClick}
                            disabled={!selectedPokemon}>
                            Ver Detalles
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Pokemones;
