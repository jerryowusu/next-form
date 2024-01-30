const Footer = () => {
    return (
        <footer className="font-[sans-serif] text-[#333] text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-[160px] sm:p-6 p-4">
            <div className="px-4 py-8 sm:px-12">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full mb-6 text-center md:w-auto md:text-left md:mb-0">
                        <a href="#" className="text-2xl font-extrabold text-white hover:text-gray-500">Jerry</a>
                    </div>
                    <div className="w-full text-center md:w-auto">
                        <ul className="flex flex-wrap items-center justify-center space-x-6 gap-y-2 md:justify-end">
                            <li><a href="#" className="text-base text-white hover:text-gray-900">Home</a></li>
                            <li><a href="#" className="text-base text-white hover:text-gray-900">About</a></li>
                            <li><a href="#" className="text-base text-white hover:text-gray-900">Services</a></li>
                            <li><a href="#" className="text-base text-white hover:text-gray-900">Contact</a></li>
                        </ul>
                    </div>
                </div>
                    <hr className="my-6 border-gray-300"/>
                    <p className="text-base text-center text-white-700">
                        Copyright @ 2024 
                        <a href="#" target="blank" className="mx-1 hover:underline">
                            Jerry
                        </a> 
                        All Rights Reserved
                    </p>
            </div>
        </footer>
    )
}

export default Footer;