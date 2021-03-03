import React, {Component} from 'react';
import {users} from "./User/User";
import UserComponent from "./UserComponent/UserComponent";

class App extends Component {
    render() {
        return (
            <div>
                { users.map((user,index)=>{
                    let clsx = index % 2 ? 'red': 'green';
                    return(
                    <UserComponent
                        item = {user}
                        cls = {clsx}
                        key = {index}/>);
                })
                }
            </div>
        );
    }
}

export default App;
