
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlockchainInfo from "@/components/BlockchainInfo";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ChevronsRight, ShieldCheck, CircleCheck, RefreshCw, Info, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const Demo = () => {
  const [amount, setAmount] = useState("100.00");
  const [recipient, setRecipient] = useState("");
  const [paymentType, setPaymentType] = useState("crypto");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  // Mock payment process
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recipient || !amount) {
      toast.error("Please fill in all required fields", {
        description: "Recipient address and amount are required",
        icon: <AlertCircle className="h-4 w-4" />,
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate blockchain transaction
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      toast.success("Payment completed successfully", {
        description: `${amount} ${paymentType === 'crypto' ? 'BTC' : 'USD'} sent to ${recipient.substring(0, 8)}...`,
        icon: <CircleCheck className="h-4 w-4" />,
      });
    }, 3000);
  };
  
  const resetForm = () => {
    setAmount("100.00");
    setRecipient("");
    setPaymentSuccess(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="py-12 bg-gradient-to-r from-brand-800 to-blockchain-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">SecureChainPay Demo</h1>
            <p className="text-lg text-brand-100 max-w-3xl mx-auto">
              Experience the security and simplicity of blockchain payments firsthand.
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <Card className="shadow-md border-0">
                  <CardHeader>
                    <CardTitle>Secure Payment Demo</CardTitle>
                    <CardDescription>Send a simulated payment using blockchain technology</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {paymentSuccess ? (
                      <div className="text-center py-10">
                        <div className="bg-green-100 text-green-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                          <CircleCheck className="h-12 w-12" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Payment Successful!</h3>
                        <p className="text-gray-600 mb-6">
                          Your transaction has been securely recorded on the blockchain.
                        </p>
                        <div className="bg-gray-50 rounded-lg p-6 text-left max-w-md mx-auto">
                          <div className="flex justify-between mb-3">
                            <span className="text-gray-500">Amount:</span>
                            <span className="font-medium">{amount} {paymentType === 'crypto' ? 'BTC' : 'USD'}</span>
                          </div>
                          <div className="flex justify-between mb-3">
                            <span className="text-gray-500">Recipient:</span>
                            <span className="font-medium">{recipient.substring(0, 10)}...{recipient.substring(recipient.length - 5)}</span>
                          </div>
                          <div className="flex justify-between mb-3">
                            <span className="text-gray-500">Transaction ID:</span>
                            <span className="font-medium">0x{Math.random().toString(16).slice(2, 10)}...{Math.random().toString(16).slice(2, 10)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Confirmations:</span>
                            <span className="font-medium">6 of 6</span>
                          </div>
                        </div>
                        <Button onClick={resetForm} className="mt-8">
                          Make Another Payment
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <Tabs defaultValue="send" className="w-full">
                          <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="send">Send Payment</TabsTrigger>
                            <TabsTrigger value="receive">Receive Payment</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="send">
                            <div className="space-y-6">
                              <div className="space-y-2">
                                <Label htmlFor="paymentType">Payment Method</Label>
                                <RadioGroup 
                                  id="paymentType" 
                                  value={paymentType} 
                                  onValueChange={setPaymentType}
                                  className="flex flex-col md:flex-row gap-4"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="crypto" id="crypto" />
                                    <Label htmlFor="crypto" className="cursor-pointer">Cryptocurrency</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="fiat" id="fiat" />
                                    <Label htmlFor="fiat" className="cursor-pointer">Fiat Currency</Label>
                                  </div>
                                </RadioGroup>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="recipient">Recipient Address</Label>
                                <Input
                                  id="recipient"
                                  placeholder={paymentType === 'crypto' ? '0x1a2b3c4d5e6f...' : 'email@example.com or account number'}
                                  value={recipient}
                                  onChange={(e) => setRecipient(e.target.value)}
                                  className="font-mono"
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="amount">Amount</Label>
                                <div className="relative">
                                  <Input
                                    id="amount"
                                    type="number"
                                    placeholder="0.00"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="pl-10"
                                    step="0.01"
                                    min="0"
                                  />
                                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 font-medium text-gray-500">
                                    {paymentType === 'crypto' ? '₿' : '$'}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4">
                                <Button 
                                  type="submit" 
                                  className="w-full" 
                                  disabled={isProcessing}
                                >
                                  {isProcessing ? (
                                    <>
                                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                      Processing Transaction...
                                    </>
                                  ) : (
                                    <>
                                      Send Payment <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                  )}
                                </Button>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="receive">
                            <div className="space-y-6">
                              <div className="space-y-2">
                                <Label>Your Payment Address</Label>
                                <div className="bg-gray-50 p-3 rounded-md font-mono text-sm break-all border">
                                  {paymentType === 'crypto' 
                                    ? '0x3a21b7c98e2ddaffce87203c81551275d7aa41ce77e6f9e910dbaa89612d1122' 
                                    : 'secure-chain-pay@example.com'}
                                </div>
                              </div>
                              
                              <div className="flex justify-center">
                                <div className="bg-white p-4 border rounded-md">
                                  <img
                                    src="https://i.imgur.com/sK3sMIl.png"
                                    alt="QR Code"
                                    className="w-48 h-48 object-cover"
                                  />
                                </div>
                              </div>
                              
                              <div className="bg-brand-50 p-4 rounded-md flex items-start">
                                <Info className="h-5 w-5 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-gray-600">
                                  Share this address with others to receive payments. All transactions are securely recorded on the blockchain with full encryption.
                                </p>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-1 space-y-6">
                <Card className="shadow-md border-0">
                  <CardHeader>
                    <CardTitle>Security Features</CardTitle>
                    <CardDescription>How we protect your transactions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex">
                      <div className="mr-3 text-security-600">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">End-to-End Encryption</h4>
                        <p className="text-sm text-gray-500">All transaction data is fully encrypted</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex">
                      <div className="mr-3 text-security-600">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Multi-Node Verification</h4>
                        <p className="text-sm text-gray-500">Transactions verified by decentralized network</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex">
                      <div className="mr-3 text-security-600">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Immutable Ledger</h4>
                        <p className="text-sm text-gray-500">Unchangeable transaction record</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex">
                      <div className="mr-3 text-security-600">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Smart Contract Security</h4>
                        <p className="text-sm text-gray-500">Automated verification of transactions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <BlockchainInfo 
                  blockHeight={793142}
                  confirmations={6}
                  hashRate="372.8 EH/s"
                />
                
                <Card className="shadow-md border-0">
                  <CardHeader>
                    <CardTitle>How it Works</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex">
                      <div className="h-6 w-6 rounded-full bg-brand-500 text-white flex items-center justify-center mr-3 flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-medium">Enter Payment Details</h4>
                        <p className="text-sm text-gray-500">Fill in the recipient address and amount</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <ChevronsRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex">
                      <div className="h-6 w-6 rounded-full bg-brand-500 text-white flex items-center justify-center mr-3 flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-medium">Blockchain Verification</h4>
                        <p className="text-sm text-gray-500">Transaction is verified by multiple nodes</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <ChevronsRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex">
                      <div className="h-6 w-6 rounded-full bg-brand-500 text-white flex items-center justify-center mr-3 flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-medium">Payment Confirmation</h4>
                        <p className="text-sm text-gray-500">Receive proof of payment on the blockchain</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Demo;
