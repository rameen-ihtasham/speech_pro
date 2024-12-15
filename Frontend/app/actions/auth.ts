'use server';

import { redirect } from 'next/navigation';

export async function loginUser(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  // Here you would typically validate the user credentials
  // and create a session or JWT token
  console.log('Login attempt:', { email, password });

  // For demo purposes, we'll just redirect to a dashboard
  redirect('/dashboard');
}

export async function signupUser(userData: {
  name: string;
  email: string;
  password: string;
  fluencyLevel: string;
}) {
  // Here you would typically create a new user in your database
  // and create a session or JWT token
  console.log('New user signup:', userData);

  // For demo purposes, we'll just redirect to a dashboard
  redirect('/dashboard');
}
