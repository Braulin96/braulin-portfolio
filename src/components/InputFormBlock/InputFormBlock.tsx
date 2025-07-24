import emailjs from "@emailjs/browser";
import { useState } from "react";

import InputForm from "../InputForm/InputForm";

import "./InputFormBlock.styles.scss";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const InputFormBlock = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear status when user starts typing
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatusMessage("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setStatusMessage("Email is required");
      return false;
    }
    if (!formData.subject.trim()) {
      setStatusMessage("Subject is required");
      return false;
    }
    if (!formData.message.trim()) {
      setStatusMessage("Message is required");
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleContactSubmit = async () => {
    if (!validateForm()) {
      setStatus("error");
      return;
    }

    // Check if environment variables are loaded
    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      console.error("EmailJS environment variables are missing");
      setStatus("error");
      setStatusMessage("Configuration error. Please contact me directly.");
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);

      // Success state
      setStatus("success");
      setStatusMessage("Message sent successfully! I'll get back to you soon.");

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Failed to send email:", error);
      console.error("Error details:", error.text || error.message);

      setStatus("error");

      // More specific error messages
      if (error.status === 400) {
        setStatusMessage("Invalid email configuration. Please try again.");
      } else if (error.status === 403) {
        setStatusMessage(
          "Email service not authorized. Please contact me directly."
        );
      } else if (error.status === 404) {
        setStatusMessage(
          "Email template not found. Please contact me directly."
        );
      } else {
        setStatusMessage(
          `Failed to send message: ${
            error.text || error.message || "Unknown error"
          }. Please try again or contact me directly.`
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      data-testid="InputFormBlock"
      className="InputFormBlock flex flex-col lg:flex-row gap-12">
      <div>
        {/* Status Messages */}
        {status === "success" && (
          <div className="bg-accent-green/20 border border-accent-green text-accent-green rounded-lg p-4 mb-6">
            ✓ {statusMessage}
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 rounded-lg p-4 mb-6">
            ✗ {statusMessage}
          </div>
        )}

        <InputForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleContactSubmit={handleContactSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default InputFormBlock;
