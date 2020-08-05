import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-config-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component{
    state = {
        name: "Oskar Berntorp",
        email: "test@test.se",
        address: {
            street: "TestStreet",
            zipCode: "345665"
        },
        loading: false
    }

    submitOrderHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true})
        const orderData = {
        ingredients: this.state.ingredients,
                price: this.props.totalPrice,
                customer: {
                fullName: this.state.name,
                email: this.state.email,
                street: this.state.address.street,
                zipCode: this.state.address.zipCode
            },
            deliveryMethod: "inMailBox"
        };

        axios.post("/orders.json", orderData).then(response => {
            this.setState({loading: false});
            this.props.history.replace("/");
        }).catch(error => this.setState({loading: false, isPurchasing: false}));
    }

    render(){
        let contactForm = (
            <form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" />
                <input type="text" name="street" placeholder="Your Street" />
                <input type="text" name="zipcode" placeholder="Your zip code" />
                <Button btnType="Success" clicked={this.submitOrderHandler}>Order</Button>
            </form>
        );

        if(this.state.loading){
            contactForm = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Please enter your contact information</h4>
                {contactForm}
            </div>
        );
    }
}

export default ContactData;