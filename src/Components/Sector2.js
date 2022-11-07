import './Sector2Style.css';
import React, { Component } from 'react'

class Sector2 extends Component {
    render() {
        return (
        <div className='Heading-img'>
            <div className='heading'>
                <h1>{this.props.Heading}</h1>
                <p>{this.props.Text}</p>
            </div>
        </div>
        )
    }
}

export default Sector2