import React, { Component } from 'react'
import propTypes from 'prop-types'

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
    render() {
        const {name, department, income} = this.props;
        const {isVisible} =this.state;
        return (
            <div className = "col-md-8 mb-4">
               <div className="card">
                   <div className="card-header.d-flex.justify-content-between">
                        <h1 className = "d-inlene" onClick ={this.onClickEvent.bind(this,34)}>{name}</h1>
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
User.defaultPropTypes = {
    name : "default",
    department : "Default",
    income : "Null"
}
User.propTypes = {
    name : propTypes.string.isRequired,
    department : propTypes.string.isRequired,
    income : propTypes.string.isRequired
}

export default User;
