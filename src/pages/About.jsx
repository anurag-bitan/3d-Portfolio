import { experiences, skills } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
      I am <span className='font-semibold blue-gradient_text drop-shadow'>Anurag</span> 👋
      </h1>
      
      <div>
        <p className='flex gap-3 mt-5-col text-slate-500'>
          Hi, I'm Anurag — a tech lover who enjoys solving problems with code. 👋

After finishing my B.Tech in Computer Science, I joined TCS as a Systems Engineer. I worked in the BFSI domain, and within just 8 months, I helped deliver a project that went live successfully. I even led a team of 5 people and managed a Line of Business on my own!

In my daily work, I used tools like PL/SQL , JSP , JavaScript , Jasper Reports , APIs, and a bit of Java. I worked on both backend logic and user interfaces, and I also talked to clients to understand their needs.
    
Over time, I learned how to build better software, work in a team, and handle real-world challenges. Now that I’ve moved on from TCS, I’m excited to keep learning and building new things in tech. 🚀


        </p>
      </div>
      <div className='flex py-10-col'>
        <h3 className='subhead-text'>I have experience with</h3>
        
        <div className='flex flex-wrap gap-12 mt-16'>
          {skills.map((skill) => (
            <div className='w-20 h-20 block-container' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='flex items-center justify-center btn-front rounded-xl'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='object-contain w-1/2 h-1/2'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>My Experience & Projects</h3>
        <div >
          <div className='flex gap-3 mt-5-col text-slate-500'>
            <p>
              I've had the opportunity to gain some valuable and exciting experiences so far — and I'm looking forward to many more ahead. Below, you’ll find a snapshot of my journey and the work I've been a part of.
            </p>
          </div>
        </div>
        
        <div className='flex mt-12'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex items-center justify-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                 <a
    href={experience.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
                <div>
                  <h3 className='text-xl font-semibold text-black font-poppins'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-base font-medium text-black-500'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  
                </div>
                <ul className='my-5 ml-5 space-y-2 list-disc'>
                  {experience.points.map((point,index) =>(
                    <li key={`experience-point-${index}`} 
                    className='font-normal text-black-500/50 '>
                      {point}
                    </li>
                  ))}
                </ul>
                </a>
                
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        
      </div>
      
      
      <hr className='border-slate-200' />
	<CTA />
    </section>
  )
}

export default About
