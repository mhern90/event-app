import { connect } from "react-redux";
import { login } from "../actions/user-actions";

import Login from "../components/Login";

const mapStateToProps = ({ loginCredentials }) => ({
    loginCredentials
});

const mapDispatchToProps = dispatch => ({
    login(credentials) {
        dispatch(login(credentials));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
