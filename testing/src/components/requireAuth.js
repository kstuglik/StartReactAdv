import React, {Component} from 'react';
import {connect} from 'react-redux';

export default ChildComponent => {
    class ComposeComponent extends Component {
        componentDidMount(){
            this.shouldNavigateAway();
        }
    
        componentDidUpdate(){
            this.shouldNavigateAway();
        }
    
        shouldNavigateAway(){
            if(!this.props.auth){
                console.log('i need to leave!!!');
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props}/>; 
        }
    }

    function mapStateToProps(state){
        return { auth: state.auth};
    }

    return connect(mapStateToProps)(ComposeComponent);
};

/*
//imagine we are in CommentBox.js
import requireAuth from 'components/requireAuth';

class CommentBox{

}

export default requireAuth(CommentBox);

//imagine we are in CommentBox.js
import requireAuth from 'components/requireAuth';

class CommentBox{

}

export default requireAuth(CommentBox);

//imagine we aree in App.js
import CommentBox from 'components/CommentBox';

*/