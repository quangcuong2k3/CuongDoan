import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         address: 'hcm',
//         age: ''
//     };

//     // handleclick(event) {
//     //     // console.log("click me pls")
//     //     // console.log(event)
//     //     console.log("my name is:", this.state.name)

//     //     //ham cap nhat state
//     //     this.setState({
//     //         name: 'cuong 2',
//     //         age: Math.floor((Math.random() * 100) + 1)
//     //     });
//     //     // this.setState({
//     //     //     age: Math.floor((Math.random() * 100) + 1)
//     //     // });
//     // }

//     // handleOnMouseOver(event) {
//     //     console.log(event.pageX)
//     // }
//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleOnChangeAge = (event) => {

//         //bad code (ko nen viet)
//         //this.state.age =event.target.value

//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault(); //ngan chan reload trang
//         console.log(this.state)
//         this.props.AddUser({
//             id: Math.floor((Math.random()) * 100) + 1 + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and I'm {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name</label>
//                     <input
//                         value={this.state.name} //de react quanli ten khi dang nhap vo trang
//                         type="text"
//                         onChange={(event) => this.handleOnChangeInput(event)}
//                     />
//                     <button>Submit</button>

//                     <label>Your age</label>
//                     <input
//                         value={this.state.age} //de react quanli ten khi dang nhap vo trang
//                         type="text"
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }

// }


const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('binhduong');
    const [age, setAge] = useState('');


    const handleOnChangeInput = (event) => {
        setName(event.target.value)
        // this.setState({
        //     name: event.target.value
        // })
    }
    const handleOnChangeAge = (event) => {

        //bad code (ko nen viet)
        //this.state.age =event.target.value
        setAge(event.target.value)

    }
    const handleOnSubmit = (event) => {
        event.preventDefault(); //ngan chan reload trang

        props.handleAddNewUser({
            id: Math.floor((Math.random()) * 100) + 1 + '-random',
            name: name,
            age: age
        });
    }
    return (
        <div>
            My name is {name} and I'm {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name</label>
                <input
                    value={name} //de react quanli ten khi dang nhap vo trang
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}
                />
                <button>Submit</button>

                <label>Your age</label>
                <input
                    value={age} //de react quanli ten khi dang nhap vo trang
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfor;