'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PromptListItem } from '../components/PromptListItem';
import Link from 'next/link';

// Mock data for prompts
const allPrompts = [
  { text: 'The cat sleeps peacefully on the mat.', difficulty: 'Easy', id: 1 },
  { text: 'I enjoy apples, bananas, and oranges.', difficulty: 'Easy', id: 2 },
  {
    text: 'The sun rises in the east and sets in the west.',
    difficulty: 'Easy',
    id: 3,
  },
  {
    text: 'She sings melodiously and dances every evening.',
    difficulty: 'Easy',
    id: 4,
  },
  {
    text: 'The blue sky, full of fluffy clouds, looks beautiful.',
    difficulty: 'Easy',
    id: 5,
  },
  {
    text: 'He drinks water frequently to stay hydrated.',
    difficulty: 'Easy',
    id: 6,
  },
  {
    text: 'They run quickly, trying to catch the departing bus.',
    difficulty: 'Easy',
    id: 7,
  },
  {
    text: 'The teacher, kind and patient, explained the concept clearly.',
    difficulty: 'Medium',
    id: 8,
  },
  {
    text: 'The bakery offers freshly baked goods, including bread, muffins, and pies.',
    difficulty: 'Medium',
    id: 9,
  },
  {
    text: 'The library, a serene haven, houses an extensive collection of books and journals.',
    difficulty: 'Medium',
    id: 10,
  },
  {
    text: 'The doctor recommended proper rest, a balanced diet, and adequate hydration.',
    difficulty: 'Medium',
    id: 11,
  },
  {
    text: "The gardener planted vibrant, fragrant flowers, enhancing the garden's appeal.",
    difficulty: 'Medium',
    id: 12,
  },
  {
    text: 'The city council convened to discuss budget allocation for upcoming projects.',
    difficulty: 'Medium',
    id: 13,
  },
  {
    text: "The artist skillfully painted a vivid landscape, capturing nature's essence.",
    difficulty: 'Medium',
    id: 14,
  },
  {
    text: 'The tourists marveled at the breathtaking view from the mountain summit, admiring the horizon.',
    difficulty: 'Medium',
    id: 15,
  },
  {
    text: 'Rapid technological advancements have revolutionized industries, reshaping global interactions.',
    difficulty: 'Hard',
    id: 16,
  },
  {
    text: 'She articulated her perspective with eloquence, navigating the debate with dexterity and poise.',
    difficulty: 'Hard',
    id: 17,
  },
  {
    text: 'The architecture, characterized by intricate carvings and symmetrical designs, left visitors spellbound.',
    difficulty: 'Hard',
    id: 18,
  },
  {
    text: 'He meticulously devised the project plan, accounting for potential obstacles and contingencies.',
    difficulty: 'Hard',
    id: 19,
  },
  {
    text: 'The philosophical discourse explored existential dilemmas, challenging conventional paradigms and assumptions.',
    difficulty: 'Hard',
    id: 20,
  },
  {
    text: 'The comprehensive book delved into economic theories, juxtaposing classical and modern interpretations.',
    difficulty: 'Hard',
    id: 21,
  },
  {
    text: 'She conducted a groundbreaking experiment, validating the hypothesis through rigorous testing and analysis.',
    difficulty: 'Hard',
    id: 22,
  },
  {
    text: "The professor's lecture traversed the complexities of quantum mechanics, elucidating theoretical nuances.",
    difficulty: 'Hard',
    id: 23,
  },
  {
    text: 'The negotiation required astute diplomacy, addressing multifaceted issues with precision and tact.',
    difficulty: 'Hard',
    id: 24,
  },
  {
    text: 'The historical narrative unveiled the intricacies of past conflicts, offering insights into societal transformations.',
    difficulty: 'Hard',
    id: 25,
  },
];

export default function PromptsPage() {
  const [filter, setFilter] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>(
    'All'
  );

  const filteredPrompts =
    filter === 'All'
      ? allPrompts
      : allPrompts.filter((prompt) => prompt.difficulty === filter);

  return (
    <div className='container mx-auto p-4 max-w-4xl'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>All Prompts</h1>
        <Button asChild>
          <Link href='/dashboard'>Back to Dashboard</Link>
        </Button>
      </div>
      <div className='mb-6'>
        <Select
          onValueChange={(value: 'All' | 'Easy' | 'Medium' | 'Hard') =>
            setFilter(value)
          }
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Filter by difficulty' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='All'>All Difficulties</SelectItem>
            <SelectItem value='Easy'>Easy</SelectItem>
            <SelectItem value='Medium'>Medium</SelectItem>
            <SelectItem value='Hard'>Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {filteredPrompts.map((prompt) => (
          <PromptListItem key={prompt.id} {...prompt} />
        ))}
      </div>
    </div>
  );
}
