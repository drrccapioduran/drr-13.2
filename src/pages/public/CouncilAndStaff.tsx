import React, { useState } from 'react';
import { User, Users, MapPin, Award, ChevronDown, ChevronUp, Building, Shield, Mail, Phone, Calendar } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ModernCard from '../../components/ModernCard';
import ModernButton from '../../components/ModernButton';

const CouncilAndStaff: React.FC = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'council' | 'staff'>('council');

  const toggleMember = (id: string) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  const councilStructure = {
    mayor: { 
      name: "Hon. Juan Dela Cruz", 
      title: "Municipal Mayor & Chairman",
      email: "mayor@pioduran.gov.ph",
      phone: "(052) 234-5678",
      bio: "Leading the municipality with a focus on disaster resilience and community safety."
    },
    secretary: { 
      name: "Maria Santos", 
      title: "General Secretary",
      email: "secretary@pioduran.gov.ph", 
      phone: "(052) 234-5679",
      bio: "Coordinating council activities and maintaining official records."
    },
    members: [
      { 
        id: 1, 
        name: "Dr. Roberto Garcia", 
        agency: "Municipal Health Officer",
        email: "mho@pioduran.gov.ph",
        phone: "(052) 234-5680",
        bio: "Overseeing health-related disaster preparedness and medical emergency response."
      },
      { 
        id: 2, 
        name: "Carlos Rivera", 
        agency: "Municipal Agriculturist",
        email: "agri@pioduran.gov.ph",
        phone: "(052) 234-5681",
        bio: "Managing agricultural disaster risk reduction and food security programs."
      },
      { 
        id: 3, 
        name: "Ana Rodriguez", 
        agency: "Municipal Social Welfare Officer",
        email: "mswd@pioduran.gov.ph",
        phone: "(052) 234-5682",
        bio: "Coordinating social services and vulnerable population protection during disasters."
      },
      { 
        id: 4, 
        name: "Pedro Martinez", 
        agency: "Municipal Engineer",
        email: "engineer@pioduran.gov.ph",
        phone: "(052) 234-5683",
        bio: "Ensuring infrastructure resilience and coordinating engineering response during emergencies."
      },
      { 
        id: 5, 
        name: "Luisa Fernandez", 
        agency: "Municipal Treasurer",
        email: "treasurer@pioduran.gov.ph",
        phone: "(052) 234-5684",
        bio: "Managing financial resources for disaster preparedness and emergency response."
      },
      { 
        id: 6, 
        name: "Ramon Castillo", 
        agency: "Punong Barangay Representative",
        email: "barangay@pioduran.gov.ph",
        phone: "(052) 234-5685",
        bio: "Representing barangay interests and coordinating community-level disaster management."
      },
      { 
        id: 7, 
        name: "Elena Torres", 
        agency: "Municipal Education Officer",
        email: "education@pioduran.gov.ph",
        phone: "(052) 234-5686",
        bio: "Implementing disaster education programs in schools and educational institutions."
      },
      { 
        id: 8, 
        name: "David Cruz", 
        agency: "Municipal Environment Officer",
        email: "environment@pioduran.gov.ph",
        phone: "(052) 234-5687",
        bio: "Managing environmental aspects of disaster risk reduction and climate adaptation."
      }
    ]
  };

  const organizationalStructure = {
    mayor: { 
      name: "Hon. Juan Dela Cruz", 
      title: "Municipal Mayor & Chairman",
      department: "Office of the Mayor"
    },
    head: { 
      name: "Engr. Maria Santos", 
      title: "MDRRMO Head",
      department: "MDRRMO"
    },
    coreOfficers: [
      {
        id: 1,
        name: "Administrative and Training Officer",
        department: "Administration & Training",
        personnel: [
          { 
            id: 1, 
            name: "Ana Reyes", 
            designation: "Chief Administrative Officer", 
            email: "ana.reyes@pioduran.gov.ph",
            certifications: ["Emergency Management Certification", "Public Administration", "Disaster Risk Management"],
            experience: "8 years in public administration and emergency management"
          },
          { 
            id: 2, 
            name: "Carlos Gomez", 
            designation: "Training Coordinator", 
            email: "carlos.gomez@pioduran.gov.ph",
            certifications: ["First Aid Instructor", "Emergency Response Training", "Community Preparedness"],
            experience: "6 years in training and capacity building"
          },
          { 
            id: 3, 
            name: "Elena Torres", 
            designation: "Administrative Assistant", 
            email: "elena.torres@pioduran.gov.ph",
            certifications: ["Records Management", "Office Administration", "Crisis Communication"],
            experience: "4 years in administrative support"
          },
          { 
            id: 4, 
            name: "David Cruz", 
            designation: "Logistics Officer", 
            email: "david.cruz@pioduran.gov.ph",
            certifications: ["Supply Chain Management", "Emergency Procurement", "Resource Mobilization"],
            experience: "5 years in logistics and supply management"
          }
        ]
      },
      {
        id: 2,
        name: "Operations and Warning Officer",
        department: "Operations & Warning",
        personnel: [
          { 
            id: 1, 
            name: "Roberto Lim", 
            designation: "Chief Operations Officer", 
            email: "roberto.lim@pioduran.gov.ph",
            certifications: ["Incident Command System", "Emergency Operations", "Search and Rescue"],
            experience: "10 years in emergency operations and incident management"
          },
          { 
            id: 2, 
            name: "Sofia Chen", 
            designation: "Warning Systems Officer", 
            email: "sofia.chen@pioduran.gov.ph",
            certifications: ["Early Warning Systems", "Meteorology Basics", "Communication Systems"],
            experience: "7 years in weather monitoring and early warning"
          },
          { 
            id: 3, 
            name: "Miguel Santos", 
            designation: "Operations Assistant", 
            email: "miguel.santos@pioduran.gov.ph",
            certifications: ["Emergency Response", "Disaster Assessment", "Field Operations"],
            experience: "3 years in field operations and assessment"
          },
          { 
            id: 4, 
            name: "Isabela Rivera", 
            designation: "Communications Officer", 
            email: "isabela.rivera@pioduran.gov.ph",
            certifications: ["Public Information", "Media Relations", "Crisis Communication"],
            experience: "5 years in public information and media relations"
          }
        ]
      },
      {
        id: 3,
        name: "Research and Planning Officer",
        department: "Research & Planning",
        personnel: [
          { 
            id: 1, 
            name: "Dr. Patricia Yang", 
            designation: "Chief Planning Officer", 
            email: "patricia.yang@pioduran.gov.ph",
            certifications: ["Disaster Risk Assessment", "Urban Planning", "Climate Change Adaptation"],
            experience: "12 years in disaster risk assessment and urban planning"
          },
          { 
            id: 2, 
            name: "Fernando Lopez", 
            designation: "Research Analyst", 
            email: "fernando.lopez@pioduran.gov.ph",
            certifications: ["Data Analysis", "GIS Mapping", "Risk Assessment"],
            experience: "6 years in research and data analysis"
          },
          { 
            id: 3, 
            name: "Carmen Valdez", 
            designation: "Planning Assistant", 
            email: "carmen.valdez@pioduran.gov.ph",
            certifications: ["Community Planning", "Project Development", "Monitoring and Evaluation"],
            experience: "4 years in planning and project development"
          },
          { 
            id: 4, 
            name: "Alberto Ruiz", 
            designation: "Database Manager", 
            email: "alberto.ruiz@pioduran.gov.ph",
            certifications: ["Information Systems", "Data Management", "Statistical Analysis"],
            experience: "8 years in database management and information systems"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Council & Staff - MDRRMO Pio Duran"
        description="Meet the Municipal Disaster Risk Reduction and Management Council members and MDRRMO staff of Pio Duran, Albay."
        keywords="MDRRMC, MDRRMO staff, disaster management council, Pio Duran officials, emergency management team"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-48 h-48 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div className="absolute top-20 right-10 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float stagger-2"></div>
            <div className="absolute -bottom-10 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float stagger-4"></div>
          </div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500 mb-6 animate-pulse-glow">
              <Shield className="w-10 h-10 text-blue-950" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4 animate-text-glow">MDRRMC & Staff</h1>
            <p className="text-lg md:text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed mb-8">
              Municipal Disaster Risk Reduction and Management Council & Office Personnel
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                <button
                  onClick={() => setActiveTab('council')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === 'council'
                      ? 'bg-yellow-500 text-blue-950 shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  MDRRM Council
                </button>
                <button
                  onClick={() => setActiveTab('staff')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === 'staff'
                      ? 'bg-yellow-500 text-blue-950 shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  MDRRMO Staff
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* MDRRM Council Members */}
        {activeTab === 'council' && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500">
                  <Users className="text-blue-950" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">MDRRM Council Members</h2>
              </div>
              
              {/* Mayor Level */}
              <div className="flex justify-center mb-12">
                <ModernCard variant="gradient" className="p-8 w-full max-w-md text-center hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://res.cloudinary.com/dedcmctqk/image/upload/v1749381954/samples/smile.jpg"
                    alt={councilStructure.mayor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-950"
                  />
                  <h3 className="text-xl font-bold text-blue-950 mb-2">{councilStructure.mayor.name}</h3>
                  <p className="text-blue-900 font-semibold mb-4">{councilStructure.mayor.title}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-blue-800">
                      <Mail size={14} />
                      <span>{councilStructure.mayor.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-blue-800">
                      <Phone size={14} />
                      <span>{councilStructure.mayor.phone}</span>
                    </div>
                  </div>
                  <p className="text-blue-900 text-sm mt-4">{councilStructure.mayor.bio}</p>
                </ModernCard>
              </div>

              {/* Secretary Level */}
              <div className="flex justify-center mb-12">
                <ModernCard variant="glass" className="p-8 w-full max-w-md text-center border-2 border-yellow-500 hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://res.cloudinary.com/dedcmctqk/image/upload/v1749381954/samples/smile.jpg"
                    alt={councilStructure.secretary.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-500"
                  />
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">{councilStructure.secretary.name}</h3>
                  <p className="text-yellow-200 font-semibold mb-4">{councilStructure.secretary.title}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-yellow-200">
                      <Mail size={14} />
                      <span>{councilStructure.secretary.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-yellow-200">
                      <Phone size={14} />
                      <span>{councilStructure.secretary.phone}</span>
                    </div>
                  </div>
                  <p className="text-yellow-200 text-sm mt-4">{councilStructure.secretary.bio}</p>
                </ModernCard>
              </div>

              {/* Council Members */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {councilStructure.members.map((member) => (
                  <ModernCard key={member.id} variant="interactive" hover className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <img 
                        src="https://res.cloudinary.com/dedcmctqk/image/upload/v1749381954/samples/smile.jpg"
                        alt={member.name}
                        className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-blue-950"
                      />
                      <h3 className="font-bold text-blue-950 mb-2 line-clamp-2">{member.name}</h3>
                      <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-3">
                        <Building className="w-3 h-3 text-blue-950" />
                        <p className="text-xs text-blue-950 font-medium">{member.agency}</p>
                      </div>
                      
                      <button
                        onClick={() => toggleMember(`council-${member.id}`)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        {expandedMember === `council-${member.id}` ? 'Show Less' : 'View Details'}
                      </button>
                      
                      {expandedMember === `council-${member.id}` && (
                        <div className="mt-4 pt-4 border-t border-gray-200 w-full animate-fade-in">
                          <div className="space-y-2 text-xs text-gray-600">
                            <div className="flex items-center gap-2">
                              <Mail size={12} />
                              <span>{member.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone size={12} />
                              <span>{member.phone}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mt-3">{member.bio}</p>
                        </div>
                      )}
                    </div>
                  </ModernCard>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* MDRRMO Organizational Structure */}
        {activeTab === 'staff' && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500">
                  <MapPin className="text-blue-950" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">MDRRMO Organizational Structure</h2>
              </div>

              {/* Mayor Level */}
              <div className="flex justify-center mb-12">
                <ModernCard variant="gradient" className="p-8 w-full max-w-md text-center hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://res.cloudinary.com/dedcmctqk/image/upload/v1749381954/samples/smile.jpg"
                    alt={organizationalStructure.mayor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-950"
                  />
                  <h3 className="text-xl font-bold text-blue-950 mb-2">{organizationalStructure.mayor.name}</h3>
                  <p className="text-blue-900 font-semibold">{organizationalStructure.mayor.title}</p>
                  <p className="text-blue-800 text-sm mt-2">{organizationalStructure.mayor.department}</p>
                </ModernCard>
              </div>

              {/* Head Level */}
              <div className="flex justify-center mb-12">
                <ModernCard variant="glass" className="p-8 w-full max-w-md text-center border-2 border-yellow-500 hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://res.cloudinary.com/dedcmctqk/image/upload/v1749381954/samples/smile.jpg"
                    alt={organizationalStructure.head.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-500"
                  />
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">{organizationalStructure.head.name}</h3>
                  <p className="text-yellow-200 font-semibold">{organizationalStructure.head.title}</p>
                  <p className="text-yellow-200 text-sm mt-2">{organizationalStructure.head.department}</p>
                </ModernCard>
              </div>

              {/* Core Officers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {organizationalStructure.coreOfficers.map((officer) => (
                  <ModernCard key={officer.id} variant="interactive" className="overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-950 to-blue-900 p-6 text-center">
                      <h3 className="text-lg font-bold text-yellow-500">{officer.name}</h3>
                      <p className="text-yellow-200 text-sm">{officer.department}</p>
                    </div>
                    <div className="p-6">
                      {officer.personnel.map((person) => (
                        <div 
                          key={person.id} 
                          className="border-b border-gray-200 last:border-b-0 py-4 cursor-pointer hover:bg-blue-50 transition-colors rounded-lg px-2"
                          onClick={() => toggleMember(`${officer.id}-${person.id}`)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4 flex-1">
                              <img 
                                src="https://res.cloudinary.com/dedcmctqk/image/upload/v1749381954/samples/smile.jpg"
                                alt={person.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-blue-950 flex-shrink-0"
                              />
                              <div className="flex-1">
                                <h4 className="font-bold text-blue-950 mb-1">{person.name}</h4>
                                <p className="text-sm text-gray-600 mb-2">{person.designation}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                  <Mail size={12} />
                                  <span>{person.email}</span>
                                </div>
                                
                                {expandedMember === `${officer.id}-${person.id}` && (
                                  <div className="mt-4 p-4 bg-blue-50 rounded-lg animate-fade-in">
                                    <div className="space-y-3">
                                      <div>
                                        <div className="flex items-center gap-2 mb-2">
                                          <Award className="text-yellow-500" size={16} />
                                          <span className="text-sm font-semibold text-blue-950">Certifications:</span>
                                        </div>
                                        <ul className="text-sm text-gray-700 space-y-1">
                                          {person.certifications.map((cert, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                              <span className="text-yellow-500">•</span>
                                              <span>{cert}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      
                                      <div>
                                        <div className="flex items-center gap-2 mb-2">
                                          <Calendar className="text-blue-600" size={16} />
                                          <span className="text-sm font-semibold text-blue-950">Experience:</span>
                                        </div>
                                        <p className="text-sm text-gray-700">{person.experience}</p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                            <button className="text-blue-950 hover:text-yellow-500 transition-colors ml-2 self-start mt-1">
                              {expandedMember === `${officer.id}-${person.id}` ? 
                                <ChevronUp size={20} /> : 
                                <ChevronDown size={20} />
                              }
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ModernCard>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Mission Statement */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 mb-6">
              <Shield className="w-8 h-8 text-blue-950" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              To protect and serve our community by implementing comprehensive disaster risk reduction strategies, 
              ensuring preparedness, effective response, and sustainable recovery efforts for all residents of Pio Duran.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ModernCard variant="glass" className="p-6">
                <h3 className="text-lg font-bold text-yellow-500 mb-2">Preparedness</h3>
                <p className="text-blue-200 text-sm">Building community capacity through training and education</p>
              </ModernCard>
              
              <ModernCard variant="glass" className="p-6">
                <h3 className="text-lg font-bold text-yellow-500 mb-2">Response</h3>
                <p className="text-blue-200 text-sm">Coordinated emergency response and resource mobilization</p>
              </ModernCard>
              
              <ModernCard variant="glass" className="p-6">
                <h3 className="text-lg font-bold text-yellow-500 mb-2">Recovery</h3>
                <p className="text-blue-200 text-sm">Supporting community recovery and building back better</p>
              </ModernCard>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CouncilAndStaff;