import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(business=>{
                        return <Business business = {business} key = {business.id} /> //Since this is a function we have to add a return statement .
                    })       
                }
            </div>
        );

    }

}


export default BusinessList;