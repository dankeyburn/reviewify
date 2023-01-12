import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function AlbumModal(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        See Album
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Album Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {/* Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem! */}
            {props.album_id}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}
// {
//   showModal ? (
//     <Modal
//       showModal={showModal}
//       onHide={() => showModal(false)}
//       dialogClassName="modal-90w"
//       aria-labelledby="example-custom-modal-styling-title"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="example-custom-modal-styling-title">
//           Custom Modal Styling
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>
//           Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
//           commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
//           atque a dolores quisquam quisquam adipisci possimus laboriosam.
//           Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos
//           quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro
//           quo magni incidunt dolore amet atque facilis ipsum deleniti rem!
//         </p>
//       </Modal.Body>
//     </Modal>
//   ) : (
//     <div>Pewp</div>
//   );
// }
