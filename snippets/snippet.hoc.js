import snippet from './snippet.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { select } from '../../stateManagement/snippet/snippet.selectors';

const mapStateToProps = createStructuredSelector({
    select: select,
});

const mapDispatchToProps = dispatch => ({
    snippetAction: data => dispatch(snippetAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(snippet);
