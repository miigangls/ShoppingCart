import Shopping from '../pages/shopping'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  let {data, loading} = state.shopping
  return {data, loading}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shopping)