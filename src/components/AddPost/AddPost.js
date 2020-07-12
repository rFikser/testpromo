import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {addPost} from "../../store/reducers/DashboardReducer";

const AddPost = ({recordList, addPost, history}) => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    document.title = 'Добавить запись'
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    if (text.length == 0) {
      alert('Нужно заполнить все поля')
      return;
    }
    for (let i = 0; i < recordList.length; i++) {
      if (recordList[i].title == title) {
        alert('Такой заголовок уже существует')
        return;
      }
    }

    let date = new Date().toLocaleString()
    addPost(title, author, text, date);
    history.push('/')
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleAuthor = (e) => {
    setAuthor(e.target.value)
  }

  return (
    <>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <NavLink to={"/"}>
            Back
          </NavLink>
        </div>
      </nav>
      <div className={"container add-post"}>
        <form onSubmit={onSubmit} className={"white"}>
          <div className="input-field push-xl6 title">
            <label htmlFor="title">Заголовок</label>
            <input type="text" id={"title"} onChange={handleTitle} required/>
          </div>
          <div className="input-field">
            <label htmlFor="author">Автор</label>
            <input type="text" id={"author"} onChange={handleAuthor} required/>
          </div>
          <div className="input-field">
            <ReactQuill className={"quill"} theme={"snow"} onChange={setText} value={text}/>
          </div>
          <div className="input-field center">
            <button onSubmit={onSubmit} className="btn-floating btn-large waves-effect waves-light red"><i
              className="material-icons">add</i></button>
          </div>
        </form>
      </div>
    </>
  )
}


const mapDispatchToProps = {addPost};
const mapStateToProps = (state) => {
  return {
    recordList: state.recordList,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddPost);