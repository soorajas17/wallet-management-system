import React from 'react'

function TransactionList({ transaction }) {

  return (
    <>
      <div className="container mt-5">
        <h3 className="mb-3">Transaction History</h3>
        <div className="card shadow p-3">
          {
            transaction.length === 0 ? (
              <p className='text-muted'>No transactions yet</p>
            ) : (
              transaction.map((item, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                  <div>
                    <h6 className="mb-0  fw-bold">{item.type}</h6>
                    <small className="text-muted">{new Date(item.date).toLocaleString()}</small>
                  </div>
                  <p className={item.type === "deposit" ? "text-success" : "text-danger"}> {item.type === "deposit" ? "+" : "-"} $ {item.amount}</p>
                </div>
              ))
            )
          }
        </div>
      </div>
    </>
  )
}

export default TransactionList
