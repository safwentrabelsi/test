import React, { Component } from 'react';
import AddMessage from './Component/AddMessage';
import NavBar from './Component/NavBar';
import ShowMessage from './Component/ShowMessage'
import {BrowserRouter,Route,Switch} from 'react-router-dom'



class App extends Component {
 
  render() {
    return (
      <div className="App ">
      <BrowserRouter>

          <div>
            <NavBar/>
            <Switch>
          
              <Route  path="/showmessages" component={ShowMessage}/>
              <Route exact path='/' component={AddMessage}/>
            </Switch>
          </div>
          
      </BrowserRouter>
          
      
          
    </div>
    );
  }
}

export default App;
