import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from './components/keypad.js'
import Display from './components/display.js'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      initial_display_val:'0'
    }
  }
  parent_callback_function=(prop_from_child)=>{
    let current_display_value
    if(prop_from_child==='=')
    {
      current_display_value=eval(this.state.initial_display_val)
    }
    else if(prop_from_child==='C')
    {
      current_display_value='0'
    }
    else if(this.state.initial_display_val==='0'){
        current_display_value=prop_from_child
    }
    else{
      current_display_value=this.state.initial_display_val+prop_from_child
    }
        this.setState({
      initial_display_val:current_display_value
    })
  }
  parent_callback_function_display=(prop_from_child)=>{
    this.setState({
      initial_display_val: prop_from_child
    })
  }
  
  render(){
    return(
        <div>
          <Display val={this.state.initial_display_val} callback_func_from_parent={this.parent_callback_function_display} />
          <Keypad callback_func_from_parent={this.parent_callback_function}/>
        </div>
      )
  }
}

export default App;
