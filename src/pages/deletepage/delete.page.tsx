import React from 'react';
import { Button, Modal } from 'react-bootstrap';

type DeletePage = {
    close: () => void;
    delet: () => void;
    show: boolean;
}
const DeletePage = (props: DeletePage) => {
    return (
        <>
            <Modal show={props.show} onHide={props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete item</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete item</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.close}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={props.delet}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeletePage;