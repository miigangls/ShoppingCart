const product = (state = {}, action) => {
    switch (action.type) {
      case 'PRODUCT-LOADING': return action.loading
      case 'PRODUCT-DATA': return action.data
      case 'PRODUCT-REMOVE': return {}
      default: return state
    }
  }
  
  export default product