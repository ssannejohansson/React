import Project from '../components/Projects.jsx';
import patagonia from '../assets/patagonia.png';
import genesis from '../assets/genesis.png';
import bhromaon from '../assets/bhromaon.png';
import {useState} from "react";

const projects = [
    {   title: "Patagonia",
        image: "./public/patagonia.png",
        repo: "https://github.com/ssannejohansson/uppgift-tolv-responsive.git",
        techUsed: ["HTML", "CSS"],
        info: "This project was a lesson in responsive design where we learned about media queries. This project was a solo-project and the biggest challange was to create a hamburger-menu that would work at mobile-devices.",
    },
    {   title: "Genesis",
        image: "./public/genesis.png",
        repo:"https://github.com/ssannejohansson/uppgift-elva-genesis.git", 
        techUsed: ["HTML", "CSS"],
        info: "This projects was a part of our lessons about grids. It was also the first project containing several pages, so we had to learn how to make the navigation work seamlessly. This was also a solo-project, and my biggest challange was to meet the deadline.",
    },
    {   title: "Bhromaon",
        image: "./public/bhromaon.png",
        repo: "https://github.com/ssannejohansson/test.git",
        techUsed: ["HTML", "CSS"],
        info: "This project was our first individual 'test' where we had 12 hours to create the design from Figma. I learned how to manage my time and what to prioritize. The biggest challange was to keep calm and accept that I wouldn't be able to meet the deadline.",

    }
];


function About () {
    const [toggle, setToggle] = useState(false);
    const [buttonText, setButtonText] = useState("Show content")
    const handleClick = () => {
        setToggle(!toggle) + setButtonText(buttonText === "Show content" ? "Hide content" : "Show content");
    }
   
    const [search, setSearch] = useState("");

    return (
    <div className="about-container">
      <button className="preview-button" onClick={handleClick}>
        {buttonText}</button>
      
        {toggle ?
            <container className="project-container">
            <input type="text" className="search-bar" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </container>    : 
    <></> } 

    {toggle ?

        <container className="project-container">
            <div className="card-container">
            {projects.filter((project) => (project.title.toLowerCase().includes(search.toLowerCase())))
                .map((project, index) => (
                    <Project
                    key={index}
                    title={project.title}
                    image={project.image}
                    repo={project.repo}
                    techUsed={project.techUsed}
                    info={project.info}
                    />
                ))}
       </div> 

  
    </container>: 
    <></> } 


   
    </div> )
}

export default About;