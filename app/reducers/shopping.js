const shopping = (state = {}, action) => {
    switch (action.type) {
      case 'SHOPPING-LOADING': return action.loading
      case 'SHOPPING-DATA': return action.data
      case 'SHOPPING-REMOVE': return {}
      default: return state
    }
  }
  
  export default shopping