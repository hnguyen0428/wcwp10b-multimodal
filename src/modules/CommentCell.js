import React, { Component } from 'react';
import {styles} from './styles';
import PropTypes from 'prop-types';


class CommentCell extends Component {
    render() {
        return (
            <div style={styles.commentCellContainer}>
                <p>{this.props.comment}</p>
                <h5>Posted {this.props.dateCreated}</h5>
            </div>
        );
    }
}

CommentCell.propTypes = {
    dateCreated: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
};

export default CommentCell;