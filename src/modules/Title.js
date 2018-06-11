import {isMobile} from 'react-device-detect';
import React, { Component } from 'react';
import {styles} from './styles';
import {mStyles} from './mStyles';
import './styles.css';

class Title extends Component {
    render() {
        return (
            <div style={isMobile ? mStyles.titleBox : styles.titleBox}>
                <h1 style={isMobile ? mStyles.titleText : styles.titleText}>Why Mechanization is Necessary</h1>
            </div>
        );
    }
}


export default Title;