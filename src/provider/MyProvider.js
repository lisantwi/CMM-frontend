import MyContext from '../context/MyContext'
import React from 'react'

class MyProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            user: []
        }
    }
  

render(){
    return(
 
        <MyContext.Provider
        value={{
            user: this.state.user,
            updateUser: data => {
                const user = [...this.state.user]
                user = data.user
                this.setState({user})
                localStorage.setItem('user', user)
                localStorage.setItem('token', data.token)

            }
        }}>

        </MyContext.Provider>
    )
}
}


export default MyProvider