"use client";
import React from 'react';
import Particles from './particles';
import ReactDOM from "react-dom";

const App: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '50px',
      paddingBottom: '50px',
      overflowY: 'scroll',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f7f3f9',
      color: '#333'
    }}>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <span className="gradient-text">
          Brooke Joseph
        </span>
        <Particles
          className="particles-absolute"
          quantity={1000}
          ease={2}
          color={'#8E44AD'}
          refresh
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', wordWrap: 'break-word', padding: '0 20px' }}>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>
            Previous Endeavors: Computer Vision, Federated Learning, Secure Aggregation, Differential Privacy, Secure Multiparty Computation, Knowledge Graphs for Information Overload, CNNs for Silicon Wafer Detection.
          </p>
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '30px' }}>
        <h2 style={{ fontFamily: 'Times New Roman', textAlign: 'center', fontSize: '2em', color: '#C39BD3' }}>Experiences</h2>
        <div style={{ marginLeft: '20px', wordWrap: 'break-word' }}>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Stealth Startup - Toronto</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Working with previous founders at Maluuba and Wish. Helping build different apps currently helped reach 100k users in one month.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Devron - New York</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Collaborated with senior engineers to incorporate Differential Privacy into their platform. This involved navigating and understanding their complex infrastructure to ensure effective implementation.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>TensoAI - Montreal</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Researched how agricultural data from satellites and sensors could train machine learning models using Federated Learning. I also investigated and recommended strategies for setting up the company&apos;s Federated Learning infrastructure to enhance data privacy and collaborative model training.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Dr Tong&apos;s Biochemistry Lab</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>As the youngest research assistant in the lab, I revamped the website and collaborated with PhDs to code 3D models of various proteins using PyMol, significantly boosting productivity by 10x.</p>
        </div>
      </div>
      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '30px' }}>
        <h2 style={{ fontFamily: 'Times New Roman', textAlign: 'center', fontSize: '2em', color: '#C39BD3' }}>Other Cool Stuff</h2>
        <div style={{ marginLeft: '20px', wordWrap: 'break-word' }}>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Presented at Google</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>I was invited to give a presentation on my projects and research in Federated Learning. Specifically looking at how to incorporate Differential Privacy and the challenges with that.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Created Multimodal Knowledge Graphs</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Helping to streamline the learning process. Presented to over 1000 people and gained 700 sign-ups.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Alexa Scheduling Optimizer</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Competed against 700 people from across the globe in an Amazon hackathon and received 2nd place. Spoke with executives at Amazon to discuss how to build our product. I was responsible for securing the data and all the privacy implications.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Multi-GPU Training</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Worked with a PhD at MIT investigating how to train a CNN on medical data for disease prediction.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Differential Privacy Research</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Invited to give presentations all over the world (Germany, Toronto, Washington DC, etc.) on my research in Differential Privacy. Specifically looking at ways to balance the privacy-utility tradeoff. Over 80,000 people in attendance across all conferences.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>International Marathon Runner</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Travelled all over to compete in half and full marathons, ranking top 20 in my age group for the Detroit Marathon.</p>
          <h3 style={{ fontFamily: 'Times New Roman', fontSize: '1.5em', color: '#C39BD3' }}>Google WomenTechMaker</h3>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '1.2em' }}>Selected by Google to help mentor women in tech, organize Google events and invited to speak on research.</p>
        </div>
      </div>
      <div style={{ width: '100%', maxWidth: '1100px' }}>
        <h2 style={{ fontFamily: 'Times New Roman', textAlign: 'center', fontSize: '2em', color: '#C39BD3' }}>Videos</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['https://youtube.com/embed/UXxHawXiN6w', 'https://www.youtube.com/embed/75wv-WgqTic', 'https://www.youtube.com/embed/t18MBKs5uSQ', 'https://www.youtube.com/embed/S3PsPC8kHng'].map((src, index) => (
            <iframe
              key={index}
              style={{ margin: '10px' }}
              width="45%"
              height="315"
              src={src}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
