import React, {useState, useEffect, useRef} from "react";

import "./NewTaskInput.css";

function NewTaskInput(props) {
  const [input, setInput] = useState (props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  });
  const setChange = e => {
    setInput(e.target.value)
  }
  const setSubmit = e => {
    e.preventDefault();


    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput('');
  }

  return (
      <form className= "NewTaskInput" onSubmit={setSubmit} >
        {props.edit ? (
        <>
        <input
          placeholder="Edit your changes"
          classname="inputfield"
          value={input}
          type="text"
          name={'text'}
          onChange={setChange}
          ref={inputRef}
        />
        <button className="push">
          Update
        </button>
        </>
        ) :
        (
          <>
        <input
          placeholder="What do you want to do?"
          classname="inputfield"
          value={input}
          type="text"
          name={'text'}
          onChange={setChange}
          ref={inputRef}
        />
        <button className="push">
          Add a Todo
        </button>
        </>
        )}
      </form>
  );
}

export default NewTaskInput;
