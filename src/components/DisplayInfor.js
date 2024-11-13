import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo1 from './../logo.svg'

//stateless  vs statefull

// class DisplayInfor extends React.Component {
//     // constructor(props) {
//     //     console.log(">>call constructor: 1")
//     //     super(props);
//     //     //babel compiler
//     //     this.state = {
//     //         isShowListUser: true
//     //     }
//     // }
//     // componentDidMount() {
//     //     console.log(">>call me component did mount")
//     //     setTimeout(() => {
//     //         document.title = 'Cuong & fr'
//     //     }, 3000);
//     // }
//     // componentDidUpdate(prevProps, prevState, snapshot) {
//     //     console.log(">>call me component did update", this.props.prevProps)
//     //     if (this.props.listUsers !== prevProps.listUsers) {
//     //         if (this.props.listUsers.length === 5) {
//     //             alert('you got 5 users')
//     //         }
//     //     }
//     // }
//     // handleShowHide = () => {
//     //     this.setState({
//     //         isShowListUser: !this.state.isShowListUser //them ! de show or hide
//     //     })
//     // };
//     render() {
//         console.log(">>call me render")
//         //destructuring array/object
//         const { listUsers } = this.props; //object
//         console.log(listUsers)
//         // const listUsers  = this.props.listUsers;

//         // console.log(this.props)
//         //props =>viet tat la properties ( dich là tài sản)
//         return (
//             <div className="display-infor-container">
//                 {/* <img src={logo1}></img> */}
//                 {/* <div>
//                     <span onClick={() => { this.handleShowHide() }}>

//                         {this.state.isShowListUser === true ? "Hide List User:" : "Show List User:"}
//                     </span>
//                 </div> */}
//                 {true && //{this.state.isShowListUser &&} cái code cũ
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div >My name is {user.name} </div>
//                                     <div>My age is {user.age} </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete </button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props; //object
    const [isShowHideListUser, setShowHideListuser] = useState(true);

    const handleShowHideListUsers = () => {
        setShowHideListuser(!isShowHideListUser);
    }

    // render() {
    // console.log(">>call me render")
    // //destructuring array/object

    // console.log(listUsers)
    // // const listUsers  = this.props.listUsers;

    // // console.log(this.props)
    // //props =>viet tat la properties ( dich là tài sản)
    console.log("call me")
    useEffect(() => {
        if (listUsers.length === 0) {
            alert('me')
        }
        console.log("call me ufeec")
    }, [listUsers]
    );
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUsers()}>
                    {isShowHideListUser === true ? "Hide List users" : "Show List users"}
                </span>
            </div>
            {/* <img src={logo1}></img> */}
            {/* <div>
                    <span onClick={() => { this.handleShowHide() }}>

                        {this.state.isShowListUser === true ? "Hide List User:" : "Show List User:"}
                    </span>
                </div> */}
            {isShowHideListUser && //{this.state.isShowListUser &&} cái code cũ
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div >My name is {user.name} </div>
                                <div>My age is {user.age} </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete </button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}


export default DisplayInfor;