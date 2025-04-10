import React from "react";
import Header from "@/components/custom/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Users } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section + Image Section Combined */}
      <section className="text-center pb-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-white relative">
        <div className="max-w-3xl mx-auto pt-20">
          <h1 className="text-4xl font-bold mb-4">
            Build Your Perfect Resume in Minutes!
          </h1>
          <p className="text-lg mb-6">
            Create, customize, and download professional resumes easily.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-100">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="mt-10 flex justify-center">
          <img
            src="resume-example.png"
            alt="Resume Example"
            className="w-full max-h-[500px] object-cover shadow-lg"
          />
        </div>

        {/* Full-Width Curved Wave Effect */}
        <svg
  className="absolute bottom-[-73px] left-0 w-full"
  viewBox="0 0 1440 320"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="white"
    fillOpacity="1"
    d="M0,256L60,229.3C120,203,240,149,360,144C480,139,600,181,720,197.3C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
  />
</svg>

      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Star className="text-indigo-500 h-10 w-10 mb-3" />
              <h3 className="text-lg font-semibold">Easy to Use</h3>
              <p className="text-gray-600">Our simple interface makes resume-building effortless.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="text-green-500 h-10 w-10 mb-3" />
              <h3 className="text-lg font-semibold">Professional Designs</h3>
              <p className="text-gray-600">Choose from stunning resume templates.</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="text-blue-500 h-10 w-10 mb-3" />
              <h3 className="text-lg font-semibold">Used by Thousands</h3>
              <p className="text-gray-600">Join professionals worldwide in securing jobs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Resume Builder. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Use</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
