import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const DetallesPokemon = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  return (
    <Container>
      <Row className="mt-3 justify-content-center">
        <Col xs={12} md={6}>
          {pokemonDetails && (
            <Card>
              <Card.Body className="d-flex align-items-center">
                <Card.Img
                  className="mr-1"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.id}.png`}
                  alt={pokemonDetails.name}
                />
                <div>
                  <Card.Title>{pokemonDetails.name}</Card.Title>
                  <Card.Text>
                    HP: {pokemonDetails.stats[0].base_stat}<br />
                    Attack: {pokemonDetails.stats[1].base_stat}<br />
                    Defense: {pokemonDetails.stats[2].base_stat}<br />
                    Special Attack: {pokemonDetails.stats[3].base_stat}<br />
                    Special Defense: {pokemonDetails.stats[4].base_stat}<br />
                    Speed: {pokemonDetails.stats[5].base_stat}<br />
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DetallesPokemon;
