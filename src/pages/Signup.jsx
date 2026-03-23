import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  FirstName: Yup.string()
    .matches(/^[A-Za-z]{2,}$/, 'First Name must contain only letters and be at least 2 characters long')
    .required('First Name is required'),
  Surname: Yup.string()
    .matches(/^[A-Za-z]{2,}$/, 'Surname must contain only letters and be at least 2 characters long')
    .required('Surname is required'),
  Username: Yup.string()
    .matches(/^[A-Za-z0-9._-]+$/, 'Username can only contain letters, numbers, dots, underscores, and hyphens')
    .required('Username is required'),
  Email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  Password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_ ]).{8,16}$/, 'Password must be 8-16 characters and include uppercase, lowercase, number, and special character')
    .required('Password is required'),
});

const Signup = ({addUser}) => {
    const navigate = useNavigate();

    const formik = useFormik({
      initialValues: {
        FirstName: '',
        Surname: '',
        Username: '',
        Email: '',
        Password: '',
      },
      validationSchema,
      onSubmit: (values, { resetForm }) => {
        addUser(values);
        resetForm();
        navigate('/Success');
      },
    });
    return (
        <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", fontFamily: "Arial", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
            <form onSubmit={formik.handleSubmit}>
                <div style={{ marginBottom: "16px" }}>
                    <label>First Name:</label>
                    <input type="text" name="FirstName" value={formik.values.FirstName} onChange={formik.handleChange} onBlur={formik.handleBlur} style={{ width: "100%", padding: "8px", marginTop: "4px", border: formik.touched.FirstName && formik.errors.FirstName ? "2px solid red" : "2px solid #333", borderRadius: "4px" }} />
                    {formik.touched.FirstName && formik.errors.FirstName && <span style={{ color: "red", fontSize: "14px" }}>{formik.errors.FirstName}</span>}
                </div>
                <div style={{ marginBottom: "16px" }}>
                    <label>Surname:</label>
                    <input type="text" name="Surname" value={formik.values.Surname} onChange={formik.handleChange} onBlur={formik.handleBlur} style={{ width: "100%", padding: "8px", marginTop: "4px", border: formik.touched.Surname && formik.errors.Surname ? "2px solid red" : "2px solid #333", borderRadius: "4px" }} />
                    {formik.touched.Surname && formik.errors.Surname && <span style={{ color: "red", fontSize: "14px" }}>{formik.errors.Surname}</span>}
                </div>
                <div style={{ marginBottom: "16px" }}>
                    <label>Username:</label>
                    <input type="text" name="Username" value={formik.values.Username} onChange={formik.handleChange} onBlur={formik.handleBlur} style={{ width: "100%", padding: "8px", marginTop: "4px", border: formik.touched.Username && formik.errors.Username ? "2px solid red" : "2px solid #333", borderRadius: "4px" }} />
                    {formik.touched.Username && formik.errors.Username && <span style={{ color: "red", fontSize: "14px" }}>{formik.errors.Username}</span>}
                </div>
                <div style={{ marginBottom: "16px" }}>
                    <label>Password:</label>
                    <input type="password" name="Password" value={formik.values.Password} onChange={formik.handleChange} onBlur={formik.handleBlur} style={{ width: "100%", padding: "8px", marginTop: "4px", border: formik.touched.Password && formik.errors.Password ? "2px solid red" : "2px solid #333", borderRadius: "4px" }} />
                    {formik.touched.Password && formik.errors.Password && <span style={{ color: "red", fontSize: "14px" }}>{formik.errors.Password}</span>}
                </div>
                <div style={{ marginBottom: "16px" }}>
                    <label>Email:</label>
                    <input type="email" name="Email" value={formik.values.Email} onChange={formik.handleChange} onBlur={formik.handleBlur} style={{ width: "100%", padding: "8px", marginTop: "4px", border: formik.touched.Email && formik.errors.Email ? "2px solid red" : "2px solid #333", borderRadius: "4px" }} />
                    {formik.touched.Email && formik.errors.Email && <span style={{ color: "red", fontSize: "14px" }}>{formik.errors.Email}</span>}
                </div>
                <button type="submit" disabled={!formik.isValid || !formik.dirty} style={{ width: "100%", padding: "10px", backgroundColor: formik.isValid && formik.dirty ? "#007bff" : "#87878b", color: "#fff", border: "none", borderRadius: "4px", cursor: formik.isValid && formik.dirty ? "pointer" : "not-allowed" }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Signup;