import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component{

constructor(props)
{
    super(props)
    this.state = {
        greeting: null,
    }
}
componentDidMount(){
    UserService.getGreeting().then((response) =>  {
        console.log({response});
        this.setState({greeting:response.data});
     });
    }
render() {
    return(
        <div>
            <h1 className ="text Centre"> Users List</h1>
            <table className = "table table-striped">
    <thead>
        <tr>
            <td>User Id</td>
            <td>user First Name </td>
            <td>User Last Name</td>
            <td>User Email Id</td>
        </tr>
    </thead>
        <tbody> 
                <tr>
                    <td>{this.state.greeting}</td>
                </tr>
        </tbody>
</table>



        </div>
    )
    }
}

export default UserComponent;