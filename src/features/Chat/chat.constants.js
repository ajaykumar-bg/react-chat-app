// Mock data for users and chat messages
export const mockUsers = [
  {
    id: 1,
    name: 'Alice Johnson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'online',
    lastSeen: new Date(),
    lastMessage: 'Hey there! How are you doing?',
    lastMessageTime: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    unreadCount: 2,
  },
  {
    id: 2,
    name: 'Bob Smith',
    avatar: 'https://i.pravatar.cc/150?img=2',
    status: 'offline',
    lastSeen: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    lastMessage: 'Thanks for your help!',
    lastMessageTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    unreadCount: 0,
  },
  {
    id: 3,
    name: 'Carol Davis',
    avatar: 'https://i.pravatar.cc/150?img=3',
    status: 'online',
    lastSeen: new Date(),
    lastMessage: 'Can we schedule a meeting?',
    lastMessageTime: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    unreadCount: 1,
  },
  {
    id: 4,
    name: 'David Wilson',
    avatar: 'https://i.pravatar.cc/150?img=4',
    status: 'away',
    lastSeen: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
    lastMessage: 'See you tomorrow!',
    lastMessageTime: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
    unreadCount: 0,
  },
  {
    id: 5,
    name: 'Eva Brown',
    avatar: 'https://i.pravatar.cc/150?img=5',
    status: 'online',
    lastSeen: new Date(),
    lastMessage: "Perfect! Let me know when you're ready.",
    lastMessageTime: new Date(Date.now() - 1 * 60 * 1000), // 1 minute ago
    unreadCount: 3,
  },
];

export const mockMessages = {
  1: [
    {
      id: 1,
      senderId: 1,
      text: 'Hey there! How are you doing?',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      type: 'text',
      status: 'read',
    },
    {
      id: 2,
      senderId: 'me',
      text: "Hi Alice! I'm doing great, thanks for asking. How about you?",
      timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000),
      type: 'text',
      status: 'read',
    },
    {
      id: 3,
      senderId: 1,
      text: "I'm doing well too! Just finished a big project at work.",
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
      type: 'text',
      status: 'read',
    },
    {
      id: 4,
      senderId: 'me',
      text: 'Congratulations! That sounds exciting.',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      type: 'text',
      status: 'read',
    },
    {
      id: 5,
      senderId: 1,
      text: 'Thanks! Want to grab coffee sometime this week?',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      type: 'text',
      status: 'delivered',
    },
  ],
  2: [
    {
      id: 6,
      senderId: 'me',
      text: 'Hey Bob, could you help me with that report?',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
      type: 'text',
      status: 'read',
    },
    {
      id: 7,
      senderId: 2,
      text: "Of course! I'll send it over in a few minutes.",
      timestamp: new Date(Date.now() - 2.5 * 60 * 60 * 1000),
      type: 'text',
      status: 'read',
    },
    {
      id: 8,
      senderId: 2,
      text: 'Thanks for your help!',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      type: 'text',
      status: 'read',
    },
  ],
  3: [
    {
      id: 9,
      senderId: 3,
      text: 'Can we schedule a meeting?',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      type: 'text',
      status: 'delivered',
    },
  ],
  4: [
    {
      id: 10,
      senderId: 4,
      text: 'Great meeting today! Thanks everyone.',
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
      type: 'text',
      status: 'read',
    },
    {
      id: 11,
      senderId: 'me',
      text: 'Agreed! Very productive.',
      timestamp: new Date(Date.now() - 50 * 60 * 1000),
      type: 'text',
      status: 'read',
    },
    {
      id: 12,
      senderId: 4,
      text: 'See you tomorrow!',
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
      type: 'text',
      status: 'read',
    },
  ],
  5: [
    {
      id: 13,
      senderId: 'me',
      text: 'Eva, are you ready for the presentation?',
      timestamp: new Date(Date.now() - 10 * 60 * 1000),
      type: 'text',
      status: 'read',
    },
    {
      id: 14,
      senderId: 5,
      text: 'Almost! Just finishing up the final slides.',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      type: 'text',
      status: 'read',
    },
    {
      id: 15,
      senderId: 5,
      text: "Perfect! Let me know when you're ready.",
      timestamp: new Date(Date.now() - 1 * 60 * 1000),
      type: 'text',
      status: 'delivered',
    },
  ],
};

export const currentUser = {
  id: 'me',
  name: 'You',
  avatar: 'https://i.pravatar.cc/150?img=10',
  status: 'online',
};
