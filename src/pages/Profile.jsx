import { useParams, Link } from "react-router";

const Profile = ({ users = [] }) => {
    const { id } = useParams();

    if (id !== undefined) {
        const user = users[id];
        if (!user) {
            return (
                <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", fontFamily: "Arial", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                    <h2>User Not Found</h2>
                    <Link to="/Profile" style={{ color: "#007bff", textDecoration: "none" }}>Back to Profiles</Link>
                </div>
            );
        }

        return (
            <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", fontFamily: "Arial", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <h2>{user.FirstName} {user.Surname}</h2>
                <div style={{ marginBottom: "12px" }}>
                    <strong>Username:</strong> {user.Username}
                </div>
                <div style={{ marginBottom: "12px" }}>
                    <strong>Email:</strong> {user.Email}
                </div>
                <Link to="/Profile" style={{ color: "#007bff", textDecoration: "none" }}>Back to Profiles</Link>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px", fontFamily: "Arial", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <h2>Registered Users</h2>
            {users.length === 0 ? (
                <p>No users registered yet.</p>
            ) : (
                <div>
                    {users.map((user, index) => (
                        <div key={index} style={{ marginBottom: "16px", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", backgroundColor: "#fff" }}>
                            <h4>{user.FirstName} {user.Surname}</h4>
                            <p><strong>Username:</strong> {user.Username}</p>
                            <p><strong>Email:</strong> {user.Email}</p>
                            <Link to={`/Profile/${index}`} style={{ color: "#007bff", textDecoration: "none" }}>View Profile</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Profile;