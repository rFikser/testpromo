import React, {useEffect} from "react";
import {connect} from "react-redux";
import RecordsList from "../RecordsList/RecordsList";
import {NavLink} from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

const DashBoard = ({recordList}) => {
  useEffect(() => {
    document.title = 'Главная'
  }, [])
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container center">
          <NavLink to={"add-post"}>
            <Fab color={"primary"} className={"fabButton"}>
              <AddIcon/>
            </Fab>
          </NavLink>
        </div>
      </nav>
      <div className="dashboard container">
        <div className="col s12 m6 dashboard__items">
          <RecordsList recordList={recordList}/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return ({
    recordList: state.recordList
  })
}

export default connect(mapStateToProps)(DashBoard);