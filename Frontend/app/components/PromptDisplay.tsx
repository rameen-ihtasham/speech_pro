import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PromptDisplayProps {
  prompt: string;
  difficulty: string;
}

export function PromptDisplay({ prompt, difficulty }: PromptDisplayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex justify-between items-center'>
          Pronunciation Prompt
          <Badge
            variant={
              difficulty === 'Easy'
                ? 'default'
                : difficulty === 'Medium'
                ? 'accent'
                : 'destructive'
            }
          >
            {difficulty}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-lg font-medium'>{prompt}</p>
      </CardContent>
    </Card>
  );
}
