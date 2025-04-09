
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, AlertCircle, CheckCircle2, Clock } from "lucide-react";

type TransactionStatus = "completed" | "pending" | "failed";

interface TransactionCardProps {
  id: string;
  date: string;
  amount: string;
  recipient: string;
  status: TransactionStatus;
  className?: string;
}

const statusConfig = {
  completed: {
    color: "bg-green-50 text-green-700 border-green-200",
    icon: <CheckCircle2 className="h-4 w-4 mr-1" />,
    label: "Completed"
  },
  pending: {
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    icon: <Clock className="h-4 w-4 mr-1" />,
    label: "Pending"
  },
  failed: {
    color: "bg-red-50 text-red-700 border-red-200",
    icon: <AlertCircle className="h-4 w-4 mr-1" />,
    label: "Failed"
  }
};

const TransactionCard = ({ id, date, amount, recipient, status, className }: TransactionCardProps) => {
  const statusInfo = statusConfig[status];
  
  return (
    <div className={cn("p-4 bg-white border border-gray-200 rounded-lg transition-all hover:shadow-md", className)}>
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">ID: {id.slice(0, 8)}...</span>
            <Badge
              className={cn("flex items-center font-normal", statusInfo.color)}
            >
              {statusInfo.icon} {statusInfo.label}
            </Badge>
          </div>
          <h3 className="mt-2 font-medium">{recipient}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-semibold text-lg">{amount}</span>
          <button className="mt-2 text-xs flex items-center text-brand-600 hover:text-brand-700">
            View details <ArrowUpRight className="ml-1 h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
