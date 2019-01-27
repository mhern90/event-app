import { connect } from "react-redux";
import Application from "../components/Application";
import { logout } from "../actions/user-actions";

const mapStateToProps = ({ loginCredentials }) => {
    return { loginCredentials };
};

const mapDispatchToProps = dispatch => ({
    logout() {
        dispatch(logout());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Application);
