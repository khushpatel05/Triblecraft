import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Play, Lock, Check, Clock, Users, Award, Book } from 'lucide-react';

// Mock API function to fetch course data with complete curriculum for all courses
const fetchCourseData = async (id) => {
  const courses = {
    1: {
      id: 1,
      title: 'Introduction to Madhubani Art',
      instructor: 'Rajesh Kumar',
      level: 'Beginner',
      duration: '6 weeks',
      image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1974&auto=format&fit=crop',
      description: 'Learn the basics of traditional Madhubani painting techniques.',
      modules: 12,
      students: 234,
      price: 99,
      videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0',
      curriculum: [
        {
          id: 1,
          title: 'Introduction to Madhubani Art',
          duration: '15 min',
          freePreview: true,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 2,
          title: 'History and Origins of Madhubani',
          duration: '22 min',
          freePreview: true,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 3,
          title: 'Materials and Tools Needed',
          duration: '18 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 4,
          title: 'Basic Brush Techniques',
          duration: '25 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 5,
          title: 'Traditional Color Palettes',
          duration: '20 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 6,
          title: 'Drawing Basic Shapes and Patterns',
          duration: '30 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 7,
          title: 'Creating Borders and Frames',
          duration: '28 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 8,
          title: 'Depicting Nature Elements',
          duration: '35 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 9,
          title: 'Human and Divine Figures',
          duration: '40 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 10,
          title: 'Composition Techniques',
          duration: '32 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 11,
          title: 'Final Project Guidance',
          duration: '45 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 12,
          title: 'Preserving and Framing Your Art',
          duration: '20 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        }
      ],
      includes: [
        '12 hours on-demand video',
        '15 downloadable resources',
        'Full lifetime access',
        'Certificate of completion'
      ],
      instructorBio: 'Rajesh Kumar has been practicing Madhubani art for over 15 years and has taught hundreds of students worldwide.'
    },
    2: {
      id: 2,
      title: 'Advanced Tribal Jewelry Making',
      instructor: 'Priya Singh',
      level: 'Advanced',
      duration: '8 weeks',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=390&auto=format&fit=crop',
      description: 'Master the art of creating intricate tribal jewelry designs.',
      modules: 16,
      students: 156,
      price: 129,
      videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0',
      curriculum: [
        {
          id: 1,
          title: 'Introduction to Tribal Jewelry',
          duration: '18 min',
          freePreview: true,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 2,
          title: 'History of Tribal Jewelry',
          duration: '20 min',
          freePreview: true,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 3,
          title: 'Materials and Tools Overview',
          duration: '25 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 4,
          title: 'Basic Metalworking Techniques',
          duration: '30 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 5,
          title: 'Stone Setting Methods',
          duration: '35 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 6,
          title: 'Traditional Beading Patterns',
          duration: '28 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 7,
          title: 'Creating Pendants and Charms',
          duration: '40 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 8,
          title: 'Bracelet and Anklet Designs',
          duration: '32 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 9,
          title: 'Necklace Composition',
          duration: '45 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 10,
          title: 'Earring Variations',
          duration: '25 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 11,
          title: 'Advanced Texturing Techniques',
          duration: '50 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 12,
          title: 'Oxidation and Patina Effects',
          duration: '35 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 13,
          title: 'Creating Tribal Headpieces',
          duration: '45 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 14,
          title: 'Jewelry Photography',
          duration: '30 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 15,
          title: 'Pricing Your Work',
          duration: '25 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 16,
          title: 'Final Project Showcase',
          duration: '60 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        }
      ],
      includes: [
        '15 hours on-demand video',
        '20 downloadable resources',
        'Full lifetime access',
        'Certificate of completion'
      ],
      instructorBio: 'Priya Singh is a renowned tribal jewelry maker with expertise in traditional silverwork techniques.'
    },
    3: {
      id: 3,
      title: 'Traditional Textile Weaving',
      instructor: 'Lakshmi Rao',
      level: 'Intermediate',
      duration: '10 weeks',
      image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=387&auto=format&fit=crop',
      description: 'Explore traditional weaving techniques and patterns.',
      modules: 14,
      students: 189,
      price: 119,
      videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0',
      curriculum: [
        {
          id: 1,
          title: 'Introduction to Textile Weaving',
          duration: '20 min',
          freePreview: true,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 2,
          title: 'History of Traditional Weaving',
          duration: '25 min',
          freePreview: true,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 3,
          title: 'Types of Looms',
          duration: '30 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 4,
          title: 'Yarn Selection',
          duration: '28 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 5,
          title: 'Warping the Loom',
          duration: '35 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 6,
          title: 'Basic Weaving Techniques',
          duration: '40 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 7,
          title: 'Plain Weave Patterns',
          duration: '32 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 8,
          title: 'Twill Weave Variations',
          duration: '45 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 9,
          title: 'Creating Stripes and Checks',
          duration: '30 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 10,
          title: 'Ikat Dyeing Techniques',
          duration: '50 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 11,
          title: 'Advanced Pattern Design',
          duration: '45 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 12,
          title: 'Finishing Techniques',
          duration: '35 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 13,
          title: 'Troubleshooting Common Issues',
          duration: '40 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        },
        {
          id: 14,
          title: 'Final Project: Woven Scarf',
          duration: '60 min',
          freePreview: false,
          videoUrl: 'https://www.youtube.com/embed/-nFvZKRyFo0'
        }
      ],
      includes: [
        '14 hours on-demand video',
        '18 downloadable resources',
        'Full lifetime access',
        'Certificate of completion'
      ],
      instructorBio: 'Lakshmi Rao comes from a long line of weavers and specializes in traditional Ikat weaving techniques.'
    }
  };
  
  return courses[id] || null;
};

// Function to convert USD to INR
const convertToINR = (usd) => {
  const exchangeRate = 83.5; // Approximate exchange rate
  return Math.round(usd * exchangeRate);
};

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('curriculum');

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const courseData = await fetchCourseData(id);
        setCourse(courseData);
        if (courseData && courseData.curriculum) {
          setSelectedVideo(courseData.curriculum[0].videoUrl);
        }
      } catch (error) {
        console.error('Error loading course:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCourse();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!course) {
    return <div className="min-h-screen flex items-center justify-center">Course not found</div>;
  }

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{course.description}</p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{course.students} students</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{course.duration}</span>
              </div>
              <div className="flex items-center">
                <Book className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{course.modules} modules</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{course.level}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab('curriculum')}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'curriculum' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Curriculum
                  </button>
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Overview
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'curriculum' ? (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Course Content</h3>
                    <div className="space-y-2">
                      {course.curriculum.map((item) => (
                        <div 
                          key={item.id} 
                          className={`p-4 border rounded-lg cursor-pointer ${item.freePreview ? 'border-indigo-300 bg-indigo-50' : 'border-gray-200'}`}
                          onClick={() => item.freePreview && setSelectedVideo(item.videoUrl)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              {item.freePreview ? (
                                <Play className="h-5 w-5 text-indigo-600 mr-3" />
                              ) : (
                                <Lock className="h-5 w-5 text-gray-400 mr-3" />
                              )}
                              <span className={`${item.freePreview ? 'text-indigo-600' : 'text-gray-600'}`}>
                                {item.title}
                              </span>
                            </div>
                            <span className="text-sm text-gray-500">{item.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">About This Course</h3>
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-3">What You'll Learn</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Traditional techniques</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Color theory for folk art</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Creating intricate patterns</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>Composition and storytelling</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Course Price</h3>
                <div className="flex flex-col items-end">
                  <span className="text-2xl font-bold text-indigo-600">₹{convertToINR(course.price)}</span>
                </div>
              </div>

              <Button size="lg" className="w-full mb-4">
                Buy Now
              </Button>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">This course includes:</h4>
                <ul className="space-y-2">
                  {course.includes.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 sticky top-[400px]">
              <h3 className="text-lg font-bold text-gray-900 mb-4">About the Instructor</h3>
              <div className="flex items-center mb-4">
                <img
                  src={course.image}
                  alt={course.instructor}
                  className="h-12 w-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-medium">{course.instructor}</h4>
                  <p className="text-sm text-gray-500">Master Artisan</p>
                </div>
              </div>
              <p className="text-gray-600">{course.instructorBio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;