import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components /Membre';

const team = {
    membre1:{
    nom: 'Soufian',
    age:25  
  },

  membre2:{
    nom: 'Sam',
    age:24
  },
  membre3:{
    nom: 'Oliver',
    age:25
  },
  membre4:{
    nom: 'Antho',
    age:23
  },
  membre5:{
    nom: 'Fouz',
    age:35
  }
  }
class App extends Component {
  state = {
    team
  }

  handleClick = () => {
    const team = {...this.state.team}
    team.membre1.age += 1
    this.setState ({team})
  }

  handleChange = (event) => {
    const team = {...this.state.team}
    const nom = event.target.value 
    team.membre3.nom = nom
    this.setState ({team})
  }

  render() {
    const {team} = this.state
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Voici la liste des membres du groupe Gyoto</p>
          <Membre nom ={team.membre1.nom}
                  age ={team.membre1.age}/>
          <Membre age ={team.membre2.age}
                  nom ={team.membre2.nom}/>
          <Membre age ={team.membre3.age}
                  nom ={team.membre3.nom} 
                  children=''>Joue a fortnite
          </Membre>
          <Membre age ={team.membre4.age}
                  nom ={team.membre4.nom}/>
          <Membre age ={team.membre5.age}
                  nom ={team.membre5.nom}/> 
          <button onClick={this.handleClick}> Ajouter 1an</button> 
          <input value={team.membre3.nom}
           onChange={this.handleChange} type="text"/>
      </div>
    ); 
  }
}

export default App;
