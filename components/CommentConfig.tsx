// components/CommentConfig.tsx

'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CommentConfigProps {
  onCommentChange: (comment: string) => void;
}

export function CommentConfig({ onCommentChange }: CommentConfigProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">And this comment has</h2>
      <div>
        <h3 className="text-sm font-medium mb-2">a specific word or words</h3>
        <Input
          placeholder="Enter a word or multiple"
          className="bg-gray-800 border-gray-700"
          onChange={(e) => onCommentChange(e.target.value)}
        />
        <div className="flex space-x-2 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onCommentChange('Price')}
          >
            Price
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onCommentChange('Link')}
          >
            Link
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onCommentChange('Shop')}
          >
            Shop
          </Button>
        </div>
      </div>
    </div>
  );
}
