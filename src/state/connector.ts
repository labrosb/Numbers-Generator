import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from './actions';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ReduxConnector(component) {
  const mapStateToProps = state => state;

  const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

  return connect(mapStateToProps, mapDispatchToProps)(component);
}

export default ReduxConnector;
