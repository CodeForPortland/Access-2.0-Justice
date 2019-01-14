/* tslint:disable:no-empty */
import FormControl from '../../shared/FormControl';
import PropTypes from 'prop-types';

import React, { PureComponent } from 'react';

import './SignInForm.scss';


export class SignInForm extends PureComponent {

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

					<FormControl label="email">
						<input className="form-boxes" name="email" value={email} 
							onChange={this.handleChange}/>
					</FormControl>
					
					<FormControl label="password">
						<input className="form-boxes" name="password" value={password} type="password" 
							onChange={this.handleChange}/>
					</FormControl>

					<FormControl>
						<button className="form-boxes">{action}</button>
					</FormControl>
				</form>
		);
	}
}
