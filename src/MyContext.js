
import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
const MyContext = React.createContext();


  class MyContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            clients:[],
            options: {}
        }
    }

    componentDidMount() {
        
    }

    // getTodos = () => {
    //     return todoAxios.get("/api/todo")
    //         .then(response => {
    //             this.setState({ todos: response.data });
    //             return response;
    //         })
    // }

    getClients = () => {
        fetch('http://localhost:3000/api/v1/customers',{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(resp => resp.json())
        .then(customers => {
            this.setState({
                clients: customers
            })

            const options = this.state.clients.map(c=>{
                return {
                    key: c.id,
                    text:c.company,
                    value: c.company
                }
            })
            this.setState({
                options:options
            })
        })  
      
    }

    // addTodo = (newTodo) => {
    //     return todoAxios.post("/api/todo/", newTodo)
    //         .then(response => {
    //             this.setState(prevState => {
    //                 return { todos: [...prevState.todos, response.data] }
    //             });
    //             return response;
    //         })
    // }

    // editTodo = (todoId, todo) => {
    //     return todoAxios.put(`/api/todo/${todoId}`, todo)
    //         .then(response => {
    //             this.setState(prevState => {
    //                 const updatedTodos = prevState.todos.map(todo => {
    //                     return todo._id === response.data._id ? response.data : todo
    //                 })
    //                 return { todos: updatedTodos }
    //             })
    //             return response;
    //         })
    // }

    // deleteTodo = (todoId) => {
    //     return todoAxios.delete(`/api/todo/${todoId}`)
    //         .then(response => {
    //             this.setState(prevState => {
    //                 const updatedTodos = prevState.todos.filter(todo => {
    //                     return todo._id !== todoId
    //                 })
    //                 return { todos: updatedTodos }
    //             })
    //             return response;
    //         })
    // }

    signup = (userInfo) => {
        const {username, email, password} = userInfo
        fetch(`http://localhost:3000/api/v1/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              user:{
                  username: username,
                  password: password,
                  email:email
                }
            })
        }).then(resp => resp.json())
        .then(data =>{
            if(data.jwt){
              localStorage.setItem("token", data.jwt)
              localStorage.setItem("user", JSON.stringify(data.user))
              this.setState({
                  user: data.user,
                  token: data.jwt
              })
      
            } else{
               alert("Signup Unsuccessful")
            }

           
        })
      
    }

    login = (credentials) => {
        const {username, email, password} = credentials
        fetch(`http://localhost:3000/api/v1/login`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user:{
            username: username,
            password: password
          }
      })
  }).then(resp => resp.json())
  .then(data =>{
      if(data.jwt){
        localStorage.setItem("token", data.jwt)
        localStorage.setItem("user", JSON.stringify(data.user))
        this.setState({
            user: data.user,
            token: data.jwt
        })
       

      } else{
         alert("Incorrect username or password")
      }
      this.props.history.push('/projects')
      
  })
  
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            todos: [],
            user: {},
            token: ""
        })
        alert('you have succesfully logged out')
        this.props.history.push('/')
      
       
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    getClients: this.getClients,
                    addTodo: this.addTodo,
                    editTodo: this.editTodo,
                    deleteTodo: this.deleteTodo,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    ...this.state
                }}
            >

                {this.props.children}

            </MyContext.Provider>
        )
    }
}

export const withContext = Component => {
    return props => {
        return (
            <MyContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </MyContext.Consumer>
        )
    }
}

export default withRouter(MyContextProvider)