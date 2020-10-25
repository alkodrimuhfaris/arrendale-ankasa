import React, { Component } from "react";
import {
  Container, Table, Button, Col,
  Form,
  Input, Modal, ModalHeader, ModalBody, Label,
  FormGroup
} from "reactstrap";
import { connect } from 'react-redux'

//import style
import "./style/style.css";

//import action
import listAirlineAction from '../../Redux/actions/listAirline'
import detailAirlineAction from '../../Redux/actions/airlineById'
import editAirlineAction from '../../Redux/actions/editAirline'

class index extends Component {
  state = {
    modalOpen: false,
    editingAirline: {
      id: '',
      name: '',
      logo: ''
    }
  }

  async componentDidMount() {
    await this.getDataAirline()
  }

  getDataAirline= async () => {
    await this.props.listingAirline();
  }

  editAirline = async (id) => {
    await this.props.detailAirline(id)
    this.setState({ modalOpen: true, editingAirline: this.props.detailOfAirline.dataAirline }, () => {
      
    });
  }

  handlerChange = (e) => {
    this.setState({
      editingAirline: {
        [e.target.name]: e.target.value
      }
    })
  }

  formSubmit = async (e) => {
    e.preventDefault()
    await this.props.editingDataAirline(this.state.editingAirline.id, {
      id: this.state.editingAirline.id,
      name: this.state.editingAirline.name,
      logo: this.state.editingAirline.logo
    });
    this.setState({modalOpen: false}, async ()=>{
      await this.getDataAirline()
    })
  }

  render() {
    const { isLoading, data, isError, alertMsg } = this.props.listOfAirline
    return (
      <React.Fragment>
        <div className="body pb-5">
          <Container>
            <div className="h3 pt-5">Manage Airline</div>
            <Table className="table-hover">
              <thead className="thead-light">
                <tr>
                  <th>id</th>
                  <th>Airline</th>
                  <th className="d-flex justify-content-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {!isLoading && !isError && data.length !== 0 && data.map(item => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td className="d-flex justify-content-center">
                        <Button className="btn-detail bg-primary mr-3" onClick={() => this.editAirline(item.id)}>detail</Button>
                        <Button className="btn-delete bg-danger">delete</Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
            {isLoading && !isError && (
              <div>Loading</div>
            )}
            {isError && alertMsg !== '' && (
              <div>{alertMsg}</div>
            )}
          </Container>
        </div>
        <Modal isOpen={this.state.modalOpen} className="modal-dialog-centered modal-lg">
          <ModalHeader className="h3">Edit Detail Airline</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.state.formSubmit}>
              <FormGroup row>
                <Label for="input-id" md={2} sm={3}>id</Label>
                <Col>
                  <Input className="input-data" type="number" name="id" value={this.state.editingAirline.id} id="input-id"></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="input-name" md={2} sm={3}>name</Label>
                <Col>
                  <Input className="input-data" type="text" name="name" value={this.state.editingAirline.name} id="input-name" onChange={this.handlerChange}></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={8}></Col>
                <Col md={2}>
                  <Input type="submit" value="submit" className="btn btn-primary" />
                </Col>
                <Col md={2}>
                  <Input className="btn text-white bg-secondary" value="cancel" onClick={() => this.setState({ modalOpen: false })} />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  listOfAirline: state.listAirline,
  detailOfAirline: state.detailAirlineById,
  editDataAirline: state.editAirline
})

const mapDispatchToProps = {
  listingAirline: listAirlineAction.getAirline,
  detailAirline: detailAirlineAction.getAirline,
  editingDataAirline: editAirlineAction.editData
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
