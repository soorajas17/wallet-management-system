
let balance = 1000
let transaction = []

exports.depositController = (req, res) => {
    try {
        const { amount } = req.body
        if (!amount || amount <= 0) {
            return res.status(400).json({ message: "Invalid amount" })
        }
        balance += amount;
        transaction.push({
            type: "deposit", amount, date: new Date()
        })
        res.status(200).json({
            message: "Deposite successfull", balance, transaction
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in deposit", error: error.message,
        })
    }
}

// withdraw
exports.withdrawController = (req, res) => {
    try {
        const { amount } = req.body
        if (!amount || amount <= 0) {
            return res.status(400).json({ message: "Invalid amount" })
        }
        if (amount > balance) {
            return res.status(400).json({ message: "Insufficient balance" })
        }
        balance -= amount
        transaction.push({
            type: "withdraw",
            amount,
            date: new Date()
        })
        res.status(200).json({
            message: "Withdraw successful",
            balance,
            transaction
        })
    } catch (error) {
        res.status(500).json({ message: "Error in withdraw", error: error.message })

    }
}

// 
exports.getTransactions = (req, res) => {
    try {
        res.status(200).json(transaction)
    } catch (error) {
        res.status(500).json(error)
    }

}