import classes from "./../common/formsControls/FormsController.module.css";
import { React } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form"
import { login, logout } from "../../redux/authReducer";
import { maxLengthCreator, requiredField } from "../../utils/validators/validator";
import { Input } from "../common/formsControls/FormsControls";



const maxLength = maxLengthCreator(50)


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Email'}
                name={'email'}
                component={Input}
                validate={[requiredField]}
            />
        </div>
        <div>
            <Field placeholder={'Password'}
                name={'password'}
                type={"password"}
                component={Input}
                validate={[requiredField]} />
        </div>
        <div>
            <Field component={Input}
                name={'rememberMe'}
                type={"checkbox"} />  remember me
            </div>
        {props.error && <div className={classes.formSummaryError}>
            {props.error}
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