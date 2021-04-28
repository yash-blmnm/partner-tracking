import React from 'react'
import { Modal } from 'react-bootstrap';


function LeftSideModal ({ show, onModalClose }) {

  return (
    <Modal show={show} onHide={onModalClose} animation={true} className="modal left border-0" id="sidebar-left" tabindex="-1" role="dialog">
      <Modal.Header className="border-0">
        <div>
          <span className="fw-light me-4 v-small w-100 d-block">Logged in as </span>
          <strong className="fw-bold">dev@orocorp.in</strong>
        </div>
      </Modal.Header>
      <Modal.Body className="bg-light">
        <ul class="list-group list-group-flush w-100">
          <li class="list-group-item">All Partners <span className="show-details rounded-circle px-1 v-small">{'>'}</span></li>
          <li class="list-group-item">Logout <span className="show-details rounded-circle px-1 v-small">{'>'}</span></li>
        </ul>
      </Modal.Body>
    </Modal>
  )
}

export default LeftSideModal