const AdmissionRequestModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-2xl overflow-hidden">
        <div className="p-6 bg-black text-white">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              Register your Request for Admission
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-Grey-Shade_1"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3936 9.59473L9.60156 14.3867"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3976 14.3898L9.60156 9.59277"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.334 2.75H7.665C4.644 2.75 2.75 4.889 2.75 7.916V16.084C2.75 19.111 4.635 21.25 7.665 21.25H16.333C19.364 21.25 21.25 19.111 21.25 16.084V7.916C21.25 4.889 19.364 2.75 16.334 2.75Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="mb-4">Please fill the details</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div>
            <label className="block text-[600] text-Grey-Shade_1">Your Name</label>
            <input
              type="text"
              placeholder="E.g., John Doe"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-[600] text-Grey-Shade_1">Your Email Address</label>
            <input
              type="email"
              placeholder="E.g., sahil123@gmail.com"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-[600] text-Grey-Shade_1">Mobile Number</label>
            <input
              type="tel"
              placeholder="E.g., +91 9595959595"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-[600] text-Grey-Shade_1">Course</label>
            <select className="select select-bordered w-full">
              <option>Select course</option>
              <option>JEE</option>
              <option>NEET</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-[600] text-Grey-Shade_1">Education Status</label>
            <select className="select select-bordered w-full">
              <option>Select education status</option>
              <option>12th Passed</option>
              <option>12th Appearing</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-[600] text-Grey-Shade_1">Message</label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Enter your message..."
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center pt-4">
            <button className="btn btn-xx w-full md:w-auto px-6">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionRequestModal;
