'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { PromptDisplay } from '../components/PromptDisplay';
import { AudioRecorder } from '../components/AudioRecorder';
import { FeedbackModal } from '../components/FeedbackModal';
import axios, { AxiosResponse } from 'axios';
import { Spinner } from '../components/ui/spinner';

// Mock data for prompts
const prompts = [
  { text: 'The cat sleeps peacefully on the mat.', difficulty: 'Easy' },
  { text: 'I enjoy apples, bananas, and oranges.', difficulty: 'Easy' },
  {
    text: 'The sun rises in the east and sets in the west.',
    difficulty: 'Easy',
  },
  {
    text: 'She sings melodiously and dances every evening.',
    difficulty: 'Easy',
  },
  {
    text: 'The blue sky, full of fluffy clouds, looks beautiful.',
    difficulty: 'Easy',
  },
  { text: 'He drinks water frequently to stay hydrated.', difficulty: 'Easy' },
  {
    text: 'They run quickly, trying to catch the departing bus.',
    difficulty: 'Easy',
  },
  {
    text: 'The teacher, kind and patient, explained the concept clearly.',
    difficulty: 'Medium',
  },
  {
    text: 'The bakery offers freshly baked goods, including bread, muffins, and pies.',
    difficulty: 'Medium',
  },
  {
    text: 'The library, a serene haven, houses an extensive collection of books and journals.',
    difficulty: 'Medium',
  },
  {
    text: 'The doctor recommended proper rest, a balanced diet, and adequate hydration.',
    difficulty: 'Medium',
  },
  {
    text: "The gardener planted vibrant, fragrant flowers, enhancing the garden's appeal.",
    difficulty: 'Medium',
  },
  {
    text: 'The city council convened to discuss budget allocation for upcoming projects.',
    difficulty: 'Medium',
  },
  {
    text: "The artist skillfully painted a vivid landscape, capturing nature's essence.",
    difficulty: 'Medium',
  },
  {
    text: 'The tourists marveled at the breathtaking view from the mountain summit, admiring the horizon.',
    difficulty: 'Medium',
  },
  {
    text: 'Rapid technological advancements have revolutionized industries, reshaping global interactions.',
    difficulty: 'Hard',
  },
  {
    text: 'She articulated her perspective with eloquence, navigating the debate with dexterity and poise.',
    difficulty: 'Hard',
  },
  {
    text: 'The architecture, characterized by intricate carvings and symmetrical designs, left visitors spellbound.',
    difficulty: 'Hard',
  },
  {
    text: 'He meticulously devised the project plan, accounting for potential obstacles and contingencies.',
    difficulty: 'Hard',
  },
  {
    text: 'The philosophical discourse explored existential dilemmas, challenging conventional paradigms and assumptions.',
    difficulty: 'Hard',
  },
  {
    text: 'The comprehensive book delved into economic theories, juxtaposing classical and modern interpretations.',
    difficulty: 'Hard',
  },
  {
    text: 'She conducted a groundbreaking experiment, validating the hypothesis through rigorous testing and analysis.',
    difficulty: 'Hard',
  },
  {
    text: "The professor's lecture traversed the complexities of quantum mechanics, elucidating theoretical nuances.",
    difficulty: 'Hard',
  },
  {
    text: 'The negotiation required astute diplomacy, addressing multifaceted issues with precision and tact.',
    difficulty: 'Hard',
  },
  {
    text: 'The historical narrative unveiled the intricacies of past conflicts, offering insights into societal transformations.',
    difficulty: 'Hard',
  },
];

export default function PracticePage() {
  const router = useRouter();
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [transcript, setTranscript] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const currentPrompt = prompts[currentPromptIndex];

  const handleAudioSubmit = async (audio: Blob) => {
    setIsLoading(true);
    // Simulate AI processing
    const formData = new FormData();
    formData.append('file', audio, 'audio.webm');
    formData.append('reference_text', currentPrompt['text']);
    const response: AxiosResponse<{
      reference_text: string;
      transcription: string;
      reference_phonemes: string;
      user_phonemes: string;
      similarity_score: number;
      feedback: string;
    }> = await axios.post(
      ' https://2f18-35-243-201-115.ngrok-free.app/analyze-pronunciation',
      formData
    );

    console.log(response['data']['similarity_score']);

    setAccuracy(response['data']['similarity_score']);
    setFeedback(response['data']['feedback']);
    setTranscript(response['data']['transcription']);

    setIsLoading(false);
    setIsFeedbackModalOpen(true);
  };

  const handleNextPrompt = () => {
    setIsFeedbackModalOpen(false);
    setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
  };

  const handleChangePrompt = () => {
    setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
  };

  const handleQuit = () => {
    router.push('/dashboard');
  };

  return (
    <div className='container mx-auto p-4 max-w-2xl'>
      <h1 className='text-3xl font-bold mb-6'>Practice Your Pronunciation</h1>
      <PromptDisplay
        prompt={currentPrompt.text}
        difficulty={currentPrompt.difficulty}
      />
      <div className='mt-8 space-y-4'>
        {isLoading ? (
          <>
            <div className='flex flex-col items-center space-y-4'>
              <Button disabled={true}>
                <Spinner className='mr-2' />
                Processing...
              </Button>
            </div>
          </>
        ) : (
          <>
            <AudioRecorder onAudioSubmit={handleAudioSubmit} />
          </>
        )}
        <div className='flex justify-between'>
          <Button onClick={handleChangePrompt} variant='outline'>
            Change Prompt
          </Button>
          <Button onClick={handleQuit} variant='destructive'>
            Quit Practice
          </Button>
        </div>
      </div>
      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
        accuracy={accuracy}
        feedback={feedback}
        transcript={transcript}
        onNextPrompt={handleNextPrompt}
        onQuit={handleQuit}
      />
    </div>
  );
}
