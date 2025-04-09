
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlockchainInfo from "@/components/BlockchainInfo";
import TransactionCard from "@/components/TransactionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowRight, BarChart3, DollarSign, TrendingUp, Wallet, ArrowUpRight, ArrowDownRight, Clock, RefreshCw, ArrowDownLeft, ArrowUpLeft, Search, User, Bell, Settings } from "lucide-react";

// Mock data
const transactionHistory = [
  { id: "tx_0x8f2e3d1c8a", date: "Apr 8, 2025", amount: "$245.50", recipient: "Alice Johnson", status: "completed" },
  { id: "tx_0x7c9d6b3a5f", date: "Apr 7, 2025", amount: "$1,200.00", recipient: "Bob Smith", status: "completed" },
  { id: "tx_0x4e2f1a9b8d", date: "Apr 7, 2025", amount: "$75.25", recipient: "Catherine Davis", status: "pending" },
  { id: "tx_0x3d5e2f1a8b", date: "Apr 6, 2025", amount: "$450.00", recipient: "David Wilson", status: "completed" },
  { id: "tx_0x9c1d5e3f2a", date: "Apr 5, 2025", amount: "$90.75", recipient: "Emma Thompson", status: "failed" },
  { id: "tx_0x2a3b5c7d8e", date: "Apr 4, 2025", amount: "$350.00", recipient: "Frank Miller", status: "completed" },
];

const chartData = [
  { name: 'Mar 9', value: 2400 },
  { name: 'Mar 12', value: 1398 },
  { name: 'Mar 15', value: 3800 },
  { name: 'Mar 18', value: 3908 },
  { name: 'Mar 21', value: 4800 },
  { name: 'Mar 24', value: 3800 },
  { name: 'Mar 27', value: 4300 },
  { name: 'Mar 30', value: 5300 },
  { name: 'Apr 2', value: 6200 },
  { name: 'Apr 5', value: 5800 },
  { name: 'Apr 8', value: 6400 },
];

const recentActivity = [
  { id: 1, type: "incoming", amount: "$245.50", from: "Alice Johnson", time: "2 hours ago" },
  { id: 2, type: "outgoing", amount: "$120.00", to: "Coffee Shop", time: "5 hours ago" },
  { id: 3, type: "exchange", amount: "0.05 BTC → $2,245.50", time: "Yesterday" },
  { id: 4, type: "incoming", amount: "$1,050.00", from: "Salary Deposit", time: "2 days ago" },
];

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="py-6 md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Dashboard</h1>
              <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  Last updated: Apr 9, 2025, 14:23 UTC
                </div>
              </div>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4 space-x-2">
              <Button variant="outline" size="sm" onClick={refreshData} disabled={isLoading}>
                {isLoading ? <RefreshCw className="h-4 w-4 mr-1 animate-spin" /> : <RefreshCw className="h-4 w-4 mr-1" />}
                Refresh
              </Button>
              <Button size="sm">
                <Wallet className="h-4 w-4 mr-1" /> Add Funds
              </Button>
            </div>
          </div>
          
          {/* Top Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 my-6">
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Balance</p>
                    <h3 className="text-2xl font-bold mt-1">$8,245.50</h3>
                    <p className="text-xs flex items-center mt-1 text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" /> +5.25% this week
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600">
                    <DollarSign className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Crypto Balance</p>
                    <h3 className="text-2xl font-bold mt-1">0.125 BTC</h3>
                    <p className="text-xs flex items-center mt-1 text-gray-500">
                      ≈ $5,625.75
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-blockchain-100 flex items-center justify-center text-blockchain-600">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-blockchain-600" />
                      <path d="M15 13.7C14.5 15.2 12.8 16.1 11 15.8C9.2 15.4 7.99999 13.8 7.99999 12C7.99999 10.2 9.2 8.6 11 8.2C12.8 7.9 14.5 8.8 15 10.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-blockchain-600" />
                      <path d="M9 12H12.6M12 9.6V14.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-blockchain-600" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Monthly Transactions</p>
                    <h3 className="text-2xl font-bold mt-1">45</h3>
                    <p className="text-xs flex items-center mt-1 text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" /> +12.3% from last month
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Security Score</p>
                    <h3 className="text-2xl font-bold mt-1">92/100</h3>
                    <p className="text-xs flex items-center mt-1 text-gray-600">
                      <Badge className="h-2 w-2 bg-green-500 rounded-full mr-1" /> Excellent
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-security-100 flex items-center justify-center text-security-600">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-security-600" />
                      <path d="M12 16V16.01M12 8V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-security-600" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Chart and Activity Section */}
          <div className="grid gap-6 lg:grid-cols-7 mb-6">
            <Card className="lg:col-span-4 shadow-sm border-0">
              <CardHeader className="pb-2">
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Your financial activity over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={chartData}
                      margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#0284c7"
                        activeDot={{ r: 8 }}
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-3 shadow-sm border-0">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest transactions and events</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">View all</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === 'incoming' ? 'bg-green-100 text-green-600' :
                          activity.type === 'outgoing' ? 'bg-red-100 text-red-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {activity.type === 'incoming' ? <ArrowDownLeft className="h-5 w-5" /> :
                           activity.type === 'outgoing' ? <ArrowUpRight className="h-5 w-5" /> :
                           <ArrowUpLeft className="h-5 w-5" />}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">
                            {activity.type === 'incoming' ? 'Received from ' + activity.from :
                             activity.type === 'outgoing' ? 'Sent to ' + activity.to :
                             'Exchange'}
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-semibold ${
                          activity.type === 'incoming' ? 'text-green-600' :
                          activity.type === 'outgoing' ? 'text-red-600' :
                          'text-purple-600'
                        }`}>
                          {activity.amount}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Transaction List and Network Info */}
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2 shadow-sm border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>Your past payment activities</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative w-56">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input placeholder="Search transactions..." className="pl-8" />
                    </div>
                    <Button variant="outline" size="sm">Filter</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="incoming">Incoming</TabsTrigger>
                    <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all">
                    <div className="space-y-4">
                      {transactionHistory.map((tx) => (
                        <TransactionCard
                          key={tx.id}
                          id={tx.id}
                          date={tx.date}
                          amount={tx.amount}
                          recipient={tx.recipient}
                          status={tx.status as any}
                        />
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Button variant="outline">
                        View All Transactions <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="incoming">
                    <p className="text-center text-gray-500 py-8">Filtered view for incoming transactions</p>
                  </TabsContent>
                  
                  <TabsContent value="outgoing">
                    <p className="text-center text-gray-500 py-8">Filtered view for outgoing transactions</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <div className="space-y-6 lg:col-span-1">
              <BlockchainInfo 
                blockHeight={793142}
                confirmations={6}
                hashRate="372.8 EH/s"
              />
              
              <Card className="shadow-sm border-0">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start">
                    <Wallet className="mr-2 h-4 w-4" /> Send Payment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ArrowDownRight className="mr-2 h-4 w-4" /> Request Payment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" /> Manage Contacts
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="mr-2 h-4 w-4" /> Alerts & Notifications
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" /> Security Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
