
const Message = ({ text, isUser, timestamp }) => {
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`max-w-md p-3 rounded-lg ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}>
          <p>{text}</p>
          <p className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
            {timestamp}
          </p>
        </div>
      </div>
    );
  };
  
  export default Message;