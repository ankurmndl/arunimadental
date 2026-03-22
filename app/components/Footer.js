'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-teal-50 text-teal-900 py-12 px-4 border-t border-teal-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + Tagline */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Esthetix Dental</h3>
          <p className="text-sm text-teal-700">
            Cosmetic & Implant Dentistry in Ranchi
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-teal-800">
            <li><Link href="/" className="hover:text-teal-600">Home</Link></li>
            <li><Link href="/services" className="hover:text-teal-600">Services</Link></li>
            <li><Link href="/about" className="hover:text-teal-600">About</Link></li>
            <li><Link href="/contact" className="hover:text-teal-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-teal-800">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <span>Esthetix Dental, Near Mall of Ranchi, Ranchi</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+919999999999" className="hover:text-teal-600">+91 7677279977</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@esthetixdental.com" className="hover:text-teal-600">info@esthetixdental.com</a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            {/* <a href="#" className="hover:text-teal-600"><Facebook /></a>
            <a href="#" className="hover:text-teal-600"><Instagram /></a> */}
            <a href="#" className="hover:text-teal-600" aria-label="Facebook" title="Facebook">
              <Facebook />
            </a>
            <a href="#" className="hover:text-teal-600" aria-label="Instagram" title="Instagram">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-teal-200 pt-6 text-center text-sm text-teal-600">
        © {new Date().getFullYear()} Esthetix Dental. All rights reserved.
      </div>
    </footer>
  );
}
