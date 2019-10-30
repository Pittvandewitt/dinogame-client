import React from 'react'
import { Button, TextField, Container } from '@material-ui/core'

export default function LoginForm(props) {
  return <Container maxWidth="xs">
    <form onSubmit={props.onSubmit}>
      <TextField
        name="nickname"
        type="text"
        onChange={props.onChange}
        value={props.state.nickname}
        placeholder='Nickname'
        variant="outlined"
        margin="normal"
        required
        fullWidth />
      <TextField
        name="password"
        type="password"
        onChange={props.onChange}
        value={props.state.password}
        placeholder='Password'
        variant="outlined"
        margin="normal"
        error={props.player.error}
        required
        fullWidth />
      <Button type="submit"
        fullWidth
        variant="contained"
        color="primary">Play!</Button>
    </form>
  </Container>
}
