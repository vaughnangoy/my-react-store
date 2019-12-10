import Header from './header.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../stateManagement/cart/cart.selectors';
import { selectCurrentUser } from '../../stateManagement/users/user.selectors';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
