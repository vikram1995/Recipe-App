import React, { Component } from 'react';
import Input from './Components/input';
import Display from './Components/display';

import './App.css';
const Api_key="bc523c7eb5a38d0a72f84629c6abd242";


class App extends Component {
  state={
    recipe:[]
  }

  SearchHandler= async (e)=>{
    e.preventDefault();
    const input= e.target.elements.recipe.value;
    console.log(input);
    const api_call= await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${Api_key}&q=${input}&count=12 `);
    const data= await api_call.json();
    console.log(data);
    this.setState({recipe:data.recipes});
    console.log(this.state.recipe);
  }
  render() {
    return (
      <div className="App container-fluid">
        <Input search={this.SearchHandler}/>
        <Display data={this.state.recipe}/>
        
      </div>
    );
  }
}

export default App;
