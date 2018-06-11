import {isMobile} from 'react-device-detect';
import React, { Component } from 'react';
import {Image, Modal} from 'react-bootstrap';
import {Button} from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import {Input} from 'react-toolbox/lib/input';

import {styles} from './styles';
import {mStyles} from './mStyles';

import Title from './Title';
import Article from './Article';
import CommentSection from './CommentSection';

import {database} from '../config/firebase';

const driverlessTractor = require('../assets/driverless_tractor.jpg');

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numSupporters: 0,
            active: false,
            email: '',
            initialDataLoaded: false,
            supporters: {},
            emailError: ''
        };
    }


    componentDidMount() {
        this.fetchSupporters();

        database.ref('supporters').on('child_added', (snapshot, prevChildKey) => {
            if (this.state.initialDataLoaded) {
                let currCount = this.state.numSupporters;
                let email = snapshot.val();
                let supporters = this.state.supporters;
                supporters[email] = true;

                this.setState({
                    numSupporters: currCount + 1,
                    supporters: supporters
                });
            }
        });
    }


    fetchSupporters = () => {
        database.ref('supporters').once('value', (snapshot) => {
            if (snapshot.val() !== null) {
                let supporters = snapshot.val();
                let results = {};

                let emails = Object.values(supporters);
                emails.forEach(email => {
                    results[email] = true;
                });

                this.setState({
                    numSupporters: emails.length,
                    initialDataLoaded: true,
                    supporters: results
                });
            }
            else {
                this.setState({
                    initialDataLoaded: true
                });
            }
        });
    };


    handleToggle = () => {
        this.setState({
            active: !this.state.active
        });
    };


    onClickYes = () => {
        this.setState({
            active: true
        });
    };


    onClickSign = () => {
        if (this.state.email !== '') {
            let supporters = this.state.supporters;
            if (supporters[this.state.email] !== undefined) {
                this.setState({
                    emailError: 'You\'ve already signed :)'
                });
                return;
            }
            else if (!this.validateEmail(this.state.email)) {
                this.setState({
                    emailError: 'Please enter a valid email address'
                });
                return;
            }

            database.ref('supporters').push(
                this.state.email
            )
                .then(() => {
                    this.fetchSupporters();
                    this.setState({
                        active: !this.state.active,
                        email: '',
                        emailError: ''
                    });
                });
        }
    };


    inputChange = (value) => {
        this.setState({
            email: value
        });
    };


    validateEmail = (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    };


    render() {
        let actions = [
            { label: "Cancel", onClick: this.handleToggle },
            { label: "Sign", onClick: this.onClickSign }
        ];

        return (
            <div>
                <Title/>
                <br/>

                <div style={isMobile ? mStyles.tractorImageContainer : styles.tractorImageContainer}>
                    <Image src={driverlessTractor} style={styles.centerImage} responsive/>
                    <div style={styles.centerCaption}>
                        Autonomous Tractor
                        <br/>
                        Source: CNH Industrial/Case IH
                    </div>
                </div>

                <Article/>
                <CommentSection/>



                <div style={styles.supportContainer}>
                    <div style={styles.supportButtonContainer}>
                        {isMobile
                            ? <h3 style={styles.whiteText}>Do you support mechanization?</h3>
                            : <h1 style={styles.whiteText}>Do you support mechanization?</h1>
                        }

                        <Button style={styles.supportButton} raised primary onClick={this.onClickYes}>
                            Yes
                        </Button>
                        <h2 style={styles.whiteText}>{this.state.numSupporters} have signed</h2>
                    </div>

                    <Dialog
                        type={isMobile ? 'large' : 'small'}
                        active={this.state.active}
                        actions={actions}
                        onEscKeyDown={this.handleToggle}
                        onOverlayClick={this.handleToggle}
                        title="Sign here to show your support"
                    >
                        <Input
                            type='text' maxLength={300}
                            error={this.state.emailError}
                            value={this.state.email}
                            onChange={this.inputChange}
                            style={styles.commentInputField}
                            required
                            placeholder="Enter your email"
                        />
                        <h5>Don't worry, I won't spam you with emails :)</h5>
                    </Dialog>

                    <br/>
                    <br/>
                </div>

            </div>
        );
    }
}


export default Home;