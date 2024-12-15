import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import ReactMarkdown from 'react-markdown';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  accuracy: number;
  feedback: string;
  transcript: string;
  onNextPrompt: () => void;
  onQuit: () => void;
}

export function FeedbackModal({
  isOpen,
  onClose,
  accuracy,
  feedback,
  transcript,
  onNextPrompt,
  onQuit,
}: FeedbackModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pronunciation Feedback</DialogTitle>
          <DialogDescription>
            Here&apos;s how you did on this prompt:
          </DialogDescription>
        </DialogHeader>
        <div className='py-4'>
          <h3 className='text-lg font-semibold mb-2'>Accuracy: {accuracy}%</h3>
          <h3 className='text-lg font-semibold mb-2'>
            Transcript:{' '}
            <span className='text-gray-600 dark:text-gray-400'>
              {transcript}
            </span>
          </h3>
          <ReactMarkdown className='text-sm text-gray-500 dark:text-gray-400'>
            {feedback}
          </ReactMarkdown>
        </div>
        <DialogFooter>
          <Button onClick={onQuit} variant='outline'>
            Quit Practice
          </Button>
          <Button onClick={onNextPrompt}>Next Prompt</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
