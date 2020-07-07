export function addShopping(data) {
    return (dispatch) => {
        dispatch({ type: 'SHOPPING-LOADING', loading: true })
        dispatch({ type: 'SHOPPING-DATA', data })
        dispatch({type:'ROUTE-UPDATE', route: 'SHOPPING'})
        dispatch({ type: 'SHOPPING-LOADING', loading: false })
    };
  }