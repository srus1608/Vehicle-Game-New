import React from 'react'

function DeleteAlert(props) {
  return (
    <>
        <div>
            {props.message}
        </div>
        <button className="button red-btn" onClick={props.delete}>Yes</button>
        <button className="button green-btn">Cancel</button>
    </>
  )
}

export default DeleteAlert