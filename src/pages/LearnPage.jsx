import React from 'react';
import { Button } from '../components/ui/button';
import { Play, Book, Users, AlignCenterVertical as Certificate } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'Introduction to Madhubani Art',
    instructor: 'Rajesh Kumar',
    level: 'Beginner',
    duration: '6 weeks',
    image: 'https://thumbs.dreamstime.com/b/madhubani-painting-8294267.jpg',
    description: 'Learn the basics of traditional Madhubani painting techniques.',
    modules: 12,
    students: 234
  },
  {
    id: 2,
    title: 'Advanced Tribal Jewelry Making',
    instructor: 'Priya Singh',
    level: 'Advanced',
    duration: '8 weeks',
    image: 'https://img.freepik.com/free-photo/multi-colored-bead-necklace-homemade-souvenir-indigenous-cultures-generated-by-ai_188544-61228.jpg',
    description: 'Master the art of creating intricate tribal jewelry designs.',
    modules: 16,
    students: 156
  },
  {
    id: 3,
    title: 'Traditional Textile Weaving',
    instructor: 'Lakshmi Rao',
    level: 'Intermediate',
    duration: '10 weeks',
    image: 'https://media.istockphoto.com/id/153278272/photo/rug.jpg?s=612x612&w=0&k=20&c=uMj9m8cCXSOb4b1hIqmwJJRdZPQLWuyTQkR-Hx2yN_U=',
    description: 'Explore traditional weaving techniques and patterns.',
    modules: 14,
    students: 189
  }
];

const workshops = [
  {
    id: 1,
    title: 'Live Warli Art Workshop',
    date: 'March 15, 2024',
    time: '10:00 AM IST',
    instructor: 'Amrita Devi',
    image: 'https://i.pinimg.com/474x/f4/7d/f4/f47df4f0f8cda9f856a6881cedeaedb0.jpg',
    meetLink: 'https://meet.google.com/landing'
  },
  {
    id: 2,
    title: 'Pottery Making Masterclass',
    date: 'March 20, 2024',
    time: '2:00 PM IST',
    instructor: 'Mohammad Hussain',
    image: 'https://tribetraveltours.com/wp-content/uploads/2024/11/Cappadocia-Avanos-Pottery7-SH.jpg',
    meetLink: 'https://meet.google.com/landing'
  }
];

function LearnPage() {
  const handleJoinWorkshop = (meetLink) => {
    // Open Google Meet in a new tab
    window.open(meetLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Master Traditional Art Forms</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn directly from master artisans and preserve cultural heritage through our comprehensive courses and workshops.
          </p>
        </div>

        {/* Featured Courses */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-indigo-600">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Book className="h-4 w-4 mr-2" />
                    <span>{course.modules} modules</span>
                    <span className="mx-2">·</span>
                    <Users className="h-4 w-4 mr-2" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Instructor</p>
                      <p className="font-medium">{course.instructor}</p>
                    </div>
                    <Link to={`/CourseDetails/${course.id}`}>
                      <Button>Enroll Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live Workshops */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Live Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                <div className="w-1/3">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{workshop.title}</h3>
                  <div className="text-sm text-gray-500 mb-4">
                    <p>{workshop.date}</p>
                    <p>{workshop.time}</p>
                    <p>By {workshop.instructor}</p>
                  </div>
                  <Button onClick={() => handleJoinWorkshop(workshop.meetLink)}>
                    <Play className="h-4 w-4 mr-2" />
                    Join Workshop
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certification */}
        <section className="bg-indigo-50 rounded-2xl p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Certified</h2>
              <p className="text-gray-600 max-w-xl">
                Earn recognized certificates upon completion of our courses. Showcase your expertise in traditional art forms.
              </p>
            </div>
            <Certificate className="h-16 w-16 text-indigo-600" />
          </div>
          <div className="mt-6">
            <Button size="lg">View All Certificates</Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LearnPage;