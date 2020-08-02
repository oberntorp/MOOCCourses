import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{

        state = { 
            error: null
        }

        // Currently I do not know how to fix this in a class based manner, the course will get updated on this
        componentWillMount(){
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });

            this.responceInterceptor = axios.interceptors.response.use(null, error => {
                this.setState({error: error});
                return Promise.reject(error);
            });
        }

        confirmErrorRead = () =>{
            this.setState({error: null});
        }

        render() {
            return(
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.confirmErrorRead} >{this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponent {...this.props.children} />
                </Aux>
            );
        }

        componentWillUnmount(){
            console.log("Componentwillunmount", this.requestInterceptor, this.responceInterceptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responceInterceptor);
        }
    }
}

export default withErrorHandler;