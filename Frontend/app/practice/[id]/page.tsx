'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { PromptDisplay } from '../../components/PromptDisplay';
import { AudioRecorder } from '../../components/AudioRecorder';
import { FeedbackModal } from '../../components/FeedbackModal';

// Mock data for prompts (in a real app, this would come from an API or database)
const allPrompts = [
  {
    id: 1,
    text: 'The quick brown fox jumps over the lazy dog.',
    difficulty: 'Easy' as const,
  },
  {
    id: 2,
    text: 'She sells seashells by the seashore.',
    difficulty: 'Medium' as const,
  },
  {
    id: 3,
    text: 'Peter Piper picked a peck of pickled peppers.',
    difficulty: 'Difficult' as const,
  },
  {
    id: 4,
    text: 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
    difficulty: 'Medium' as const,
  },
  {
    id: 5,
    text: 'I scream, you scream, we all scream for ice cream.',
    difficulty: 'Easy' as const,
  },
  {
    id: 6,
    text: 'Supercalifragilisticexpialidocious is a very long word.',
    difficulty: 'Difficult' as const,
  },
];

export default function PracticePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentPrompt, setCurrentPrompt] = useState(allPrompts[0]);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const prompt = allPrompts.find((p) => p.id === parseInt(params.id));
    if (prompt) {
      setCurrentPrompt(prompt);
    } else {
      router.push('/prompts');
    }
  }, [params.id, router]);

  const handleAudioSubmit = (audio: Blob) => {
    // Simulate AI processing
    setTimeout(() => {
      const simulatedAccuracy = Math.floor(Math.random() * 41) + 60; // Random accuracy between 60-100%
      setAccuracy(simulatedAccuracy);
      setFeedback(generateFeedback(simulatedAccuracy));
      setIsFeedbackModalOpen(true);
    }, 2000);
  };

  const generateFeedback = (accuracy: number) => {
    if (accuracy >= 90) {
      return 'Excellent pronunciation! Keep up the great work.';
    } else if (accuracy >= 75) {
      return 'Good job! Try to focus on the rhythm and intonation of the sentence.';
    } else {
      return "Nice effort! Practice breaking down the sentence into smaller parts and focus on each word's pronunciation.";
    }
  };

  const handleNextPrompt = () => {
    setIsFeedbackModalOpen(false);
    const nextPrompt = allPrompts.find(
      (p) =>
        p.difficulty === currentPrompt.difficulty && p.id > currentPrompt.id
    );
    if (nextPrompt) {
      router.push(`/practice/${nextPrompt.id}`);
    } else {
      router.push('/prompts');
    }
  };

  const handleBackToPrompts = () => {
    router.push('/prompts');
  };

  return (
    <div className='container mx-auto p-4 max-w-2xl'>
      <h1 className='text-3xl font-bold mb-6'>Practice Your Pronunciation</h1>
      <PromptDisplay
        prompt={currentPrompt.text}
        difficulty={currentPrompt.difficulty}
      />
      <div className='mt-8 space-y-4'>
        <AudioRecorder onAudioSubmit={handleAudioSubmit} />
        <div className='flex justify-between'>
          <Button onClick={handleBackToPrompts} variant='outline'>
            Back to All Prompts
          </Button>
          <Button onClick={handleNextPrompt} variant='default'>
            Next Prompt
          </Button>
        </div>
      </div>
      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
        accuracy={accuracy}
        feedback={feedback}
        onNextPrompt={handleNextPrompt}
        onQuit={handleBackToPrompts}
      />
    </div>
  );
}
