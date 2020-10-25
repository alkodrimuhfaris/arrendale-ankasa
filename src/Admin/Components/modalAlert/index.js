import React from 'react'
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
import http from '../../Helper/http'
import qs from 'querystring'

export default function index() {
    const [modal, setModal] = React.useState(false)
    const [alert, setAlert] = React.useState('')

    const toggleModal = ()=>setModal(!modal)

    const saveChange = async () => {
        const body = {

        }
        const {data} = await http.patch('', qs.stringify(body))
        setAlert(data.message)
        toggleModal()

    }

    return (
        <Modal isOpen={modal} toggle={toggleModal}>
            <ModalBody>
                {alert}
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggleModal}>OK</Button>
            </ModalFooter>
        </Modal>
    )
}
