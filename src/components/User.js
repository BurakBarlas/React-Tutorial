import React, { Component } from 'react'
import propTypes from 'prop-types'
import UserConsumer from '../context'

class User extends Component {
    state = {
        isVisible : false
    }
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         isVisible : false
    //     }
    // }
 
    onClickEvent = (e) =>{
        this.setState({
            isVisible : !this.state.isVisible
        })    
    }

    onDeleteUser = (dispatch,e) => {
        const {id} = this.props;
        dispatch({type : "DELETE_USER",payload:id});
    }
    render() {
        const {name, department, income} = this.props;
        const {isVisible} =this.state;
        return (<UserConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className = "col-md-8 mb-4">
                            <div className="card">
                                <div className="card-header.d-flex.justify-content-between">
                                    <h1 className = "d-inlene" onClick ={this.onClickEvent.bind(this,34)}>{name}</h1>
                                    <i onClick = {this.onDeleteUser.bind(this,dispatch)}></i>
                                    <i className="gg-trash" style = {{cursor : "pointer"}}></i> 
                                </div>
                                {
                                    isVisible ? <div className = "card-body">

                                    <p className = "card-text"> Department : {department}</p>
                                    <p className = "card-text"> Salary : {income}</p>
                                    </div> : null
                                }
                                
                        </div>
                        </div>
                    )
                }
            }

        </UserConsumer>)
            
        
    }
}
User.defaultPropTypes = {
    name : "default",
    department : "Default",
    income : "Null"    
}
User.propTypes = {
    name : propTypes.string.isRequired,
    department : propTypes.string.isRequired,
    income : propTypes.string.isRequired,
    //id : propTypes.number.isRequired
}

export default User;
