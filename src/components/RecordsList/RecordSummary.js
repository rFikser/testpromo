import React from "react";

const RecordSummary = ({record}) => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 summary">
        <div className="card-content grey-text text-darken-3 card-summary">
          <span className="card-title">{record.title}</span>
          <p>Автор: {record.author}</p>
          <p className="grey-text">{record.date}</p>
        </div>
      </div>
    </div>
  )
}

export default RecordSummary;