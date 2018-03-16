import { connect } from "react-redux";
import Container from "./container";
import { push } from "react-router-redux";
import { actionCreators as notificationActions } from "redux/modules/notifications";

const mapStateToProps = (state, ownProps) => {
  const { user : { username } } = state;
  return { username };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToSearch: searchTerm => {
      dispatch(push(`/search/${searchTerm}`));
    },
    getNotification: () => {
      dispatch(notificationActions.getNotification());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
