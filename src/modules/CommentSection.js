import React, { Component } from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button';
import {Input} from 'react-toolbox/lib/input';
import {styles} from './styles';

import {database} from '../config/firebase';
import moment from 'moment';

import CommentContainer from './CommentContainer';


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

    onClickComment = () => {
        if (this.state.commentText !== '') {
            database.ref('comments').push({
                comment: this.state.commentText,
                timestamp: moment.utc().valueOf()
            })
                .then((ref) => {
                    this.setState({
                        commentText: ''
                    });
                });
        }
    };

    render() {
        return (
            <div>
                <div style={styles.commentInputContainer}>
                    <Input
                        type='text' multiline maxLength={1000}
                        value={this.state.commentText}
                        onChange={this.inputChange}
                        style={styles.commentInputField}
                        required
                        placeholder="Enter your comment here"
                    />
                    <Button
                        raised
                        primary
                        style={styles.commentButton}
                        onClick={this.onClickComment}
                    >
                        Comment
                    </Button>
                </div>

                <CommentContainer/>

            </div>
        );
    }
}

export default CommentSection;