import React from 'react';
import './Cards.css';

class Cards extends React.Component {
    constructor (props){
        super(props)
    }
    render() {
        return(
            <>
            
               <div className='child'>
                <img src={this.props.src} alt={this.props.alt} />
                <h2>{this.props.h2}</h2>
                <p>{this.props.p}</p>
                <button>{this.props.button}</button>
               </div>
            </>
            
        )
    }
}
export default Cards  