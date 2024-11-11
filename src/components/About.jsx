import React from 'react';

const About = () => {
  return (
    <div className='container-fluid' style={{marginTop:'80px'}}>
      <h1 className='text-light text-center'>About Me</h1>
      <div className='text-light mt-4 fs-4 mx-auto' style={{ maxWidth: '1200px', padding: '1%', paddingTop: '0'}}>
        <p>
          Hello! I'm Eduardo Grutzmann Furtado, the solo developer behind DocKing. With a background in Biotechnology and a passion for technology, I've combined my knowledge of science with programming to create a powerful molecular docking tool aimed at advancing research in biotechnology and pharmacology.
        </p>
        <p>
          DocKing is a project that reflects my dedication to innovation and my belief in the power of science and technology to solve real-world problems. As the sole developer, I've designed, developed, and deployed this tool, ensuring that it meets the needs of researchers and professionals in these fields.
        </p>
        <p>
          Outside of development, I'm always learning and staying up-to-date with the latest trends in technology, development practices, and scientific advancements. I'm also open to new collaborations and projects that allow me to combine my skills in coding and biotechnology.
        </p>
        <p>
          If you want to connect or learn more about my work, feel free to reach out!
        </p>
        <p>
            My LinkedIn profile: <a href="https://www.linkedin.com/in/edugrutz" target='_blank'>Eduardo Grutzmann Furtado</a>
        </p>
      </div>
    </div>
  );
}

export default About;
