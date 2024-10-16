import React from 'react';
import './Home.css';
export default class Home extends React.Component {
    render() {
        return(
            <>
            <div id='main' >
                <div id='one'>
                    <pre>Start Your <br />
                        BK order
                    </pre>
                    <button id='btn1'>Order Pickup</button>
                    <button id='btn2'>Order Delivery</button>
                </div>
                <div id='two'>
                    <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/97876c636e357c965a26f603f0a10bf3dd0d3f29-800x450.png?w=1125&q=90&fit=max&auto=format" alt="" />

                </div>
            </div>
            </>
            
        )
    }
}

