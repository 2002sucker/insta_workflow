// lib/data.ts

import { Post } from './types';

export const posts: Post[] = [
  {
    id: '1',
    username: 'botspacehq',
    avatar: '/next.svg', // Corrected path to use file from public root
    image: '/one.jpg',
    caption: 'WhatsApp now connects 3 Billion users, a milestone reflecting its influence...',
    likes: 18,
    commentsCount: 0,
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    username: 'botspacehq',
    avatar: '/next.svg', // Corrected path
    image: '/two.jpg',
    caption: 'Before using BotSpace, maybe your business should too...',
    likes: 13,
    commentsCount: 1,
    timestamp: '18 May, 2025',
  },
  {
    id: '3',
    username: 'botspacehq',
    avatar: '/next.svg', // Corrected path
    image: '/three.jpg',
    caption: 'When your mom turns into your marketing manager...',
    likes: 71,
    commentsCount: 22,
    timestamp: '03 May, 2025',
  },
  {
    id: '4',
    username: 'botspacehq',
    avatar: '/next.svg', // Corrected path
    image: '/four.jpg',
    caption: 'Unlock Instagram\'s hidden goldmine with AI!',
    likes: 19,
    commentsCount: 7,
    timestamp: '1 hour ago',
  },
];