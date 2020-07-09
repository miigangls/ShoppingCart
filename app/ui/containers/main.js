import Main from '../pages/main'
import { connect } from 'react-redux'
import { addShopping} from '../../actions/shopping'
const mapStateToProps = (state) => {
  let {data} = state.shopping
  , {name} = state.router 
  return {
    carData: data, 
    router : name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShopping:(value, data) => dispatch(addShopping(value, data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)