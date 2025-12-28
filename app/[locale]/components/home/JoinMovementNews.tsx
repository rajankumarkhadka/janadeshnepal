'use client';

import { useState } from 'react';
import Container from '../layout/Container';

export default function JoinMovementNews() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    province: 'Province',
    memberType: 'Member'
  });

  const newsData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
      date: 'Manzir 18, 2082',
      title: 'नयाँ युवाहरूको समावेश तथा सशक्तिकरण',
      description: 'Digital governance clarifies whos responsible for the management and operation of'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=400&h=300&fit=crop',
      date: 'Manzir 15, 2082',
      title: 'नयाँ युवाहरूको समावेश तथा सशक्तिकरण',
      description: 'Digital governance clarifies whos responsible for the management and operation of'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
      date: 'Manzir 12, 2082',
      title: 'नयाँ युवाहरूको समावेश तथा सशक्तिकरण',
      description: 'Digital governance clarifies whos responsible for the management and operation of'
    }
  ];

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };
  const inputClass =
    "px-4 py-3 rounded-md border border-green-600 bg-[#c8f7dc] text-[#1a73e8] placeholder-[#1a73e8] " +
    "focus:outline-none focus:ring-0 focus:border-green-600 transition-colors";


  return (
    <>
      <div className=" bg-[#c8f7dc] ">
        <Container>

          {/* Join The Movement Section */}
          <div className="bg-[#c8f7dc] py-16  relative overflow-hidden">
            {/* Decorative Birds */}
            <div className="absolute top-8 right-20">
              <svg width="30" height="30" viewBox="0 0 30 30" className="text-blue-400 opacity-60">
                <path d="M8,15 Q12,10 16,15 Q20,10 24,15" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="absolute top-12 right-32">
              <svg width="25" height="25" viewBox="0 0 25 25" className="text-blue-500 opacity-50">
                <path d="M6,12 Q10,8 14,12 Q18,8 22,12" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="absolute top-20 right-48">
              <svg width="35" height="35" viewBox="0 0 35 35" className="text-blue-600 opacity-40">
                <path d="M8,17 Q14,12 20,17 Q26,12 32,17" stroke="currentColor" strokeWidth="2.5" fill="none" />
              </svg>
            </div>
            <div className="absolute top-16 right-64">
              <svg width="28" height="28" viewBox="0 0 28 28" className="text-blue-500 opacity-45">
                <path d="M7,14 Q11,10 15,14 Q19,10 23,14" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="absolute top-24 right-80">
              <svg width="32" height="32" viewBox="0 0 32 32" className="text-blue-700 opacity-50">
                <path d="M8,16 Q13,11 18,16 Q23,11 28,16" stroke="currentColor" strokeWidth="2.5" fill="none" />
              </svg>
            </div>

            <div className="">
              <h2 className="text-3xl font-bold text-[#1baa5a] mb-8">Join The Movement</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      />

                      <select
                        value={formData.province}
                        onChange={(e) =>
                          setFormData({ ...formData, province: e.target.value })
                        }
                        className={inputClass}
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
                      />

                      <input
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={inputClass}
                      />

                    </div>

                    <div className="flex gap-6">
                      {["Member", "Volunteer", "Donor"].map((type) => (
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

                          {/* Outer circle */}
                          <div
                            className="
          w-5 h-5 rounded-full border-2 border-[#22C55E]
          flex items-center justify-center
          transition-colors
          group-hover:bg-green-100
        "
                          >
                            {/* Inner dot */}
                            <div
                              className="
            w-2.5 h-2.5 rounded-full bg-[#22C55E]
            scale-0
            transition-transform
            group-has-[input:checked]:scale-100
          "
                            />
                          </div>

                          <span className="text-green-800 font-medium">
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>


                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-colors max-w-max"
                    >
                      Join Now
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </>

  );
}