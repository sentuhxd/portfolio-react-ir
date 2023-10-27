import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn } from 'react-icons/fa';
import img from '../assets/profileimg.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Header = () => {
   useEffect(() => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })
   },[])
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase">Welcome To <span className="text-fuchsia-500">My Portfolio</span></h1>
                <p data-aos="fade-left">My name is Ian, and I am a dedicated student currently pursuing my education at Morehouse College. As a passionate learner, I am also actively engaged in expanding my knowledge and skills in the field of computer science through Columbia Bootcamp. My academic journey has instilled in me a strong work ethic, an unwavering commitment to personal growth, and the ability to tackle complex challenges with determination. I am driven by a deep-seated curiosity about the world of technology and a desire to make a meaningful impact in the tech industry.I am excited to merge my academic foundation with the practical experience I am gaining through Columbia Bootcamp, and I look forward to contributing my skills, creativity, and problem-solving abilities to future endeavors in the field of computer science.Thank you for considering my profile, and I am eager to explore opportunities where I can apply my education and skills to real-world projects and make a difference.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div data-aos="fade-up" className="flex space-x-2">
                            <a href="https://github.com/sentuhxd" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="https://www.linkedin.com/in/ianrosenthalnyc/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up" src={img} width={290} height={290} className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' alt="" />
        </div>
    );
};

export default Header;