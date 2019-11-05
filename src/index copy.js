import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import * as serviceWorker from './serviceWorker';




class List extends React.Component{

    constructor(props) {
        super(props);
        this.state = { inputTitle: '', inputContent: ''}
    }

renderPost(title,content){
    return(
        <Post titolo={title} contenuto={content}/>
    );
}



addPost (inputTitle,inputContent){
    inputTitle = document.getElementById("inputTitle").value;
     inputContent = document.getElementById("inputContent").value;
    console.log(inputTitle, inputContent)
    this.renderPost(inputTitle,inputContent);
}

    render(){
        return(

            <div>

            {this.renderPost("TitoloProva","testoprova")}
            {this.renderPost("titolo2","testo2")} 
              
        <form> 
             Title:<br></br>

             <input 
             type="text" 
             value={this.inputTitle} 
             onChnage = {event => this.setState({ inputTitle: event.target.value })}/><br></br>
             
             Content:<br></br>

             <input 
             type="text" 
             value={this.inputContent} 
             onChnage = {event => this.setState({ inputContent: event.target.value })}/>

       </form><br></br>
       
       
       <button className="add" onClick={() => this.addPost(this.inputTitle,this.inputContent)}>Add Post!</button>

           </div>     
            
        );
    }
}


ReactDOM.render(<List />, document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
