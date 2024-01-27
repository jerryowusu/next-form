'use client';

import { useState } from "react";
import CitiesTraveled from "@/components/CitiesTraveled";
import PersonalInfo from "@/components/PersonalInfo";
import SubmitButton from "@/components/SubmitButton";
import Footer from "@/components/Footer";


const Home = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    dob: '', 
  });

  const [cities, setCities] = useState([
    {
      dateArrived: '', 
      cityName: '',
    }
  ]);

  const [submittedData, setSubmittedData] = useState(null)
  
  const handlePersonalInfoChange = (event) => {
     setPersonalInfo({
      ...personalInfo, 
      [event.target.name]: event.target.value
     });
  }

  const handleCityChange = ( index, event ) => {
    const updatedCities = [...cities]
    updatedCities[index][event.target.name] = event.target.value;
    setCities(updatedCities);
  };

  const handleAddCity = () => {
    setCities(
      [...cities, 
        { 
          dateArrived: '', 
          cityName: ''
        }
      ])
  }

  const handleRemoveCity = (index) => {
    const updatedCities = [...cities];
    updatedCities.splice(index, 1);
    setCities(updatedCities)
  }

  const handleSubmit = () => {
    const formData = ({personalInfo, cities });
      setSubmittedData(formData);
    }

    
  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-[160px] sm:p-6 p-4">
        <h3 className="text-2xl font-bold text-white sm:text-3xl">Enter Your Personal Information</h3>
      </div>

      <div className="mx-4 mb-4 -mt-16">
        <form className="max-w-6xl mx-auto bg-white shadow-[0_20px_18px_-3px_rgba(6,81,237,0.2)] sm:p-8 p-4 rounded-md">
          <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">

          <PersonalInfo onChange={handlePersonalInfoChange} values={personalInfo} />
          <CitiesTraveled 
            cities={cities}
            onCityChange={handleCityChange}
            onAddCity={handleAddCity}
            onRemoveCity={handleRemoveCity}
          />
          </div>

          <SubmitButton onSubmit={handleSubmit} />
        </form>
        <div className="flex max-w-6xl mx-auto shadow-[0px_20px_18px_-3px_rgba(6,81,237,0.2)] sm:p-8 p-4 rounded-md">
        {submittedData && (
          <div className="mx-auto mt-20">
            <h2 className="mb-4 text-2xl font-bold to-gray-800">Submitted Data</h2>
            <pre className="whitespace-pre-wrap">{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}
        </div>
      </div>
      <Footer />
    </div>
  )
  
}

export default Home;


