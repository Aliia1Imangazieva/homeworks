import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import './components/SCSS/main.css';
import AddUser from "./components/AddUser";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

        users: [
        {
          id: 1,
          name: 'Aliia',
          age: 23,
          email: 'imang@icloud.com'
        },
        {
          id: 2,
          name: 'Azamat',
          age: 43,
          email: 'aza@gmail.com'
        },
        {
          id: 3,
          name: 'Elya',
          age: 18,
          email: 'elya@gmail.com'
        },
        {
          id: 4,
          name: 'Gera',
          age: 34,
          email: 'gera@gmail.com'
        }
      ]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }
  render() {
    return (<div>
      <Header title="Список пользователей" />
      <main>
        <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
      </main>
      <aside>
        <AddUser onAdd={this.addUser} />
      </aside>
    </div>)
  }

  deleteUser(id){
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }
  editUser(user) {
   let allUsers = this.state.users
   allUsers[user.id - 1] = user

   this.setState({users: []}, () => { // ochistka
      this.setState({users: [...allUsers]})
   })
  }

  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, { id, ...user }] })
  }


}
export default App