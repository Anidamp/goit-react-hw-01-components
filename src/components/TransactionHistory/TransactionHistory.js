import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';
import './TransactionHistory.css';

export default function TransactionHistory({transactions}) {
    return (
        <table className="transactionHistory">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => (
                    <TransactionHistoryItem
                        key={transaction.id}
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
                ))}
            </tbody>
        </table>
    )
}