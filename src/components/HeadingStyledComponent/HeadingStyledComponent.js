import React from 'react';
import ListItem from './styled/ListItem.js';
import { BorderListItem } from './styled/ListItem.js';


class HeadingStyledComponent extends React.Component {
    render(){
        return (
            <div>
                <nav>
                    <ul>
                        <BorderListItem>Home</BorderListItem>
                        <ListItem active >Articles</ListItem>
                        <ListItem>About</ListItem>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default HeadingStyledComponent;