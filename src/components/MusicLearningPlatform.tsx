import { useState } from 'react';
import { Link } from 'react-router-dom';

const teachers = [
  { id: 1, name: "John Smith", instrument: "Guitar", experience: "15 years", image: "https://images.pexels.com/photos/4088012/pexels-photo-4088012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 2, name: "Sarah Johnson", instrument: "Piano", experience: "20 years", image: "https://images.pexels.com/photos/4088801/pexels-photo-4088801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 3, name: "Michael Brown", instrument: "Drums", experience: "12 years", image: "https://images.pexels.com/photos/4088019/pexels-photo-4088019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, name: "Emily Davis", instrument: "Violin", experience: "18 years", image: "https://images.pexels.com/photos/4088014/pexels-photo-4088014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 5, name: "David Wilson", instrument: "Saxophone", experience: "10 years", image: "https://images.pexels.com/photos/4088001/pexels-photo-4088001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 6, name: "Lisa Anderson", instrument: "Flute", experience: "14 years", image: "https://images.pexels.com/photos/4088018/pexels-photo-4088018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 7, name: "Robert Taylor", instrument: "Cello", experience: "16 years", image: "https://images.pexels.com/photos/4088016/pexels-photo-4088016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 8, name: "Amanda White", instrument: "Clarinet", experience: "11 years", image: "https://images.pexels.com/photos/4088011/pexels-photo-4088011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

const MusicLearningPlatform = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <nav className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Music Learning Platform</h1>
          <div>
            <Link to="/" className="mr-4 hover:underline">Back to Home</Link>
            <button onClick={toggleDarkMode} className="p-2 rounded-full">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expert Music Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className={`border rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{teacher.name}</h3>
                <p className="text-sm mb-2">Instrument: {teacher.instrument}</p>
                <p className="text-sm mb-4">Experience: {teacher.experience}</p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 w-full text-white font-bold py-2 px-4 rounded">
                  Book a Lesson
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MusicLearningPlatform;