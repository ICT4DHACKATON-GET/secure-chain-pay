
import { useState } from 'react';
import TransactionCard from './TransactionCard';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Sample transaction data for demonstration
const sampleTransactions = [
  {
    id: "tx_8273648291",
    date: "Apr 8, 2025",
    amount: "$250.00",
    recipient: "Jane Doe",
    status: "completed" as const
  },
  {
    id: "tx_7362534821",
    date: "Apr 7, 2025",
    amount: "$120.50",
    recipient: "Coffee Shop Inc.",
    status: "completed" as const
  },
  {
    id: "tx_6273648192",
    date: "Apr 6, 2025",
    amount: "$350.00",
    recipient: "Utility Company",
    status: "pending" as const
  },
  {
    id: "tx_5283648193",
    date: "Apr 5, 2025",
    amount: "$75.25",
    recipient: "Online Store",
    status: "failed" as const
  }
];

interface TransactionHistoryProps {
  className?: string;
  initialCount?: number;
}

/**
 * TransactionHistory Component
 * 
 * Displays a list of recent transactions with expandable functionality
 * 
 * @param className - Optional CSS class for styling
 * @param initialCount - Initial number of transactions to display (defaults to 3)
 */
const TransactionHistory = ({ className, initialCount = 3 }: TransactionHistoryProps) => {
  // State to track how many transactions to show
  const [displayCount, setDisplayCount] = useState(initialCount);
  
  // Function to show more transactions
  const handleShowMore = () => {
    setDisplayCount(prev => Math.min(prev + 3, sampleTransactions.length));
  };
  
  // Check if we've reached the maximum number of transactions
  const hasMoreToShow = displayCount < sampleTransactions.length;

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        {/* Additional filters could be added here */}
      </div>
      
      {/* Transaction list */}
      <div className="space-y-3">
        {sampleTransactions.slice(0, displayCount).map((transaction) => (
          <TransactionCard
            key={transaction.id}
            id={transaction.id}
            date={transaction.date}
            amount={transaction.amount}
            recipient={transaction.recipient}
            status={transaction.status}
          />
        ))}
      </div>
      
      {/* Show more button - only displayed if there are more transactions to show */}
      {hasMoreToShow && (
        <div className="mt-4 text-center">
          <Button 
            variant="outline" 
            onClick={handleShowMore}
            className="w-full"
          >
            Show More <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
