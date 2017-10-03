import React from 'react';
import Header from './Header.jsx';
import PostForm from './PostForm.jsx';

/**  
 * EditPost Component 
 * allows user to add a blog post
 */
class AddPost extends React.Component {
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
          title="Create Your Post" 
          subtitle="Vangelis bits of moving fluff " 
          bgImage="assets/images/bg-add-post.jpg"
        />
        <PostForm></PostForm>
      </div>
    );
  }

  /** Set the initial state of the component */
  setInitialState(){
    this.state = {  
    };
  }

}

export default AddPost;