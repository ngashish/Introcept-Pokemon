import React from 'react';
import { pokemonList } from '../action';
import { connect } from 'react-redux';
import PokemonCard from './PokemonCard';
import { Row, Form, Container } from 'react-bootstrap';
import './Pokemon.css';
class Pokemon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    componentDidMount = () => {
        this.props.pokemonList();        
    }

    onChangeHandler = event => {        
        this.setState({
            search: event.target.value
        });
    };

    renderPokemonList = () => {
        const { search } = this.state;
        let { pokemons } = this.props;
        console.log('search :',this.state.search);
        if (search !== '') {                        
            pokemons = pokemons.filter(({ name }) => name.indexOf(search.toLocaleLowerCase())!== -1);
            return pokemons.map((pokemon, index) => {
                return <PokemonCard key={index} pokemon={pokemon} ></PokemonCard>;
            });
        } else {
            return pokemons.map((pokemon, index) => {
                return <PokemonCard key={index} pokemon={pokemon} ></PokemonCard>;
            });
        }
    };

    render() {
        return <div className="list-page">
            <Container >
                <Row>
                    <h1>Pokedex.org</h1>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicEmail" className="form-group">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Search" value={this.state.search} onChange={this.onChangeHandler} />
                    </Form.Group>
                </Row>
                <Row className="row">
                    {this.props.pokemons && this.renderPokemonList()}
                </Row>
            </Container>
        </div>
    }
}

const mapStateToProps = state => ({
    pokemons: state.pokemon.pokemons
});

const mapDispatchToProps = {
    pokemonList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
