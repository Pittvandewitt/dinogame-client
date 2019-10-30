import React from 'react'
import {
  Container, Table, TableBody, TableCell, TableHead, TableRow
} from '@material-ui/core'

export default function Score(props) {
  return <Container maxWidth="xs">
    <h3 style={{ textAlign: 'center' }}>Top 5 players past 24h:</h3>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Position</TableCell>
          <TableCell>Player</TableCell>
          <TableCell>Score</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.scores.map((row, index) => <TableRow key={row.id}>
          <TableCell component="th" scope="row">{index + 1}</TableCell>
          <TableCell>{row.player.nickname}</TableCell>
          <TableCell>{row.score}</TableCell>
        </TableRow>)}
      </TableBody>
    </Table>
  </Container>
}
