import { connect } from 'react-redux';
import { loadProjects } from '../../actions/projects';

const mapStateToProps = (store) => {
  const {
    data: projects,
    isLoading
  } = store;
  
  return {
    projects,
    isLoading,
  };
};

const mapDispatchToProps = {
  load: loadProjects
};

export default connect(mapStateToProps, mapDispatchToProps);
