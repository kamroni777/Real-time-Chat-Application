
import AttachmentIcon from './AttachmentIcon';

const AttachmentsPanel = () => {
  const attachmentTypes = ['PDF', 'Video', 'MP3', 'Image'];
  const recentFiles = [
    { id: 1, name: 'Project_Report.pdf', type: 'PDF', date: '2 hours ago' },
    { id: 2, name: 'Meeting_Recording.mp3', type: 'MP3', date: '1 day ago' },
    { id: 3, name: 'Screenshot.png', type: 'Image', date: '3 days ago' },
  ];

  return (
    <div className="h-full p-4">
      <h2 className="text-xl font-semibold mb-4">Attachments</h2>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">FILE TYPES</h3>
        <div className="grid grid-cols-2 gap-2">
          {attachmentTypes.map((type) => (
            <AttachmentIcon key={type} type={type} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-2">RECENT FILES</h3>
        <div className="space-y-2">
          {recentFiles.map((file) => (
            <div key={file.id} className="p-2 hover:bg-gray-50 rounded-md cursor-pointer">
              <div className="flex items-center">
                <div className="mr-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-600">{file.type}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-gray-500">{file.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttachmentsPanel;