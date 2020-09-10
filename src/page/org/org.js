import React from 'react';
import './org.css';
import { connect } from 'react-redux';

class Org extends React.Component{
     
  constructor(props){
      super(props);
      this.state={ }
  }

  render(){
      console.log(this.props);
    return(
        <> 
            <h1>{this.props.a}</h1>
        </>
    )
  }

}

export default connect(
({org})=>({
    a:org.a
})

)(Org);
// export default Org
