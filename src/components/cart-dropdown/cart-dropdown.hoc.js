import CartDropdown from './cart-dropdown.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
