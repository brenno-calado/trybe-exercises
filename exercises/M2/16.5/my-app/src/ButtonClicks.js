import React from 'react';
import { connect } from 'react-redux';
import addClick from './actions/addClicks';

class ButtonClicks extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.add}>Click here</button>
      </div>
    );
  }
}

const toDispatch = (dispatch) => ({
  add: () => dispatch(addClick())
});

export default connect(null, toDispatch)(ButtonClicks);
