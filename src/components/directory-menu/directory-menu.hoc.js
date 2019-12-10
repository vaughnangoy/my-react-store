import DirectoryMenu from './directory-menu.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../stateManagement/directory/directory.selectors';

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryMenu);
