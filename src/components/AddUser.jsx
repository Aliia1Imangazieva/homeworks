import React from "react"

class AddUser extends React.Component {
    userAdd ={}
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            email: ""
        }
    }


    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({ name: e.target.value })} />
                <input placeholder="Возраст" onChange={(e) => this.setState({ age: e.target.value })} />
                <input placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd ={
                        name: this.state.name,
                        age: this.state.age,
                        email: this.state.email,
                    }
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }
                } >Добавить</button>
            </form>
        )
    }
}


export default AddUser