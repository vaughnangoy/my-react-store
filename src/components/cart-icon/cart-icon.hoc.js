import CartIcon from './cart-icon.component';
import { connect } from 'react-redux';
import { toggleMiniCart } from '../../stateManagement/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../stateManagement/cart/cart.selectors';

const mapDispatchToProps = dispatch => ({
    toggleMiniCart: () => dispatch(toggleMiniCart()),
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
