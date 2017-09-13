import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { SearchBar } from './components/SearchBar';
import { GridView } from './components/GridView';
import {actionCreators} from './reducers/GHReducer';

const styles = {
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'space-around',
  },
};

class App extends React.Component {
  static propTypes = {
      refreshing: PropTypes.bool.isRequired,
      fetch: PropTypes.func.isRequired,
      items: PropTypes.array.isRequired,
      onChangeTerm: PropTypes.func.isRequired,
      term: PropTypes.string.isRequired,
  };

  onSubmit() {
    this.props.fetch(this.props.term);
  }

  render() {
    return (
      <View style={styles.container}>
          <SearchBar
            onChangeText={this.props.onChangeTerm}
            onSubmit={() => this.onSubmit()}
            searchTerm={this.props.term}
          />
          <GridView
            refreshing={this.props.refreshing}
            data={this.props.items}
          />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    refreshing: state.gh.refreshing,
    items: state.gh.items,
    term: state.gh.term,
  }
}

const mapActions = {
  onChangeTerm: actionCreators.onChangeTerm,
  fetch: actionCreators.fetchUsers
};

export default connect(mapStateToProps, mapActions)(App);
