function addremoveclothes(state = [], action) {
  switch(action.type){
    case 'ADDTO_LIST':
      // return the new state with the new comment
      return [...state,{
        type: action.type,
        price: action.price,
        sizes: action.sizes,
        quantity: action.quantity
      }];
    case 'REMOVEFROM_LIST':
      // we need to return the new state without the deleted comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0,action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function clotheslist(state = [], action) {
  if(typeof action.id !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.id]: addremoveclothes(state[action.id], action)
    }
  }
  return state;
}

export default clotheslist;
