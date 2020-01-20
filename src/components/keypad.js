import React,{Component} from 'react';
import Display from './display.js';
import './keypad.css'
class keypad extends Component
{

	render(){
		return(  
			<div className="keypad">
				<button onClick={()=>this.clickHandler('1')}> 1 </button>
				<button onClick={()=>this.clickHandler('2')}> 2 </button>
				<button onClick={()=>this.clickHandler('3')}> 3 </button>
				<button id="symbol" onClick={()=>this.clickHandler(' + ')}> + </button>
				<button onClick={()=>this.clickHandler('4')}> 4 </button>
				<button onClick={()=>this.clickHandler('5')}> 5 </button>
				<button onClick={()=>this.clickHandler('6')}> 6 </button>
				<button id="symbol" onClick={()=>this.clickHandler(' - ')}> - </button>
				<button onClick={()=>this.clickHandler('7')}> 7 </button>
				<button onClick={()=>this.clickHandler('8')}> 8 </button>
				<button onClick={()=>this.clickHandler('9')}> 9 </button>
				<button id="symbol" onClick={()=>this.clickHandler(' * ')}> * </button>
				<button id="symbol" onClick={()=>this.clickHandler('C')}> C </button>
				<button onClick={()=>this.clickHandler('0')}> 0 </button>
				<button id="symbol" onClick={()=>this.clickHandler('=')}> = </button>
				<button id="symbol" onClick={()=>this.clickHandler(' / ')}> / </button>
			</div>
			)
		
	}

	clickHandler=(nextval)=>{
		this.props.callback_func_from_parent(nextval);
	}
}
export default keypad;