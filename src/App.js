import React from "react"
import Accordion from "./components/Accordion"
import Carousel from "./components/Carousel"
import Header from "./components/Header"
import Form from "./components/Form"
import Footer from "./components/Footer"
import './App.css';

const accordionData = [
  {
    title: "Date",
    content: "8/9/2025"
  },
  {
    title: "Location",
    content: "Downtown Indianapolis"
  },
  {
    title: "Start Time",
    content: "8:00 AM",
  },
  {
    title: "Registration Fee",
    content: "$25 (includes race bib, event t-shirt, and post-race refreshments)",
  },

];

const carouselData = [
  {
    image: "./images/running1.jpg",
    title: "Group in Yellow Shirts Running",
    description: "Yellow Shirts",
  },
  {
    image: "./images/running2.jpg",
    title: "Marathon Finish",
    description: "Marathon finish",
  },
  {
    image: "./images/running3.jpg",
    title: "Black and White RUnners",
    description: "Runners",
  },
  {
    image: "./images/running4.jpg",
    title: "Group running",
    description: "Group running from the back",
  }
];

const companyData = [
  {
    companyName: "Stride for Success",
    twitterUrl: "https://www.x.com/",
    facebookUrl: "https://www.facebook.com/",
    pinterestUrl: "https://www.pinterest.com/"
  }
]

function App() {
  return (
    <div>
      <Header companyName={"Stride for Success"} companyLogo={"/images/logo.jpg"} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Form />
          </div>
          <div>
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
            <div className="mt-4">
              <Carousel items={carouselData} />
            </div>
          </div>
        </div>
      </div>
      {companyData.map((item, index) => (
        <Footer key={index} title={item.companyName} twitterUrl={item.twitterUrl} facebookUrl={item.facebookUrl} pinterestUrl={item.pinterestUrl} />
      ))}
    </div>
  );
}

export default App;
