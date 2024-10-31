import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react';
import React from 'react';
import SlideUp from '../../utlits/animations/slideUp';

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card 
                            id={1} 
                            icon={<RiGlobalFill size={60} aria-label="Brand Identity Icon" />} 
                            title="Brand Identity Design" 
                            description="Crafting a distinct and consistent brand identity to elevate your business." 
                        />
                        <Card 
                            id={2} 
                            icon={<RiQuillPenLine size={60} aria-label="Website Design Icon" />} 
                            title="Website Design" 
                            description="Designing responsive and user-friendly websites tailored to your needs." 
                        />
                        <Card 
                            id={3} 
                            icon={<RiPantoneFill size={60} aria-label="Application Design Icon" />} 
                            title="Application Design" 
                            description="Creating seamless, intuitive application designs for a smooth user experience." 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceGrid;

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item" role="article">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    );
};
