import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes, { string, number, func } from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

        constructor(props){
                super(props);
                this.elementRef = React.createRef();

        }

        static contextType = AuthContext;
        componentDidMount(){
                // -> refers to the other way of using a ref that is supported in earlier react < 16.2: this.inputElement.focus();
                this.elementRef.current.focus();
                console.log(this.context.authenticated);
        }
        render(){
                console.log("[Person.js] rendering...");
                return (
                        // React.Fragment is also a higher order component, it could be used instead as it is already built in
                        <Aux>
                                { this.context.authenticated ? 
                                <p>Authenticated!</p>: <p>Please log in</p>}
                                <p onClick={this.props.click}>I am {this.props.name}, and I am {this.props.age} years old!</p>
                                <p>{this.props.children}</p>
                                <input 
                                type="text" 
                                onChange={this.props.changed} 
                                value={this.props.name}
                                //ref={(inputEl) => this.inputElement = inputEl} supported in react < 16.2
                                ref={this.elementRef}/>
                        </Aux>
                        );
        }
}

Person.propTypes = {
        click: PropTypes.func,
        name: string,
        age: number,
        changed: func
};

export default withClass(Person, classes.person);