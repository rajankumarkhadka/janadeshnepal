"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, User, FileText, Upload, CheckCircle } from 'lucide-react';
import PageHeader from '../../components/layout/PageHeader';
import { useTranslations } from 'next-intl';

// Membership Application Form with Steps
const MembershipFormBasic = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    province: '',
    district: '',
    municipality: '',
    ward: '',
    tole: '',
    citizenshipNo: '',
    photo: null as File | null,
    citizenship: null as File | null,
    agreed: false
  });

  const steps = [
    { id: 1, title: 'व्यक्तिगत विवरण', icon: User },
    { id: 2, title: 'ठेगाना विवरण', icon: FileText },
    { id: 3, title: 'कागजात अपलोड', icon: Upload },
    { id: 4, title: 'समीक्षा र पेश', icon: CheckCircle },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('आवेदन सफलतापूर्वक पेश गरियो!');

  };
    const t = useTranslations('register');
  

  return (
    <>
    <div className="">
      <PageHeader
              title={t('title')}
              subtitle={t('subtitle')}
            />
            
    </div>
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">सदस्यता आवेदन फारम</h1>
          <p className="text-lg opacity-90">कृपया सबै विवरण सही रूपमा भर्नुहोस्</p>
        </div>

        {/* Steps Indicator */}
        <div className="bg-gray-50 p-8">
          <div className="flex justify-between items-center relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 hidden md:block">
              <div 
                className="h-full bg-blue-600 transition-all duration-500"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Steps */}
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;

              return (
                <div key={step.id} className="flex flex-col items-center relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted
                        ? 'bg-green-500 text-white'
                        : isActive
                        ? 'bg-blue-600 text-white scale-110'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {isCompleted ? <Check size={24} /> : <Icon size={24} />}
                  </div>
                  <p
                    className={`mt-3 text-xs md:text-sm font-medium text-center ${
                      isActive ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">व्यक्तिगत विवरण</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    पुरा नाम <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="आफ्नो पुरा नाम लेख्नुहोस्"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    बुबाको नाम <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="बुबाको नाम लेख्नुहोस्"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    आमाको नाम <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="आमाको नाम लेख्नुहोस्"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    जन्म मिति <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    लिङ्ग <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">छान्नुहोस्</option>
                    <option value="male">पुरुष</option>
                    <option value="female">महिला</option>
                    <option value="other">अन्य</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    फोन नम्बर <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="९८XXXXXXXX"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    इमेल ठेगाना
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Address Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ठेगाना विवरण</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    प्रदेश <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">छान्नुहोस्</option>
                    <option value="province1">प्रदेश १</option>
                    <option value="madhesh">मधेश प्रदेश</option>
                    <option value="bagmati">बागमती प्रदेश</option>
                    <option value="gandaki">गण्डकी प्रदेश</option>
                    <option value="lumbini">लुम्बिनी प्रदेश</option>
                    <option value="karnali">कर्णाली प्रदेश</option>
                    <option value="sudurpaschim">सुदूरपश्चिम प्रदेश</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    जिल्ला <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="जिल्लाको नाम"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    नगरपालिका/गाउँपालिका <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="municipality"
                    value={formData.municipality}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="नगरपालिका/गाउँपालिका"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    वडा नम्बर <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="ward"
                    value={formData.ward}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="वडा नम्बर"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    टोल/बस्ती <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="tole"
                    value={formData.tole}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="टोल/बस्तीको नाम"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Document Upload */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">कागजात अपलोड</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    नागरिकता नम्बर <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="citizenshipNo"
                    value={formData.citizenshipNo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="नागरिकता नम्बर"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    पासपोर्ट साइज फोटो <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  <p className="mt-2 text-sm text-gray-500">JPG, PNG वा GIF (अधिकतम 2MB)</p>
                  {formData.photo && (
                    <p className="mt-2 text-sm text-green-600">✓ {formData.photo.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    नागरिकताको प्रतिलिपि <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    name="citizenship"
                    onChange={handleFileChange}
                    accept="image/*,application/pdf"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  <p className="mt-2 text-sm text-gray-500">PDF वा Image (अधिकतम 5MB)</p>
                  {formData.citizenship && (
                    <p className="mt-2 text-sm text-green-600">✓ {formData.citizenship.name}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review and Submit */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">समीक्षा र पेश</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-lg">व्यक्तिगत विवरण</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div><span className="font-medium">पुरा नाम:</span> {formData.fullName || '-'}</div>
                    <div><span className="font-medium">बुबाको नाम:</span> {formData.fatherName || '-'}</div>
                    <div><span className="font-medium">आमाको नाम:</span> {formData.motherName || '-'}</div>
                    <div><span className="font-medium">जन्म मिति:</span> {formData.dob || '-'}</div>
                    <div><span className="font-medium">लिङ्ग:</span> {formData.gender || '-'}</div>
                    <div><span className="font-medium">फोन:</span> {formData.phone || '-'}</div>
                    {formData.email && <div className="md:col-span-2"><span className="font-medium">इमेल:</span> {formData.email}</div>}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-700 mb-3 text-lg">ठेगाना विवरण</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div><span className="font-medium">प्रदेश:</span> {formData.province || '-'}</div>
                    <div><span className="font-medium">जिल्ला:</span> {formData.district || '-'}</div>
                    <div><span className="font-medium">नगरपालिका:</span> {formData.municipality || '-'}</div>
                    <div><span className="font-medium">वडा:</span> {formData.ward || '-'}</div>
                    <div className="md:col-span-2"><span className="font-medium">टोल:</span> {formData.tole || '-'}</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-700 mb-3 text-lg">कागजात</h3>
                  <div className="text-sm space-y-2">
                    <div><span className="font-medium">नागरिकता नम्बर:</span> {formData.citizenshipNo || '-'}</div>
                    <div><span className="font-medium">फोटो:</span> {formData.photo?.name || 'अपलोड गरिएको छैन'}</div>
                    <div><span className="font-medium">नागरिकता:</span> {formData.citizenship?.name || 'अपलोड गरिएको छैन'}</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="mt-1 mr-3" 
                  />
                  <p className="text-sm text-gray-700">
                    म घोषणा गर्दछु कि मैले माथि दिइएका सबै विवरणहरू सत्य र सही छन्। 
                    यदि कुनै विवरण गलत पाइयो भने म कानुनी रूपमा जिम्मेवार हुनेछु।
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft size={20} className="mr-2" />
              पछाडि
            </button>

            {currentStep < steps.length ? (
              <button
                onClick={nextStep}
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
              >
                अर्को
                <ChevronRight size={20} className="ml-2" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!formData.agreed}
                className={`flex items-center px-8 py-3 rounded-lg font-medium transition-all ${
                  formData.agreed
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Check size={20} className="mr-2" />
                पेश गर्नुहोस्
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MembershipFormBasic;