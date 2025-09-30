import { io } from 'socket.io-client';

class WebSocketService {
  constructor() {
    this.socket = null;
    this.isConnected = false;
    this.messageCallbacks = [];
    this.statusCallbacks = [];
    this.connectionCallbacks = [];
  }

  // Initialize WebSocket connection
  connect(url = 'ws://localhost:3001') {
    try {
      this.socket = io(url, {
        autoConnect: false,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5,
        timeout: 20000,
      });

      this.setupEventListeners();
      this.socket.connect();
    } catch (error) {
      console.error('WebSocket connection failed:', error);
      // For demo purposes, we'll simulate WebSocket events
      this.simulateConnection();
    }
  }

  // Setup event listeners
  setupEventListeners() {
    if (!this.socket) return;

    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      this.isConnected = true;
      this.notifyConnectionCallbacks(true);
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
      this.isConnected = false;
      this.notifyConnectionCallbacks(false);
    });

    this.socket.on('message', (message) => {
      this.notifyMessageCallbacks(message);
    });

    this.socket.on('messageStatus', (status) => {
      this.notifyStatusCallbacks(status);
    });

    this.socket.on('userTyping', (data) => {
      // Handle typing indicators
      console.log('User typing:', data);
    });

    this.socket.on('userOnline', (userId) => {
      // Handle user online status
      console.log('User online:', userId);
    });

    this.socket.on('userOffline', (userId) => {
      // Handle user offline status
      console.log('User offline:', userId);
    });
  }

  // Simulate connection for demo purposes
  simulateConnection() {
    setTimeout(() => {
      console.log('Simulating WebSocket connection');
      this.isConnected = true;
      this.notifyConnectionCallbacks(true);

      // Simulate receiving a message after 5 seconds
      setTimeout(() => {
        this.simulateIncomingMessage();
      }, 5000);
    }, 1000);
  }

  // Simulate incoming message
  simulateIncomingMessage() {
    const simulatedMessage = {
      id: Date.now(),
      senderId: 1,
      text: 'This is a simulated WebSocket message!',
      timestamp: new Date(),
      type: 'text',
      status: 'delivered',
    };

    this.notifyMessageCallbacks(simulatedMessage);
  }

  // Send message
  sendMessage(message) {
    if (this.socket && this.isConnected) {
      this.socket.emit('sendMessage', message);
    } else {
      console.log('WebSocket not connected, message not sent:', message);
      // For demo purposes, simulate message sent
      setTimeout(() => {
        this.notifyStatusCallbacks({
          messageId: message.id,
          status: 'delivered',
        });
      }, 1000);
    }
  }

  // Join chat room
  joinRoom(roomId) {
    if (this.socket && this.isConnected) {
      this.socket.emit('joinRoom', roomId);
    }
  }

  // Leave chat room
  leaveRoom(roomId) {
    if (this.socket && this.isConnected) {
      this.socket.emit('leaveRoom', roomId);
    }
  }

  // Send typing indicator
  sendTyping(recipientId, isTyping) {
    if (this.socket && this.isConnected) {
      this.socket.emit('typing', { recipientId, isTyping });
    }
  }

  // Register callback for new messages
  onMessage(callback) {
    this.messageCallbacks.push(callback);
    return () => {
      const index = this.messageCallbacks.indexOf(callback);
      if (index > -1) {
        this.messageCallbacks.splice(index, 1);
      }
    };
  }

  // Register callback for message status updates
  onMessageStatus(callback) {
    this.statusCallbacks.push(callback);
    return () => {
      const index = this.statusCallbacks.indexOf(callback);
      if (index > -1) {
        this.statusCallbacks.splice(index, 1);
      }
    };
  }

  // Register callback for connection status
  onConnection(callback) {
    this.connectionCallbacks.push(callback);
    return () => {
      const index = this.connectionCallbacks.indexOf(callback);
      if (index > -1) {
        this.connectionCallbacks.splice(index, 1);
      }
    };
  }

  // Notify message callbacks
  notifyMessageCallbacks(message) {
    this.messageCallbacks.forEach((callback) => {
      try {
        callback(message);
      } catch (error) {
        console.error('Error in message callback:', error);
      }
    });
  }

  // Notify status callbacks
  notifyStatusCallbacks(status) {
    this.statusCallbacks.forEach((callback) => {
      try {
        callback(status);
      } catch (error) {
        console.error('Error in status callback:', error);
      }
    });
  }

  // Notify connection callbacks
  notifyConnectionCallbacks(isConnected) {
    this.connectionCallbacks.forEach((callback) => {
      try {
        callback(isConnected);
      } catch (error) {
        console.error('Error in connection callback:', error);
      }
    });
  }

  // Disconnect
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
    this.isConnected = false;
    this.messageCallbacks = [];
    this.statusCallbacks = [];
    this.connectionCallbacks = [];
  }

  // Get connection status
  getConnectionStatus() {
    return this.isConnected;
  }
}

// Create singleton instance
const webSocketService = new WebSocketService();

export default webSocketService;
