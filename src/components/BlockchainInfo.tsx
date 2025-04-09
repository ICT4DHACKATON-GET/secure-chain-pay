
import { cn } from "@/lib/utils";
import { Shield, Clock, Hash } from "lucide-react";

interface BlockchainInfoProps {
  blockHeight: number;
  confirmations: number;
  hashRate: string;
  className?: string;
}

const BlockchainInfo = ({ blockHeight, confirmations, hashRate, className }: BlockchainInfoProps) => {
  return (
    <div className={cn("p-5 bg-gradient-to-r from-blockchain-800 to-blockchain-900 text-white rounded-lg", className)}>
      <h2 className="text-lg font-semibold mb-4">Blockchain Network Status</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3 bg-blockchain-700/50 p-3 rounded-lg">
          <Hash className="h-8 w-8 text-blockchain-200" />
          <div>
            <p className="text-sm text-blockchain-200">Block Height</p>
            <p className="text-xl font-mono">{blockHeight.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 bg-blockchain-700/50 p-3 rounded-lg">
          <Shield className="h-8 w-8 text-blockchain-200" />
          <div>
            <p className="text-sm text-blockchain-200">Confirmations</p>
            <p className="text-xl font-mono">{confirmations}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 bg-blockchain-700/50 p-3 rounded-lg">
          <Clock className="h-8 w-8 text-blockchain-200" />
          <div>
            <p className="text-sm text-blockchain-200">Hash Rate</p>
            <p className="text-xl font-mono">{hashRate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainInfo;
