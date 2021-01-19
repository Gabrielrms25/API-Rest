import React from 'react';
import UserService from '../services/UserService';
import UserServiceFetch from '../services/UserServiceFetch';

class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

   // componentDidMount(){
   //     UserService.getUsers().then((response) =>{
   //         this.setState({users: response.data})
   //     });
    //}

      componentDidMount(){
          UserServiceFetch.getUsers().then((res) => {
                this.setState({users: res});
          });
      }  


    render (){
        return(
            <div>
                <h1 className= "text-center"> Users list</h1>
                    <table className = "table table-striped">
                        <thead>
                            <tr>
                                <td className="tdData">User Id</td>
                                <td className="tdData">User first Name</td>
                                <td className="tdData">User Last Name</td>
                                <td className="tdData">User Email Id</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user => 
                                    <tr key = {user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                </table>
            </div>
        )
    }
}


export default UserComponent