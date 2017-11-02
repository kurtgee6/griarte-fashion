export function loadClothing() {
    return {
      type: 'LOAD',
      payload: {
        request:{
          url:'/api/clothing'
        }
      }
    }
  }