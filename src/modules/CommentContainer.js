import React, { Component } from 'react';
import {styles} from './styles';
import ReactList from 'react-list';

import CommentCell from './CommentCell';
import moment from 'moment';

import {database} from '../config/firebase';


class CommentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        let initialDataLoaded = false;
        database.ref('comments').orderByKey().once('value', (snapshot) => {
            if (snapshot.val() !== null) {
                let comments = Object.values(snapshot.val());
                comments.reverse();

                this.setState({
                    comments: comments
                });
            }

            initialDataLoaded = true;
        });

        database.ref('comments').on('child_added', (snapshot, prevChildKey) => {
            if (initialDataLoaded) {
                let comment = snapshot.val();
                if (comment !== null) {
                    let comments = this.state.comments;
                    comments.unshift(comment);
                    this.setState({
                        comments: comments
                    });
                }
            }
        });
    }


    renderItem = (index, key) => {
        let comment = this.state.comments[index];
        let dateCreated = moment(comment.timestamp).calendar();
        return <CommentCell
            key={key}
            dateCreated={dateCreated}
            comment={comment.comment}
        />;
    };

    render() {
        const {comments} = this.state;
        if (comments.length === 0) {
            return (
                <div></div>
            );
        }

        return (
            <div style={styles.commentCellsContainer}>
                <div style={{overflow: 'auto', maxHeight: 800}}>
                    <ReactList
                        itemRenderer={this.renderItem}
                        length={this.state.comments.length}
                        type='uniform'
                    />
                </div>
            </div>
        );
    }
}

export default CommentContainer;