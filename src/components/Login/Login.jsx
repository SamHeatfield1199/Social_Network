import classes from "./../common/formsControls/FormsController.module.css";
import { React } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form"
import { login, logout } from "../../redux/authReducer";
import { maxLengthCreator, requiredField } from "../../utils/validators/validator";
import { CreateField, Input } from "../common/formsControls/FormsControls";
//деструктуризировали парметры(достали только то, что нужно из пропсов)
const LoginForm = ({ handleSubmit, error }) => {
    return <form onSubmit={handleSubmit}>
        {CreateField("Email", "email", [requiredField], Input)}
        {CreateField('Password', 'password', [requiredField], Input, { type: "password" })}
        {CreateField("", 'rememberMe', [], Input, { type: "checkbox" }, "remember me")}

        {error && <div className={classes.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return (
            <Redirect to={"/profile"} />
        )
    }

    return <div>
        <h1>
            Login
        </h1>
        <ReduxLoginForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
}
)

export default connect(mapStateToProps, {
    login: login,
    logout: logout
})(Login)