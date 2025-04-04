import { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || "/";
  
    const handleLogout = () => {
        logOut()
            .then(() => {
                alert("Sign-out successful");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };

    return (
        <div className='h-screen flex bg-teal-100 items-center justify-center'>
            <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
