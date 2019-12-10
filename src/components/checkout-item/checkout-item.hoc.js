import CheckoutItem from './checkout-item.component';
import { connect } from 'react-redux';
import {
    clearItemFromCart,
    removeItem,
    addItem,
} from '../../stateManagement/cart/cart.actions';

const mapDispatchToProps = dispatch => ({
    clearItem: data => dispatch(clearItemFromCart(data)),
    addItem: data => dispatch(addItem(data)),
    removeItem: data => dispatch(removeItem(data)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
