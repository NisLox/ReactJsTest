import React, { Component } from 'react';
import ButtonComponent from './Hello'

class App extends Component{
   render(){
      return(
         <div>
            <ButtonComponent text="no" color="primary" />
            <ButtonComponent text="yes" color="secondary"/>
         </div>
      );
   }
} 
export default App;