import { Link } from "wouter";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-school-orange rounded-full flex items-center justify-center">
                <GraduationCap className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold">DRS</h3>
                <p className="text-sm text-gray-400">Discipline Resolute High School</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Providing quality education and holistic development for students from pre-primary to senior secondary levels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about"><a className="text-gray-400 hover:text-white transition-colors">About Us</a></Link></li>
              <li><Link href="/academics"><a className="text-gray-400 hover:text-white transition-colors">Academics</a></Link></li>
              <li><Link href="/admissions"><a className="text-gray-400 hover:text-white transition-colors">Admissions</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-400 hover:text-white transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              <li><Link href="/academics#pre-primary"><a className="text-gray-400 hover:text-white transition-colors">Pre-Primary</a></Link></li>
              <li><Link href="/academics#primary"><a className="text-gray-400 hover:text-white transition-colors">Primary</a></Link></li>
              <li><Link href="/academics#secondary"><a className="text-gray-400 hover:text-white transition-colors">Secondary</a></Link></li>
              <li><Link href="/academics#senior-secondary"><a className="text-gray-400 hover:text-white transition-colors">Senior Secondary</a></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-school-orange mt-1 w-5 h-5" />
                <div className="text-gray-400">
                  DRS<br />
                  Discipline Resolute High School<br />
                  Dindi Rd, Devarakonda, Kacharam Agraharam,<br />
                  Telangana 508248
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-school-orange w-5 h-5" />
                <span className="text-gray-400">9124542111</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-school-orange w-5 h-5" />
                <span className="text-gray-400">drsinstitutions@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DRS. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
