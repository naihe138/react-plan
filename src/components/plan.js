import React, { Component } from 'react'
import { connect } from 'react-redux';
import store from '../redux/store.js';
import {show, deletePlan} from '../actions/plan.js';


class Plan extends Component {
	constructor(props) {
		super(props);
		console.log(props)
	}
	show () {
    let b = this.props.planlist.show;
    store.dispatch(show(!b));
  }
  delete (id) {
  	store.dispatch(deletePlan(id));
  }
  detail (id) {
  	this.props.history.push(`/detail/${id}`)
  }
	render () {
		return (
			<div>
				<div className="plant">
					<h3>计划表</h3>
					<p onClick={this.show.bind(this)}>添加计划</p>
				</div>
				<table className="planlist">
					<thead>
						<tr>
							<th>标题</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.planlist.planlist.map((item, index) => {
								return (
									<tr key={index}>
										<td className="plan-title" onClick={this.detail.bind(this, item.id)}>{item.title}</td>
										<td className="plan-delect" onClick={this.delete.bind(this, item.id)}>删除</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = function(store) {
  return {
    planlist: store.planlist
  };
};

export default connect(mapStateToProps)(Plan);

