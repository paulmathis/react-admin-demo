import React, { Component } from 'react';

// Component redirects to appropriate custom page based on phone number

class Voip extends Component {
    async componentDidMount() {
        const { history, match } = this.props;

        try {
            // Get list of customers with matching phone number
            const result = await fetch(
                `http://localhost:4000/customers?filter={"phone_number":"${
                    match.params.phone
                }"}`
            );
            const customerArray = await result.json();
            const customers = customerArray.length;

            // If only one result redirect to customers page
            if (customers === 1) {
                const id = customerArray[0].id;
                history.push(`/customers/${id}`);
            }

            // If no record found for customer redirect to create a new customer
            if (customers === 0) {
                history.push('/customers/create');
            }

            // If more than one record is found redirect to the customer list with a search for that number
            if (customers > 1) {
                history.push(
                    `/customers?filter=%7B%22q%22%3A%22${
                        match.params.phone
                    }%22%7D&order=DESC&page=1&perPage=25&sort=last_seen`
                );
            }
        } catch (e) {
            // If any errors redirect home
            history.push('/');
        }
    }

    render() {
        return <div>Loading...</div>;
    }
}

export default Voip;
