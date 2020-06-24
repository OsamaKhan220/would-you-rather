import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { dispatch_initialDataAction } from "./store/actions/actionDispatchers";
import Loader from "./components/Loader";
import Routers from "./routers";
import PropTypes from "prop-types";
import "./styles/App.css";

class App extends Component {
  componentDidMount() {
    this.props.initialData();
  }

  render() {
    return this.props.loading ? (
      <Loader />
    ) : (
      <div>
        <Routers />
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  initialData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  initialData: () => dispatch(dispatch_initialDataAction()),
});

const mapStateToProps = (state) => ({ loading: state.loading });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
