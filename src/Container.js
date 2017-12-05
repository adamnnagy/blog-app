import React, { Component } from 'react';

class Container extends React.Component {
  render () {
    /* const {post} = {this.props}; */ //not needed yet

    return (


      <div className="header">{this.props.header}
        <div className="date">{new Date().getTime()}</div>
      </div> //this is how you make children

    )
  }
}

export default Container;
