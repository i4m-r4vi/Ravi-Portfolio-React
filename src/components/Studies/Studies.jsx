import * as React from 'react';
import { useEffect } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';
import { Typography, Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Styles from './studies.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Studies = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);

    return (
        <div className={`${Styles.studies}`} id="studies">
            <h2 className='font-bold text-2xl'>My <span>Education</span></h2>
                <Timeline position="right" className='h-[70vh] flex justify-center'>
                    <TimelineItem >
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" sx={{ bgcolor: 'secondary.main' }}>
                                <MenuBookIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <Box
                            data-aos="zoom-in-right"
                            sx={{
                                borderRadius: '10px',
                                padding: 3,
                                maxWidth: '600px',
                                width: '100%',
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: "center",
                                margin: "10px",
                                bgcolor: "#291a75",
                                background: "rgba(23, 5, 80, 0.5)",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                            }}
                            className="justify-left md:justify-center"
                        >
                            <img className='ml-3 mb-2' src="srklogo.png" alt="srklogo" width={"90px"} />
                            <div className='ml-3'>
                                <h2>SRK Matric Higher Secondary School </h2>
                                <p>Salem-5</p>
                                <p><small>HSC </small>69.83%</p>
                            </div>
                        </Box>
                    </TimelineItem>

                    <TimelineItem >
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" sx={{ bgcolor: 'secondary.main' }}>
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <Box
                            data-aos="zoom-in-right"
                            sx={{
                                borderRadius: '10px',
                                padding: 3,
                                maxWidth: '600px',
                                width: '100%',
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: "center",
                                margin: "10px",
                                bgcolor: "#291a75",
                                background: "rgba(23, 5, 80, 0.5)",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                            }}
                            className="justify-left md:justify-center"
                        >
                            <img className='ml-3 mb-2' src="sonalogo.png" alt="sonalogo" width={"90px"} />
                            <div className='ml-3'>
                                <h2>Sona College of Arts and Science</h2>
                                <p>Salem-5</p>
                                <p><small>CGPA </small>81.75%</p>
                            </div>
                        </Box>
                    </TimelineItem>
                </Timeline>
        </div>
    );
};

export default Studies;
