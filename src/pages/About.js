import React from "react";
import { Layout, Divider } from "antd";
import "./about.css";
import Footer from "../components/FooterComponent";
import Header from "../components/Header";
const { Content } = Layout;
function About() {
    return (
        <Layout className="layout__Main">
          
        <Header />
        
        <Content>
          <div style={{ margin: 10, padding: 10}}>       
            <Divider orientation="left" plain>
            <h2>¿Quienes Somos?</h2>
           </Divider>
          
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
          
          <Divider orientation="right" plain>
           <h2>¿Qué Ofrecemos?</h2>

          </Divider>
         
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
            probare, quae sunt a te dicta? Refert tamen, quo modo.
          
            <Divider plain><h2>Nuestros Colaboradores</h2></Divider>
             
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
                <div class="container">
                      <img src="../src/assets/img/depp.jpg" alt="Avatar" class="image"/>
                      <div class="overlay">
                        <div class="text">Hello World</div>
                      </div>
                </div>
           </div>
 


        </Content>
        <Footer />
      </Layout>
    );
}
export default About