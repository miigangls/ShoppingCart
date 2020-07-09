const shopping = (state = {}, action) => {
    switch (action.type) {
      case 'SHOPPING-LOADING': return {...state, loading: action.loading}
      case 'SHOPPING-DATA': return {...state, data: action.data}
      case 'SHOPPING-REMOVE': return {}
      default: return state
    }
  }
  
  export default shopping