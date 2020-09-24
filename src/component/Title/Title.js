import React from 'react';
import './Title.css';

class Tiltle extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){

    return(
        <>
        <div className="list-title"><span className="list-title-span" style={{background:this.props.color}}></span>{this.props.name}</div>
        </>
    )
  }

}

export default Tiltle;
