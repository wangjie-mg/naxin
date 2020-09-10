import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';



// import { connect } from 'react-redux';

import main from "./page/main/main.js";
import org from "./page/org/org.js";
import enter from "./page/enter/enter.js";
import review from "./page/review/review.js";
import orgfrom from "./page/orgfrom/orgfrom.js";




class App extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return (
      <Router>
        <Route exact path="/" component={main} />
        <Route exact path="/org" component={org}/>
        <Route exact path="/enter" component={enter}/>
        <Route exact path="/review" component={review}/>
        <Route exact path="/orgfrom" component={orgfrom}/>
      </Router>
    );
  }
  
}
// export default connect(
//   ({user})=>({
//       a:user.a
//   }),
// )(App);
  
export default App;
