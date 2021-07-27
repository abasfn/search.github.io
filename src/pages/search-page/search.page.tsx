import React from 'react';
import { Button, Modal } from 'react-bootstrap';

type SearchPageType = {
    close: () => void;
    delet: () => void;
    onChange: (e: any) => void;
    show: boolean;
    value?: string;
    inputButton?: () => void;
}
const SearchPage = (props: SearchPageType) => {



    return (
        <>
            <Modal show={props.show} onHide={props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Search Page item</Modal.Title>
                </Modal.Header>
                <Modal.Body><input value={props.value} onChange={props.onChange} className="input-search" /> <button onClick={props.inputButton} className="nav"></button></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.close}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={props.delet}>
                        Search
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SearchPage;