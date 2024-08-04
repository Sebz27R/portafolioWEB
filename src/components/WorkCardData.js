import juegoP from "../assets/juegoProyecto.png"
import proyecto2 from "../assets/deteccionAviones.jpg"
import proyecto3 from "../assets/proyectoJobly.jpg"

const ProjectCardData = [
    {
        imgsrc: juegoP,
        title: "Greenfoot game project",
        text1: "- A game about a Frog that is a ninja and the objective of the game is to kill all the enemies in the map before the time runs out",
        text2: "- Technologies used: Greenfoot",
        text3: "- I had to make the designs for pause screen, home screen, instructions screen, menu screen, levels and implement them in the game"
    },
    {
        imgsrc: proyecto2,
        title: "Aircraft AI detection",
        text1: "- The objective of the project was to make an AI that is able to detect different flying objects(mainly aircraft) and try to predict where the object is headed",
        text2: "- Technologies used: Tensorflow",
        text3: "- I had to make the user interface for the program"
    },
    {
        imgsrc: proyecto3,
        title: "Business webpage",
        text1: "- We had to make a webpage for a little company similar to Linkedln. The objectiveof the webpage was to hire students for weekends jobs or short-time jobs for people that needed their help",
        text2: "- Technologies used: Front-end: React, HTML, CSS; Back-end: Node.js, Express; Database: MongoDB",
        text3: "- I made the express APIs for the back-end of the project"
    }
  
]

export default ProjectCardData