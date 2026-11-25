
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              RentPredict
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Discover smarter rental decisions with data-driven property
              rent predictions. Find the right property at the right price.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#predict" className="hover:text-white transition">Predict Rent</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li><a href="#prediction" className="hover:text-white transition">Rent Estimation</a></li>
              <li><a href="#analysis" className="hover:text-white transition">Property Analysis</a></li>
              <li><a href="#location" className="hover:text-white transition">Location Insights</a></li>
              <li><a href="#market" className="hover:text-white transition">Rental Market Trends</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>Email: support@rentpredict.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Kerala, India</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} RentPredict. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
