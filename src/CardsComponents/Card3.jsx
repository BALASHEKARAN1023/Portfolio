import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import ER from '../assets/fi.png';
import Aos from 'aos';
import { useEffect } from "react";
export function Card3() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="flex justify-center"> {/* Center the card */}
            <Card className="w-full md:w-80 bg-transparent"> {/* Make the card full width on small screens */}
                <CardHeader shadow={false} floated={false} className="h-80">
                    <img
                        data-aos="fade-down"
                        src={ER}
                        alt="card-image"
                        className="h-full w-full object-cover rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="white" className="font-medium">
                            My Portfolio
                        </Typography>
                    </div>
                    <Typography variant="small" color="white" className="font-normal opacity-75">
                        My personal portfolio website, seamlessly integrating React.js, Tailwind CSS,
                        and Framer Motion for a polished and animated experience.
                        This modern showcase not only reflects my technical skills but also offers a minimalist and responsive design,
                        inviting exploration into my creative and innovative projects.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="https://easy-rentify-fe-npld.vercel.app">
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
        </div>
    );
}
