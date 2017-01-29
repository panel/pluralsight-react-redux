import * as types from '../actions/actionTypes';
import initialState from './initialState';

const regex = /SUCCESS$/;

function actionTypeEndsInSuccess(type) {
  return regex.test(type);
}

export default function authorReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type === types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }


  return state;
}
