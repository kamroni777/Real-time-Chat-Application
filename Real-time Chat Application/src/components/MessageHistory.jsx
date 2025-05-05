
import Message from './Message';

const MessageHistory = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
      {messages.length > 0 ? (
        messages.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">No messages yet</p>
        </div>
      )}
    </div>
  );
};

export default MessageHistory;