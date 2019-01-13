import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './List.js'

class App extends Component {
  state = {
    people:[],
    items:[],
    activePage: 1
  }

  componentDidMount() {
    fetch(`https://swapi.co/api/people/?page=${this.state.activePage}`,{ mode: 'cors' })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            people: result.results,
            items: result.results
          });
          this.props.history.push('/');
        })
      .catch((error) => {
        console.log('err',error)	  
      });  
  }

  filterList = (event) => {
      let updatedList = [];
      const {people} = this.state
      updatedList = people;
      updatedList = updatedList.filter(function(item){
        return item.name.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      this.setState({items: updatedList});
  }

  prevBtn = () => {  
    let {activePage} = this.state;
    if ( activePage > 1 ) {
      this.setState({activePage: activePage - 1});
      fetch(`https://swapi.co/api/people/?page=${activePage-1}`,{ mode: 'cors' })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              people: result.results,
              items: result.results
            });
          })
        .catch((error) => {
          console.log('err',error)	  
        }); 
    }

  }
  nextBtn = () => {    
    const {activePage} = this.state;
    if ( activePage < 9 ) {
      this.setState({activePage: activePage + 1});
      fetch(`https://swapi.co/api/people/?page=${activePage+1}`,{ mode: 'cors' })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              people: result.results,
              items: result.results
            });
          })
        .catch((error) => {
          console.log('err',error)	  
        }); 
    }
    
  }

  render() {
    return (
      <div>
        <div className="mount-point">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <div>
          { this.state.activePage === 1 ?
          <button className="btn-primary prev dis" disabled>Prev</button> :<button onClick={this.prevBtn} className="btn-primary prev">Prev</button>
          }
          <span>{this.state.activePage}</span>
          <button onClick={this.nextBtn} className="btn-primary next">Next</button>
        </div>
        <List 
          activePage={this.state.activePage} 
          items={this.state.items}/>
      </div>
      </div>
    );
  }
}

export default App;
