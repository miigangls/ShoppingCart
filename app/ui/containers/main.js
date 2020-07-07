import Main from '../pages/main'
import { connect } from 'react-redux'
import {} from '../../actions/shopping'
import {addShopping} from '../../actions/main'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShopping: (product, data) => dispatch(addShopping(product, data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)