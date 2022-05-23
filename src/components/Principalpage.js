import React from "react";
import { Button } from "antd";
import "./paginaprincipal.css";
import { PlayCircleOutlined } from '@ant-design/icons';

const Principalpage = () =>{
    return(
      <section >
        <div className="paginaprincipal" >
        <h1>Amamos la comida deliciosa</h1>
        <a href="#"><Button type="primary" size="large" block danger > Enviar </Button></a>
        <a href="#"><Button denger type="link" shape="round" icon={<PlayCircleOutlined />}>Play Video</Button></a>
        </div>  
        </section>    
       
    );
}

export default Principalpage;