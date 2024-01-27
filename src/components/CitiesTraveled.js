const CitiesTraveled = ({ cities, onCityChange, onAddCity, onRemoveCity }) => {
  return (
    <div className="mb-6">
        <h2 className="mb-4 text-2xl font-bold to-gray-800">Cities Traveled</h2>
        {cities.map((city, index) => (
            <div key={index}>
              <div className="mt-4">
                  <label className="block mb-2 text-sm" htmlFor={`dateArrived${index}`}>Date Arrived</label>
                  <input 
                    type="date" 
                    id={`dateArrived${index}`}
                    name="dateArrived"
                    value={city.dateArrived}
                    onChange={(event) => onCityChange(index, event)}
                    className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md outline-blue-500"
                  />
              </div>
              <div>
                  <label className="block mb-2 text-sm" htmlFor={`cityName${index}`}>City Name</label>
                  <input 
                    type="text" 
                    id={`cityName${index}`}
                    name="cityName"
                    value={city.cityName}
                    onChange={(event) => onCityChange(index, event)}
                    className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md outline-blue-500"
                  />
              </div>
              {index > 0 && (
                <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => onRemoveCity(index)}
                      className="mt-4 text-red-500"
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
          className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded-md
           text-white bg-gray-400 hover:bg-blue-500 focus:outline-none mt-4"
        >
            Add City
        </button>
    </div>
  )
}

export default CitiesTraveled;