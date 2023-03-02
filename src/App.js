import Header from "./components/Header.js"
import React from "react";
import Card from "./components/Card.js";
import Booking from "./components/Booking.js";
import Footer from "./components/Footer.js"


function App() {

  let datas = [{
    img1: 'Images/img1.jpg',
    name: 'Jade',
    count: '195',
    img2: 'Images/img2.png',
    img3: 'Images/img3.png',
    img4: 'Images/img4.png'
  }, {
    img1: 'Images/WhatsApp-Image-2019-03-07-at-11.31.24-AM-1.jpeg.png',
    name: 'Mickey Joan',
    count: '368',
    img2: 'Images/Rectangle 1764(4).png',
    img3: 'Images/Rectangle 1763(4).png',
    img4: 'Images/Rectangle 1762(4).png'
  }, {
    img1: 'Images/dhruv-sharma-official-profile.jpg.png',
    name: 'Dhruv Sharma Official',
    count: '478',
    img2: 'Images/Rectangle 1764(3).png',
    img3: 'Images/Rectangle 1763(3).png',
    img4: 'Images/Rectangle 1762(3).png'
  }, {
    img1: 'Images/chakre.jpeg',
    name: 'James Chakre Music',
    count: '135',
    img2: 'Images/Rectangle 1764(2).png',
    img3: 'Images/Rectangle 1763(2).png',
    img4: 'Images/Rectangle 1762(2).png'
  }, {
    img1: 'Images/profile-pic-Shivam+Vashisht_1631773140.png.png',
    name: 'Shivam Vashisht',
    count: '376',
    img2: 'Images/Rectangle 1764(1).png',
    img3: 'Images/Rectangle 1763(1).png',
    img4: 'Images/Rectangle 1762(1).png'
  }
  ];


  return (
    <>
      <Header />
      {datas.map(data => <Card
        name={data.name}
        img1={data.img1}
        img2={data.img2}
        img3={data.img3}
        img4={data.img4}
        count={data.count}
      />)}
      <Booking/>
      <Footer/>
    </>
  );
}

export default App;
