import React from 'react';
import { View, Text, Linking } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { GridView, SearchBar } from './Components';
import { actionCreators } from './Reducers/GHReducer';

const styles = {
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'space-around',
  },
  messageStyle: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center'
  }
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

  onSelectItem(item) {
    Linking.openURL(item.url);
  }

  renderEmptyMessage() {
    if (!this.props.refreshing && this.props.items.length === 0) {
      return (
        <Text style={styles.messageStyle}>No data found</Text>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <SearchBar
            onChangeText={this.props.onChangeTerm}
            onSubmit={this.onSubmit.bind(this)}
            searchTerm={this.props.term}
          />
          {this.renderEmptyMessage()}
          <GridView
            onRefresh={this.onSubmit.bind(this)}
            onSelectItem={this.onSelectItem.bind(this)}
            refreshing={this.props.refreshing}
            data={this.props.items}
          />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { gh } = state;

  return {
    refreshing: gh.refreshing,
    items: gh.items,
    term: gh.term,
  }
}

const mapActions = {
  onChangeTerm: actionCreators.onChangeTerm,
  fetch: actionCreators.fetchUsers
};

export default connect(mapStateToProps, mapActions)(App);
