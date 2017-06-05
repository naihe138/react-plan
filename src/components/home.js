import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Topic = ({ match }) => (
  <div>
    <h3>123</h3>
  </div>
)

class Home extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div>
				<h2>首页</h2>
				<p>这是一个 react 学习的基本操作的小栗子</p>
				<p>通过本次学习可以清楚的掌握， react-router redux的基本使用方法</p>
				<br/>
				<br/>
				<br/>
			</div>
		)
	}
}
export default Home