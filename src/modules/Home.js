import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import {styles} from './styles';

import Title from './Title';
import Article from './Article';
import CommentSection from './CommentSection';

const driverlessTractor = require('../assets/driverless_tractor.jpg');

class Home extends Component {
    render() {
        return (
            <div>
                <Title/>
                <br/>

                <div style={styles.tractorImageContainer}>
                    <Image src={driverlessTractor} style={styles.centerImage} responsive/>
                    <div style={styles.centerCaption}>
                        Autonomous Tractor
                        <br/>
                        Source: CNH Industrial/Case IH
                    </div>
                </div>

                <Article/>
                <CommentSection/>

            </div>
        );
    }
}


export default Home;