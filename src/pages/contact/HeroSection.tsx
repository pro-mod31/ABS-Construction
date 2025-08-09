import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactHolder from "./ContactHolder";

export default function ContactCards() {
  const cards = [
    {
      icon: <FaMapMarkerAlt className="text-yellow-500 text-3xl" />,
      title: "Address",
      detail: "A108 Adam Street, New York, NY 535022",
    },
    {
      icon: <FaPhoneAlt className="text-yellow-500 text-3xl" />,
      title: "Call Us",
      detail: "998989 898990",
    },
    {
      icon: <FaEnvelope className="text-yellow-500 text-3xl" />,
      title: "Email Us",
      detail: "infonepal@gmail.com",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <section className="py-20">
        <div className='justify-center text-center font-bold text-4xl  mt-3'>
          <h2 className="text-3xl md:text-5xl">PLEASE <span className='text-yellow-300'>FEEL FREE</span>  TO <br /> CONTACT US</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-9">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 border-2 border-dashed border-yellow-500 rounded-full">
                  {card.icon}
                </div>
              </div>
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-gray-600 mt-1">{card.detail}</p>
            </div>
          ))}
        </div>

      </section>
      <ContactHolder />

    </div>





  );
}