import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm( user );
    }
    
    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render(){
        return(
            <div className="session_form_container">
                <form className="session_form" onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <label>Email address:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <input className="session_form_continue" type="submit" value="Continue"/>
                    {this.props.navText}
                    {this.props.navLink}
                </form>
            </div>
        )
    }
}

export default SessionForm;