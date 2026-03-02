import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const storedUser = localStorage.getItem('popx_user');

        if (!storedUser) {
            setError('No account found. Please register first.');
            return;
        }

        const user = JSON.parse(storedUser);

        if (user.email === email && user.password === password) {
            navigate('/account');
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="page form-page">
            <h2>Sign in to your PopX account</h2>
            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <form className="form" onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}

                <InputField
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter email address"
                />

                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter password"
                />

                <Button text="Login" type="submit" className="btn-primary" />
            </form>
        </div>
    );
}

export default Login;
