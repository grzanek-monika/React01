import React from 'react';
import './copyright.css';
import styles from './styles.module.css';

class Copyright extends React.Component {
    render(){
        return (
            <div className="copyright">
                <span className={styles.info}>Copyright &copy;
                    {this.props.year} example.com
                    All Rights Reserved
                </span>
            </div>
        )
    }
}

export default Copyright;