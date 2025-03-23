import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          subject: `Website Service - ${formData.serviceInterest}`,
          fullName: formData.fullName || "Tidak diisi",
          email: formData.email || "Tidak diisi",
          phone: formData.phone || "Tidak diisi",
          serviceInterest: formData.serviceInterest || "Tidak diisi",
          message: formData.message || "Tidak diisi",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      toast.success("Pesan berhasil dikirim!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
      });
    } catch (error) {
      console.error("Gagal mengirim pesan:", error);

      // Tampilkan notifikasi error
      toast.error("Gagal mengirim pesan. Silakan coba lagi.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="bg-sky-400 dark:bg-white rounded-lg p-6 text-white dark:text-gray-800">
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Let&apos;s Build Your Digital Future – Contact Us Today!
      </h2>
      <p className="mb-6 text-sm">
        Have a question or need a custom solution? Fill out the form below, and our team will get back to you as soon as possible.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          name="fullName"
          placeholder="Full Name"
          className="bg-white dark:bg-gray-100 border-white/30 dark:border-gray-300 text-gray-800 placeholder:text-gray-500 focus-visible:ring-sky-300 dark:focus-visible:ring-gray-400"
          onChange={handleChange}
          value={formData.fullName}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          className="bg-white dark:bg-gray-100 border-white/30 dark:border-gray-300 text-gray-800 placeholder:text-gray-500 focus-visible:ring-sky-300 dark:focus-visible:ring-gray-400"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="bg-white dark:bg-gray-100 border-white/30 dark:border-gray-300 text-gray-800 placeholder:text-gray-500 focus-visible:ring-sky-300 dark:focus-visible:ring-gray-400"
          onChange={handleChange}
          value={formData.phone}
        />
        <select
          name="serviceInterest"
          className="bg-white dark:bg-gray-100 border-white/30 dark:border-gray-300 text-gray-800 focus-visible:ring-sky-300 dark:focus-visible:ring-gray-400 w-full p-2 rounded-md"
          onChange={handleChange}
          value={formData.serviceInterest}
          required
        >
          <option value="">Select a Service</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="SEO & Marketing">SEO & Marketing</option>
        </select>
        <Textarea
          name="message"
          placeholder="Message"
          className="bg-white dark:bg-gray-100 border-white/30 dark:border-gray-300 text-gray-800 placeholder:text-gray-500 focus-visible:ring-sky-300 dark:focus-visible:ring-gray-400"
          onChange={handleChange}
          value={formData.message}
          required
        />
        <button
          type="submit"
          className="bg-white dark:bg-sky-500 text-sky-500 dark:text-white hover:bg-white/90 dark:hover:bg-sky-600 px-6 py-2 rounded-full font-medium transition-colors"
        >
          Send a Message
        </button>
      </form>

      {/* ToastContainer untuk menampilkan notifikasi */}
      <ToastContainer />
    </div>
  );
}