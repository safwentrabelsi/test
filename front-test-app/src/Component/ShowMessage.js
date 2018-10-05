import React, {Component} from 'react';
import axios from 'axios';

class ShowMessage extends Component {
    state = {
        messages: [ ]
    }
    componentDidMount() {
        axios.get('http://localhost:3001/getmessage').then(res=>{
            
            this.setState({
                messages: res.data
            })
            
        })
    }
    render() {
    
        const  {messages} = this.state;
        const messagesList = messages.length ? ( messages.map( message =>{
            
            return(
                <div className="post card" key={message._id} >
                   
                    <div className="card-content">
                       <span className="card-title ">{message.name}</span>
                       <p>{message.email}</p>
                        <p>{message.content}</p>
                    </div>
                </div>
            )
        })) : ( <div className="center"> <h4> no messages yet</h4></div> ) 
    return(
        <div className="container">
         {messagesList}
        </div>
    )
}
}

export default ShowMessage;