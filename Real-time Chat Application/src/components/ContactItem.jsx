
const ContactItem = ({ contact, isActive, onClick }) => {
    return (
      <div
        className={`flex items-center p-4 cursor-pointer ${isActive ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
        onClick={onClick}
      >
        <div className="relative mr-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">{contact.name.charAt(0)}</span>
          </div>
          {contact.status === 'online' && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{contact.name}</h3>
          <p className="text-sm text-gray-500">Last message preview...</p>
        </div>
        {contact.unread > 0 && (
          <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
            {contact.unread}
          </span>
        )}
      </div>
    );
  };
  
  export default ContactItem;