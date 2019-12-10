import Shop from './shop.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollection } from '../../stateManagement/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    collection: selectCollection,
});

export default connect(mapStateToProps)(Shop);
