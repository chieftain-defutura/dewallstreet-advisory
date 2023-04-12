import React from "react";
import { Formik, Form, Field } from "formik";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Briefcase } from "../../assets/icons/briefcase.svg";
import { ReactComponent as India } from "../../assets/icons/india.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Company } from "../../assets/icons/company.svg";
import "./Advisory.scss";
import Button from "../../components/Button/Button";

const Advisory: React.FC = () => {
  return (
    <>
      <div className="advisory_bg_img">
        <div className="mx">
          <div className="advisory">
            <div>
              <p>
                We are under the process of legally structuring and establishing
                a separate advisory board for startups, enterprises and
                corporates to work with us on private equity partnership basis
                on their new lines on business establishments.
              </p>
            </div>
            <div>
              <Formik
                initialValues={{
                  name: "",
                  lastName: "",
                  number: "",
                  email: "",
                  designation: "",
                  company: "",
                }}
                onSubmit={(value) => console.log(value)}
              >
                {() => (
                  <Form>
                    <div className="signup">
                      <div className="signup_info">
                        <h2>STAY TUNED.</h2>
                        <div className="login_info">
                          <div className="personal_detials">
                            <User />
                            <Field name="name" placeholder="First name" />
                          </div>
                          <div className="personal_detials">
                            <User />
                            <Field name="lastName" placeholder="Last name" />
                          </div>
                        </div>
                        <div className="mail">
                          <Mail />
                          <Field name="email" placeholder="Mail" />
                        </div>
                        <div className="login_info">
                          <div className="personal_detials">
                            <India />
                            <Field as="select" name="category">
                              <option value="">| INDIA (+91)</option>
                              <option value="india">India</option>
                            </Field>
                          </div>
                          <div className="personal_detials">
                            <Phone />
                            <Field name="number" placeholder="Phone" />
                          </div>
                        </div>
                        <h6>Optional</h6>
                        <div className="login_info">
                          <div className="personal_detials">
                            <Briefcase />
                            <Field
                              name="designation"
                              placeholder="Designation"
                            />
                          </div>
                          <div className="personal_detials">
                            <Company />
                            <Field name="company" placeholder="Company" />
                          </div>
                        </div>
                        <div className="signup_btn">
                          <Button varient="primary">
                            Schedule an appointment
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advisory;
