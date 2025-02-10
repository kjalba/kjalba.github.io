import { useEffect } from 'react';

interface ProjectModalProps {
  image: string;
  title: string;
  description: string;
  details: string;
  onClose: () => void;
}

export default function ProjectModal({ image, title, description, details, onClose }: ProjectModalProps) {
  // Close the modal when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modalElement = document.getElementById('modal-content');
      if (modalElement && !modalElement.contains(event.target as Node)) {
        onClose();
      }
    };

    // Disable page scroll when the modal is open
    document.body.style.overflow = 'hidden';

    // Attach the event listener for outside click
    document.addEventListener('mousedown', handleOutsideClick);

    // Cleanup the event listener and re-enable scroll when modal is closed
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = ''; // Restore default scroll behavior
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,_0,_0,_0.58)] z-50">
      <div
        id="modal-content"
        className="absolute inset-10 max-w-[960px] max-h-[90%] bg-white overflow-auto outline-none p-0 m-auto z-[999]"
        style={{ border: "0px", borderRadius: "0px" }}
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-800 text-xl cursor-pointer">
          ✖
        </button>

        {/* Image Section */}
        <div className="modal-top w-full p-4 h-3/5 flex justify-center items-center bg-gray-100">
          <img src={image} alt={title} className="modal-image max-w-[60%] h-auto object-contain" />
        </div>

        {/* Text Section */}
        <div className="modal-bottom p-6">
          <h3 className="modal-name text-2xl font-bold">{title}</h3>
          <p className="modal-description text-lg text-gray-700">{description}</p>
          <p className="modal-details text-md text-gray-600 mt-2">{details}</p>
        </div>
      </div>
    </div>
  );
}
