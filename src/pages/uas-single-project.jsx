import React from 'react';
import singleProjectImg from "../assets/images/projects/user-auth-system.jpg";
import singleProject1 from "../assets/images/projects/user-auth-1.jpg";
import singleProject2 from "../assets/images/projects/user-auth-2.jpg";
import singleProject3 from "../assets/images/projects/user-auth-3.jpg";
// import singleProject4 from "../assets/images/projects/user-auth-4.jpg";

const UASingleProject = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>User Authentication System</p>
                        <h1>Secure login and registration functionalities</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <img src={singleProjectImg} alt="User Authentication Project" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        {/* START SINGLE LEFT DESIGN AREA */}
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>2024</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>Prodigy Internship</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Web Development</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>User Authentication System</h3>
                            </div>
                        </div>
                        {/* / END SINGLE LEFT DESIGN AREA */}
                    </div>
                    {/* START SINGLE RIGHT DESIGN AREA */}
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Description</h2>
                            <p>A user authentication system with secure login and registration functionalities. Users can sign up and sign in securely, and access protected routes after successful authentication. Built with Flask for the backend and React Vite for the frontend.</p>
                            <h3>Features</h3>
                            <ul>
                                <li>Secure user registration and login.</li>
                                <li>Protected routes accessible only to authenticated users.</li>
                                <li>In-memory database for temporary storage.</li>
                                <li>RESTful API for interaction between frontend and backend.</li>
                            </ul>
                            <h3>Technologies Used</h3>
                            <ul>
                                <li>Python with Flask</li>
                                <li>React with Vite</li>
                                <li>JWT for secure authentication</li>
                                <li>In-memory database for temporary storage</li>
                            </ul>
                            <h3>Getting Started</h3>
                            <p>Clone the repository and run the application:</p>
                            <pre>
                                <code>
                                    git clone https://github.com/YOUR_USERNAME/user-auth-system.git{"\n"}
                                    cd user-auth-system{"\n"}
                                    # Run the backend
                                    flask run{"\n"}
                                    # Run the frontend
                                    npm run dev
                                </code>
                            </pre>
                            <h3>API Endpoints</h3>
                            <p>For user registration and login, use the following endpoints:</p>
                            <ul>
                                <li>POST <code>/api/register</code> - for user registration</li>
                                <li>POST <code>/api/login</code> - for user login</li>
                            </ul>
                        </div>
                    </div>
                    {/* / END SINGLE RIGHT DESIGN AREA */}
                </div>
                {/* START SINGLE PAGE GALLERY DESIGN AREA */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <img src={singleProject1} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <img src={singleProject2} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <img src={singleProject3} alt="gallery" />
                        </div>
                    </div>
                   {/*  <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <img src={singleProject4} alt="gallery" />
                        </div>
                    </div> */}
                </div>
                {/* / END SINGLE PAGE GALLERY DESIGN AREA */}
            </div>
        </div>
    );
}

export default UASingleProject;
