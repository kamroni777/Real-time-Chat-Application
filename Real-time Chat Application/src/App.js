
import { useState } from 'react';
import ContactsList from './components/ContactsList';
import ChatHeader from './components/ChatHeader';
import MessageHistory from './components/MessageHistory';
import MessageInput from './components/MessageInput';
import AttachmentsPanel from './components/AttachmentsPanel';

const App = () => {
  const [activeContact, setActiveContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [showAttachments, setShowAttachments] = useState(false);

  const contacts = [
    { id: 1, name: 'Brad Fortt', unread: 2, status: 'online' },
    { id: 2, name: 'Paul Irish', unread: 0, status: 'offline' },
    { id: 3, name: 'Lina Roy', unread: 5, status: 'online' },
    { id: 4, name: 'Jessica Glley', unread: 0, status: 'offline' },
    { id: 5, name: 'Eric Peterson', unread: 1, status: 'online' },
    { id: 6, name: 'Elizabeth Olsen', unread: 0, status: 'online' },
  ];

  const handleSendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      timestamp: new Date().toLocaleTimeString(),
      isUser: true,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar - Contacts List */}
      <div className="w-1/4 border-r border-gray-200 bg-white">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Search Friends</h2>
          <input
            type="text"
            placeholder="Type here to search"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <ContactsList 
          contacts={contacts} 
          activeContact={activeContact}
          setActiveContact={setActiveContact}
        />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeContact ? (
          <>
            <ChatHeader contact={activeContact} />
            <MessageHistory messages={messages} />
            <MessageInput onSend={handleSendMessage} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Select a contact to start chatting</p>
          </div>
        )}
      </div>

      {/* Right Sidebar - Attachments Panel */}
      {showAttachments && (
        <div className="w-1/4 border-l border-gray-200 bg-white">
          <AttachmentsPanel />
        </div>
      )}
    </div>
  );
};

export default App;