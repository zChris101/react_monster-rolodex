import { Component } from 'react';
import './App.css';
import Cardlist from './components/card-list/cardlist.component';
import Searchbox from './components/search-bar/searchbox.component';


class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    })
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

      
    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <Searchbox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className='monster-search-box'
        />
        <Cardlist
          monsters={filteredMonsters}
        />
      </div>
    );
  }


}

export default App;