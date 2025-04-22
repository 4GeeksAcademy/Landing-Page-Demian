import React from "react";

import NavBar from './NavBar';
import Jumbotron from './Jumbotron'; 
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () => {
	return (
		<>

		<NavBar btnleft={"Start Bootstrap"} btnr1={"Features"} btnr2={"Pricing"} btnr3={"Contact"}/>
		<Jumbotron title = {"A Warm Welcome!"} description = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum consequatur sapiente commodi similique aspernatur tenetur voluptatibus, non, odio impedit laborum nulla sint repellat architecto. Nam magni suscipit distinctio saepe."} btninfo = {{text: 'Call to action!', url: '#'}}/>
		<div className="container d-flex flex-column flex-md-row">
		<Cards imgUrl={"https://fastly.picsum.photos/id/778/200/200.jpg?hmac=fgFK_HI_g_N4MzYuYbssOB8ymhT_m0JK61tNJHfdPYU"} title={"Atardecer"} content={"Estoy encandilado!"} btnText={"Al sol!"} btnUrl={"#"}/>
		<Cards imgUrl={"https://fastly.picsum.photos/id/464/200/200.jpg?hmac=rT0rkzkukXVK3LYD1qHhc-Yqk0dFyIYoFk8wuNpCkAY"} title={"Libro"} content={"Historias página tras página."} btnText={"Léeme!"} btnUrl={""}/>
		<Cards imgUrl={"https://fastly.picsum.photos/id/702/200/200.jpg?hmac=_MUIgyTefzE4vp8ty09HrdKNmvqdpg5tbSxk6FpIfcE"} title={"Playa"} content={"Preciosa cala a orilla del Mediterráneo."} btnText={"A nadar!"} btnUrl={""}/>
		<Cards imgUrl={"https://fastly.picsum.photos/id/664/200/200.jpg?hmac=d8ZWM7R6VABV4JdJPvmCOGPqq3E6KTIFDz-FYp73TJo"} title={"Montaña"} content={"Hermosa vista desde lo alto."} btnText={"Escalemos!"} btnUrl={""}/>
		
		</div>
		<Footer text={"© 2025 By Demian. Derechos reservados."}/>
		</>
	);
  };

export default Home;