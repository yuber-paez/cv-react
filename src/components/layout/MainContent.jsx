import React from 'react';
import Header from '../../main/Header';
import Rol from '../../main/Rol';
import ProfileSection from '../../main/ProfileSection';
import Skills from '../../main/Skills';
import Projects from '../../main/Projects';

function MainContent() {
    return (
        <main className="bg-gray-200 p-8">
            <Header />
            
            <Rol/>

            <ProfileSection />

            <Skills />

            <Projects />
        </main>
    )
}

export default MainContent