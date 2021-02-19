import React from 'react'
import { ListItem, ListItemText, Button, TextField, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { delTodo, updateTodo } from '../Redux/actions'


function Items(props) {
    const [editable, setEditable] = React.useState(false)
    const [text, setText] = React.useState("")
    const classes = useStyles()
    let dispatch = useDispatch()
    let { todo } = props

    const handleSave = () =>{
        dispatch(updateTodo({ id: todo.id, name: text }))
        setEditable(editable => !editable)
    }

    return (
        <div>
            <ListItem key={todo.id} className={classes.list}>
                <ListItemText className={classes.toDosList}>
                    {todo.id}
                </ListItemText>
                {editable ?
                    <TextField onChange={e => setText(e.target.value)} id="outlined-basic" label="To Do" variant="outlined" />
                    :
                    <ListItemText className={classes.toDosList}>
                        {todo.name}
                    </ListItemText>}
                <Button 
                    onClick={editable ? () => handleSave() : () => setEditable(editable => !editable)}
                    variant="contained" 
                    color="primary" 
                    className={classes.editButton}>
                    {editable ? "SAVE" : "EDIT"}
                </Button>
                <Button 
                    onClick={editable? () => setEditable(editable => !editable) : () => dispatch(delTodo(todo.id))} 
                    variant="contained" 
                    color="primary" 
                    className={classes.delButton}>
                    {editable ? "CANCEL" : "DELETE"}
                </Button>
            </ListItem>
        </div>
    )
}
export default Items

const useStyles = makeStyles({
    root: {
        margin: "5% 0",
    },
    list: {
        display: "flex",
        flexDirection: "row",
    },
    toDosList: {
        textAlign: "center",
    },
    editButton: {
        backgroundColor: "orange",
        margin: "0 1vw",
    },
    delButton: {
        backgroundColor: "red",
    }
})