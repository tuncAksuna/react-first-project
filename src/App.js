import { Component } from 'react/cjs/react.production.min';
import './App.css';
import AddUser from './components/AddUser';
import Users from './components/Users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Cem Tunç AKSUNA",
          email: "aksuna.tunc@gmail.com",
        },
        {
          id: 2,
          name: "Selvi AKSUNA",
          email: "aksuna.selvi@gmail.com",
        },
        {
          id: 3,
          name: "Güvenç AKSUNA",
          email: "aksuna.guvenc@gmail.com",
        },
      ]
    }
  }

  render() {
    const title = "User app";

    return (
      <div className='container'>
        <h5>{title}</h5>
        <hr />
        <AddUser />
        <hr />
        <Users users={this.state.users} />
      </div>
    )
  }
}

export default App;