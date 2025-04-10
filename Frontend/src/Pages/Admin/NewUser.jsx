import React, { useState } from 'react';
import axios from '../../axiosRoute';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { TextField, MenuItem } from '@mui/material';
import dayjs from 'dayjs';

const roles = ['Admin', 'Employee', 'Servicer']; // Update as per your system

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    empID: '',
    role: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    dob: '',
    age: '',
    address: '',
    joiningDate: '',
    department: '',
    jobRole: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Auto calculate age from DOB
  const handleDOBChange = (e) => {
    const dob = e.target.value;
    const calculatedAge = dayjs().diff(dayjs(dob), 'year');
    setFormData({ ...formData, dob, age: calculatedAge });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Assumes token is stored
      const res = await axios.post('/register', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage(res.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setMessage('');
    }
  };

  return (
    <Container className="mt-4 p-4 shadow rounded bg-light">
      <h3 className="mb-4 text-center text-primary font-weight-bold">Register New User</h3>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <TextField fullWidth label="Employee ID" name="empID" value={formData.empID} onChange={handleChange} required />
          </Col>
          <Col md={6}>
            <TextField
              fullWidth select label="Role" name="role" value={formData.role} onChange={handleChange} required>
              {roles.map(role => (
                <MenuItem key={role} value={role}>{role}</MenuItem>
              ))}
            </TextField>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <TextField fullWidth label="Username" name="username" value={formData.username} onChange={handleChange} required />
          </Col>
          <Col md={6}>
            <TextField fullWidth type="email" label="Email" name="email" value={formData.email} onChange={handleChange} required />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <TextField fullWidth label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </Col>
          <Col md={6}>
            <TextField fullWidth type="password" label="Password" name="password" value={formData.password} onChange={handleChange} required />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <TextField fullWidth type="date" label="DOB" name="dob" value={formData.dob} onChange={handleDOBChange} InputLabelProps={{ shrink: true }} required />
          </Col>
          <Col md={6}>
            <TextField fullWidth label="Age" name="age" value={formData.age} InputProps={{ readOnly: true }} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} required />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <TextField fullWidth type="date" label="Joining Date" name="joiningDate" value={formData.joiningDate} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
          </Col>
          <Col md={3}>
            <TextField fullWidth label="Department" name="department" value={formData.department} onChange={handleChange} required />
          </Col>
          <Col md={3}>
            <TextField fullWidth label="Job Role" name="jobRole" value={formData.jobRole} onChange={handleChange} required />
          </Col>
        </Row>

        <Button type="submit" variant="primary" className="w-100">Register User</Button>
      </form>
    </Container>
  );
};

export default RegisterUser;
