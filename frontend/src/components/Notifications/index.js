import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { user: { notifications } } = state;
  return {
    notifications
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNotifiactions: () => {
      dispatch(userActions.getNotifiactions());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
