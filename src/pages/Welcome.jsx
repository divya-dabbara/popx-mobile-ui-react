import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function Welcome() {
    const navigate = useNavigate();

    return (
        <div className="page welcome-page">
            <div>
                <h1>Welcome to PopX</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="welcome-buttons">
                    <Button
                        text="Create Account"
                        className="btn-primary"
                        onClick={() => navigate('/register')}
                    />
                    <Button
                        text="Already Registered? Login"
                        className="btn-secondary"
                        onClick={() => navigate('/login')}
                    />
                </div>
            </div>
        </div>
    );
}

export default Welcome;
