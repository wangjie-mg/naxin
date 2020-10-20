import { delay, put, takeEvery } from 'redux-saga/effects';
function* add(){
 yield delay(1000);
 yield put({type:'ADD'});
}

function*  watch(){
    yield takeEvery('ADD',add)
}

function* rootSaga(){
  yield all([
      watch()
  ])
}

export default rootSaga;