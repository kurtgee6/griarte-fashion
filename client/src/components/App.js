import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import ShopNavbar from './Nav/ShopNavbar';

function mapStateToProps(state) {
  return {
    id: state.id,
    type: state.type,
    price: state.price,
    sizes: state.sizes,
    quantity: state.quantity
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(ShopNavbar);

export default App;
