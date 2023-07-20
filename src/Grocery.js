import { Component } from "react";
import imageThree from './checked.png';

export class Grocery extends Component{
    state = {
        userInput: "",
        grocery:[],

    }
onChangeEvent(e){
    this.setState({userInput: e})
};

addItem(input){
    if(input === "") {
        alert ("Please enter an item") 
         }   else {
        
    
    let listArray = this.state.grocery;
    listArray.push(input);
    this.setState({grocery: listArray, userInput:''})
}
}
crossWord (event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

deleteItem(){
    let listArray = this.state.grocery;
    listArray = [];
    this.setState({grocery:listArray});
}
onFormSubmit(e){
    e.preventDefault();
}
    render () {
        return(
        <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                        placeholder="What do you want to buy?"
                        onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                        value = {this.state.userInput}/>
                        
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="add btn">Add</button>
            </div>
            <ul>
                {this.state.grocery.map((item, index) => (
                    <li onClick = {this.crossWord} key={index}>
                    <img src={imageThree} width="20px"/> {item}
                    </li>
                ))}
            </ul>
            <div className="container">
            <button onClick={() => this.deleteItem()}className="delete btn">Delete</button>
        </div>
        </form>
        </div>
        )
    }


}