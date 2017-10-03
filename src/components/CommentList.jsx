import React from 'react';

/**  
 * CommentList Component 
 * displays the list of comments
 * handles its own pagination
 */
class CommentList extends React.Component {
  //** Constructor */
  constructor(props, context){
    super(props, context);
    this.setInitialState();
  }

  /**
   * Sets the initial state of the component
   */
  setInitialState(){
    this.state = {  
    };
  }

}

export default CommentList;