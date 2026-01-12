'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import Container from '../layout/Container';
import Image from 'next/image';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export default function JoinMovementNews() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    province: 'Province',
    memberType: 'Member', // keep for UI only
  });

  const inputClass =
    "px-4 py-3 rounded-md border border-green-600 bg-[#c8f7dc] text-[#1a73e8] placeholder-[#1a73e8] " +
    "focus:outline-none focus:ring-0 focus:border-green-600 transition-colors";

  // React Query mutation for POST request
  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      // Map frontend fields to API fields
      const payload = {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        address: data.province,
        skills: '',        // optional
        availability: '',  // optional
        is_active: false   // optional, defaults to false
      };

      const res = await fetch(`${API_BASE}/volunteers/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.detail || 'Failed to submit');
      }

      return res.json();
    },
    onSuccess: () => {
      alert('Thank you for joining!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        province: 'Province',
        memberType: 'Member',
      });
    },
    onError: (error: any) => {
      alert(error.message || 'Failed to submit');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="bg-[#c8f7dc]">
      <Container className="relative">
        <div className="bg-[#c8f7dc] py-12 relative overflow-hidden">
          <div>
            <h2 className="text-3xl font-semibold text-[#1baa5a] mb-10">
              Join The Movement
            </h2>
            <div className="space-y-4">
              <form
                onSubmit={handleSubmit}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="flex flex-col gap-4">
                  {/* Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={inputClass}
                      required
                    />

                    <select
                      value={formData.province}
                      onChange={(e) =>
                        setFormData({ ...formData, province: e.target.value })
                      }
                      className={inputClass}
                      required
                    >
                      <option value="">Select Province</option>
                      <option>Koshi</option>
                      <option>Gandaki</option>
                      <option>Madhesh</option>
                      <option>Bagmati</option>
                      <option>Lumbini</option>
                      <option>Sudurpashchim</option>
                      <option>Karnali</option>
                    </select>

                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={inputClass}
                      required
                    />

                    <input
                      type="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={inputClass}
                      required
                    />
                  </div>

                  {/* Member Type (UI only) */}
                  <div className="flex gap-6">
                    {['Member', 'Volunteer', 'Donor'].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="memberType"
                          value={type}
                          checked={formData.memberType === type}
                          onChange={(e) =>
                            setFormData({ ...formData, memberType: e.target.value })
                          }
                          className="sr-only"
                        />
                        <div className="w-5 h-5 rounded-full border-2 border-[#22C55E] flex items-center justify-center transition-colors group-hover:bg-green-100">
                          <div
                            className={`w-2.5 h-2.5 rounded-full bg-[#22C55E] ${
                              formData.memberType === type ? 'scale-100' : 'scale-0'
                            } transition-transform`}
                          />
                        </div>
                        <span className="text-green-800 font-medium">{type}</span>
                      </label>
                    ))}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full max-w-max border-white/60 border bg-green-600 hover:bg-green-800 text-white font-normal shadow-lg transition duration-300"
                  >
                    {mutation.isPending ? 'Submitting...' : 'Join Now'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Decorative image */}
        <div className="absolute z-30 justify-right -top-14 right-24 hidden md:block">
          <div className="relative">
            <Image
              src="/assets/birds.png"
              alt="Join the Movement Illustration"
              width={500}
              height={200}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
