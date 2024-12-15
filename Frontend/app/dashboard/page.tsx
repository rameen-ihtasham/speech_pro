'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Trophy, Star, Target } from 'lucide-react';

// Mock data - replace with actual data from your backend
const userData = {
  name: 'Rameen',
  totalPractices: 50,
  streak: 7,
  level: 'Intermediate',
  practicesByDifficulty: {
    easy: 20,
    medium: 25,
    difficult: 5,
  },
  practiceData: [
    { date: '2023-06-01', count: 3 },
    { date: '2023-06-02', count: 5 },
    { date: '2023-06-03', count: 2 },
    { date: '2023-06-04', count: 4 },
    { date: '2023-06-05', count: 6 },
    { date: '2023-06-06', count: 3 },
    { date: '2023-06-07', count: 4 },
  ],
  recentAchievements: [
    {
      icon: Trophy,
      title: '5-Day Streak',
      description: 'Practiced for 5 consecutive days',
    },
    {
      icon: Star,
      title: 'Pronunciation Pro',
      description: 'Achieved 95% accuracy in a difficult session',
    },
    {
      icon: Target,
      title: 'Goal Crusher',
      description: 'Completed 10 practice sessions this week',
    },
  ],
};

export default function Dashboard() {
  const [chartPeriod, setChartPeriod] = useState('week');

  return (
    <div className='container mx-auto p-4'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-3xl font-bold mb-6'>
          Welcome back, {userData.name}!
        </h1>
        <Button asChild variant={'secondary'}>
          <Link href='/'>Logout</Link>
        </Button>
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{userData.totalPractices}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Current Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{userData.streak} days</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Start Practicing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild className='w-full'>
              <Link href='/practice'>Begin Session</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Want to see all prompts?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild className='w-full' variant={'outline'}>
              <Link href='/prompts'>Go to prompts</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className='grid gap-4 md:grid-cols-2 mt-6'>
        <Card>
          <CardHeader>
            <CardTitle>Practice by Difficulty</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <div className='text-sm font-medium'>Easy</div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>
                    {userData.practicesByDifficulty.easy}
                  </div>
                </div>
                <Progress
                  value={
                    (userData.practicesByDifficulty.easy /
                      userData.totalPractices) *
                    100
                  }
                  className='h-2'
                />
              </div>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <div className='text-sm font-medium'>Medium</div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>
                    {userData.practicesByDifficulty.medium}
                  </div>
                </div>
                <Progress
                  value={
                    (userData.practicesByDifficulty.medium /
                      userData.totalPractices) *
                    100
                  }
                  className='h-2'
                />
              </div>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <div className='text-sm font-medium'>Difficult</div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>
                    {userData.practicesByDifficulty.difficult}
                  </div>
                </div>
                <Progress
                  value={
                    (userData.practicesByDifficulty.difficult /
                      userData.totalPractices) *
                    100
                  }
                  className='h-2'
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {userData.recentAchievements.map((achievement, index) => (
                <div key={index} className='flex items-center space-x-4'>
                  <div className='flex-shrink-0'>
                    <achievement.icon className='h-6 w-6 text-yellow-400' />
                  </div>
                  <div>
                    <p className='text-sm font-medium'>{achievement.title}</p>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className='md:col-span-2'>
          <CardHeader>
            <CardTitle>Practice Sessions</CardTitle>
          </CardHeader>
          <CardContent className='pt-2'>
            <Tabs defaultValue='week' className='space-y-4'>
              <TabsList>
                <TabsTrigger
                  value='week'
                  onClick={() => setChartPeriod('week')}
                >
                  This Week
                </TabsTrigger>
                <TabsTrigger
                  value='month'
                  onClick={() => setChartPeriod('month')}
                >
                  This Month
                </TabsTrigger>
                <TabsTrigger
                  value='year'
                  onClick={() => setChartPeriod('year')}
                >
                  This Year
                </TabsTrigger>
              </TabsList>
              <TabsContent value='week' className='space-y-4'>
                <ChartContainer
                  config={{
                    count: {
                      label: 'Practice Sessions',
                      color: 'hsl(var(--chart-1))',
                    },
                  }}
                  className='h-[300px]'
                >
                  <ResponsiveContainer width='100%' height='100%'>
                    <LineChart
                      data={userData.practiceData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis dataKey='date' />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type='monotone'
                        dataKey='count'
                        stroke='var(--color-count)'
                        name='Practice Sessions'
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </TabsContent>
              <TabsContent value='month'>
                {/* Add monthly chart here */}
                <div className='text-center text-gray-500'>
                  Monthly data visualization coming soon
                </div>
              </TabsContent>
              <TabsContent value='year'>
                {/* Add yearly chart here */}
                <div className='text-center text-gray-500'>
                  Yearly data visualization coming soon
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
