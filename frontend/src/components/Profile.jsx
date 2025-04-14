import React from "react";
import achyuthimage from "../assets/Achyuthimage2.jpg";

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <img
        src={achyuthimage}
        alt="Profile"
        className="rounded-full mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-4 border-gray-300"
      />
      <h1 className="text-3xl font-bold text-gray-800">Achyuth Reddy</h1>
      <p className="text-center mt-2 text-gray-600">
        Aspiring software developer with a strong foundation in data structures,
        algorithms, and web development. Proven ability to develop dynamic web
        applications and solve complex problems through practical projects and
        coursework. Highly motivated with excellent analytical and communication
        skills.
      </p>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">Hobbies:</h2>
      <ul className="list-disc list-inside mt-2 text-gray-600">
        <li>Playing Cricket</li>
        <li>Watching Movies</li>
        <li>Working Out</li>
      </ul>
    </div>
  );
};

export default Profile;
