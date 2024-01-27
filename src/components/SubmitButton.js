const SubmitButton = ({ onSubmit }) => {
    return (
        <div className="flex flex-col items-center">
            <button 
              type="button" 
              onClick={onSubmit}
              className="min-w-[150px] w-[40%] py-3 px-4 text-md font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none mt-4"
            >
                Submit
            </button>
        </div>
    )
}

export default SubmitButton;