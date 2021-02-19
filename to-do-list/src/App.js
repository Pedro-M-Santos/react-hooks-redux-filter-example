import './App.css'
import { Grid, makeStyles } from '@material-ui/core'
import AddItem from './AddItem'
import ListItem from './ListItem'
import { Provider } from 'react-redux'
import { store } from './Redux/store'

function App() {
  const classes = useStyles()
  return (
    <div style={{ width: "100%" }}>
      <Provider store={store}>
        <Grid className={classes.root} container direction="row">
          <AddItem />
        </Grid>
        <Grid className={classes.root} container direction="column">
          <ListItem />
        </Grid>
      </Provider>
    </div>
  )
}

export default App

const useStyles = makeStyles({
  root: {
    margin: "5% auto auto auto",
    justifyContent: "center",
    width: "100%",
    maxWidth: "500px"
  }
})
