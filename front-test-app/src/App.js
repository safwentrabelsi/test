import React, { Component } from 'react';
import AddMessage from './Component/AddMessage';
import NavBar from './Component/NavBar';
import ShowMessage from './Component/ShowMessage'
import {BrowserRouter,Route,Switch} from 'react-router-dom'



class App extends Component {
  state = {
    name:'',
    email:'',
    content:''
    
  }
 

  

  
  render() {
    return (
      <div className="App ">
      <BrowserRouter>

          <div>
          <NavBar/>
          <Switch>
          
          <Route  path="/showmessages" component={ShowMessage}/>
          <Route exact path='/' addMessage={this.addMessage} component={AddMessage}/>
          </Switch>
          </div>
          
      </BrowserRouter>
          
      
          
      </div>
    );
  }
}

export default App;
