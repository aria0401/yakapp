import React, {useState} from "react";
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

export default function AddCardForm(props){
    const [task, setTask] = useState("");
    function clicked(e){
        e.preventDefault();
        props.cardAdded(task)
    }
    return (
        <form onSubmit={clicked}>
          
            
            <Input name="task" type="text" value={task} onInput={e=>setTask(e.target.value)} label="Input 1" floatingLabel={true} />
            <Button variant="raised" color="accent">Save</Button>
          
        </form>
    )
}
