import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

// export default 
class CommentBox extends Component{
    state = { comment : '' };

    handleChange = event => {
        this.setState({comment: event.target.value});
    };

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.saveComment(this.state.comment);
      this.setState({ comment: '' });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                <h4>Add a comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button>Submit</button>
                </div>
                </form>
                <button 
                onClick={this.props.fetchComments}
                className="fetch-comments"
                >
                    Fetch comments
                </button>
            </div>
        );
    }
}

export default connect(null,actions)(requireAuth(CommentBox));