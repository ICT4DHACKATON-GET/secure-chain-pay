
import BlockchainInfo from "@/components/BlockchainInfo";
import TransactionHistory from "@/components/TransactionHistory";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Transactions Page
 * 
 * Displays transaction history along with blockchain network information
 */
const Transactions = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <p className="text-muted-foreground mt-2">
          View and manage your secure blockchain transactions
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction History Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <TransactionHistory />
            </CardContent>
          </Card>
        </div>
        
        {/* Network Status Section */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Network Status</CardTitle>
            </CardHeader>
            <CardContent>
              <BlockchainInfo
                blockHeight={912345}
                confirmations={6}
                hashRate="143.5 EH/s"
                className="mt-4"
              />
              
              {/* Additional information about transaction security */}
              <div className="mt-6 p-4 bg-security-50 text-security-800 rounded-lg">
                <h3 className="font-medium mb-2">Security Information</h3>
                <p className="text-sm">
                  All transactions are secured with advanced blockchain technology 
                  and encrypted with military-grade protocols.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
