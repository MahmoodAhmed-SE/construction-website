// font: (hero, headers): Sansation, (menu, buttons, text): Lato
// colors: cta: E74C3C, primary text: 2A2A2A, secondary text: 8F8F8F
import "./App.css";
import AsphaltFeatures from "./components/AsphaltFeatures";
import ConstructionFeatures from "./components/ConstructionFeatures";
import Hero from "./components/Hero";
import History from "./components/History";

import Testimonials from "./components/Testimonials";
import type { TestimonialObj } from "./models/testimonials";

function App() {
  const testimonials: TestimonialObj[] = [
    {
      para: "I first started doing work with Derk Harmsen in 1995 at my previous location and transferred to new location in 2006 and new was using a different road construction crew and I convinced them to try Derk Harmsen and we have been using them ever since. They have always given us good competitive bids. Have never ask for a change order unless we changed the scope on them. One giant thing in their favor is they always stand behind their works. It has been a great partnership.",
      name: "Jack H.",
      work: "LyondellBasell BSO",
    },
    {
      para: "We get compliments on design and construction of the office on a daily basis. Many supply representatives, doctors, parents and patients note that it is the most attractive and professional orthodontic office they have ever entered. We are so happy with the building construction that we plan on rehiring Derk to build a second office for us in a different location.",
      name: "Dr. Ronald R., DDS",
      work: "Gulf Coast Orthodontic Specialists",
    },
    {
      para: "Derk Harmsen Construction Co., Inc., has performed several jobs over the past eight to ten years for St. Frances Cabrini Catholic Community.Their prices are competitive and they complete their work in a neat and timely manner.Our negotiations have been with Steve Wigginton and he is an excellent man to deal with; and he always offers suggestions to our benefit.Their performance is such that I would recommend them to anyone who needs the type of work they do.",
      name: "George S.",
    },
    {
      para: "We are pleased to recommend Derk Harmsen Construction Company for any job related to parking lot construction. Mr. Harmsen, Steve Wiggington and the rest of their crew have offered nothing less than professional services to St. Agnes. We are in the midst completing two monolithic domes here on out Houston campus, and Derk Harmsen Construction Company has constructed the parking lot and provided much needed counsel and recommendations during the project. Their work was done as promised and as scheduled. Their expertise is immeasurable.",
      name: "Sam M.",
    },
  ];

  return (
    <>
      <Hero />

      <History />

      <AsphaltFeatures />

      <ConstructionFeatures />

      <Testimonials testimonials={testimonials} />
    </>
  );
}

export default App;
