import React, { Component } from 'react';

const asyncComponent = (importedComponent) =>{
    return class extends Component{
        state = {
            component: null
        }

        componentWillMount(){
            importedComponent().then(cmp => this.setState({component: cmp.default}));
        }

        render(){
            const ComponentBeingRendered = this.state.component;
            return ComponentBeingRendered ? <ComponentBeingRendered {...this.props} /> : null;
        }
    }
}

export default asyncComponent;