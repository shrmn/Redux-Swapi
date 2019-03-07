import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'
import { CharacterList } from "../components";
import { getCharacters } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      <Loader type="Circles" color="#424242" height={80} width={80}/>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
