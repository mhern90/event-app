import React, { Component } from "react";
import InputField from "./InputField";

class Login extends Component {
    state = {
        username: "",
        password: "",
        showInstructions: false
    };

    onInputChange = e => {
        const name = e.target.name,
            value = e.target.value;

        const state = this.state;

        state[name] = value;

        this.setState({
            state
        });
    };

    clearFormError = e => {
        let name = e.target.name;
        const { formErrors } = this.props.loginCredentials;
        formErrors[name] = "";

        this.setState({ formErrors });
    };

    showLoginInstructions = () => {
        this.setState({
            showInstructions: true
        });
    };

    submitLogin = e => {
        e.preventDefault();
        const { login } = this.props;
        const { username, password } = this.state;
        let credentials = { username, password };
        login(credentials);
    };

    render() {
        const { username, password, showInstructions } = this.state;
        const { formErrors } = this.props.loginCredentials;
        return (
            <div className="flex flex-col h-screen items-center">
                <div className="w-full self-center container-420">
                    <h1 className="pb-6 text-center">Sign into Event App</h1>
                    {showInstructions && (
                        <p className="pb-2 text-sm">
                            App currently doesn't have a backend. Just use any
                            username & password combo to "sign in".
                        </p>
                    )}
                    <form
                        id="appLogin"
                        className="pb-2"
                        onSubmit={e => this.submitLogin(e)}
                    >
                        <InputField
                            name="username"
                            type="text"
                            defaultValue={username}
                            labelText="Username"
                            handleInputChange={this.onInputChange}
                            clearFormError={this.clearFormError}
                            required={true}
                            error={formErrors.username}
                        />
                        <InputField
                            name="password"
                            type="password"
                            defaultValue={password}
                            labelText="Password"
                            handleInputChange={this.onInputChange}
                            clearFormError={this.clearFormError}
                            required={true}
                            error={formErrors.password}
                        />
                        <div className="px-2">
                            <input
                                className="w-full py-2 rounded bg-purple-darker text-white"
                                type="submit"
                                value="Login"
                            />
                        </div>
                    </form>
                    <div className="pt-2 px-2">
                        <button
                            className="w-full py-2 rounded bg-purple-lighter text-purple-darkest"
                            onClick={this.showLoginInstructions}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
