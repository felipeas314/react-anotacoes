import React, { Component } from 'react';

import Table from '@material-ui/core/Table';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { Body, Form } from './style';

class ListAnatocoes extends Component {

  state = {
    novaAnotacao: '',
    anotacoes: [
      "Pagar a luz",
      "Colocar comiga para o gato"
    ]
  }

  componentDidMount() {
    console.log("Inicio do componente")
  }

  handleInputChange = e => {
    this.setState({ novaAnotacao: e.target.value });
    console.log(this.state.novaAnotacao);
  }

  handleSubmit = e => {
    console.log('submit');
    e.preventDefault();
    this.setState({
      anotacoes: [...this.state.anotacoes, this.state.novaAnotacao],
      novaAnotacao: ''
    })
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <TextField
            id="nome"
            label="Anotação"
            value={this.state.novaAnotacao}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <Button type="submit" color="primary" >
            Salva
          </Button>
        </Form>
        <Body>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Anotações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.anotacoes.map(anotacao => (
                  <TableRow key={anotacao}>
                    <TableCell component="th" scope="row">
                      {anotacao}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Body>
      </>
    )
  };
}

export default ListAnatocoes;