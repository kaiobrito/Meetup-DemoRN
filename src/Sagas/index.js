import { fork } from 'redux-saga/effects';
import GHSagas from './GHSagas';

export default function *index() {
  yield fork(GHSagas);
}
