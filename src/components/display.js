import React, {Component}from 'react';
import './display.css'

class Display extends Component{
	constructor(props){
		super();
		this.state={
			cur_val: props.val
		};
		this.textarea_ref=React.createRef();
	}

	is_valid_input=(input)=>{
		return ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','=','(',')'].includes(input)
	}
	componentWillReceiveProps=(nextProp)=>{
			this.setState({
				cur_val: nextProp.val
			})
			this.textarea_ref.current.focus();
		}

	process_input=(cur_input)=>{
		let prev_val=this.state.cur_val;
		let symbols=['+','-','*','/'];
			if(this.is_valid_input(cur_input))
			{
				if(symbols.includes(cur_input)){
					cur_input=' '+cur_input+' ';
				}
				let out;
				if (cur_input==='='){
					out=eval(prev_val);
				}
				else if(prev_val==='0')
				{
					out=cur_input;
				}
				else{
					out=prev_val+cur_input;
				}
				this.props.callback_func_from_parent(out);
				this.setState({
				cur_val: out
				})
		}
	}

	changeHandler(event){
			let len=event.target.value.length;
			if(len>this.state.cur_val.length)
			{
				var cur_input=event.target.value.charAt(len-1);
				this.process_input(cur_input);
			}
			else{
				let out;
				if(len===0){
					
					out='0';
				}
				else
				{
					out=event.target.value;
				}
				this.props.callback_func_from_parent(out);
				this.setState({
				cur_val: out
				})
			}
			
	}

	render(){
		return(
			<div className="display">
				<textarea ref={this.textarea_ref} value= {this.state.cur_val} onChange={this.changeHandler.bind(this)}></textarea>
			</div>
			)
	}
}

export default Display