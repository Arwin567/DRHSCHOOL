import { Check } from "lucide-react";
import studentsEventImage from "@assets/WhatsApp Image 2025-06-07 at 16.04.58_1151a1d8_1749356068409.jpg";

export default function AboutSection() {
  const features = [
    "Quality Education",
    "Expert Faculty",
    "Modern Infrastructure",
    "Holistic Development",
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-school-orange">DRS</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              DRS - Discipline Resolute High School is a premier educational institution dedicated to 
              providing quality education and holistic development. Located in Devarakonda, Telangana, 
              we focus on nurturing young minds with modern teaching methodologies and comprehensive learning experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our school believes that "Education is the most powerful weapon which you can use to change the world." 
              We are committed to building strong foundations in academics while fostering creativity, 
              critical thinking, and character development in our students.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="text-school-orange w-5 h-5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src={studentsEventImage}
              alt="Students at DRS"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
