import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-school-blue to-school-blue-light text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Welcome to DRS <span className="text-school-orange">Institutions</span>
            </h1>
            <p className="text-xl mb-8">
              Nurturing young minds with quality education and holistic development
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admissions">
                <a className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-school-orange hover:bg-orange-600 transition-colors">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Link>
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-school-blue transition-colors">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="/images/hero-image.jpg"
              alt="Students in classroom"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
