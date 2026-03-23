import { useState } from "react";
import { useNavigate } from 'react-router';


const Signup = ({addUser}) => {
    const [formData, setFormData] = useState({ FirstName: "", Surname: "", Username: "", Email: "", Password: "", course: "" });
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        addUser(formData);
        navigate('/Success');
    };
    
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    return (
        <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", fontFamily: "Arial", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
            <form>
                <div style={{ marginBottom: "16px" }}>
                    <label>First Name:</label>
                    <input type="text" name="FirstName" value={formData.FirstName} onChange={onChange} style={{ width: "100%", padding: "8px", marginTop: "4px" }} />
                </div>
                <div style={{ marginBottom: "16px" }}>
                    <label>Surname:</label>
                    <input type="text" name="Surname" value={formData.Surname} onChange={onChange} style={{ width: "100%", padding: "8px", marginTop: "4px" }} />
                </div>
                <div style={{ marginBottom: "16px" }}>
                    <label>Username:</label>
                    <input type="text" name="Username" value={formData.Username} onChange={onChange} style={{ width: "100%", padding: "8px", marginTop: "4px" }} />
                </div>
                <div style={{ marginBottom: "16px" }}>
                    <label>Password:</label>
                    <input type="password" name="Password" value={formData.Password} onChange={onChange} style={{ width: "100%", padding: "8px", marginTop: "4px" }} />
                </div>
                <div style={{ marginBottom: "16px" }}>
                    <label>Email:</label>
                    <input type="email" name="Email" value={formData.Email} onChange={onChange} style={{ width: "100%", padding: "8px", marginTop: "4px" }} />
                </div>
                <button type="submit" onClick={onSubmit} style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Signup;