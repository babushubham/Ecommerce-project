import { FaTruck, FaHeadset, FaUndoAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaTruck className="text-black text-5xl" />,
      title: "Fast Delivery",
      description: "Get your orders delivered quickly with our express shipping service.",
    },
    {
      id: 2,
      icon: <FaHeadset className="text-black text-5xl" />,
      title: "24/7 Support",
      description: "Our team is available around the clock to assist you with any queries.",
    },
    {
      id: 3,
      icon: <FaUndoAlt className="text-black text-5xl" />,
      title: "Money-Back Guarantee",
      description: "Shop with confidence! We offer a hassle-free return policy.",
    },
  ];

  return (
    <div className=" py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
