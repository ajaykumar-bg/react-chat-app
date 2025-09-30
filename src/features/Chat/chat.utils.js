// Utility functions for chat feature
import { format, isToday, isYesterday, differenceInMinutes } from 'date-fns';

// Format timestamp for display
export const formatMessageTime = (timestamp) => {
  if (isToday(timestamp)) {
    return format(timestamp, 'HH:mm');
  } else if (isYesterday(timestamp)) {
    return 'Yesterday';
  } else {
    return format(timestamp, 'dd/MM/yyyy');
  }
};

// Format last seen time
export const formatLastSeen = (lastSeen) => {
  const minutesAgo = differenceInMinutes(new Date(), lastSeen);

  if (minutesAgo < 1) {
    return 'Just now';
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
  } else if (minutesAgo < 1440) {
    // 24 hours
    const hoursAgo = Math.floor(minutesAgo / 60);
    return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
  } else {
    return format(lastSeen, 'dd/MM/yyyy HH:mm');
  }
};

// Get status color
export const getStatusColor = (status) => {
  switch (status) {
    case 'online':
      return '#4caf50';
    case 'away':
      return '#ff9800';
    case 'offline':
      return '#9e9e9e';
    default:
      return '#9e9e9e';
  }
};

// Search users by name
export const searchUsers = (users, searchTerm) => {
  if (!searchTerm.trim()) return users;

  return users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Sort users by last message time
export const sortUsersByLastMessage = (users) => {
  return [...users].sort(
    (a, b) => new Date(b.lastMessageTime) - new Date(a.lastMessageTime)
  );
};
