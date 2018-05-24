import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import React, { Component } from 'react'

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

// const Setting =  import("components/setting")
// const Menu =  import("components/menu")
// const Home =  import("components/home")
const Setting = asyncComponent(() => import("components/setting"))
const Menu = asyncComponent(() => import("components/menu"))
const Home = asyncComponent(() => import("components/home"))
class Routers extends Component {
  render() {
    return (<div>
      <Router>
        <div>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/setting">menu</Link></li>
            <li><Link to="/menu">setting</Link> </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/setting" exact component={Setting}></Route>
            <Route path="/menu" exact component={Menu}></Route>
          </Switch>
        </div>
      </Router>
    </div>)
  }
}
export default Routers