import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface PromptListItemProps {
  id: number;
  text: string;
  difficulty: string;
}

export function PromptListItem({ id, text, difficulty }: PromptListItemProps) {
  return (
    <Card>
      <CardContent className='pt-6'>
        <div className='flex justify-between items-start mb-2'>
          <p className='text-sm font-medium leading-none'>
            {text.length > 100 ? text.substring(0, 100) + '...' : text}
          </p>
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
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className='w-full'>
          <Link href={`/practice/${id}`}>Practice This Prompt</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
