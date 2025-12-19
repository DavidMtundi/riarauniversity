import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, HelpCircle, MessageCircle, User, ChevronDown } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I apply for admission?",
      answer: "You can apply online through our admissions portal at admissions.ru.ac.ke. For more information, visit our Admission page or contact the admissions office directly."
    },
    {
      question: "What are the admission requirements?",
      answer: "Admission requirements vary by program. Generally, you'll need your KCSE certificate or equivalent, and meet the minimum grade requirements. Visit our Admission page for specific requirements for each program."
    },
    {
      question: "Do you offer financial aid?",
      answer: "Yes, we offer various financial aid options including scholarships, bursaries, and student loans. Contact our Financial Aid office for more information about eligibility and application procedures."
    },
    {
      question: "Can I schedule a campus tour?",
      answer: "Absolutely! We welcome prospective students and their families to visit our campus. You can schedule a tour by emailing admissions@riarauniversity.ac.ke or calling +254 703 038 000."
    },
    {
      question: "What programs do you offer?",
      answer: "We offer a wide range of undergraduate and graduate programs across six schools: Business, Education, Law, Computing Science, International Relations, and Communication & Journalism. Visit our Academics page for detailed information."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@riarauniversity.ac.ke?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-12 sm:pt-14 md:pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[32.5vh] md:h-[37.5vh] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-riara-red)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-riara-red)]/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                We're here to help. Get in touch with us today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg text-center shadow-md hover:shadow-xl transition-all">
                <div className="p-3 bg-[var(--color-riara-red)]/10 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="h-10 w-10 text-[var(--color-riara-red)]" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  Address
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  Riara University<br />
                  49940 – 00100, Nairobi<br />
                  Raila Odinga Road<br />
                  (formerly Mbagathi Way)
                </p>
              </div>

              <div className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg text-center shadow-md hover:shadow-xl transition-all">
                <div className="p-3 bg-[var(--color-riara-red)]/10 rounded-full w-fit mx-auto mb-4">
                  <Phone className="h-10 w-10 text-[var(--color-riara-red)]" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  Phone
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  <a href="tel:+254703038000" className="hover:text-[var(--color-riara-red)] transition-colors font-semibold">
                    +254 703 038 000
                  </a>
                </p>
              </div>

              <div className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-white p-6 md:p-8 border-l-4 border-[var(--color-riara-red)] rounded-lg text-center shadow-md hover:shadow-xl transition-all">
                <div className="p-3 bg-[var(--color-riara-red)]/10 rounded-full w-fit mx-auto mb-4">
                  <Mail className="h-10 w-10 text-[var(--color-riara-red)]" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-3">
                  Email
                </h3>
                <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  <a href="mailto:info@riarauniversity.ac.ke" className="hover:text-[var(--color-riara-red)] transition-colors break-all">
                    info@riarauniversity.ac.ke
                  </a>
                </p>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="bg-gradient-to-r from-[var(--color-riara-red)]/5 to-[var(--color-riara-red)]/10 rounded-xl p-8 md:p-10 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-6 w-6 text-[var(--color-riara-red)]" />
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-text-primary)]">
                  Department Contacts
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-[var(--color-text-primary)] mb-1">Admissions</p>
                  <a href="mailto:admissions@riarauniversity.ac.ke" className="text-sm text-[var(--color-riara-red)] hover:underline">
                    admissions@riarauniversity.ac.ke
                  </a>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-[var(--color-text-primary)] mb-1">Financial Aid</p>
                  <a href="mailto:financialaid@riarauniversity.ac.ke" className="text-sm text-[var(--color-riara-red)] hover:underline">
                    financialaid@riarauniversity.ac.ke
                  </a>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-[var(--color-text-primary)] mb-1">Alumni Relations</p>
                  <a href="mailto:alumni@riarauniversity.ac.ke" className="text-sm text-[var(--color-riara-red)] hover:underline">
                    alumni@riarauniversity.ac.ke
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
          <Container>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                  Send Us a Message
                </h2>
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <p className="text-green-800">Thank you! Your message will open in your email client.</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-semibold text-[var(--color-text-primary)]">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-semibold text-[var(--color-text-primary)]">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold text-[var(--color-text-primary)]">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-base font-semibold text-[var(--color-text-primary)]">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="What is your message about?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base font-semibold text-[var(--color-text-primary)]">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[var(--color-riara-red)] text-white hover:bg-[var(--color-riara-red-dark)]"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map & Office Hours */}
              <div className="space-y-6">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[var(--color-text-primary)] mb-6">
                    Find Us
                  </h3>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.812!2d36.8069232!3d-1.3148565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f105e9f1c97eb%3A0xd0d8411685ae0273!2s49940%2C%20Raila%20Odinga%20Wy%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1735689600000!5m2!1sen!2ske"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title="Riara University Campus Location"
                    ></iframe>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-[var(--color-riara-red)]" />
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)]">
                      Office Hours
                    </h3>
                  </div>
                  <div className="space-y-2 text-base md:text-lg text-[var(--color-text-secondary)]">
                    <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="/admission"
                      className="block text-base md:text-lg text-[var(--color-riara-red)] hover:underline transition-colors"
                    >
                      Admissions
                    </a>
                    <a
                      href="/visit"
                      className="block text-base md:text-lg text-[var(--color-riara-red)] hover:underline transition-colors"
                    >
                      Campus Tours
                    </a>
                    <a
                      href="mailto:admissions@riarauniversity.ac.ke"
                      className="block text-base md:text-lg text-[var(--color-riara-red)] hover:underline transition-colors"
                    >
                      admissions@riarauniversity.ac.ke
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="h-8 w-8 text-[var(--color-riara-red)]" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-primary)]">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-[var(--color-bg-secondary)] rounded-lg overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-[var(--color-bg-tertiary)] transition-colors"
                    >
                      <span className="text-lg font-semibold text-[var(--color-text-primary)] pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown 
                        className={`h-5 w-5 text-[var(--color-riara-red)] flex-shrink-0 transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

