import * as types from './action-type.js';

export function addPlan(item) {
  return {
    type: types.ADD,
    item
  };
}

export function deletePlan(id) {
  return {
    type: types.DELECT,
    id
  };
}

export function show(show) {
  return {
    type: types.SHOW,
    show
  };
}
