import Shopping from '../pages/shopping'
import { connect } from 'react-redux'
import { deleteShopping} from '../../actions/shopping'

const mapStateToProps = (state) => {
  let {data, loading} = state.shopping
  
  return {data: data || [], loading}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteShopping:(value, data) => dispatch(deleteShopping(value, data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shopping)