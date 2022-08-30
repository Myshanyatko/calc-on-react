import React from "react";

const MyButton = (props)=> {
    return(<button className="item" onClick={e=>{props.setValue(props.val)}}>{props.val}</button>)
}
export default MyButton

