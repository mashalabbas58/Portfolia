import React from 'react';
import girl from '../assets/girl.png';
import './About.css';
import Button from 'react-bootstrap/Button';

function downloadPDF() {
  const link = document.createElement('a');
  link.href = 'path/to/your/pdf/file.pdf'; // Replace with the actual path to your PDF file
  link.download = 'cv.pdf'; // Replace with the desired file name
  link.click();
}

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="profile-image" src={girl} alt="Profile" />
          </div>
          <div className="col-md-6">
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, est eu
              fermentum fermentum, tellus elit lobortis mi, a lobortis nulla odio eu ante. Ut vel
              luctus orci. Nulla auctor risus in justo dapibus commodo. Aliquam tincidunt mi vitae
              ex egestas, id tincidunt urna tincidunt. Quisque euismod gravida congue. Curabitur id
              dolor ac diam tincidunt semper. Phasellus tincidunt, odio non finibus commodo, elit
              turpis tincidunt sem, ut sagittis nisl urna a felis.
            </p>
            <p>
              Phasellus interdum dui in lorem consectetur, in condimentum tortor suscipit. Proin
              ultrices nisi a magna fermentum, eu posuere lectus varius. Duis semper facilisis
              metus, sed lobortis nunc sagittis id. Duis in nibh at turpis suscipit aliquet.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Sed eget interdum tellus, vel tristique ligula. Sed finibus sapien eget
              volutpat bibendum. Donec consectetur tortor vel nisi elementum, sed aliquam nunc
              sollicitudin. Integer eleifend ligula quis diam lacinia fermentum.
            </p>
            <Button onClick={downloadPDF} variant="outline-secondary">
      Download CV
    </Button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
