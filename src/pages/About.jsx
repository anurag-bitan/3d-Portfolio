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
          I am a Software Engineer from India with a passion for building innovative solutions. 
          My journey in software development has been driven by curiosity and a desire to create impactful applications.
        </p>
      </div>
      <div className='flex py-10-col'>
        <h3 className='subhead-text'>I have worked on</h3>
        
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
        <h3 className='subhead-text'>My Experience</h3>
        <div >
          <div className='flex gap-3 mt-5-col text-slate-500'>
            <p>
              I am a Software Engineer from India with a passion for building innovative solutions. 
              My journey in software development has been driven by curiosity and a desire to create impactful applications.
            </p>
          </div>
        </div>
        
        <div className='flex mt-12'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                //date={experience.date}
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
