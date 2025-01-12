import React from 'react'
import { Info } from 'lucide-react'  // Import an icon from lucide-react

const Sponsors = () => {
    return (
        <div className="text-center py-12">
            <h2 className="text-3xl font-bold mb-8">Our Sponsors</h2>

            {/* Commented out the sponsor logos */}
            {/* <div className="flex justify-center space-x-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
                <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
                <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
                <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
            </div> */}

            {/* To be announced message */}
            <p className="text-lg text-gray-500 mt-4">
                To be announced soon....
            </p>
        </div>
    )
}

export default Sponsors
