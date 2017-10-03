import React from 'react';
import Header from './Header.jsx';
import PostForm from './PostForm.jsx';

/**  
 * EditPost Component 
 * allows user to edit a blog post
 */
class EditPost extends React.Component {
  /** Constructor */
  constructor(props, context){
    super(props, context);
    this.setInitialState();
  }

  /** Render the component */
  render(){
    return (
      <div>
        <Header 
          title="Edit Your Post" 
          subtitle="Worldlets Radio Telescope" 
          bgImage="assets/images/bg-edit-post.jpg"
        />
        <PostForm></PostForm>
      </div>
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

export default EditPost;