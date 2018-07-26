import { combineReducers } from 'redux';

function byId(state = {}, { type, payload }) {
  switch (type) {
    case 'ADD_TO_CART': {
      const id = payload;
      const inCart = state[id];

      if (inCart) {
        return {
          ...state,
          [id]: {
            ...state[id],
            quantity: state[id].quantity + 1,
          },
        };
      }

      return {
        ...state,
        [id]: { id, quantity: 1 },
      };
    }

    case 'REDUCE_QUANTITY_IN_CART': {
      const id = payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          quantity: state[id].quantity > 1 ? state[id].quantity - 1 : 1,
        },
      };
    }

    case 'REMOVE_FROM_CART': {
      const id = payload;
      return {
        ...state,
        [id]: undefined
      };
    }

    default:
      return state;
  }
}

function allIds(state = [], { type, payload }) {
  switch (type) {
    case 'ADD_TO_CART': {
      const id = payload;

      if (!state.includes(id)) {
        return [...state, id];
      }

      return state;
    }

    case 'REMOVE_FROM_CART': {
      const id = payload;
      const index = state.indexOf(id);
      console.log(index);
      return state.slice(0, index).concat(state.slice( index + 1))
    }

    default:
      return state;
  }
}

export default combineReducers({ byId, allIds });
