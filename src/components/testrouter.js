import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

class Home extends Component {
	constructor(props) {
		super(props);
		console.log(this.props)
	}
	render () {
		return (
			<div>
		    <h2>二级路由</h2>
		    <ul>
		      <li>
		        <Link to={`${this.props.match.url}/rendering`}>
		          使用 React 渲染
		        </Link>
		      </li>
		      <li>
		        <Link to={`${this.props.match.url}/components`}>
		          组件
		        </Link>
		      </li>
		      <li>
		        <Link to={`${this.props.match.url}/props-v-state`}>
		          属性 v. 状态
		        </Link>
		      </li>
		    </ul>

		    <Route path={`${this.props.match.url}/:topicId`} component={Topic}/>
		    <Route exact path={this.props.match.url} render={() => (
		      <h3>请选择一个主题。</h3>
		    )}/>
		  </div>
		)
	}
}
export default Home