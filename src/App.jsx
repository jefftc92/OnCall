import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle, Clock, Stethoscope, Brain, FileText, Users, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'
import { useIsMobile } from './hooks/use-mobile.js'

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/access', label: 'Access' },
    { path: '/tools', label: 'Tools' },
    { path: '/about', label: 'About Us/Contact' }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" style={{height: '80px', paddingTop: '8px', paddingBottom: '8px'}}>
            <span className="text-3xl font-extrabold text-blue-700 tracking-tight select-none w-full text-center" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.01em'}}>
              OnCall
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Home Page Component
function HomePage() {
  const isMobile = useIsMobile();
  const phoneNumber = '801-910-8183';
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            24/7 Dental Consultation
            <span className="text-blue-600"> On Call</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Professional dental hotline for medical professionals who need expert dental guidance at all hours
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Clock className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Answers</h3>
            <p className="text-gray-600 text-lg">
              Get immediate responses to your dental questions from experienced professionals. No waiting, no delays.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Stethoscope className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Correct Treatment Decisions</h3>
            <p className="text-gray-600 text-lg">
              Make informed treatment decisions with expert guidance from qualified dental professionals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliable Referrals</h3>
            <p className="text-gray-600 text-lg">
              Connect your patients with trusted dental specialists in their local area for comprehensive care.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          {isMobile ? (
            <div className="flex flex-col gap-2 items-center">
              <a href={`tel:${phoneNumber}`} className="w-full">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg w-full">
                  <Phone className="mr-2" size={20} />
                  Call Now: {phoneNumber}
                </Button>
              </a>
              <a href={`sms:${phoneNumber}`} className="w-full">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 bg-white hover:bg-blue-50 w-full">
                  <MessageCircle className="mr-2" size={20} />
                  Text Us Now
                </Button>
              </a>
            </div>
          ) : (
            <div className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-700 bg-blue-50 rounded-lg select-text border border-blue-100">
              <Phone className="mr-2" size={20} />
              Call/Text us: {phoneNumber}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Access Page Component
function AccessPage() {
  const isMobile = useIsMobile();
  const phoneNumber = '801-910-8183';
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Multiple Ways to <span className="text-blue-600">Access</span> Expert Care
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the communication method that works best for you and your situation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Text Messaging */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MessageCircle className="text-green-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Text Dentists</h3>
            <p className="text-gray-600 text-lg mb-6 text-center">
              Send detailed questions and receive comprehensive written responses from dental experts.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Perfect for complex cases</li>
              <li>• Share images and documents</li>
              <li>• Written record for reference</li>
              <li>• Convenient for busy schedules</li>
            </ul>
          </div>

          {/* Phone Calls */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Phone className="text-blue-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Call Dentists</h3>
            <p className="text-gray-600 text-lg mb-6 text-center">
              Speak directly with dental professionals for immediate consultation and guidance.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Immediate verbal consultation</li>
              <li>• Real-time discussion</li>
              <li>• Emergency situations</li>
              <li>• Personal interaction</li>
            </ul>
          </div>

          {/* Quick Response */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Clock className="text-orange-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Quick Response Times</h3>
            <p className="text-gray-600 text-lg mb-6 text-center">
              Fast turnaround times ensure you get the answers you need when you need them.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Average response: 15 minutes</li>
              <li>• 24/7 availability</li>
              <li>• Priority emergency handling</li>
              <li>• No appointment necessary</li>
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 bg-blue-600 text-white p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us now through your preferred method</p>
          {isMobile ? (
            <div className="flex flex-col gap-2 items-center">
              <a href={`tel:${phoneNumber}`} className="w-full">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  <Phone className="mr-2" size={20} />
                  Call: {phoneNumber}
                </Button>
              </a>
              <a href={`sms:${phoneNumber}`} className="w-full">
                <Button size="lg" variant="outline" className="border-white text-blue-600 bg-white hover:bg-gray-100 w-full">
                  <MessageCircle className="mr-2" size={20} />
                  Text Us Now
                </Button>
              </a>
            </div>
          ) : (
            <div className="flex items-center justify-center text-lg font-bold text-white select-text w-full mt-4">
              <Phone className="mr-2" size={20} />
              Call/Text us: <span className="ml-1 font-extrabold">{phoneNumber}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Tools Page Component
function ToolsPage() {
  const isMobile = useIsMobile();
  const phoneNumber = '801-910-8183';
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-purple-600">Tools</span> & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced diagnostic tools and comprehensive clinical resources at your fingertips
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* AI Diagnostic Tool */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Brain className="text-purple-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Diagnostic Tool</h3>
            <p className="text-gray-600 text-lg mb-6">
              Leverage artificial intelligence to assist in dental diagnosis and treatment planning with advanced pattern recognition.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Image analysis and interpretation</li>
              <li>• Symptom-based diagnostic assistance</li>
              <li>• Treatment recommendation engine</li>
              <li>• Evidence-based decision support</li>
            </ul>
          </div>

          {/* Charts and Algorithms */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FileText className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy-to-Follow Charts & Algorithms</h3>
            <p className="text-gray-600 text-lg mb-6">
              Comprehensive clinical flowcharts and decision trees to guide your treatment protocols and procedures.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Step-by-step treatment protocols</li>
              <li>• Visual decision-making aids</li>
              <li>• Quick reference guides</li>
              <li>• Evidence-based pathways</li>
            </ul>
          </div>
        </div>

        {/* Specialized Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized Clinical Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Antibiotic Choices */}
            <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-green-600 font-bold text-xl">Rx</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Antibiotic Choices</h4>
              <p className="text-gray-600 text-sm">
                Comprehensive antibiotic selection guides for various dental infections and conditions
              </p>
            </div>

            {/* Pain Management */}
            <div className="text-center p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-red-600 font-bold text-xl">💊</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Pain Management</h4>
              <p className="text-gray-600 text-sm">
                Evidence-based pain management protocols and medication guidelines for dental procedures
              </p>
            </div>

            {/* Trauma Protocols */}
            <div className="text-center p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-orange-600 font-bold text-xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Trauma Protocols</h4>
              <p className="text-gray-600 text-sm">
                Emergency dental trauma management and step-by-step treatment protocols
              </p>
            </div>

            {/* Tips and Tricks */}
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-blue-600 font-bold text-xl">💡</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Tips and Tricks</h4>
              <p className="text-gray-600 text-sm">
                Professional insights, clinical pearls, and practical techniques from experienced practitioners
              </p>
            </div>
          </div>
        </div>

        {/* Access CTA */}
        <div className="text-center mt-12">
          {isMobile ? (
            <div className="flex flex-col gap-2 items-center">
              <a href={`tel:${phoneNumber}`} className="w-full">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg w-full">
                  <Phone className="mr-2" size={20} />
                  Call: {phoneNumber}
                </Button>
              </a>
              <a href={`sms:${phoneNumber}`} className="w-full">
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-700 bg-white hover:bg-purple-50 w-full">
                  <MessageCircle className="mr-2" size={20} />
                  Text Us Now
                </Button>
              </a>
            </div>
          ) : (
            <div className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-700 bg-purple-50 rounded-lg select-text border border-purple-100">
              <Phone className="mr-2" size={20} />
              Call/Text us: {phoneNumber}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// About/Contact Page Component
function AboutPage() {
  const isMobile = useIsMobile();
  const phoneNumber = '801-910-8183';
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">OnCall</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in dental consultation and professional support
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-12 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-8 mx-auto">
              <Users className="text-blue-600" size={40} />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              OnCall provides 24/7 dental consultation services to medical professionals who need expert dental guidance. 
              We bridge the gap between medical and dental care, ensuring that healthcare providers have access to 
              specialized dental knowledge whenever they need it.
            </p>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose OnCall?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <Users className="text-blue-600 mt-1" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Network</h4>
                    <p className="text-gray-600">Access to qualified dental professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-blue-600 mt-1" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">24/7 Availability</h4>
                    <p className="text-gray-600">Round-the-clock support for urgent dental consultations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-blue-600 mt-1" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
                    <p className="text-gray-600">Fast turnaround times to help you make timely decisions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 mt-1" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Support</h4>
                    <p className="text-gray-600">From diagnosis to referrals, we provide complete dental guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-600 text-white rounded-xl shadow-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl mb-8">
            Ready to access expert dental consultation? Get in touch with us now.
          </p>
          {isMobile ? (
            <div className="flex flex-col gap-2 items-center">
              <a href={`tel:${phoneNumber}`} className="w-full">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  <Phone className="mr-2" size={20} />
                  Call: {phoneNumber}
                </Button>
              </a>
              <a href={`sms:${phoneNumber}`} className="w-full">
                <Button size="lg" variant="outline" className="border-white text-blue-600 bg-white hover:bg-gray-100 w-full">
                  <MessageCircle className="mr-2" size={20} />
                  Text Us Now
                </Button>
              </a>
            </div>
          ) : (
            <div className="flex items-center justify-center text-lg font-bold text-white select-text w-full mt-8">
              <Phone className="mr-2" size={20} />
              Call/Text us: <span className="ml-1 font-extrabold">{phoneNumber}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Privacy Policy Page Component
function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-xl shadow-lg p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-6">Last updated: December 2024</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                OnCall Dental collects information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Contact information (phone number, name, email if provided)</li>
                <li>Professional credentials and medical license information</li>
                <li>Consultation requests and medical questions</li>
                <li>Patient case information shared during consultations</li>
                <li>Communication records between you and our dental professionals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide dental consultation services</li>
                <li>Connect you with appropriate dental professionals</li>
                <li>Maintain records of consultations for quality assurance</li>
                <li>Improve our services and develop new features</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Send important service updates and notifications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To dental professionals providing consultation services</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure access controls and authentication</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection practices</li>
                <li>Compliance with HIPAA and other relevant regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Medical consultation records are retained in accordance with applicable healthcare regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy or our data practices, please contact us at 801-910-8183 or through our consultation services.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

// Terms of Service Page Component
function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-xl shadow-lg p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-6">Last updated: December 2024</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using OnCall Dental's consultation services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-600 mb-4">
                OnCall Dental provides 24/7 dental consultation services to medical professionals. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Telephone and text-based dental consultations</li>
                <li>Professional guidance for dental treatment decisions</li>
                <li>Referral services to dental specialists</li>
                <li>Access to clinical resources and tools</li>
                <li>Emergency dental consultation support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Eligibility</h2>
              <p className="text-gray-600 mb-4">
                Our services are intended for licensed medical professionals, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Physicians and medical doctors</li>
                <li>Nurse practitioners and physician assistants</li>
                <li>Emergency medical personnel</li>
                <li>Other healthcare professionals requiring dental guidance</li>
              </ul>
              <p className="text-gray-600 mt-4">
                You must provide accurate professional credentials when using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Professional Responsibility</h2>
              <p className="text-gray-600 mb-4">
                As a medical professional using our services, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>You remain responsible for all patient care decisions</li>
                <li>Our consultations are advisory and do not replace your clinical judgment</li>
                <li>You will use our services in accordance with applicable medical standards</li>
                <li>You will maintain appropriate patient confidentiality</li>
                <li>You will comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Limitations</h2>
              <p className="text-gray-600 mb-4">
                OnCall Dental's services are subject to the following limitations:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Consultations are for professional guidance only</li>
                <li>We do not provide direct patient treatment</li>
                <li>Emergency situations may require immediate local care</li>
                <li>Service availability may vary based on demand</li>
                <li>We reserve the right to refuse service for any reason</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment and Billing</h2>
              <p className="text-gray-600">
                Payment terms and billing arrangements will be communicated separately. All fees are due upon receipt of services unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600">
                All content, tools, and resources provided through our services are the property of OnCall Dental or our licensors and are protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600">
                OnCall Dental shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid for services in the preceding 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-600">
                Either party may terminate this agreement at any time. Upon termination, your right to use our services will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us at 801-910-8183 or through our consultation services.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

// Medical Disclaimer Page Component
function MedicalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-xl shadow-lg p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Medical Disclaimer</h1>
          <p className="text-gray-600 mb-6">Last updated: December 2024</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notice</h2>
              <p className="text-gray-600 mb-4">
                This medical disclaimer applies to all consultation services provided by OnCall Dental. Please read this disclaimer carefully before using our services.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-red-800 font-semibold">
                  WARNING: OnCall Dental provides consultation services to medical professionals only. We do not provide direct patient care or treatment.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Nature of Services</h2>
              <p className="text-gray-600 mb-4">
                OnCall Dental provides professional consultation services to licensed medical professionals. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Professional guidance and recommendations</li>
                <li>Clinical decision support</li>
                <li>Referral assistance</li>
                <li>Educational resources and tools</li>
                <li>Emergency consultation support</li>
              </ul>
              <p className="text-gray-600 mt-4">
                <strong>We do not provide:</strong> Direct patient treatment, diagnosis, or medical care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Professional Responsibility</h2>
              <p className="text-gray-600 mb-4">
                As a medical professional using our services, you understand and agree that:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>You remain solely responsible for all patient care decisions</li>
                <li>Our consultations are advisory and educational in nature</li>
                <li>You must exercise your own clinical judgment in all cases</li>
                <li>You are responsible for obtaining appropriate patient consent</li>
                <li>You must comply with all applicable medical standards and regulations</li>
                <li>You are responsible for maintaining patient confidentiality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. No Doctor-Patient Relationship</h2>
              <p className="text-gray-600">
                OnCall Dental does not establish a doctor-patient relationship with your patients. Our consultations are provided to you as a medical professional to assist in your clinical decision-making process. We do not provide medical advice directly to patients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Emergency Situations</h2>
              <p className="text-gray-600 mb-4">
                In emergency situations:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Seek immediate local medical attention when appropriate</li>
                <li>Our consultation services are not a substitute for emergency care</li>
                <li>Call emergency services (911) for life-threatening situations</li>
                <li>Our services may not be available during all emergency scenarios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitations of Advice</h2>
              <p className="text-gray-600 mb-4">
                Our consultation services have the following limitations:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Advice is based on information provided and may not be complete</li>
                <li>We cannot physically examine patients</li>
                <li>Recommendations may not be appropriate for all situations</li>
                <li>Clinical circumstances may change rapidly</li>
                <li>Local protocols and resources may vary</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. No Guarantees</h2>
              <p className="text-gray-600">
                OnCall Dental makes no guarantees regarding the outcome of any treatment decisions made based on our consultations. Medical care involves inherent risks and uncertainties that cannot be eliminated through consultation services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Regulatory Compliance</h2>
              <p className="text-gray-600">
                Our services are designed to comply with applicable healthcare regulations. However, you are responsible for ensuring that your use of our services complies with all local, state, and federal laws and regulations governing your practice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
              <p className="text-gray-600">
                If you have questions about this medical disclaimer or our services, please contact us at 801-910-8183 or through our consultation services.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">OnCall Dental</h3>
            <p className="text-gray-300 mb-4">
              24/7 dental consultation services for medical professionals. 
              Expert guidance when you need it most.
            </p>
            <div className="flex items-center text-gray-300">
              <Phone className="mr-2" size={16} />
              <span>801-910-8183</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/access" className="hover:text-blue-400 transition-colors">Access</a></li>
              <li><a href="/tools" className="hover:text-blue-400 transition-colors">Tools</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="/disclaimer" className="hover:text-blue-400 transition-colors">Medical Disclaimer</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 OnCall Dental. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Available 24/7 for dental consultation needs
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/access" element={<AccessPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/disclaimer" element={<MedicalDisclaimerPage />} />
          <Route path="/contact" element={<Navigate to="/about" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

