import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import img from '../assets/Quiz.png';
import ER from '../assets/fi.png';
import pro from '../assets/image.png';
import Aos from 'aos';
import { useEffect } from "react";

export function DemoCard() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const projectsInfo = [
        {
            img: img,
            proName: "Simple Quiz",
            Decription: "Using HTML, CSS, and JavaScript that allows users to take a quiz, view their score, and reattempt the quiz if desired.",
            link: "https://balashekaran1023.github.io/SimpleQuizAppJs/",
        },
        {
            img: ER,
            proName: "EasyRentify",
            Decription: "EasyRentify aims to streamline the process of renting cars for both customers and rental companies.",
            link: "https://easy-rentify-fe-npld.vercel.app",
        }
        ,
        {
            img: pro,
            proName: "My Portfolio",
            Decription: "My personal portfolio website, seamlessly integrating React.js, Tailwind CSS, and Framer Motion for a polished and animated experience. This modern showcase not only reflects my technical skills but also offers a minimalist and responsive design, inviting exploration into my creative and innovative projects..",
            link: "/",
        }
    ];

    return (
        <div className="grid lg:gap-96 md:gap-8 md:grid-cols-2 lg:grid-cols-4 ">
            {projectsInfo.map((info, index) => (
                <Card key={index} className="w-full md:w-80 bg-transparent">
                    <CardHeader shadow={false} floated={false} className="h-80">
                        <img
                            data-aos="fade-up"
                            src={info.img}
                            alt="card-image"
                            className="h-full w-full object-cover rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
                        />
                    </CardHeader>
                    <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="white" className="font-medium">
                           {info.proName}
                        </Typography>
                    </div>
                    <Typography variant="small" color="white" className="font-normal opacity-75">
                        {info.Decription}
\                    </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href={info.link}>
                            <Button
                                ripple={false}
                                fullWidth={true}
                                className="bg-white-blue border-l-4 border-r-4 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                >
                                View
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
