import React, {Component} from "react";
import Title from "./Title";
import Footer from "./Footer";

class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            newTodo: "",
            todos:[{
                title:"Learn React",
                done: false
            },{
                title:"Learn JSX",
                done: false
            }]
        };
        this.formSubmitted = this.formSubmitted.bind(this)
    }
    
    formSubmitted(event){
        event.preventDefault();
        if(this.state.newTodo !== ""){
            this.setState({
                newTodo: "",
                todos: [...this.state.todos,{
                    title: this.state.newTodo,
                    done: false
                }]
            })
        }
        
    }

    newTodoChanged(event){
        this.setState({
            newTodo: event.target.value
        });
    }

    toggleTodoDone(event, index){
        console.log(event.target.checked);
        const todos = [...this.state.todos]; // copy the array
        todos[index] = {...todos[index]}; // copy the todo
        todos[index].done = event.target.checked //update done property on copied todo
        this.setState({
            todos
        })
        console.log(todos);
    }

    removeTodo(index){
        const todos = [...this.state.todos];
        todos.splice(index, 1)
        this.setState({
            todos
        })
    }

    allDone(){
        const todos = this.state.todos.map(todo => {
            return {
                title: todo.title,
                done: true
            };
        });
        this.setState({
            todos: todos
        })
    }

    render(){
        return(
            <div className="container">
                <Title />
                    <form className="input-group" onSubmit={this.formSubmitted}>
                        <input className="form-control col-sm-10" 
                                onChange={(event)=>this.newTodoChanged(event)} 
                                id="newTodo" 
                                value={this.state.newTodo} 
                                placeholder="enter task">
                        </input>
                        <button className="btn btn-outline-success col-sm-2" type="submit">submit</button>
                    </form>
                    <br />
                    <button className="btn btn-outline-success col-sm-12" onClick={()=>this.allDone()}>All Done</button>
                    <ul className="each_todo">
                        {this.state.todos.map((todo, index)=>{
                            return ( 
                            <li className="d-flex justify-content-between align-self-center" key={todo.title}>
                                <input className="align-self-center" onChange={(event)=>this.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} />
                                {/*<span style={{textDecoration: todo.done ? 'line-through' : 'inherit'}}>{todo.title}</span>*/}
                                <span className={todo.done ? "done align-self-center" : "align-self-center"}>{todo.title}</span>
                                <button className="btn btn-outline-dark btn_delete" onClick={()=>{this.removeTodo(index)}}>Remove</button>
                            </li>)
                        })}
                    </ul>
                <Footer />
            </div>
        );
    }
}

export default Todolist; 