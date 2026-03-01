import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";


const About = () => {
  const developerStrings = [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Coder",
    "NextJs developer",
  ];

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Seemran Pathak
          </h2>
          {/* skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl flex justify-start items-center gap-2  ">
            <span className="text-white ">I am a </span>
            <Typewriter
              onInit={(typewriter) => {
                // Chain the typing sequence for each string linearly
                // The 'loop: true' option in the 'options' prop will handle the repetition
                developerStrings.forEach((str, index) => {
                  typewriter.typeString(str).pauseFor(1500); // Pause after typing each string

                  // Only delete if it's not the last string in the array
                  // If it's the last, it will pause, and then the loop will restart
                  if (index < developerStrings.length - 1) {
                    typewriter.deleteAll();
                  }
                });

                typewriter.start(); // Start the defined sequence
              }}
              options={{
                wrapperClassName:
                  "text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec]",
                loop: true, // This option now handles the continuous looping of the entire onInit sequence
                autoStart: true, // Ensure it starts automatically
              }}
            />
          </h3>
          {/*About Me Paragraph*/}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with over 1 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/148NSW9DbIu0quIB_QgJ_XmlSvJGwUUAe/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          > 
            <img
              src="/my_img.png"
              alt="Seemran Pathak"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
