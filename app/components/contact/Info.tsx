'use client';

import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[#2772b0] mb-6">
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

        {/* RIGHT SIDE – FORM */}
        <div className=" rounded-3xl p-8 shadow-sm bg- bg-gray-200">
          <h2 className="text-3xl font-bold text-[#2772b0] mb-6">
            Send us a Message
          </h2>

          <form className="space-y-5 b">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  text-gray-700">
              <div>
                <label className="text-sm font-medium ">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full bg-white rounded-lg border border-gray-300 px-4 py-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full bg-white rounded-lg border border-gray-300 px-4 py-2 focus:outline-none "
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                className="mt-1 w-full bg-white text-gray-700 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none "
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={5}
                className="mt-1 w-full rounded-lg bg-white border border-gray-300 px-4 py-2 resize-none focus:outline-none text-gray-700"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
