import React from 'react';
import Header from './Header.jsx';
import CommentForm from './CommentForm.jsx';

/**  
 * AddComment Component 
 * form to allow users to add a comment
 */
class AddComment extends React.Component {
  /** Constructor */
  constructor(props, context){
    super(props, context);
    this.setInitialState();
  }

  /** Render the component */
  render(){
    return (
      <CommentForm></CommentForm>
    );
  }

  /** Set the initial state of the component */
  setInitialState(){
    this.state = {  
    };
  }

}

export default AddComment;