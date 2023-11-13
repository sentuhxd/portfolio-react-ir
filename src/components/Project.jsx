import { useEffect } from 'react';
import img1 from '../assets/texteditor.png';
import img4 from '../assets/awesomeartifacts.png';
import img5 from '../assets/ecommerce.png';
import img6 from '../assets/gameboardio.png';
import Aos from 'aos';

const Projects = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])
    return (
       <div id="Projects" className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
            <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img1} alt="Text Editor PWA" />
            <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img5} alt="ecom and stripe functionality" />
            <img data-aos="fade-up" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img6} alt="gameboardio" />
            <img data-aos="fade-down" height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img4} alt="" />
        </div>
       </div>
    );
};

export default Projects;