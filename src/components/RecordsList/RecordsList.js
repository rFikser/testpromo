import React from "react";
import RecordSummary from "./RecordSummary";
import {NavLink} from "react-router-dom";

const RecordsList = ({recordList}) => {
  return (
    <div className="record-list section s12">
      {
        recordList.map(record => {
          return (
            <NavLink to={`/post/${record.id}`} key={record.id}>
              <RecordSummary record={record}/>
            </NavLink>
          )
        })
      }
    </div>
  )
}

export default RecordsList;