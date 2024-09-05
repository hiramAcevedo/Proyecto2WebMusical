import { useState } from 'react';
import { Link } from 'react-router-dom';

// Definimos los cursos como una constante fuera del componente
const courses = [
  {
    id: 1,
    title: "Master the Guitar",
    instructor: "John Doe",
    duration: "8 weeks",
    level: "Beginner",
    image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Ruta a la imagen del curso de guitarra
  },
  {
    id: 2,
    title: "Piano for Professionals",
    instructor: "Jane Smith",
    duration: "12 weeks",
    level: "Advanced",
    image: "https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Ruta a la imagen del curso de piano
  },
  {
    id: 3,
    title: "Drum Basics",
    instructor: "Mike Johnson",
    duration: "6 weeks",
    level: "Beginner",
    image: "https://images.pexels.com/photos/164967/pexels-photo-164967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Ruta a la imagen del curso de batería
  },
  {
    id: 4,
    title: "Vocal Techniques",
    instructor: "Sarah Lee",
    duration: "10 weeks",
    level: "Intermediate",
    image: "https://images.pexels.com/photos/7086299/pexels-photo-7086299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Ruta a la imagen del curso de canto
  },
];

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <nav className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MusicMaster</h1>
          <div>
            <Link to="/platform" className="mr-4 hover:underline">Learning Platform</Link>
            <button onClick={toggleDarkMode} className="p-2 rounded-full">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <div className="relative h-[50vh] bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Learn Music Online</h1>
            <p className="text-xl mb-8">Master your favorite instruments from anywhere in the world</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div key={course.id} className={`border rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{course.title}</h3>
              <p className="text-sm mb-2">Instructor: {course.instructor}</p>
              <p className="text-sm mb-2">Duration: {course.duration}</p>
              <p className="text-sm mb-4">Level: {course.level}</p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 w-full text-white font-bold py-2 px-4 rounded">
                Start Learning
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default HomePage;