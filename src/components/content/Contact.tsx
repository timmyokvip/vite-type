import React from "react";

const Contact = () => {
  return (
    <div className="arlo_tm_section" id="contact">
      <div className="container">
        <div className="arlo_tm_title_holder contact">
          <h3>Contact Me</h3>
          <span>Get in touch with me</span>
        </div>
      </div>
      <div className="arlo_tm_footer_contact_wrapper_all">
        <div className="arlo_tm_contact_wrap_all">
          <div className="container">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder contact">
                <h4>Liên hệ</h4>
              </div>
              <div className="short_info_wrap">
                <ul>
                  <li>
                    <p>
                      <label>Address:</label>
                      <span>123 Qwerty Avenue NYC, USA</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label>Email:</label>
                      <span>
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                      </span>
                    </p>
                  </li>

                  <li>
                    <p>
                      <label>Website:</label>
                      <span>
                        <a href="mailto:example@gmail.com">
                          www.yourdomain.com
                        </a>
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightbox">
              <div className="arlo_tm_contact_wrap">
                <div className="main_input_wrap"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_footer_wrap">
          <div className="container">
            <p>&copy; Copyright 2222. All Rights are Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
