const CitiesTraveled = ({ cities, onCityChange, onAddCity, onRemoveCity }) => {
  return (
    <div className="mb-6">
        <h2 className="mb-4 text-2xl font-bold to-gray-800">Cities Traveled</h2>
        {cities.map((city, index) => (
            <div key={index} className="grid grid-cols-2 gap-4">
              <div>
                  <label htmlFor={`dateArrived${index}`}>Date Arrived</label>
                  <input 
                    type="date" 
                    id={`dateArrived${index}`}
                    name="dateArrived"
                    value={city.dateArrived}
                    onChange={(event) => onCityChange(index, event)}
                    className="w-full p-2 border"
                  />
              </div>
              <div>
                  <label htmlFor={`cityName${index}`}>City Name</label>
                  <input 
                    type="text" 
                    id={`cityName${index}`}
                    name="cityName"
                    value={city.cityName}
                    onChange={(event) => onCityChange(index, event)}
                    className="w-full p-2 border"
                  />
              </div>
              {index > 0 && (
                <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => onRemoveCity(index)}
                      className="text-red-500"
                    >
                        Remove
                    </button>
                </div>
              )}
            </div>            
        ))}
        <button
          type="button"
          onClick={onAddCity}
          className="p-2 mt-4 text-white bg-blue-500"
        >
            Add City
        </button>
    </div>
  )
}

export default CitiesTraveled;