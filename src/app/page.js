'use client'

import { useState } from "react";
import CitiesTraveled from "@/components/CitiesTraveled";
import PersonalInfo from "@/components/PersonalInfo";
import SubmitButton from "@/components/SubmitButton";


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
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover bg-gradient-to-r from-purple-500 to-red-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <form>
          <PersonalInfo onChange={handlePersonalInfoChange} values={personalInfo} />
          <CitiesTraveled 
            cities={cities}
            onCityChange={handleCityChange}
            onAddCity={handleAddCity}
            onRemoveCity={handleRemoveCity}
          />
          <SubmitButton onSubmit={handleSubmit} />
        </form>
        {submittedData && (
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold to-gray-800">Submitted Data</h2>
            <pre className="whitespace-pre-wrap">{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  )
  
}

export default Home;


