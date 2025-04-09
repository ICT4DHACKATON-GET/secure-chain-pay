
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecurityFeature from "@/components/SecurityFeature";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, Lock, RefreshCw, FileCheck, GitBranch, Layers, 
  Smartphone, Eye, Zap, ArrowRight, ExternalLink, Clock,
  CheckCircle, Wallet, CreditCard, BarChart3, Globe, UserCheck
} from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-brand-800 to-blockchain-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">SecureChainPay Features</h1>
            <p className="text-xl text-brand-100 max-w-3xl mx-auto">
              Discover how blockchain technology revolutionizes payment security and creates a new standard for financial transactions.
            </p>
          </div>
        </section>
        
        {/* Tabs Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="security" className="space-y-8">
              <div className="flex justify-center">
                <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full max-w-3xl">
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="technology">Technology</TabsTrigger>
                  <TabsTrigger value="usability">Usability</TabsTrigger>
                  <TabsTrigger value="integration">Integration</TabsTrigger>
                </TabsList>
              </div>
              
              {/* Security Features */}
              <TabsContent value="security">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">Unparalleled Security</h2>
                  <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                    Multi-layered security built on blockchain technology ensures your transactions remain protected.
                  </p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <SecurityFeature
                    icon={<Shield className="h-6 w-6" />}
                    title="End-to-End Encryption"
                    description="All transactions are encrypted from start to finish, ensuring your financial data remains private and secure."
                  />
                  <SecurityFeature
                    icon={<Lock className="h-6 w-6" />}
                    title="Immutable Ledger"
                    description="Once recorded on the blockchain, transaction data cannot be altered, providing tamper-proof records."
                  />
                  <SecurityFeature
                    icon={<RefreshCw className="h-6 w-6" />}
                    title="Real-time Verification"
                    description="Transactions are verified by a distributed network of nodes, eliminating single points of failure."
                  />
                  <SecurityFeature
                    icon={<FileCheck className="h-6 w-6" />}
                    title="Smart Contracts"
                    description="Automated agreements execute transactions only when predefined conditions are met, reducing fraud risk."
                  />
                  <SecurityFeature
                    icon={<GitBranch className="h-6 w-6" />}
                    title="Decentralized Network"
                    description="No central authority controls the payment network, making it resistant to censorship and control."
                  />
                  <SecurityFeature
                    icon={<Shield className="h-6 w-6" />}
                    title="Multi-Factor Authentication"
                    description="Advanced authentication methods protect access to your accounts and funds."
                  />
                </div>
                
                <div className="mt-12 text-center">
                  <Card className="max-w-4xl mx-auto bg-brand-50 border-0">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">How Blockchain Enhances Security</h3>
                      <p className="text-gray-600 mb-6">
                        Traditional payment systems rely on centralized databases that present single points of failure. 
                        Blockchain technology distributes transaction verification across thousands of nodes, making it virtually
                        impossible to compromise the entire system.
                      </p>
                      <Link to="/demo">
                        <Button>
                          See Security in Action <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Technology Features */}
              <TabsContent value="technology">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">Cutting-Edge Technology</h2>
                  <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                    SecureChainPay leverages the latest advancements in blockchain to deliver secure, efficient payment solutions.
                  </p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <SecurityFeature
                    icon={<Layers className="h-6 w-6" />}
                    title="Layer-2 Scaling"
                    description="Implements advanced layer-2 scaling solutions to ensure fast transactions regardless of network congestion."
                  />
                  <SecurityFeature
                    icon={<Clock className="h-6 w-6" />}
                    title="Near-Instant Settlements"
                    description="Transactions are confirmed within seconds, eliminating the long waiting periods of traditional banking systems."
                  />
                  <SecurityFeature
                    icon={<Zap className="h-6 w-6" />}
                    title="Lightning Network Compatible"
                    description="Supports Lightning Network for Bitcoin, enabling micro-transactions with minimal fees."
                  />
                  <SecurityFeature
                    icon={<Eye className="h-6 w-6" />}
                    title="Transparent Verification"
                    description="All transactions can be publicly verified on the blockchain while keeping user identities private."
                  />
                  <SecurityFeature
                    icon={<CheckCircle className="h-6 w-6" />}
                    title="Consensus Mechanisms"
                    description="Utilizes the most secure and environmentally friendly consensus mechanisms available."
                  />
                  <SecurityFeature
                    icon={<Smartphone className="h-6 w-6" />}
                    title="Mobile-Optimized"
                    description="Full blockchain functionality optimized for mobile devices without compromising security."
                  />
                </div>
                
                <div className="mt-16 bg-blockchain-900 rounded-xl overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12 text-white">
                      <h3 className="text-2xl font-bold mb-4">Technical Architecture</h3>
                      <p className="mb-6 text-blockchain-100">
                        SecureChainPay utilizes a multi-layered architecture that combines the security of blockchain with the speed and efficiency of modern payment systems.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-security-400 mr-2 mt-0.5" />
                          <span>Hybrid node verification network</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-security-400 mr-2 mt-0.5" />
                          <span>Zero-knowledge proof privacy layer</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-security-400 mr-2 mt-0.5" />
                          <span>Cross-chain interoperability protocols</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-security-400 mr-2 mt-0.5" />
                          <span>Smart contract auditing and security</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-security-400 mr-2 mt-0.5" />
                          <span>Decentralized identity verification</span>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <a href="#" className="inline-flex items-center text-white hover:text-blockchain-300">
                          Read technical whitepaper <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <div className="bg-blockchain-800 p-8 md:p-12 flex items-center justify-center blockchain-pattern">
                      <img 
                        src="https://i.imgur.com/cIx9aRN.png" 
                        alt="Blockchain Architecture" 
                        className="max-w-full h-auto rounded-lg shadow-lg" 
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Usability Features */}
              <TabsContent value="usability">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">Designed for Everyone</h2>
                  <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                    Complex security made simple with intuitive interfaces and user-friendly features.
                  </p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <SecurityFeature
                    icon={<Wallet className="h-6 w-6" />}
                    title="Intuitive Wallet"
                    description="Easy-to-use wallet interface that simplifies blockchain transactions for users of all technical levels."
                  />
                  <SecurityFeature
                    icon={<CreditCard className="h-6 w-6" />}
                    title="Multiple Payment Options"
                    description="Support for both cryptocurrency and traditional fiat currency payments with automatic conversion."
                  />
                  <SecurityFeature
                    icon={<BarChart3 className="h-6 w-6" />}
                    title="Transaction Analytics"
                    description="Detailed yet easy-to-understand analytics for all your financial activities."
                  />
                  <SecurityFeature
                    icon={<Globe className="h-6 w-6" />}
                    title="Multi-Currency Support"
                    description="Send and receive payments in various cryptocurrencies and fiat currencies."
                  />
                  <SecurityFeature
                    icon={<UserCheck className="h-6 w-6" />}
                    title="Contact Management"
                    description="Save and manage recipient addresses with user-friendly contact features."
                  />
                  <SecurityFeature
                    icon={<Smartphone className="h-6 w-6" />}
                    title="Cross-Platform Access"
                    description="Access your secure wallet from any device with our responsive web application."
                  />
                </div>
                
                <div className="mt-16 grid gap-8 md:grid-cols-2">
                  <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-xl font-semibold mb-4">For Personal Users</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-brand-100 rounded-full p-1 text-brand-600 mr-3 mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Simplified User Interface</p>
                          <p className="text-sm text-gray-500">
                            Designed for non-technical users, making blockchain payments as easy as traditional banking apps.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-brand-100 rounded-full p-1 text-brand-600 mr-3 mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Automated Security Features</p>
                          <p className="text-sm text-gray-500">
                            Security features work automatically in the background, requiring minimal setup from users.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-brand-100 rounded-full p-1 text-brand-600 mr-3 mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Financial Privacy</p>
                          <p className="text-sm text-gray-500">
                            Control who sees your financial activity with advanced privacy settings.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-brand-100 rounded-full p-1 text-brand-600 mr-3 mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Low-Fee Remittances</p>
                          <p className="text-sm text-gray-500">
                            Send money to family and friends internationally with minimal fees.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-xl font-semibold mb-4">For Business Users</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-brand-100 rounded-full p-1 text-brand-600 mr-3 mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Payment API Integration</p>
                          <p className="text-sm text-gray-500">
                            Easy-to-implement API for integrating blockchain payments into your existing systems.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-brand-100 rounded-full p-1 text-brand-600 mr-3 mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Bulk Payment Processing</p>
                          <p className="text-sm text-gray-500">
                            Efficiently process multiple payments at once with reduced fees and overhead.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-brand-100 rounded-full p-1 text-brand-600 mr-3 mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Advanced Reporting</p>
                          <p className="text-sm text-gray-500">
                            Generate detailed financial reports for accounting and compliance.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-brand-100 rounded-full p-1 text-brand-600 mr-3 mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Multi-User Access Controls</p>
                          <p className="text-sm text-gray-500">
                            Set permissions for different team members with role-based access control.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              {/* Integration Features */}
              <TabsContent value="integration">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">Seamless Integration</h2>
                  <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                    Connect with existing systems and services to create a comprehensive payment ecosystem.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <Card className="shadow-sm border-0">
                    <CardHeader>
                      <CardTitle>API Documentation</CardTitle>
                      <CardDescription>Comprehensive guides for developers</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <p className="text-sm font-mono text-gray-700">
                          # Initialize payment<br />
                          POST /api/v1/payments<br />
                          {`{`}<br />
                          &nbsp;&nbsp;"amount": 100.00,<br />
                          &nbsp;&nbsp;"currency": "USD",<br />
                          &nbsp;&nbsp;"recipient": "0x1a2b3c..."<br />
                          {`}`}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600">
                        Our RESTful API provides easy integration with your existing systems. 
                        Comprehensive documentation includes authentication, payment processing,
                        webhooks, and more.
                      </p>
                      <Button variant="outline" className="w-full">
                        View Full API Docs <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-sm border-0">
                    <CardHeader>
                      <CardTitle>SDK & Libraries</CardTitle>
                      <CardDescription>Tools for popular frameworks and languages</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center bg-gray-50 p-3 rounded-md">
                          <div className="w-8 h-8 flex items-center justify-center mr-3">
                            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 0h24v24H0z" fill="#F0DB4F"/>
                              <path d="M20.809 23.936c-.305.097-.578.102-.956.05-3.314-.598-6.616-.68-9.921.05-.508.115-1.032.134-1.544-.01-2.168-.603-4.326-.64-6.493-.038-.44.123-.935.028-1.365-.084-.233-.06-.4-.172-.53-.37V.43c.13-.16.296-.306.53-.37C.96-.017 1.455-.114 1.896.01c2.208.618 4.409.622 6.6-.006.45-.13.913-.15 1.37-.03 3.14.83 6.251.922 9.38.14.488-.12.962-.103 1.45-.04.437.099.865.231 1.303.35v22.86c-.41.097-.82.16-.19.652ZM12 4c-1.602 1.2-3.203 2.398-4.805 3.598.001 3.929.001 7.857.002 11.786 1.601-1.2 3.202-2.398 4.803-3.598V4Z" fill="#323232"/>
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">JavaScript</p>
                            <p className="text-xs text-gray-500">npm install securechainpay</p>
                          </div>
                        </div>
                        <div className="flex items-center bg-gray-50 p-3 rounded-md">
                          <div className="w-8 h-8 flex items-center justify-center mr-3">
                            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.624 3.872 10.328 9.092 11.63a12.01 12.01 0 01-1.056-3.579c-.114-.54-.607-2.721-.607-2.721-.301-.715-.301-1.756-.301-2.471 0-2.321 1.344-4.054 3.01-4.054.426 0 .787.113 1.15.34.45.282.73.846.73 1.467 0 .677-.17 1.692-.564 2.947-.17.451-.452 1.128-.753 1.692-.301.563-.564 1.127-.564 1.692 0 .846.566 1.579 1.545 1.579.339 0 .678-.113 1.017-.226 1.319-.564 2.223-2.256 2.223-4.174 0-1.917-1.319-3.497-3.767-3.497-2.673 0-4.312 1.917-4.312 4.512 0 .677.113 1.24.339 1.692.113.226.226.339.226.451 0 .113-.113.339-.113.451-.113.227-.226.453-.339.453h-.226c-1.13-.226-1.808-1.466-1.808-2.933 0-2.594 1.92-4.96 5.574-4.96 2.899 0 5.122 2.142 5.122 4.96 0 2.933-1.806 5.303-4.33 5.303-.79 0-1.582-.452-1.92-.903l-.452 1.917c-.226.903-.79 1.805-1.242 2.482 1.13.339 2.146.452 3.163.452C18.627 24 24 18.627 24 12S18.627 0 12 0z" fill="#BD081C"/>
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">Python</p>
                            <p className="text-xs text-gray-500">pip install securechainpay</p>
                          </div>
                        </div>
                        <div className="flex items-center bg-gray-50 p-3 rounded-md">
                          <div className="w-8 h-8 flex items-center justify-center mr-3">
                            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14 0H2a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM3.15 10.95c-.1.1-.25.2-.4.2H1.4c-.15 0-.3-.1-.4-.2-.2-.2-.2-.6 0-.8l4.5-4.5c.2-.2.6-.2.8 0l1.8 1.8c.2.2.2.6 0 .8s-.6.2-.8 0L5.75 6.7l-2.6 3.45zm6.85-2.6l-1.8-1.8c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l1.4 1.4 1.4-1.4c.2-.2.6-.2.8 0 .2.2.2.6 0 .8l-1.8 1.8c-.2.15-.4.15-.8 0zM20 24h2v-2h-2v2zm-2-4h-1v-5h-2v5h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-9-5h2V8h-2v7zm4 0h2V8h-2v7zm1-9H7a1 1 0 00-1 1v12a1 1 0 001 1h7a1 1 0 001-1V7a1 1 0 00-1-1zM7 21V7h7v14H7zm15-7h-2v2h2v-2zm0 6h-4v-5h-2v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6h-2v5z" fill="#1572B6"/>
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">PHP</p>
                            <p className="text-xs text-gray-500">composer require securechainpay</p>
                          </div>
                        </div>
                        <div className="flex items-center bg-gray-50 p-3 rounded-md">
                          <div className="w-8 h-8 flex items-center justify-center mr-3">
                            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.586 11l-2.043-2.043L15.957 7.544l4.5 4.5-4.5 4.5-1.414-1.414L16.586 13H4v-2h12.586z" fill="#E34F26"/>
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium text-sm">Java</p>
                            <p className="text-xs text-gray-500">maven securechainpay:1.0.0</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Our SDKs are available for all major programming languages and frameworks,
                        making integration with your existing systems quick and painless.
                      </p>
                      <Button variant="outline" className="w-full">
                        Download SDKs <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-gradient-to-r from-brand-700 to-brand-800 rounded-xl text-white p-8 md:p-12">
                  <div className="md:grid md:grid-cols-5 md:gap-8 items-center">
                    <div className="md:col-span-3 mb-8 md:mb-0">
                      <h3 className="text-2xl font-semibold mb-4">Ready to integrate secure blockchain payments?</h3>
                      <p className="mb-6">
                        Whether you're building a new financial app or adding secure payment capabilities to an existing platform,
                        our integration solutions make it simple to harness the power of blockchain technology.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button variant="secondary">
                          Get API Keys
                        </Button>
                        <Button variant="outline" className="text-white border-white hover:bg-white/10">
                          Contact Sales
                        </Button>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                        <h4 className="text-lg font-medium mb-4">Integration Partners</h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-white/20 h-12 rounded flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                          </div>
                          <div className="bg-white/20 h-12 rounded flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                          </div>
                          <div className="bg-white/20 h-12 rounded flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                          </div>
                          <div className="bg-white/20 h-12 rounded flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                          </div>
                          <div className="bg-white/20 h-12 rounded flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                          </div>
                          <div className="bg-white/20 h-12 rounded flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Ready to experience the future of secure payments?</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Try our demo and see how SecureChainPay can revolutionize your financial transactions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/demo">
                <Button size="lg">
                  Try Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
