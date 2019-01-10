/* tslint:disable:no-empty */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export class SigninForm extends PureComponent {

	state = {
		email: '',
		password: '',
	}

	static propTypes = {
		action: PropTypes.string.isRequired,
		allowName: PropTypes.bool,
		submit: PropTypes.func.isRequired,
	}

	handleChange = ({ target }) => {
		this.setState({ [target.email]: target.value }); 
	}
	
	handleSubmit = event => {
		event.preventDefault();
		this.props.submit(this.state)
			.catch(() => {});
	}

	render() {
		const { email, password } = this.state;

		return (
			<div>
				<h3>Sign in here</h3>
				<form label="email" onSubmit={this.handleSubmit}>
					<input name="email" value={email} onChange={this.handleChange}/>
					<input name="password" value={email} onChange={this.handleChange}/>
				</form>

			</div>

		);
	}
}
