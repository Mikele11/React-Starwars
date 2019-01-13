import React, { Component } from 'react';
import { withRouter } from "react-router";

class List extends Component {
  
  handleClick = (item) => {
    let index = item.url.substring(item.url.indexOf('people')+7,item.url.length-1);
    this.props.history.push(`/person/${index}`);
  }

  render() {
    return (
      <ul className="listul">
      {
        this.props.items.map((item,index) => 
          <li  
            className="listli"
            onClick={this.handleClick.bind(this,item)}
            key={index}
          >
            {item.name}
          </li>
        )
       }
      </ul>
    )  
  }
}

export default withRouter(List)
