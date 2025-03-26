import {ActionTypes} from '../../../constants';
import {Address} from '../../../models';

export interface AddressState {
  address: Address[];
}

interface AddAddressAction {
  type: typeof ActionTypes.ADD_ADDRESS;
  payload: Address;
}

interface RemoveAddressAction {
  type: typeof ActionTypes.REMOVE_ADDRESS;
  payload: {id: number};
}

export type AddressActionType = AddAddressAction | RemoveAddressAction;
