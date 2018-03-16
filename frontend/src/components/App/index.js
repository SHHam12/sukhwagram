import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
    const { user, routing: { location } } = state;
    return {
        isLoggedIn: user.isLoggedIn,
        pathname: location.pathname,
        username: user.name
    };
};

export default connect(mapStateToProps)(Container);