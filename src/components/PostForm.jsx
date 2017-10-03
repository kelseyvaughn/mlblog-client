import React from 'react';
import Header from './Header.jsx';

/**  
 * PostForm Component 
 * form to add/edit a blog post
 */
class PostForm extends React.Component {
  /** Constructor */
  constructor(props, context){
    super(props, context);
    this.setInitialState();
  }

  /** Render the component */
  render(){
    return (
      <form></form>
    );
  }

  /** Set the initial state of the component */
  setInitialState(){
    this.state = {  
      title:"",
      bgImage: ""
    };
  }

}

export default PostForm;