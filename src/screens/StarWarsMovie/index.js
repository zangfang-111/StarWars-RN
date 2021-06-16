import View from './view';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { movieData } from '../../actions/StarWarsMovieAction';

const mapStateToProps = state => ({
  getMovieData: state.getIn(['StarWarsMovieReducer', 'getMovieData']),
});

const mapDispatchToProps = dispatch => ({
  movieData: () => {
    dispatch(movieData());
  }
});

const Container = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(View);

export default Container;
