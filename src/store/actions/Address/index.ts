import {ActionTypes} from '../../../constants';
import {Address} from '../../../models';

export const addAddress = (item: Address): any => ({
  type: ActionTypes.ADD_ADDRESS,
  payload: item,
});

export const removeAddress = (id: number) => ({
  type: ActionTypes.REMOVE_ADDRESS,
  payload: {id},
});
