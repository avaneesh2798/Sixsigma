import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Trainingcourse from "./Trainingcourse";
import Card from "./Card";
import Trainingcalender from "./Trainingcalender";
import Heading from "./Heading";
import Sdata from "./Dada";
import { World } from "./World";
import Worldwide from "./Worldwide";
import Solution from "./Solution";
import Recentblog from "./Recentblog";
import Client from "./Client";
import { Client2 } from "./Clients";
import Last from "./Last";


const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Trainingcourse />
      <Card />
      <Trainingcalender />
      {Sdata.map((val) => (
        <Heading
          headingss={val.headings ? val.headings : val.heading}
          vir={val.vir}
          paras={val.para}
          ima={val.month}
          dat={val.dat}
          day={val.day}
          mon={val.mon}
          year={val.year}
          rupees={val.rupees}
          value={val.value}
          enquiry={val.enquiry}
          enqima={val.enqima}
          timing={val.timing}
          days={val.days}
          view={val.view}
          book={val.book}
        />
      ))}
      <Solution />
      <div className="imo">
        {World.map((value) => (
          <Worldwide image={value.Imagelocation} name={value.worldname} />
        ))}
      </div>
      <Recentblog />

      <div className="imo1">
        {Client2.map((data) => (
          <Client
            count={data.counts}
            images={data.imag}
            content={data.content}
          />
        ))}
      </div>
      <Last/>
    </>
  );
};

export default App;
