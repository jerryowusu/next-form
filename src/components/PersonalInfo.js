const PersonalInfo = ({ onChange, values }) => {
  return (
    <div className="mb-6">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={onChange}
                  className="w-full p-2 border"
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName"
                  name="lastName"
                  value={values.lastName}
                  onChange={onChange}
                  className="w-full p-2 border"
                />
            </div>
            <div>
                <label htmlFor="dob">Date of Birth</label>
                <input 
                  type="date" 
                  id="dob"
                  name="dob"
                  value={values.dob}
                  onChange={onChange}
                  className="w-full p-2 border"
                />
            </div>
        </div>
    </div>
  );
};

export default PersonalInfo;