"use client"
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event:any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Your form submission logic here
    console.log(formData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <form style={{ width: '100%', marginTop: '8px' }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
          >
            Log In
          </Button>
        </form>
      </div>
      <div>
        <p> Do not have an account? <Link href={"/signup"}>Signup</Link></p>
      </div>
    </Container>
  );
};

export default Login;