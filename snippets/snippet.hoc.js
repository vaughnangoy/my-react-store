import snippet from './snippet.component';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = dispatch => ({
    snippetAction: data => dispatch(snippetAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(snippet);
