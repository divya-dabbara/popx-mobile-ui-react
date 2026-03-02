import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('popx_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate('/login');
        }
    }, [navigate]);

    if (!user) return null;

    return (
        <div className="page account-page">
            <h2 className="account-title">Account Settings</h2>
            <div className="account-header">
                <div className="profile-section">
                    <img
                        className="profile-avatar"
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=popx"
                        alt="Profile"
                    />
                    <div className="profile-info">
                        <h3>{user.fullName}</h3>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>

            <div className="account-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="account-divider" />
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>
    );
}

export default Account;
