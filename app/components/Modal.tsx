import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    estimate: "",
  });

  const [loading,setLoading]= useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const sendEstimationRequest = async (e: { preventDefault: () => void },) => {
      e.preventDefault();
  
      setLoading(true);
  
      window.dataLayer.push({
        event: "free_estimate",
        phone_number: formData.phone,
        name:formData.fullName,
        email:formData.email,
        estimate:formData.estimate,
      });
  
      emailjs
        .send(
          "service_brl9y2s",
          "template_0lzto0f",
          { phone: formData.phone,
            name: formData.fullName,  
            email: formData.email,    
            estimate: formData.estimate},
          "apQJg2DtjcCfWOzGP"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setLoading(false);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              estimate: "",
            });
            toast.success("Request sent successfully!");
          },
          (error) => {
            console.log("FAILED...", error);
            setLoading(false);
          }
        );
        onClose()
    };
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm w-full"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-[40rem] animate-fadeIn scale-95 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">Get Your Free Estimate</h2>

        <form onSubmit={sendEstimationRequest} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>

          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div className="relative">
            <textarea
              name="estimate"
              value={formData.estimate}
              onChange={handleChange}
              placeholder="What do you need an estimate for?"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              required
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
