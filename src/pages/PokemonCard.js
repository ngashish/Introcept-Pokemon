import React from 'react';
import { Card, Modal, Button, ListGroup } from 'react-bootstrap';
import './Pokemon.css'
class PokemonCard extends React.Component {
    constructor(props) {
        super(props);
        const { pokemon } = props
        this.state = {
            pokemon,
            showModal: false,
        }
        console.log(pokemon)
    }    
    openModal = (e) => {        
        this.setState({
            showModal: true
        });
    }
    handleClose = () => {
        this.setState({
            showModal: false
        });
    }
    render() {
        return <React.Fragment>
            <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modalTitle">{this.state.pokemon.name} - #{this.state.pokemon.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Base Experience : {this.state.pokemon.base_experience}</ListGroup.Item>
                        <ListGroup.Item>Height : {this.state.pokemon.height}</ListGroup.Item>
                        <ListGroup.Item>Species : {this.state.pokemon.species.name}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Card className="card" onClick={this.openModal.bind(this, this.state.pokemon)}>
                <Card.Img variant="top" src={this.state.pokemon.sprites.front_default} className='card-image' />
                <Card.Body className="card-body">
                    <Card.Title>{this.state.pokemon.name}</Card.Title>
                </Card.Body>
            </Card>

        </React.Fragment>
    }
}

export default PokemonCard;