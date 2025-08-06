'use client';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gradient-to-tl from-purple-900 via-black to-purple-700 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div className="space-y-2">
          <h3 className="text-2xl font-display font-bold">ADmyBRAND AI Suite</h3>
          <p className="text-sm text-white/80">
            Empowering your marketing with AI-driven automation, analytics, and insights.
          </p>
        </div>

        {/* Links & Resources */}
        <div className="space-y-2">
          <h4 className="font-semibold">Resources</h4>
          <ul className="space-y-1 text-sm text-white/80">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-2">
          <h4 className="font-semibold">Get in Touch</h4>
          <div className="flex items-center text-sm text-white/80">
            <Mail className="w-4 h-4 mr-2" />
            <a href="mailto:hello@admybrand.ai" className="hover:text-white">
              hello@admybrand.ai
            </a>
          </div>
          <div className="flex items-center text-sm text-white/80">
            <Phone className="w-4 h-4 mr-2" />
            <a href="tel:+1234567890" className="hover:text-white">
              +1 (234) 567-890
            </a>
          </div>
          <div className="flex space-x-4 mt-2">
            <Link href="https://facebook.com" target="_blank" className="hover:text-white">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-white/50">
        © 2025 ADmyBRAND. All rights reserved.
      </div>
    </footer>
  );
}
