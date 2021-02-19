import React from 'react'
import { List, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Items from './items'

function ListItems() {
  const classes = useStyles()
  let todos = useSelector(state => state)
  console.log(todos)
  return (
    <div style={{ width: "100%" }}>
      <List component="nav" aria-label="main mailbox folders" className={classes.root}>
        {todos.map((todo) => <Items todo={todo}/>)}
      </List>
    </div>
  )
}

export default ListItems

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