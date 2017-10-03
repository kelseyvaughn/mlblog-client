import React from 'react';
import Header from './Header.jsx';

/**  
 * Post Component 
 * displays a blog post
 */
class PostList extends React.Component {
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
          title=this.state.title 
          subtitle="" 
          bgImage=this.state.bgImage
        />
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

export default PostList;