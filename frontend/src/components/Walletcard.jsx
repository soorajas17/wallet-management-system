import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Walletcard({ onDeposit, balance, onWithdraw }) {

    const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("")
    const handleClose = () => setShow(false)

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div>
                        <div className="card shadow p-5 text-center">
                            <h3 className="text-muted">Total Balance</h3>
                            <h1 className="fw-bold text-success">${balance}</h1>
                            <div className="d-flex justify-content-around mt-4">
                                <button onClick={() => {
                                    setType("deposit")
                                    setShow(true)
                                }}
                                    className="btn btn-success" style={{ width: "30%" }} >
                                    + Deposit
                                </button>
                                <button onClick={() => {
                                    setType("withdraw")
                                    setShow(true)
                                }} className="btn btn-danger" style={{ width: "30%" }}>
                                    - Withdraw
                                </button>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{type === "deposit" ? "Deposit Amount" : "Withdraw Amount"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="number" className='form-control' placeholder='Enter amount' onChange={(e) => setAmount(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant={type === "deposit" ? "success" : "danger"} onClick={() => {
                        if (type === "deposit") {
                            onDeposit(amount)
                        } else {
                            onWithdraw(amount)
                        }
                        handleClose()
                    }}>
                        {type === "deposit" ? "Deposit" : "Withdraw"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Walletcard