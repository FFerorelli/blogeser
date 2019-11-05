import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
//import Form from './Form';

// var postList = [
//     {title: 'titolo1', content: 'content1'},
//     {title: 'titolo2', content: 'content2'},
//     {title: 'titolo3', content: 'content3'},
//     {title: 'titolo4', content: 'content4'}
// ]

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
              data : []
        }
      //  this.addPost = this.addPost.bind(this);   --->  Se non si usa Arrow Func
    }

    addPost=(event)=>{
        event.preventDefault();
        var title = this.refs.inputTitle.value;
        var description = this.refs.description.value;
        var content = this.refs.inputContent.value;
        if (!(title&&description&&content)) {
            alert('Required field is empty');
            return;
        }
        console.log(title, description, content);
        this.refs.inputTitle.value ="";
        this.refs.description.value ="";
        this.refs.inputContent.value ="";
        let lastList = this.state.data.slice();
        lastList.push({ title:title, description:description, content:content });
        this.setState({ data:lastList });
        }
    

    render(){
        return(
            <div>
                <List data = {this.state.data} />  
                <form onSubmit = {this.addPost}> 
                    Title:<br></br>
                    <input type="text" ref ="inputTitle" /><br></br>
                    Description:<br></br>
                    <input type="text" ref ="description" /><br></br>
                    Content:<br></br>
                    <input type="text" ref ="inputContent"/><br></br>
                    <input type ="submit" value="invia" />
                   </form>        
       
           </div>               
        );
    }
}



ReactDOM.render(<Blog />, document.getElementById('root'));



