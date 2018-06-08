import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import { login } from 'src/store/actions/auth'
function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      console.log(1110000000000000)
      this.setState({
        component: component
      });
    }
    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
@connect(state => ({
  isAuth: state.auth.isAuth
}), {
  login
})
class Login extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount () {
    console.log(this.props, 'this.props')
  }
  isLogin = () => {
    // this.props.login()
  }
  render () {
    return this.props.isAuth ? <div>123</div>: (
      <div>
        <h2>你没有 权限需要登陆 </h2>
        <Button type="primary" onClick={this.props.login}>登陆</Button>  
      </div>
    )
  }
}
export default Login