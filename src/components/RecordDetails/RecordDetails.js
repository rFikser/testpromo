import React, {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import {connect} from "react-redux";

const RecordDetails = ({recordList}) => {

  const {id} = useParams();
  let lookup = {};
  for (let i = 0, len = recordList.length; i < len; i++) {
    lookup[recordList[i].id] = recordList[i];
  }
  console.log(lookup[id])

  useEffect(() => {
    document.title = lookup[id].title
  }, [])

  return (
    <>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <NavLink to={"/"}>
            Back
          </NavLink>
        </div>
      </nav>
      <div className="container section record-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <h1 className="card-title">{lookup[id].title}</h1>
            <div className={'nomargin'}>
              {lookup[id].text}
            </div>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>{lookup[id].author}</div>
            <div>{lookup[id].date}</div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    recordList: state.recordList
  }
}

export default connect(mapStateToProps, null)(RecordDetails);