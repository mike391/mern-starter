import { getAsyncActionTypes } from '../lib';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const FETCH_TODOS = 'FETCH_TODOS';
const DELETE_TODO = 'DELETE_TODO';
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';

export const AsyncSuffixes = {
  PENDING: '_PENDING',
  FULFILLED: '_FULFILLED',
  REJECTED: '_REJECTED',
};

export const ActionTypes = {
  ADD_TODO,
  ...getAsyncActionTypes(ADD_TODO),

  TOGGLE_TODO,
  ...getAsyncActionTypes(TOGGLE_TODO),

  FETCH_TODOS,
  ...getAsyncActionTypes(FETCH_TODOS),

  DELETE_TODO,
  ...getAsyncActionTypes(DELETE_TODO),

  LOGIN,
  ...getAsyncActionTypes(LOGIN),

  REGISTER,
  ...getAsyncActionTypes(REGISTER),
};

export const Paths = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ADMIN: '/admin',
};
