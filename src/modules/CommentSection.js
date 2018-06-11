import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import {Input} from 'react-toolbox/lib/input';
import theme from '../toolbox/theme.js';
import {styles} from './styles';


class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentText: ''
        }
    }

    inputChange = (value) => {
        this.setState({
            commentText: value
        });
    };

    render() {
        return (
            <div>
                <div style={styles.commentInputContainer}>
                    <Input
                        theme={theme.RTInput}
                        type='text' multiline maxLength={250}
                        value={this.state.commentText}
                        onChange={this.inputChange}
                        style={styles.commentInputField}
                        hint="Enter your comment here"
                    />
                </div>
            </div>
        );
    }
}

export default CommentSection;