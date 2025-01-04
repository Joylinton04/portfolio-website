import { ChevronDown, GithubIcon, Linkedin, Twitter } from 'lucide-react';

type prop = {
  children: React.ReactNode;
}

const BackgroundLayout = ({ children }: prop) => {
  return (
    <div className="relative min-h-screen bg-dark">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('src/assets/bgsec1.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay with blur - reduced opacity */}
        <div className="absolute inset-0 bg-[#161616]/80 backdrop-blur-sm" />
      </div>
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className='bg-[#161616] min-h-screen text-title'>
      {/* first section */}
      <BackgroundLayout>
        <div className='relative h-screen p-body'>
          <div className='absolute top-0 flex flex-col items-center'>
            <span className='block bg-soft h-[130px] w-[2px]'></span>
            <ul className='mt-4 flex flex-col gap-3'>
              <li className='rounded-full bg-white p-1 text-black'><a href=""><Linkedin size="20px" fill='#000'/></a></li>
              <li className='rounded-full bg-white p-1 text-black'><a href=""><GithubIcon size="20px" fill='#000'/></a></li>
              <li className='rounded-full bg-white p-1 text-black'><a href=""><Twitter size="20px" fill='#000'/></a></li>
            </ul>
          </div>

          <nav className='flex justify-between font-heading ml-8 relative z-20'>
            <h1><span className='font-bold'>MY</span> <span className='text-soft'>PORTFOLIO</span></h1>
            <ul className='flex gap-4'>
              <li id='aboutme'><span className='text-highlight'>&lt;</span>ABOUT ME<span className='text-highlight'>&gt;</span></li>
              <li><span className='text-highlight'>&lt;</span>STACK<span className='text-highlight'>&gt;</span></li>
              <li><span className='text-highlight'>&lt;</span>PROJECTS<span className='text-highlight'>&gt;</span></li>
              <li><span className='text-highlight'>&lt;</span>CONTACTS<span className='text-highlight'>&gt;</span></li>
            </ul>
          </nav>

          <div className='absolute top-[25%] left-[7.5rem]'>
            <h1 className='font-heading text-6xl'>
              <span className='text-highlight'>FRONT-END </span>
              <span className='h-1 w-[70px] bg-title block'></span>
              <span className='ml-[9rem]'>DEVELOPER</span>
            </h1>
            <p className='text-lg font-body text-title mt-8 text-right w-[60%]'>
              I'm a passionate, dedicated, and creative front-end developer with a keen eye for design and a strong foundation in HTML, CSS, and JavaScript.
            </p>
          </div>

          <div className='absolute bottom-40 left-1/2 -translate-x-1/2 text-teal-400 flex flex-col animate-bounce'>
            <ChevronDown size={80} strokeWidth={2.25}/>
            <ChevronDown size={80} strokeWidth={2.25} className='absolute top-8'/>
          </div>
        </div>
      </BackgroundLayout>

      {/* second section */}
      <div className='h-screen'>
      </div>
    </div>
  );
}

export default Home;