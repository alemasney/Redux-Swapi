import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchData } from '../actions';

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching) {
      return <h2>Loading...</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching,
    error: state.charsReducer.error
});
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { fetchData }
)(CharacterListView);
