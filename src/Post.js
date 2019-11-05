import React from 'react';

class Post extends React.Component {

  render() {
    return (
      <li className="w3-padding-16">
      <span className="w3-large">
        {this.props.title}
      </span><br></br>

      <span>{this.props.description}
      </span><br></br>
      
      <span>{this.props.content}</span>
    </li>
    );
  }
  
}

export default Post;
