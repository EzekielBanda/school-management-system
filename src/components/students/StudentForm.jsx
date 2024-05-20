import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: 'Male',
    bloodGroup: '',
    nationality: '',
    category: '',
    religion: '',
    email: '',
    phone: '',
    mobileNo: '',
    photo: null,
    studentAddress: '',
    admissionNo: '',
    joiningDate: '',
    rollNo: '',
    parentFirstName: '',
    parentLastName: '',
    relation: '',
    parentOccupation: '',
    parentEmail: '',
    parentPhone: '',
    parentMobileNo: '',
    parentAddress: '',
    sameAddress: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudentData({ ...studentData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleFileChange = (e) => {
    setStudentData({ ...studentData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Data:', studentData);
  
    axios.post('/api/students', studentData)
      .then(response => {
        console.log('Server Response:', response);
        setSuccessMessage('Form submitted successfully!');
        setErrorMessage(''); // Clear any previous error messages
        // Handle success (e.g., show a success message, clear form)
      })
      .catch(error => {
        console.error('There was an error!', error);
        // Handle error (e.g., show an error message)
        setErrorMessage('There was an error submitting the form. Please try again.');
        setSuccessMessage(''); // Clear any previous success messages
        
      });
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Add Student</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Student Name</label>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={studentData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="mt-1 block w-full px-3 py-2 
                  border border-gray-300 rounded-md shadow-sm 
                  focus:outline-none focus:ring-indigo-500
                   focus:border-indigo-500 sm:text-sm"
                />
                <input
                  type="text"
                  name="lastName"
                  value={studentData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="mt-1 block w-full px-3 py-2 
                  border border-gray-300 rounded-md shadow-sm 
                  focus:outline-none focus:ring-indigo-500
                   focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={studentData.dob}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <div className="mt-2 flex gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={studentData.gender === 'Male'}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 
                    border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-indigo-500
                     focus:border-indigo-500 sm:text-sm"/>
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={studentData.gender === 'Female'}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 
                    border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-indigo-500
                     focus:border-indigo-500 sm:text-sm"/>
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Blood Group</label>
              <select
                name="bloodGroup"
                value={studentData.bloodGroup}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
                 >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={studentData.nationality}
                onChange={handleChange}
                placeholder="Nationality"
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={studentData.category}
                onChange={handleChange}
                placeholder="Category"
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Religion</label>
              <input
                type="text"
                name="religion"
                value={studentData.religion}
                onChange={handleChange}
                placeholder="Religion"
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={studentData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={studentData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile No</label>
              <input
                type="tel"
                name="mobileNo"
                value={studentData.mobileNo}
                onChange={handleChange}
                placeholder="Mobile No"
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleFileChange}
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Student Address</label>
            <textarea
              name="studentAddress"
              value={studentData.studentAddress}
              onChange={handleChange}
              placeholder="Address"
              rows="3"
              className="mt-1 block w-full px-3 py-2 
              border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-indigo-500
               focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Admission No</label>
            <input
              type="text"
              name="admissionNo"
              value={studentData.admissionNo}
              onChange={handleChange}
              placeholder="Admission No"
              className="mt-1 block w-full px-3 py-2 
              border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-indigo-500
               focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Joining Date</label>
            <input
              type="date"
              name="joiningDate"
              value={studentData.joiningDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 
              border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-indigo-500
               focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Roll No</label>
            <input
              type="text"
              name="rollNo"
              value={studentData.rollNo}
              onChange={handleChange}
              placeholder="Roll No"
              className="mt-1 block w-full px-3 py-2 
              border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-indigo-500
               focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent First Name</label>
              <input
                type="text"
                name="parentFirstName"
                value={studentData.parentFirstName}
                onChange={handleChange}
                placeholder="Parent First Name"
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent Last Name</label>
              <input
                type="text"
                name="parentLastName"
                value={studentData.parentLastName}
                onChange={handleChange}
                placeholder="Parent Last Name"
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Relation</label>
            <input
              type="text"
              name="relation"
              value={studentData.relation}
              onChange={handleChange}
              placeholder="Relation"
              className="mt-1 block w-full px-3 py-2 
              border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-indigo-500
               focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parent Occupation</label>
            <input
              type="text"
              name="parentOccupation"
              value={studentData.parentOccupation}
              onChange={handleChange}
              placeholder="Occupation"
              className="mt-1 block w-full px-3 py-2 
              border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-indigo-500
               focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent Email</label>
              <input
                type="email"
                name="parentEmail"
                value={studentData.parentEmail}
                onChange={handleChange}
                placeholder="Parent Email"
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Parent Phone</label>
              <input
                type="tel"
                name="parentPhone"
                value={studentData.parentPhone}
                onChange={handleChange}
                placeholder="Parent Phone"
                className="mt-1 block w-full px-3 py-2 
                border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parent Mobile No</label>
            <input
              type="tel"
              name="parentMobileNo"
              value={studentData.parentMobileNo}
              onChange={handleChange}
              placeholder="Parent Mobile No"
              className="mt-1 block w-full px-3 py-2 
              border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-indigo-500
               focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parent Address</label>
            <textarea
              name="parentAddress"
              value={studentData.parentAddress}
              onChange={handleChange}
              placeholder="Parent Address"
              rows="3"
              className="mt-1 block w-full px-3 py-2 
              border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-indigo-500
               focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="sameAddress"
              checked={studentData.sameAddress}
              onChange={handleChange}
              className="text-indigo-600 border-gray-300
               focus:border-indigo-500 focus:ring
                focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label className="ml-2 text-sm font-medium text-gray-700">Same Address as Student</label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default StudentForm;
