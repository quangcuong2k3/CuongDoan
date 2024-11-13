//class component
//function component

import React, { useState } from "react";
import AddUserinfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: 'Cuong deptrai', age: '30' },
//             { id: 2, name: 'Cuong ', age: '23' },
//             { id: 3, name: 'sss', age: '3' },
//         ]
//     }
//     handleAddNewUser = (userObj) => {
//         console.log(">>>check data", userObj)
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         // let listUsersClone = [...this.state.listUsers] //cach 1 ( nên dùng)

//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })

//     }
//     //JSX
//     render() {
//         //DRY : dont repeat yourself
//         return (
//             <>
//                 <div className="a">
//                     <AddUserinfor
//                         AddUser={this.handleAddNewUser}>
//                     </AddUserinfor>
//                     <br /><br />
//                     <DisplayInfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>
//                 <div className="b"></div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: 'Cuong deptrai', age: '30' },
            { id: 2, name: 'Cuong ', age: '23' },
            { id: 3, name: 'sss', age: '3' },
        ]
    )

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])

    }
    const handleDeleteUser = (userId) => {
        // let listUsersClone = [...this.state.listUsers] //cach 1 ( nên dùng)

        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone);
    }
    return (
        <>
            <br />
            <div className="a">
                <AddUserinfor
                    AddUser={handleAddNewUser}>
                </AddUserinfor>
                <br /><br />
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="b"></div>
        </>
    )
}
export default MyComponent
