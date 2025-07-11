

// components/MobilePreview.tsx

'use client';

import { useState } from 'react';
import { Post } from '@/lib/types';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowLeft, Send, PlusCircle, Heart, MessageCircle, Smile } from 'lucide-react';

interface MobilePreviewProps {
  post: Post;
  comment: string;
  openingDm: string;
  openingDmEnabled: boolean;
  followUpDm: string;
}

export function MobilePreview({
  post,
  comment,
  openingDm,
  openingDmEnabled,
  followUpDm,
}: MobilePreviewProps) {
  const [activeTab, setActiveTab] = useState<'post' | 'comments' | 'dm'>('post');

  const renderContent = () => {
    switch (activeTab) {
      case 'comments':
        return (
          <div className="p-4 flex-grow">
            <div className="flex items-center justify-between mb-4">
               <h2 className="font-semibold">Comments</h2>
               <Send size={20} />
            </div>
            {/* Logic fixed: only render the comment bubble if the comment string is not empty */}
            {comment && (
              <div className="flex items-start space-x-3">
                <Image src="/globe.svg" width={32} height={32} alt="User Avatar" className="rounded-full" />
                <div className="flex-1">
                  <p>
                    <span className="font-semibold text-sm mr-2">Username</span>
                    <span className="text-sm">{comment}</span>
                  </p>
                  <span className="text-xs text-gray-400">Now • Reply</span>
                </div>
              </div>
            )}
             <div className="absolute bottom-0 left-0 right-0 p-2 bg-black border-t border-gray-800 flex items-center space-x-2">
                <PlusCircle size={24} />
                <input
                    type="text"
                    placeholder="Add a comment for username..."
                    className="flex-1 bg-transparent text-sm focus:outline-none"
                    readOnly
                />
                <Heart size={20} />
                <Smile size={20} />
            </div>
          </div>
        );
      case 'dm':
        return (
          <div className="p-4 flex-grow flex flex-col">
             {/* Logic fixed: This bubble is controlled by the "Opening DM" textarea */}
             {openingDmEnabled && openingDm && (
               <div className="self-start bg-gray-700 p-3 rounded-2xl max-w-xs mb-2">
                 <p className="text-sm">{openingDm}</p>
               </div>
             )}
             {/* This is the static user reply from the video */}
             <div className="self-end bg-purple-600 text-white p-3 rounded-2xl max-w-xs mb-4">
                <p className="text-sm">Send me the link</p>
             </div>
             {/* Logic fixed: This bubble is controlled by the second "Write a message" textarea */}
             {followUpDm && (
                <div className="self-start bg-gray-700 p-3 rounded-2xl max-w-xs">
                    <p className="text-sm">{followUpDm}</p>
                </div>
             )}
          </div>
        );
      case 'post':
      default:
        return (
          <div>
            <div className="flex items-center p-3">
                <Image src={post.avatar} width={32} height={32} alt="Avatar" className="rounded-full" />
                <span className="ml-3 font-semibold text-sm">{post.username}</span>
            </div>
            <Image src={post.image} alt="Post" width={375} height={375} className="w-full" />
            <div className="p-3">
              <p className="text-sm">
                <span className="font-semibold">{post.username}</span> {post.caption}
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-black w-[375px] h-[812px] rounded-[40px] border-[10px] border-gray-800 overflow-hidden shadow-2xl relative">
      <div className="h-full bg-black text-white flex flex-col">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-800">
          <ArrowLeft size={24} />
          <h1 className="font-semibold text-center flex-grow">
            {activeTab === 'dm' ? post.username : 'Posts'}
          </h1>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto relative">
          {renderContent()}
        </div>

        {/* Footer Tabs */}
        <div className="flex justify-around p-2 border-t border-gray-700">
          <Button variant={activeTab === 'post' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('post')}>Post</Button>
          <Button variant={activeTab === 'comments' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('comments')}>Comments</Button>
          <Button variant={activeTab === 'dm' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('dm')}>DM</Button>
        </div>
      </div>
    </div>
  );
}