import { call, put, takeEvery } from 'redux-saga/effects'
import { getCall } from '../../utility/httpRequestUtils/httpRequest';
import * as apiUrl from '../../apiUrl';

async function getApi(){
   try {
      return  await getCall(apiUrl.userListUrl);
   } catch (error) {
       throw error;
   }
}

function* fetchUserList(action) {
   try {
      const users = yield call(getApi);
      yield put({type: 'FETCH_USER_SUCCESS', users: users});
   } catch (e) {
      yield put({type: 'FETCH_USER_FAILED', errorInUsers: e.message});
   }
}

function* userSaga() {
   yield takeEvery('FETCH_USER', fetchUserList);
}

export default userSaga;