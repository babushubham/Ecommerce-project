import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Fantastic shopping experience! The product quality is top-notch, and delivery was super fast.",
    rating: 5,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Emily Smith",
    review: "Great customer service! I had an issue with my order, and they resolved it quickly.",
    rating: 4,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Michael Johnson",
    review: "Affordable prices and excellent quality! Will definitely shop again.",
    rating: 5,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Sarah Williams",
    review: "Loved the user experience of the website. Everything was easy to find and purchase.",
    rating: 4,
    image: "https://via.placeholder.com/100",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white shadow-lg p-6 rounded-xl text-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              
              <div className="flex justify-center my-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className={`text-yellow-500 ${index < testimonial.rating ? "opacity-100" : "opacity-30"}`} />
                ))}
              </div>

              <p className="text-gray-600">{testimonial.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
    