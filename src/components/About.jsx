import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
         flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text=[17px]
      max-w-3x1 leading-[30px]"
      >
        As a full-stack developer, I have honed my skills in both front-end and
        back-end development. My proficiency spans across several programming
        languages, including JavaScript, Java, C#, HTML, and CSS. Some js
        framework I have experience with are React and Next. These frameworks
        and languages are the tools I use to build dynamic and interactive web
        applications that provide users with a seamless digital experience. In
        addition to front-end and back-end development, I have substantial
        experience working with various databases such as MS SQL, Firebase, and
        MongoDB. This experience allows me to effectively manage data storage
        and retrieval, ensuring that the applications I develop are not only
        user-friendly but also data-efficient. My diverse skill set and
        extensive experience enable me to develop robust and scalable software
        solutions that meet the evolving needs of modern businesses. These
        solutions are designed to leverage the power of technology to scale
        business growth and efficiency.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text=[17px]
      max-w-3x1 leading-[30px]"
      >
        Outside of my professional life, I enjoy spending quality time with my
        family and dogs. I also enjoy playing video games in my free time. Some
        of the games I play are Stardew Valley, League of Legends, and Genshin
        Impact. Anime is another passion of mine. I appreciate the creativity
        and imagination that goes into each series, and I often find myself
        captivated by the unique storylines, characters, and animations.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text=[17px]
      max-w-3x1 leading-[30px]"
      >
        Balancing my professional responsibilities with my personal hobbies and
        passions helps me maintain a well-rounded lifestyle. It allows me to
        stay motivated and passionate about my work while also ensuring that I
        have time to relax and pursue my personal interests.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
