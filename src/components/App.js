import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import MainList from "./DashBoard/DashBoard";
import RecordDetails from "./RecordDetails/RecordDetails";
import AddPost from "./AddPost/AddPost";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={MainList}/>
        <Route path={"/add-post"} exact component={AddPost}/>
        <Route path={"/post/:id"} exact component={RecordDetails}/>
      </Switch>
    </div>
  );
}

export default App;
