


import { FaCheckCircle, FaUsers, FaTruck, FaShieldAlt } from "react-icons/fa";
import Layout_comp from "../component/Layout/Layout_comp";

const AboutPage = () => {
  return (
    <Layout_comp>

    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-orange-500 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">Delivering quality products with exceptional service</p>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Company Story */}
        <section className="bg-white p-8 shadow-lg rounded-xl">
          <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
          <p className="mt-4 text-gray-600">
            Founded in 2023, our e-commerce platform started with a simple mission: to make online shopping seamless and enjoyable. 
            With a passion for quality and customer satisfaction, we have grown into a trusted marketplace offering a wide range of products.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 shadow-lg rounded-xl">
            <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              Our mission is to provide top-notch products at the best prices while ensuring a smooth shopping experience.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl">
            <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              We envision a future where everyone can shop effortlessly with complete trust and convenience.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white p-8 shadow-lg rounded-xl">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-orange-600 text-4xl" />
              <h3 className="font-semibold text-lg mt-2">Quality Products</h3>
              <p className="text-gray-600 text-center">We offer only the best products with top-notch quality.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-orange-600 text-4xl" />
              <h3 className="font-semibold text-lg mt-2">Customer Focus</h3>
              <p className="text-gray-600 text-center">Your satisfaction is our top priority.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaTruck className="text-orange-600 text-4xl" />
              <h3 className="font-semibold text-lg mt-2">Fast Shipping</h3>
              <p className="text-gray-600 text-center">We ensure quick and safe delivery for all orders.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-orange-600 text-4xl" />
              <h3 className="font-semibold text-lg mt-2">Secure Shopping</h3>
              <p className="text-gray-600 text-center">Your data is protected with secure transactions.</p>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="bg-white p-8 shadow-lg rounded-xl">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/150" alt="Founder" className="w-32 h-32 rounded-full" />
              <h3 className="font-semibold text-lg mt-2">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/150" alt="Manager" className="w-32 h-32 rounded-full" />
              <h3 className="font-semibold text-lg mt-2">Jane Smith</h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/150" alt="Developer" className="w-32 h-32 rounded-full" />
              <h3 className="font-semibold text-lg mt-2">Emily Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </Layout_comp>
  );
};

export default AboutPage;
