import React, { Component } from 'react';
import ButtonComponent from './Hello'

class App extends Component{
   render(){
      return(
         <div>
            <ButtonComponent text="no" />
            <ButtonComponent text="yes" />
         </div>
      );
   }
} 
export default App;