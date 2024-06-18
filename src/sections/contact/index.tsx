import Button from "@/components/button";
import { Phone, Send } from "lucide-react";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  return (
    <section id="Contact" className="px-8">
      <h1 className="mx-auto w-fit text-2xl sm:text-4xl font-semibold mb-8">
        Contact
        <span className="flex mx-auto h-1.5 w-1/2 bg-primary my-2" />
      </h1>
      <div className="text-md grid grid-cols-1 gap-4 sm:gap-0 sm:grid-cols-3 max-w-[50rem] mx-auto mt-8">
        <div className="flex flex-col text-center">
          <p className="font-bold uppercase mb-2">Call us</p>
          <div className="flex gap-2 justify-center font-light">
            <p className="w-20">Adeline</p>
            <a className="text-muted-foreground" href="tel:+60162334339">
              <Phone className="w-5 h-5" />
            </a>
            <a
              className="text-muted-foreground"
              target="_blank"
              href="https://wa.link/o16cse"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-2 justify-center font-light">
            <p className="w-20">Ian</p>
            <a className="text-muted-foreground" href="tel:+60189433995">
              <Phone className="w-5 h-5" />
            </a>
            <a
              className="text-muted-foreground"
              target="_blank"
              href="https://wa.link/pc1s18"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-2 justify-center font-light">
            <p className="w-20">Desmond</p>
            <a className="text-muted-foreground" href="tel:+60123341117">
              <Phone className="w-5 h-5" />
            </a>
            <a
              className="text-muted-foreground"
              target="_blank"
              href="https://wa.link/872heh"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-md font-bold uppercase">Email</p>
          <a className="font-light" href="mailto:adeline@swarass.asia">
            adeline@swarass.asia
          </a>
          <a className="font-light" href="mailto:ian@swarass.asia">
            ian@swarass.asia
          </a>
          <a className="font-light" href="mailto:info@swarass.asia">
            info@swarass.asia
          </a>
        </div>
        <div className="text-center">
          <p className="text-md font-bold uppercase">Address</p>
          <p className="font-light">
            No. 10-1 , Jalan Jade Hills Utama 1/1, Commerce Village Jade Hills,
            43000, Kajang, Selangor
          </p>
        </div>
      </div>
      <div className="relative w-[300px] sm:w-[600px] h-[12rem] sm:h-[20rem] mx-auto">
        <img
          src={"images/map.png"}
          loading="eager"
          alt="Map image"
          className="object-contain"
        />
      </div>
      <form
        className="space-y-4 max-w-[50rem] mx-auto"
        action={`mailto:adeline@swarass.asia?subject=${subject}&body=${text}`}
      >
        <div className="flex items-center mx-auto">
          <div className="triangle-r w-3 h-4 bg-primary mr-3"></div>
          <label
            htmlFor="email"
            className="w-fit mr-3 text-md sm:text-lg font-semibold"
          >
            Email
          </label>
          <input
            className="shadow px-4 py-2 w-full outline-primary border-black/5 border"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="flex items-center mx-auto">
          <div className="triangle-r w-3 h-4 bg-primary mr-3"></div>
          <label
            htmlFor="name"
            className="w-fit mr-3 text-md sm:text-lg font-semibold"
          >
            Name
          </label>
          <input
            className="shadow px-4 py-2 w-full outline-primary border-black/5 border"
            type="text"
            id="name"
            required
          />
        </div>
        <div className="flex items-center mx-auto">
          <div className="triangle-r w-3 h-4 bg-primary mr-3"></div>
          <label
            htmlFor="subject"
            className="w-fit mr-3 text-md sm:text-lg font-semibold"
          >
            Subject
          </label>
          <input
            className="shadow px-4 py-2 w-full outline-primary border-black/5 border"
            type="text"
            id="subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            required
          />
        </div>
        <div className="flex items-center mx-auto">
          <div className="triangle-r w-3 h-4 bg-primary mr-3"></div>
          <textarea
            className="shadow px-4 py-2 w-full min-h-32 outline-primary border-black/5 border"
            placeholder="What would you like to say to us?"
            onChange={(e) => setText(e.target.value)}
            value={text}
            required
          />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3 text-primary">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-6 h-6 hover:text-foreground transition-colors" />
            </a>
            <a
              href="http://instagram.com/swarass_production?igsh=dzMyb2k1bHUxb3Ry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 hover:text-foreground transition-colors" />
            </a>
          </div>
          <Button variant="primary" className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send us a message
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
