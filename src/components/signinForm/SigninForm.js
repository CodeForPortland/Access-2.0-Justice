/* tslint:disable:no-empty */
import FormControl from '../../shared/FormControl';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export class SigninForm extends PureComponent {

	state = {
		email: '',
		password: '',
	}

	static propTypes = {
		action: PropTypes.string.isRequired,
		submit: PropTypes.func.isRequired,
	}

	
	handleSubmit = event => {
		event.preventDefault();
		this.props.submit(this.state)
		.catch(() => {});
	}
	
	handleChange = ({ target }) => {
		this.setState({ [target.email]: target.value }); 
	}

	render() {
		const { action } = this.props;
		const { email, password } = this.state;

		return (
				<form onSubmit={this.handleSubmit}>
					<h3>Sign in here</h3>

					<FormControl label="email">
						<input name="email" value={email} onChange={this.handleChange}/>
					</FormControl>
					
					<FormControl label="password">
						<input name="password" type="password" 
							value={password} onChange={this.handleChange}/>
					</FormControl>

					<FormControl>
						<button>{action}</button>
					</FormControl>
				</form>
		);
	}
}
