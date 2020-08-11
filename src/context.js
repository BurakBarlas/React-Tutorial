import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state,action) => {
    switch(action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
            default:
                return state
    }
}

export  class UserProvider extends Component {
    state = {

        users: [
          {
            id : 1,
            name : "Burak Barlas",
            department : "CS:go",
            income : "1000"
          },
          {
            id : 2,
            name : "berkay Barlas",
            department : "CS",
            income : "1234"
          },
          {
            id : 3,
            name : "nihat Uzun",
            department : "salaryman",
            income : "5312"
          }
        ],
        dispatch : action => { 
            this.setState(state => reducer(state,action))
        }
      }
    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;