import React, { useEffect, useState } from 'react'
import Walletcard from '../components/Walletcard'
import TransactionList from '../components/TransactionList'
import { addDepositApi, getTransactionsApi, withDrawApi } from '../service/allApi'
import Chart from '../components/Chart'
import Header from '../components/Header'

function Dashboard() {
  const [balance, setBalance] = useState(1000)
  const [transaction, setTransactions] = useState([])

  // 
  const handleDeposit = async (amount) => {
    try {
      const res = await addDepositApi({ amount: Number(amount) })
      if (res.status === 200) {
        setBalance(res.data.balance)
        setTransactions(res.data.transaction)
      }
    } catch (error) {
      console.log(error);
    }
  }

  // 
  const handleWithdraw = async (amount) => {
    try {
      const res = await withDrawApi({ amount: Number(amount) })
      if (res.status === 200) {
        setBalance(res.data.balance)
        setTransactions(res.data.transaction)
      }
    } catch (error) {
      alert(error.response?.data?.message || "Error")
    }
  }

  // 
  const fetchTransactions = async () => {
    const res = await getTransactionsApi()
    if (res.status === 200) {
      setTransactions(res.data)
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])


  return (
    <>
    <Header/>
      <Walletcard onDeposit={handleDeposit} balance={balance} onWithdraw={handleWithdraw} />
      <div className="row  d-flex justiy-content-center align-items-center">
        <div className="col-4">
          <Chart transaction={transaction} />
        </div>
        <div className="col-8">
          <TransactionList transaction={transaction} />
        </div>
      </div>

    </>
  )
}

export default Dashboard
