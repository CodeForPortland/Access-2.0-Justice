import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FormControl extends PureComponent {

  static propTypes = {
    children: PropTypes.element,
    label: PropTypes.string,
  };

  render() {
    const { label, children } = this.props;

    return (
      <section>
        { label && <label>{label}:</label> }
        <section>
          {children}
        </section>
      </section>
    );
  }
}

export default FormControl;