function *onFetch(action) {
  axios.get(`https://api.github.com/search/repositories?q=${this.state.term}`)
    .then(response => {
        const items = response.data.items.map(item => ({
          key: item.id,
          title: item.name,
          subtitle: item.full_name,
          image: {uri: item.owner.avatar_url}
        }));

        this.props.dispatch((
          {
            type: 'FETCH_USERS_SUCCESS',
            payload: {items}
          }
        ))
    })
}
