import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { user: { userProfile } } = state;
  return {
    userProfile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { match: { params: { username } } } = ownProps;
  return {
    getUserProfile: () => {
      dispatch(userActions.getUserProfile(username));
    },
    getUserFollowers: () => {
      dispatch(userActions.getUserFollowers(username));
    },
    getUserFollowing: () => {
      dispatch(userActions.getUserFollowing(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
