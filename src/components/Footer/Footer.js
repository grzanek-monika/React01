import React from 'react';
import './footer.css';
import Copyright from '../Copyright/Copyright.js';

function Footer(props){
    return (
        <div>
            <footer>
                <ul>
                    <li>Regulamin</li>
                    <li>FAQ</li>
                    <li>Contact: {props.contactEmail}, 
                        {props.companyData.city} </li>
                </ul>
            <Copyright year='202X' />
            </footer>
        </div>
    )
}

export default Footer;