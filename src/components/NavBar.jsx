import { useState } from 'react';
import {Link} from "react-router"
const NavBar = () =>{
    const [hoveredLink, setHoveredLink] = useState(null);

    const linkStyle = (isHovered) => ({
        textDecoration: 'none',
        color: isHovered ? '#ffffff' : '#333',
        fontWeight: 'bold',
        transition: 'all 0.3s',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        backgroundColor: isHovered ? '#007bff' : 'transparent'
    });

    return (
        <nav style={{
            background: 'linear-gradient(90deg, #b5b5b9 0%, #764ba2 100%)',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            borderBottom: '2px solid #5a67d8',
            borderRadius: '0 0 10px 10px'
        }}>
            <Link to="/Home" style={{ textDecoration: 'none', color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>MyApp</Link>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Link 
                    to="/Home" 
                    style={linkStyle(hoveredLink === 'home')}
                    onMouseEnter={() => setHoveredLink('home')}
                    onMouseLeave={() => setHoveredLink(null)}
                >🏠 Home</Link>
                <Link 
                    to="/Profile" 
                    style={linkStyle(hoveredLink === 'about')}
                    onMouseEnter={() => setHoveredLink('about')}
                    onMouseLeave={() => setHoveredLink(null)}
                >👤 Profile</Link>
                <Link 
                    to="/Signup" 
                    style={linkStyle(hoveredLink === 'students')}
                    onMouseEnter={() => setHoveredLink('students')}
                    onMouseLeave={() => setHoveredLink(null)}
                >📝 Signup</Link>
                <Link 
                    to="/Success" 
                    style={linkStyle(hoveredLink === 'success')}
                    onMouseEnter={() => setHoveredLink('success')}
                    onMouseLeave={() => setHoveredLink(null)}
                >✅ Success</Link>
            </div>
        </nav>
    )
}

export default NavBar;