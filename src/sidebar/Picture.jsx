import React from 'react'
import profile from '../assets/profile.jpg';

function Picture() {
    return (
        <div className="w-44 h-44 rounded-full bg-white p-[2.5px] flex items-center justify-center shadow-md mx-auto">
            <img
                src={profile}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
            />
        </div>
    )
}

export default Picture;