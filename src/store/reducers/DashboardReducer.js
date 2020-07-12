import HtmlParser from "react-html-parser";

const ADD_POST = "ADD_POST"


const recordList = [];
const DashboardReducer = (state = recordList, action) => {
  switch (action.type) {
    case ADD_POST :
      return [
        ...state, {
          title: action.title,
          author: action.author,
          text: HtmlParser(action.text),
          date: action.date,
          id: Math.floor(100000 + Math.random() * 900000),
        },
      ]
    default:
      return state
  }
}


export const addPost = (title, author, text, date) => ({
    type: ADD_POST,
    title,
    author,
    text,
    date
  }
)

export default DashboardReducer;