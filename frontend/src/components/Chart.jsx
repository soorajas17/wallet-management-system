import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

function Chart({ transaction }) {

  // calculate totals
  const totalDeposit = transaction
    .filter(item => item.type === "deposit")
    .reduce((acc, curr) => acc + curr.amount, 0)

  const totalWithdraw = transaction
    .filter(item => item.type === "withdraw")
    .reduce((acc, curr) => acc + curr.amount, 0)

  const data = [
    { name: "Deposit", amount: totalDeposit },
    { name: "Withdraw", amount: totalWithdraw }
  ]

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-3">Transaction Chart</h3>

      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" />
      </BarChart>
    </div>
  )
}

export default Chart