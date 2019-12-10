import CollectionItem from './collection-item.component';
import { connect } from 'react-redux';
import { addItem } from '../../stateManagement/cart/cart.actions';

const mapDispatchToProps = dispatch => ({
    addItem: data => dispatch(addItem(data)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
