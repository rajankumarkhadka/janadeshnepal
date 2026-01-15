'use client';

import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="">
        
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-[#2772b0] mb-6">
            Contact Information
          </h2>

          {/* Address */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <MapPin className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Central Office</p>
              <p className="text-gray-600">
                Janadesh Party HQ, Maitighar Mandala<br />
                Kathmandu, Nepal
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Phone className="text-green-600" size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <p className="text-gray-600">+977-01-4XXXXXX</p>
              <p className="text-gray-600">+977-98XXXXXXXX</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Mail className="text-purple-600" size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-gray-600">info@janadeshnepal.org</p>
              <p className="text-gray-600">media@janadeshnepal.org</p>
            </div>
          </div>

          {/* MAP PLACEHOLDER */}
          <div className="h-[220px] rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500 text-sm border">
            Map Placeholder (Google Maps Integration)
          </div>
        </div>

        
    </section>
  );
}
