import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { loginUser } from '../actions/auth';

export default function LoginPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Login</h1>
          <p className='mt-2 text-sm text-gray-600'>
            Welcome back! Please login to your account.
          </p>
        </div>
        <form action={loginUser} className='mt-8 space-y-6'>
          <div className='space-y-4'>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' name='email' type='email' required />
            </div>
            <div>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' name='password' type='password' required />
            </div>
          </div>
          <div>
            <Button type='submit' className='w-full'>
              Login
            </Button>
          </div>
        </form>
        <div className='mt-4 text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link
            href='/signup'
            className='font-medium text-blue-600 hover:underline'
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
