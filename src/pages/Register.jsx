import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        isAgency: 'no',
    });

    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('popx_user', JSON.stringify(form));
        navigate('/account');
    };

    return (
        <div className="page form-page">
            <h2>Create your PopX account</h2>

            <form className="form" onSubmit={handleSubmit}>
                <InputField
                    label="Full Name"
                    value={form.fullName}
                    onChange={handleChange('fullName')}
                    required
                    placeholder="Enter full name"
                />

                <InputField
                    label="Phone Number"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    required
                    placeholder="Enter phone number"
                />

                <InputField
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    required
                    placeholder="Enter email address"
                />

                <InputField
                    label="Password"
                    type="password"
                    value={form.password}
                    onChange={handleChange('password')}
                    required
                    placeholder="Enter password"
                />

                <InputField
                    label="Company Name"
                    value={form.company}
                    onChange={handleChange('company')}
                    placeholder="Enter company name"
                />

                <div className="radio-group">
                    <span>Are you an Agency?<span className="required">*</span></span>
                    <div className="radio-options">
                        <label>
                            <input
                                type="radio"
                                name="agency"
                                value="yes"
                                checked={form.isAgency === 'yes'}
                                onChange={handleChange('isAgency')}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="agency"
                                value="no"
                                checked={form.isAgency === 'no'}
                                onChange={handleChange('isAgency')}
                            />
                            No
                        </label>
                    </div>
                </div>

                <Button text="Create Account" type="submit" className="btn-primary" />
            </form>
        </div>
    );
}

export default Register;
