import { put, call, takeEvery } from 'redux-saga/effects';
import { types, actionCreators } from '../reducers/GHReducer';
import axios from 'axios';

function *onFetch(action) {
  try {
    const response = yield call(axios.get, `https://api.github.com/search/repositories?q=${action.payload.term}`);

    const items = response.data.items.map(item => ({
      key: item.id,
      title: item.name,
      subtitle: item.full_name,
      url: item.html_url,
      image: { uri: item.owner.avatar_url }
    }));

    yield put(actionCreators.fetchUsersSuccess(items));
  } catch (error) {
    yield put(actionCreators.fetchUsersFailure(error));
  }
}

export default function *GHSaga() {
  yield takeEvery(types.FETCH, onFetch);
}
