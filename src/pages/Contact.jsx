import  emailjs   from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import { useRef, useState,useEffect } from 'react'
import { Suspense } from 'react';
import Fox from '../models/Fox'; // Assuming you have a Fox model
import Loader from '../components/Loader'; // Assuming you have a Loader component
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import { socialLinks } from '../constants';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [ alert, showAlert, hideAlert ] = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  useEffect(() => {
  emailjs.init('maM8Fys2yv7SWWHtz');
  }, []);


  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        'service_vb4bzqb',
        'template_ug0a18a',
        {
          from_name: form.name,
          to_name: "Anurag",
          from_email: form.email,
          to_email: "anurag20302001@gmail.com",
          message: form.message,
        },
        'maM8Fys2yv7SWWHtz',
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className='relative flex flex-col lg:flex-row max-container'>
      {alert?.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col w-full gap-7 mt-14'
        >
          <label className='font-semibold text-black-500'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='font-semibold text-black-500'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@email.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='font-semibold text-black-500'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          {/* <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          */}
          <div className="flex items-center gap-4">
  <button
    type='submit'
    disabled={loading}
    className='btn'
    onFocus={handleFocus}
    onBlur={handleBlur}
  >
    {loading ? "Sending..." : "Submit"}
  </button>

  {/* Social Icons beside the button */}
  <div className="flex gap-3">
    {socialLinks.slice(1).map((link, index) => (
      <a
        key={`social-icon-${index}`}
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-200 hover:scale-110"
      >
        <img
          src={link.iconUrl}
          alt={link.name}
          className="w-8 h-8 md:w-9 md:h-9"
        />
      </a>
    ))}
  </div>
</div>

  
        </form>
      </div>

      <div className='flex flex-col items-center w-full lg:w-1/2'>
  <div className='w-full h-[350px] md:h-[550px]'>
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
    >
      <directionalLight position={[0, 0, 1]} intensity={2.5} />
      <ambientLight intensity={1} />
      <pointLight position={[5, 10, 0]} intensity={2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
      />

      <Suspense fallback={<Loader />}>
        <Fox
          currentAnimation={currentAnimation}
          position={[0.5, 0.35, 0]}
          rotation={[12.629, -0.6, 0]}
          scale={[0.5, 0.5, 0.5]}
        />
      </Suspense>
    </Canvas>
  </div>

  
</div>

    </section>
  );
};

export default Contact;
