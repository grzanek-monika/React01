import React from 'react';
import './footer.css';
import Copyright from '../Copyright/Copyright.js';


const elements1 = ["TOS", "About"];
const items = [];
const elements2 = ["contact", "legal"];


function Footer(props){
    elements1.forEach( value => items.push(<li>{value}</li>))

    let isLogged = false;
    let button;
    if(isLogged) {
        button = <button>Logout</button>;
    } else {
        button = <button>Login</button>;
    }

    return (
        <div>
            <footer>
                <ul>
                    {items}
                    <li>Contact: {props.contactEmail}, 
                        {props.companyData.city}
                    </li>
                    {elements2.map( (value, index) => {
                        return <li>{value}</li>
                    } )}
                </ul>
            <Copyright year='202X' />
            {button}
            {isLogged === true &&
            <div>Sprawdź pocztę!</div>}

            {isLogged 
                ? <div>Zobacz notyfikacje</div>
                : <div>Zaloguj się dla notyfikacji</div>
            }
            </footer>
        </div>
    )
}

export default Footer;