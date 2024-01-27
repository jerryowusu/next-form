const SubmitButton = ({ onSubmit }) => {
    return (
        <div>
            <button 
              type="button" 
              onClick={onSubmit}
              className="p-2 text-white bg-green-500"
            >
                Submit
            </button>
        </div>
    )
}

export default SubmitButton;