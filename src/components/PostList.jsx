import React from 'react';
import Header from './Header.jsx';

/**  
 * PostList Component 
 * displays the list of posts
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
          title="Sagan Lipsum" 
          subtitle="Network of Wormholes Vangelis Dream" 
          bgImage="/assets/images/post-01.jpg"
        />
      </div>
    );
  }

  /** Set the initial state of the component */
  setInitialState(){
    this.state = {  
    };
  }

}

export default PostList;