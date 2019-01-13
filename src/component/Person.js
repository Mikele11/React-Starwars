import React, { Component } from 'react';

class Person extends Component {
  state = {
    person: {
      name: '',
      birth_year: '',
      created: '',
      edited: '',
      eye_color: '',
      films: [],
      gender: '',
      hair_color: '',
      height: 0,
      homeworld: '',
      mass: 0,
      skin_color: '',
      species: [],
      starships: [],
      vehicles: [],
    }
  }

  componentDidMount() {
    var loc = window.location.pathname;
    var revloc = loc.split("").reverse().join("");
    var ind = revloc.substring(0,revloc.indexOf('/'));
    ind = ind.split("").reverse().join("");
    fetch(`https://swapi.co/api/people/${ind}/`,{ mode: 'cors' })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            person: result
          });
        })
      .catch((error) => {
        console.log('err',error)	  
      });  
  }
  
  render() {
    const { birth_year, created, edited, eye_color, films, gender, hair_color, height, homeworld, mass, name, skin_color, species, starships, vehicles } = this.state.person;
    return (
      <div className="personTable">
        <div className="personRow">
          <div className="personCell">
            Name:
          </div>
          <div className="personCell">
            {name}
          </div>
        </div>
        <div className="personRow">
          <div className="personCell">
            Gender:
          </div>
          <div className="personCell">
            {gender}
          </div>
        </div>

        <div className="personRow">
          <div className="personCell">
            Height:
          </div>
          <div className="personCell">
            {height}
          </div>
        </div>

        <div className="personRow">
          <div className="personCell">
            Mass:
          </div>
          <div className="personCell">
            {mass}
          </div>
        </div>

        <div className="personRow">
          <div className="personCell">
            Birth year:
          </div>
          <div className="personCell">
            {birth_year}
          </div>
        </div>

        <div className="personRow">
          <div className="personCell">
            Skin color:
          </div>
          <div className="personCell">
            {skin_color}
          </div>
        </div>

        <div className="personRow">
          <div className="personCell">
            Eye color:
          </div>
          <div className="personCell">
            {eye_color}
          </div>
        </div>

        <div className="personRow">
          <div className="personCell">
            Hair color:
          </div>
          <div className="personCell">
            {hair_color}
          </div>
        </div>

        <div className="personRow">
          <div className="personCell">
            Homeworld:
          </div>
          <div className="personCell">
            {homeworld}
          </div>
        </div>

        <div className="personRow">
          <div className="personCell">
            Created:
          </div>
          <div className="personCell">
            {created}
          </div>
        </div>

        <div className="personRow">
          <div className="personCell">
            Edited:
          </div>
          <div className="personCell">
            {edited}
          </div>
        </div>

        <div className="personRow">
          <div className="personCell">
            Films:
          </div>
          <div className="personCell">
            {
              films.map((item,index) => 
                <li  
                  key={index}
                >
                  {item}
                </li>
            )}
          </div>
        </div>
        <div className="personRow">
          <div className="personCell">
            Species:
          </div>
          <div className="personCell">
            {
              species.map((item,index) => 
                <li  
                  key={index}
                >
                  {item}
                </li>
            )}
          </div>
        </div>
        <div className="personRow">
          <div className="personCell">
            Starships:
          </div>
          <div className="personCell">
            {
              starships.map((item,index) => 
                <li  
                  key={index}
                >
                  {item}
                </li>
            )}          
          </div>
        </div>
        <div className="personRow">
          <div className="personCell">
            Vehicles:
          </div>
          <div className="personCell">
            {
              vehicles.map((item,index) => 
                <li  
                  key={index}
                >
                  {item}
                </li>
            )}            
          </div>
        </div>
      </div>
    )  
  }
}
export default Person;