// add clothing items to list
export function addclothes(id, type, price, sizes, quantity) {
  return {
    type: 'ADDTO_LIST',
    id,
    type,
    price,
    sizes,
    quantity
  }
}

// remove clothing items from list

export function removeclothes(id, i) {
  return {
    type: 'REMOVEFROM_LIST',
    i,
    id
  }
}
