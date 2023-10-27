import {FaGithub,  FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
       <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mb-4 md:mb-0">
                <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">Portfolio</span>
                <p className="text-[18px] my-4">Check out my github to view my projects in depth</p>
            </div>
            <div>
                <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">What I offer</h2>
                <ul className="text-[16px] my-4">
                    <li className="my-2">Express</li>
                    <li className="my-2">Node</li>
                    <li className="my-2">JavaScript</li>
                    <li className="my-2">React</li>
                </ul>
            </div>
            <div className="mb-4 md:mb-0">
                <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact Ian</h2>
                <p className="text-[16px] my-4">Email: sentuh242@gmail.com</p>
                <p className="text-[16px] my-4">Phone: +1 646 617 9187 </p>
            </div>
           <div>
             <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Links</h2>
            <div className="flex space-x-4">
                <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out" href="https://github.com/sentuhxd">
                    <FaGithub/>
                </a>
                <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out" href="https://www.linkedin.com/in/ianrosenthalnyc/">
                    <FaLinkedinIn/>
                </a>
            </div>
           </div>
        </div>
       </footer>

    );
};

export default Footer;