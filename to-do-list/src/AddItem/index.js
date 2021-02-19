import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {addTodo} from '../Redux/actions'

function AddItem() {
    const [text, setText] = React.useState("")
    let dispatch = useDispatch()
    return (
        <div style = {{display:"flex"}}>
            <TextField onChange={e=>setText(e.target.value)} id="outlined-basic" label="To Do" variant="outlined" />
            <Button onClick={()=>dispatch(addTodo({name:text}))} variant="contained" color="primary">
                Add
            </Button>
        </div>
    )
}

export default AddItem;