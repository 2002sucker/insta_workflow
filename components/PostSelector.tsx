// components/PostSelector.tsx

'use client';

import { posts } from '@/lib/data';
import { Post } from '@/lib/types';
import Image from 'next/image';
import { useState } from 'react';

interface PostSelectorProps {
  onPostSelect: (post: Post) => void;
}

export function PostSelector({ onPostSelect }: PostSelectorProps) {
  const [selectedPost, setSelectedPost] = useState<Post>(posts[0]);

  const handleSelect = (post: Post) => {
    setSelectedPost(post);
    onPostSelect(post);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">When someone comments on</h2>
      <div>
        <h3 className="text-sm font-medium mb-2">a specific post or reel</h3>
        <div className="grid grid-cols-2 gap-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                selectedPost.id === post.id
                  ? 'border-blue-500'
                  : 'border-transparent'
              }`}
              onClick={() => handleSelect(post)}
            >
              <Image
                src={post.image}
                alt={post.caption}
                width={150}
                height={150}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
          <span>any post or reel</span>
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
            PRO
          </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
          <span>next post or reel</span>
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
            PRO
          </span>
        </div>
      </div>
    </div>
  );
}
