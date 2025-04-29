import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const navigate = useNavigate();
  const api = 'https://my-blog-app-6bjg.onrender.com'
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${api}/api/auth/register`, form);
      alert('Registered successfully');
      navigate('/login')
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}
