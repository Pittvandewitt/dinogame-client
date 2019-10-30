import React from 'react'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  button: {
    width: 'auto',
  }
}))

export default function AppBarComponent({ props }) {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dino Game
          </Typography>
          {props.player.jwt && <Button
            className={classes.button}
            onClick={props.logout}
            color="inherit">Logout</Button>}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </div>
  )
}
