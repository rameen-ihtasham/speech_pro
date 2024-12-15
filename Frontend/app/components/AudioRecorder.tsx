'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Square, Upload } from 'lucide-react';

interface AudioRecorderProps {
  onAudioSubmit: (audio: Blob) => void;
}

export function AudioRecorder({ onAudioSubmit }: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null); // For playback
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: 'audio/webm',
      }); // Ensure supported type

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' }); // Set the proper type
        setAudioBlob(audioBlob);
        setAudioUrl(URL.createObjectURL(audioBlob)); // Create playback URL
        chunksRef.current = [];
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const submitAudio = () => {
    if (audioBlob) {
      onAudioSubmit(audioBlob);
      setAudioBlob(null);
      setAudioUrl(null);
    }
  };

  return (
    <div className='flex flex-col items-center space-y-4'>
      {!isRecording && !audioBlob && (
        <Button onClick={startRecording}>
          <Mic className='mr-2 h-4 w-4' /> Start Recording
        </Button>
      )}
      {isRecording && (
        <Button onClick={stopRecording} variant='destructive'>
          <Square className='mr-2 h-4 w-4' /> Stop Recording
        </Button>
      )}
      {audioUrl && (
        <audio controls src={audioUrl} className='w-full mt-4'>
          Your browser does not support the audio element.
        </audio>
      )}
      {audioBlob && (
        <Button onClick={submitAudio}>
          <Upload className='mr-2 h-4 w-4' /> Submit Recording
        </Button>
      )}
    </div>
  );
}
