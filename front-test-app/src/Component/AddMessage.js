import React,{Component} from 'react';
import LogoMedgoApp from './../assets/LogoMedgoApp.png';
import axios from 'axios';
class AddMessage extends Component {
    state={
        name:'',
        email:'',
        content:''
    }

    handleChange = (e)=>{
        this.setState({
            name : this.refs.name.value,
            email:this.refs.email.value,
            content:this.refs.content.value
        })
  
    }
    handeSubmit =  (e)=>{
        e.preventDefault()
        
            axios.defaults.headers = {
              'Content-Type': 'application/json'
          }
            axios.post('/addmessage',this.state).then(data=>{
          console.log(data)  
        })

        
        this.setState({
            name:'',
            email:'',
            content:''
        })
        //Hide Form and Show message on submit
        document.getElementById("slider").classList.add("closed")
        document.getElementById("oppositeSlider").classList.add("opened")
        document.getElementById("showForm").classList.add("opened")
    }
    //Hide message and show form
    showForm = ()=>{
        document.getElementById("slider").classList.remove("closed")
        document.getElementById("oppositeSlider").classList.remove("opened")
        document.getElementById("showForm").classList.add("hide")

    }
    render(){
        return(
            <div>
            <img src={LogoMedgoApp} className="logo center" alt="logo"/>
            
                <div className="slider" id="slider">
                
                <form  onSubmit={this.handeSubmit} >
                    
                    
                    <input type="text" 
                    onChange={this.handleChange} 
                    ref="name" 
                    value={this.state.name} 
                    placeholder="Your Name" 
                    required>
                    </input>
                    
                    
                    <input type="text" 
                    onChange={this.handleChange} 
                    ref="email" 
                    value={this.state.email} 
                    placeholder="Your E-mail"
                    pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" 
                    required>
                    </input>
                    
                    
                    <textarea rows='1' 
                    className="materialize-textarea" 
                    type="text" 
                    onChange={this.handleChange} 
                    ref="content" 
                    value={this.state.content} 
                    placeholder="Message..." required></textarea>
                    
                    <button type="submit" className="btn waves-effect light-blue"  >submit</button>

                </form>
                </div>
                
                <div className="oppositeSlider" id="oppositeSlider">
                    <h1>Thank you for sending</h1>
                    <button onClick={this.showForm} id="showForm" className="btn waves-effect light-blue"  >New message ?</button>
                </div>
            </div>
            
        )
    }
}
export default AddMessage;