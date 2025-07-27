import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hospitalImage1 from "@/assets/img1.jpg";
import hospitalImage2 from "@/assets/img2.jpg";
import hospitalImage3 from "@/assets/img3.jpg";
import hospitalImage4 from "@/assets/img4.jpg";
import hospitalImage5 from "@/assets/img5.jpg";
import hospitalImage6 from "@/assets/img6.jpg";
import Slider from "react-slick";

import {
  Clock,
  Users,
  Award,
  Phone,
  Ambulance,
  Heart,
  Shield,
  Stethoscope,
  Calendar,
  MapPin,
  Star,
} from "lucide-react";

const LightDarkImageSlider = () => {
  const lightImages = [
    hospitalImage1,
    hospitalImage3,
    hospitalImage4,
    hospitalImage5,
    hospitalImage6,
  ];

  const darkImages = [
    hospitalImage2,
    hospitalImage3,
    hospitalImage4,
    hospitalImage5,
    hospitalImage6,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-12">
      {/* Light Mode Slider */}
      <div className="block dark:hidden">
        <Slider {...settings}>
          {lightImages.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Light Slide ${index + 1}`}
                className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Dark Mode Slider */}
      <div className="hidden dark:block">
        <Slider {...settings}>
          {darkImages.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Dark Slide ${index + 1}`}
                className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Home = () => {
  const highlights = [
    {
      icon: Clock,
      title: "24x7 Emergency Care",
      description: "Round-the-clock medical care",
    },
    {
      icon: Users,
      title: "500+ Expert Doctors",
      description: "Experienced Indian medical professionals",
    },
    {
      icon: Shield,
      title: "NABH Certified",
      description: "Quality healthcare standards",
    },
    {
      icon: Stethoscope,
      title: "15+ Specialties",
      description: "Comprehensive medical services",
    },
    {
      icon: Heart,
      title: "Advanced Technology",
      description: "Modern medical equipment",
    },
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "International quality certification",
    },
  ];

  const services = [
    {
      title: "OPD Services",
      description: "Outpatient consultations with specialists",
      image: "🏥",
    },
    {
      title: "IPD Management",
      description: "Comprehensive inpatient care",
      image: "🛏️",
    },
    {
      title: "Emergency Care",
      description: "24x7 emergency medical services",
      image: "🚨",
    },
    {
      title: "Laboratory",
      description: "Advanced diagnostic services",
      image: "🔬",
    },
    {
      title: "Pharmacy",
      description: "In-house pharmacy services",
      image: "💊",
    },
    {
      title: "Teleconsultation",
      description: "Online doctor consultations",
      image: "💻",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Ghaziabad, UP",
      rating: 5,
      comment:
        "Excellent care during my surgery. The doctors and staff were very caring and professional.",
    },
    {
      name: "Rajesh Kumar",
      location: "Bulandahar, UP",
      rating: 5,
      comment:
        "Best hospital in Noida. Quick appointment booking and quality treatment at affordable prices.",
    },
    {
      name: "Anita Devi",
      location: "Noida, UP",
      rating: 5,
      comment:
        "The teleconsultation service is excellent. I could consult with specialists from home.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 px-4 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Welcome to{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  SwasthyaCare
                </span>
                <br />
                <span className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300">
                  Multispeciality Hospital
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Your Health, Our Mission. Serving India with quality, affordable
                healthcare for over 25 years.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/appointments">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-lg px-8 py-6"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950 text-lg px-8 py-6"
                  onClick={() => (window.location.href = "tel:108")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: 108
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Ambulance className="h-5 w-5 text-red-500" />
                  <span>Ambulance: 102</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <span>Noida, UP</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transition-colors">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Quick Stats
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      25+
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      500+
                    </div>
                    <div className="text-gray-600">Expert Doctors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                      50K+
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Happy Patients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                      15+
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      Specialties
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LightDarkImageSlider />
      {/* Highlights Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose SwasthyaCare?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We are committed to providing world-class healthcare services with
              Indian values and affordability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700 dark:border-gray-600"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive healthcare services designed to meet all your
              medical needs under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 dark:bg-gray-800 dark:border-gray-700"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <Link to="/services">
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Real experiences from our valued patients across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700 dark:border-gray-600"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience world-class healthcare
            with a personal touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-200 dark:text-blue-800 dark:hover:bg-gray-300 px-8 py-6"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-200 dark:text-blue-800 dark:hover:bg-gray-300 px-8 py-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}

      {/* Remaining sections... (Highlights, Services, Testimonials, CTA) */}
      {/* Paste the rest of your code here as needed */}
    </div>
  );
};

export default Home;
