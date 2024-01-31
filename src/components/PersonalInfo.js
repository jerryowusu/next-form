const PersonalInfo = ({ onPersonalChange, personalInfo }) => {
  return (
    <div className="mb-6">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Personal Information</h2>
        <div>
            <div>
                <label className="block mb-2 text-sm" htmlFor="firstName" >First Name</label>
                <input 
                  type="text" 
                  id="firstName"
                  name="firstName"
                  value={personalInfo.firstName}
                  onChange={onPersonalChange}
                  className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md outline-blue-500"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm" htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName"
                  name="lastName"
                  value={personalInfo.lastName}
                  onChange={onPersonalChange}
                  className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md outline-blue-500"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm" htmlFor="dob">Date of Birth</label>
                <input 
                  type="date" 
                  id="dob"
                  name="dob"
                  value={personalInfo.dob}
                  onChange={onPersonalChange}
                  className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md outline-blue-500"
                />
            </div>
        </div>
    </div>
  );
};

export default PersonalInfo;