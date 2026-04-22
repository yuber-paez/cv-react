import React from 'react'
import DataHeader from '../data/DataHeader';

function Header() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
           
            <h1 style={{
                fontSize: '60px',
                fontWeight: '400',
                lineHeight: '1',
                letterSpacing: '-2px',
                color: '#000000',
                textTransform: 'uppercase'
            }}>
                {DataHeader.name}
            </h1>

            <h1 style={{
                fontSize: '62px',
                fontWeight: '780',
                lineHeight: '0.9',
                letterSpacing: '1px', 
                color: '#000000',
                textTransform: 'uppercase'
            }}>
                {DataHeader.lastName}
            </h1>
        </div>
    )
}

export default Header