import React from "react";

export default function AddCardForm(props){

  function clicked(e){
    e.preventDefault();
    props.cardAdded("hi mon");
  }
    
    return (
        <form onSubmit={clicked}>
          <label>
            Add new card {props.message}
            <input type="text" />
            <button >Save</button>
          </label>
        </form>
    )
}
