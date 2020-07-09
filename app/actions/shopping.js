export function addShopping(product, cartData) {
    return (dispatch) => {
        
        let data = cartData || []
        if(!cartData) {
            data.push({...product, count: 1})
        } else {
            data.forEach(({ID, count}, i) => {
                console.log(ID);
                
                if(ID != product.ID)  data.push({...product, count: 1})
                else {
                    if (ID === product.ID) data.splice(i, 1)
                    data.push({...product, count: count + 1})
                }
                
            })
        }
        dispatch({ type: 'SHOPPING-DATA', data })
        dispatch({type:'ROUTE-UPDATE', route: 'SHOPPING'})
    };
  }


  export function deleteShopping(product, data) {
    return (dispatch) => {
        data.forEach(({ID, count}, i) => {
            if (ID === product.ID) data.splice(i, 1)
        })
        //dispatch({ type: 'SHOPPING-LOADING', loading: true })
        dispatch({ type: 'SHOPPING-DATA', data })
        dispatch({type:'ROUTE-UPDATE', route: 'SHOPPING'})
        //dispatch({ type: 'SHOPPING-LOADING', loading: false })*/
    };
  }
