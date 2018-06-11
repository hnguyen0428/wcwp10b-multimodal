import React, { Component } from 'react';
import {styles} from './styles';
import './styles.css';

class Title extends Component {
    render() {
        return (
            <div style={styles.titleBox}>
                <h1 style={styles.titleText}>Why Mechanization is Necessary</h1>
            </div>
        );
    }
}


export default Title;