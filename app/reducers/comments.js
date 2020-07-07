const comments = (state = {}, action) => {
    switch (action.type) {
      case 'COMMENTS-LOADING': return action.loading
      case 'COMMENTS-DATA': return action.data
      case 'COMMENTS-REMOVE': return {}
      default: return state
    }
  }
  
  export default comments