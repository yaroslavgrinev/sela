import { connect } from 'react-redux';
import { loadProjects } from '../../reducers/projects/actions';

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
