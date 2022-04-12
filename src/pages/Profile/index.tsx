import React, { useContext, useEffect, useState } from "react";
import 'antd'
import About from "../../components/container/About";
import Biography from "../../components/container/biography";
import Contact from "../../components/container/contact";
import Events from "../../components/container/events";
import Friends from "../../components/container/friends";
import Information from "../../components/container/information";
import Picture from "../../components/container/Picture";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./style.css";
import { Button } from "antd";
import { UpCircleFilled } from "@ant-design/icons";

const Profile = () => {
  const { bgrColor, itemColor, textColor } = useContext(ThemeContext);
  //Listen DOM Event
  const [showGoToTop, setShowGoToTop] = useState(false);
  useEffect(() => {
    //Scroll
    const handleScroll = () => {
        setShowGoToTop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);

    //cleanup fs
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bgr-color" style={{ backgroundColor: `${bgrColor}` }}>
      <Header />
      <Information />
      <Contact />
      <Friends />
      <Picture />
      <About />
      <Biography />
      <Events />
      <Footer />
      {showGoToTop && (
          <Button
            style={{
              position: 'fixed',
              right: 20,
              bottom: 20,
              height: '50px',
              width: '50px',
              borderRadius: '25px',
              backgroundColor:`${itemColor}`,
              color:`${textColor}`
            }}
            icon={<UpCircleFilled style={{color:`${textColor}`,fontSize: 20}}/>}
            onClick={() => window.scrollTo({
              top: 0, 
              behavior: 'smooth'
            })}
          />
        )}
    </div>
  );
};

export default Profile;
