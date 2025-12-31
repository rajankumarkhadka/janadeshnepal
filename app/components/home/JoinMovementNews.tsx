'use client';

import { useState } from 'react';
import Container from '../layout/Container';
import Image from 'next/image';

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
        <Container className='relative'>
          <div className="bg-[#c8f7dc] py-12   relative overflow-hidden">
            <div className="">
              <h2 className="text-3xl font-semibold text-[#1baa5a] mb-10">Join The Movement</h2>
              <div className="space-y-4 ">
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className="px-6 py-2 rounded-full max-w-max border-white/60 border bg-green-600  hover:bg-green-800 text-white font-normal shadow-lg  transition duration-300"
                  >
                    <span className="relative z-10">Join Now</span>
                    </button>

                  </div>                
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-30 justify-right -top-14  right-24 hidden md:block ">
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
    </>
  );
}