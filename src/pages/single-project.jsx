import React from 'react'
import singleProjectImg from "../assets/images/projects/url-shortener.jpg"
import singleProject1 from "../assets/images/projects/url-shortener1.png"
import singleProject2 from "../assets/images/projects/url-shortener2.jpg"

const SingleProject = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>URL Shortener Service</p>
                        <h1>A simple URL shortening service built with Java and Spring Boot</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <img src={singleProjectImg} alt="URL Shortener Project" />
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
                                <h3>HexSoftwares Internship</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Web Development</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>URL Shortening Service</h3>
                            </div>
                        </div>
                        {/* / END SINGLE LEFT DESIGN AREA */}
                    </div>
                    {/* START SINGLE RIGHT DESIGN AREA */}
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Description</h2>
                            <p>A simple URL shortening service built with Java and Spring Boot. This application allows users to shorten long URLs and retrieve the original URLs via unique short codes.</p>
                            <h3>Features</h3>
                            <ul>
                                <li>URL Shortening: Convert long URLs into short, easy-to-share links.</li>
                                <li>Redirection: Automatically redirect users from the short URL to the original URL.</li>
                                <li>In-Memory Database: Uses H2 Database for storing URL mappings temporarily.</li>
                                <li>RESTful API: Interact with the service using standard HTTP methods.</li>
                            </ul>
                            <h3>Technologies Used</h3>
                            <ul>
                                <li>Java 17+</li>
                                <li>Spring Boot (v3.3.5)</li>
                                <li>Spring Data JPA</li>
                                <li>H2 Database</li>
                                <li>Gradle for build automation</li>
                            </ul>
                            <h3>Getting Started</h3>
                            <p>Clone the repository and run the application using Gradle:</p>
                            <pre>
                                <code>
                                    git clone https://github.com/NtandoMgo/HexSoftwares_Url-Shortner.git{"\n"}
                                    cd HexSoftwares_Url-Shortner{"\n"}
                                    ./gradlew bootRun
                                </code>
                            </pre>
                            <h3>API Endpoints</h3>
                            <p>Shorten a URL with a POST request to <code>http://localhost:8080/api/shorten</code>.</p>
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
                    
                </div>
                {/* / END SINGLE PAGE GALLERY DESIGN AREA */}
            </div>
        </div>
    );
}

export default SingleProject;