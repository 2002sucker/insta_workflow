// app/page.tsx

'use client';

import { CommentConfig } from '@/components/CommentConfig';
import { DmConfig } from '@/components/DmConfig';
import { MobilePreview } from '@/components/MobilePreview';
import { PostSelector } from '@/components/PostSelector';
import { Button } from '@/components/ui/button';
import { posts } from '@/lib/data';
import { Post } from '@/lib/types';
import { useState } from 'react';

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<Post>(posts[0]);
  const [comment, setComment] = useState('');
  const [dm, setDm] = useState(
    "Hey there! I'm so happy you're here, thanks so much for your interest 😊. Click below and I'll send you the link in just a sec ✨"
  );
  const [openingDmEnabled, setOpeningDmEnabled] = useState(true);

  return (
    <div className="relative p-8">
      <div className="flex justify-between items-center mb-6">
        <div>{/* This space can be used for a title if needed */}</div>
        <Button className="bg-blue-600 hover:bg-blue-700">Go Live</Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Panel: Configuration */}
        <div className="space-y-8 max-w-md mx-auto">
          <PostSelector onPostSelect={setSelectedPost} />
          <CommentConfig onCommentChange={setComment} />
          <DmConfig
            onDmChange={setDm}
            onOpeningDmChange={setOpeningDmEnabled}
          />
        </div>

        {/* Right Panel: Mobile Preview */}
        <div className="flex justify-center lg:sticky top-8">
          <MobilePreview
            post={selectedPost}
            comment={comment}
            dm={dm}
            openingDmEnabled={openingDmEnabled}
          />
        </div>
      </div>
    </div>
  );
}
