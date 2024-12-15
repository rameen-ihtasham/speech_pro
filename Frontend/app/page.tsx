import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MicIcon, BookOpenIcon, TrophyIcon, BarChartIcon } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <MicIcon className='h-6 w-6' />
          <span className='ml-2 text-lg font-bold'>Speech Pro</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#features'
          >
            Features
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#how-it-works'
          >
            How It Works
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#testimonials'
          >
            Testimonials
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Master Pronunciation with AI
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Improve your language skills with personalized, AI-powered
                  pronunciation lessons tailored to your level.
                </p>
              </div>
              <div className='space-x-4'>
                <Button asChild>
                  <Link href='/signup'>Get Started</Link>
                </Button>
                <Button variant='outline' asChild>
                  <Link href='#how-it-works'>Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id='features'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              Key Features
            </h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                <MicIcon className='h-12 w-12 text-primary' />
                <h3 className='text-xl font-bold'>AI-Powered Feedback</h3>
                <p className='text-gray-500 dark:text-gray-400 text-center'>
                  Get instant, accurate feedback on your pronunciation
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                <BookOpenIcon className='h-12 w-12 text-primary' />
                <h3 className='text-xl font-bold'>Personalized Lessons</h3>
                <p className='text-gray-500 dark:text-gray-400 text-center'>
                  Lessons tailored to your skill level and progress
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                <TrophyIcon className='h-12 w-12 text-primary' />
                <h3 className='text-xl font-bold'>Level System</h3>
                <p className='text-gray-500 dark:text-gray-400 text-center'>
                  Track your improvement and unlock new challenges
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id='how-it-works' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              How It Works
            </h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                <BarChartIcon className='h-12 w-12 text-primary' />
                <h3 className='text-xl font-bold'>1. Assess Your Level</h3>
                <p className='text-gray-500 dark:text-gray-400 text-center'>
                  Take a quick assessment to determine your starting point
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                <BookOpenIcon className='h-12 w-12 text-primary' />
                <h3 className='text-xl font-bold'>2. Practice with AI</h3>
                <p className='text-gray-500 dark:text-gray-400 text-center'>
                  Get personalized texts and record your pronunciation
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                <TrophyIcon className='h-12 w-12 text-primary' />
                <h3 className='text-xl font-bold'>3. Improve and Advance</h3>
                <p className='text-gray-500 dark:text-gray-400 text-center'>
                  Receive feedback, track progress, and level up your skills
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id='testimonials'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              What Our Users Say
            </h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                <p className='text-gray-500 dark:text-gray-400 text-center'>
                  "This app has significantly improved my pronunciation. The AI
                  feedback is spot-on!"
                </p>
                <p className='font-bold'>- Sarah K.</p>
              </div>
              <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                <p className='text-gray-500 dark:text-gray-400 text-center'>
                  "I love how the app adapts to my level. It's like having a
                  personal tutor."
                </p>
                <p className='font-bold'>- John D.</p>
              </div>
              <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                <p className='text-gray-500 dark:text-gray-400 text-center'>
                  "The level system keeps me motivated to practice every day.
                  Highly recommended!"
                </p>
                <p className='font-bold'>- Emma R.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Ready to Improve Your Pronunciation?
                </h2>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Join thousands of learners who have enhanced their language
                  skills with our AI-powered tutor.
                </p>
              </div>
              <div className='space-x-4'>
                <Button asChild size='lg'>
                  <Link href='/signup'>Get Started for Free</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 AI Pronunciation Tutor. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
