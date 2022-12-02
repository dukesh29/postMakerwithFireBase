import React from 'react';

const About = () => {
  return (
    <div className="about-me-block d-flex gap-3">
      <img
        src="https://t4.ftcdn.net/jpg/03/28/54/21/360_F_328542178_YotgB5sGePl9SzsChnn66W4xVMCvC3hb.jpg"
        alt="myphoto" width="550px" className="p-3"/>
      <div>
        <h1 className="text-center mt-5">About us</h1>
        <p className="p-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur iste rem repudiandae. A
          accusamus adipisci alias aspernatur commodi consequuntur delectus deleniti dicta distinctio, dolor dolore,
          eligendi error esse facere fuga incidunt iste magnam mollitia non odio odit possimus praesentium quas quia,
          quod quos recusandae repudiandae rerum sed similique velit.
        </p>
        <div className="d-flex gap-2 ps-5">
          <a href="#" className="icons fb">Facebook</a>
          <a href="#" className="icons in">Instagram</a>
          <a href="#" className="icons wh">Whatsapp</a>
        </div>
      </div>
    </div>
  );
};

export default About;