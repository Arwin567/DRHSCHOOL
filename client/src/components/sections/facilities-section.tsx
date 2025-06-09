import mainCampusImage from "@assets/WhatsApp Image 2025-06-07 at 16.04.57_00633c84_1749356068407.jpg";
import schoolEventsImage from "@assets/WhatsApp Image 2025-06-07 at 16.04.58_1151a1d8_1749356068409.jpg";
import patrioticActivitiesImage from "@assets/WhatsApp Image 2025-06-07 at 16.04.58_e765ab9f_1749356068409.jpg";
import leadershipProgramsImage from "@assets/WhatsApp Image 2025-06-07 at 16.04.59_22f451c4_1749356068409.jpg";
import schoolBuildingImage from "@assets/WhatsApp Image 2025-06-07 at 16.04.57_69684f0d_1749356068408.jpg";
import studentRecognitionImage from "@assets/WhatsApp Image 2025-06-07 at 16.04.57_9670f36b_1749356068408.jpg";

export default function FacilitiesSection() {
  const facilities = [
    {
      image: mainCampusImage,
      title: "Main Campus",
      description: "Modern educational infrastructure",
    },
    {
      image: schoolEventsImage,
      title: "School Events",
      description: "Cultural and educational programs",
    },
    {
      image: patrioticActivitiesImage,
      title: "Patriotic Activities",
      description: "Character building programs",
    },
    {
      image: leadershipProgramsImage,
      title: "Leadership Programs",
      description: "Building future leaders",
    },
    {
      image: schoolBuildingImage,
      title: "School Building",
      description: "State-of-the-art facilities",
    },
    {
      image: studentRecognitionImage,
      title: "Student Recognition",
      description: "Celebrating achievements",
    },
  ];

  return (
    <section id="facilities" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            World-Class <span className="text-school-orange">Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our campus is equipped with state-of-the-art facilities designed to provide 
            the best learning environment for our students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card relative group overflow-hidden rounded-xl shadow-lg">
              <img 
                src={facility.image} 
                alt={facility.title} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                <p className="text-sm">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
