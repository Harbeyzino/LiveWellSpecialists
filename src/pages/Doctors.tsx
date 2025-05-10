
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DoctorCard from '@/components/DoctorCard';

const Doctors = () => {
  // Doctors data
  const doctors = [
    {
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
      name: 'Sarah Johnson',
      specialty: 'Cardiology',
      description: 'Dr. Johnson is a board-certified cardiologist with over 15 years of experience in treating complex heart conditions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3464&q=80',
      name: 'Michael Chen',
      specialty: 'Neurology',
      description: 'Dr. Chen specializes in neurological disorders and has conducted groundbreaking research in stroke prevention.'
    },
    {
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
      name: 'Emily Rodriguez',
      specialty: 'Pediatrics',
      description: 'Dr. Rodriguez is passionate about children\'s health and has a gentle approach that puts young patients at ease.'
    },
    {
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
      name: 'David Wilson',
      specialty: 'Orthopedics',
      description: 'Dr. Wilson specializes in sports medicine and joint replacement surgery with a focus on minimally invasive techniques.'
    },
    {
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
      name: 'Jessica Patel',
      specialty: 'Dermatology',
      description: 'Dr. Patel is an expert in medical and cosmetic dermatology with advanced training in skin cancer detection and treatment.'
    },
    {
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
      name: 'Robert Thompson',
      specialty: 'General Surgery',
      description: 'Dr. Thompson has performed thousands of successful surgeries and specializes in minimally invasive procedures.'
    },
    {
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
      name: 'Linda Martinez',
      specialty: 'Psychiatry',
      description: 'Dr. Martinez provides compassionate mental health care and has expertise in treating anxiety, depression, and PTSD.'
    },
    {
      image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
      name: 'James Kim',
      specialty: 'Emergency Medicine',
      description: 'Dr. Kim leads our emergency department and is known for his calm demeanor and quick decision-making in critical situations.'
    },
    {
      image: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
      name: 'Samantha Lee',
      specialty: 'Obstetrics & Gynecology',
      description: 'Dr. Lee provides comprehensive women\'s healthcare from adolescence through menopause with a special interest in minimally invasive surgery.'
    }
  ];

  // Specialty filters
  const specialties = ["All", "Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology", "General Surgery", "Psychiatry", "Emergency Medicine", "Obstetrics & Gynecology"];
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [filteredDoctors, setFilteredDoctors] = React.useState(doctors);
  
  const handleFilterChange = (specialty: string) => {
    setActiveFilter(specialty);
    
    if (specialty === "All") {
      setFilteredDoctors(doctors);
    } else {
      setFilteredDoctors(doctors.filter(doctor => doctor.specialty === specialty));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hospital-blue to-hospital-green py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Our Doctors</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Meet our team of experienced healthcare professionals dedicated to providing exceptional care with compassion and expertise.
            </p>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {specialties.map((specialty, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === specialty
                      ? 'bg-hospital-blue text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => handleFilterChange(specialty)}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Doctors Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor, index) => (
                <DoctorCard 
                  key={index}
                  image={doctor.image}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  description={doctor.description}
                />
              ))}
            </div>
            
            {filteredDoctors.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl text-gray-600">No doctors found for this specialty.</h3>
                <button
                  className="mt-4 px-4 py-2 bg-hospital-blue text-white rounded-md"
                  onClick={() => handleFilterChange("All")}
                >
                  View All Doctors
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Join Our Team */}
        <section className="py-16 bg-hospital-blue/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-hospital-blue mb-4">Join Our Medical Team</h2>
              <p className="text-gray-600 mb-8">
                We are always looking for talented and compassionate healthcare professionals to join our team. If you are dedicated to providing excellent patient care and want to be part of a supportive medical community, we'd love to hear from you.
              </p>
              <a href="/contact-us" className="hospital-btn-primary">
                Contact Us About Careers
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Doctors;
