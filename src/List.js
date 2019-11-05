import React from 'react';
import Post from './Post';

class List extends React.Component {
    render(){
        var mappedPosts = this.props.data.map(
           (post,index) => {
               return(
                   <Post key={index} title = {post.title} content = {post.content} description = {post.description} />
               )
           }

        )
        return(
            <div>
            {mappedPosts}
            </div>
        );
    }
}
export default List;