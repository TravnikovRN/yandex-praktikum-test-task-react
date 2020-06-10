import { connect } from 'react-redux'
import { logIn } from '../../actions/SessionActions'
import Login from '../../components/login/login.jsx'

const mapStateToProps = state => ({
  errorMessage: state.session.errorMessage,
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
