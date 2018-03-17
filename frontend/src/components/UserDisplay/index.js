import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userAction } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { user } = ownProps;
  return {
    handleClick: () => {
      if (user.is_following) {
        dispatch(userAction.unfollowUser(user.username));
      } else {
        dispatch(userAction.followUser(user.username));
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
