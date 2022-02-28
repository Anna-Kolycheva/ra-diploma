import { PUT_HITS, HITS_LOAD, HITS_ERROR } from '../actions/ationsType';

const initialstate = {
   items: null,
   isLoad: false,
   isError: null,
};

export default function hitsReducer(state = initialstate, action) {
   switch (action.type) {
      case PUT_HITS:
         return {
            ...state,
            items: action.payload.items,
         };
      case HITS_LOAD:
         return {
            ...state,
            isLoad: action.payload,
         };
      case HITS_ERROR:
         return {
            ...state,
            isError: action.payload,
         };

      default:
         return state;
   }
}
