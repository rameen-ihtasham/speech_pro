'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { signupUser } from '../actions/auth';

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    fluencyLevel: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFluencyChange = (value: string) => {
    setFormData({ ...formData, fluencyLevel: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      signupUser(formData);
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Sign Up</h1>
          <p className='mt-2 text-sm text-gray-600'>
            Create your account to get started
          </p>
        </div>
        <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
          {step === 1 && (
            <div className='space-y-4'>
              <div>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className='space-y-4'>
              <div>
                <Label htmlFor='password'>Password</Label>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          )}
          {step === 3 && (
            <div className='space-y-4'>
              <Label>English Fluency Level</Label>
              <RadioGroup
                value={formData.fluencyLevel}
                onValueChange={handleFluencyChange}
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='beginner' id='beginner' />
                  <Label htmlFor='beginner'>Beginner</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='intermediate' id='intermediate' />
                  <Label htmlFor='intermediate'>Intermediate</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='pro' id='pro' />
                  <Label htmlFor='pro'>Pro</Label>
                </div>
              </RadioGroup>
            </div>
          )}
          <div>
            <Button type='submit' className='w-full'>
              {step < 3 ? 'Next' : 'Sign Up'}
            </Button>
          </div>
        </form>
        <div className='mt-4 text-center text-sm'>
          Already have an account?{' '}
          <Link
            href='/login'
            className='font-medium text-blue-600 hover:underline'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
