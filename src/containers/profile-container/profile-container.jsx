import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import Profile from '../../components/profile/profile.jsx'

class ProfileContainer extends PureComponent {
  render() {
    const { user } = this.props
    return <Profile user={user} />
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
