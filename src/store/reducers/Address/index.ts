import {ActionTypes} from '../../../constants';
import {AddressState} from '../../types';

const initialState: AddressState = {
  address: [],
};

const addressReducer = (state = initialState, action: any): AddressState => {
  switch (action.type) {
    case ActionTypes.ADD_ADDRESS: {
      return {
        ...state,
        address: [...state.address, action.payload],
      };
    }
    default:
      return state;
  }
};

export default addressReducer;
