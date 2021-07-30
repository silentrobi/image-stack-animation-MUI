import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import React from 'react'
import img1 from '../../images/screen_light_1.png';
import img2 from '../../images/screen_light_2.png';
import img3 from '../../images/screen_light_3.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
const useStyles = makeStyles((theme) => ({
    containerItem: {
        paddingTop: theme.spacing(93),
        paddingBottom: theme.spacing(43),
        overflowX: 'hidden'
    },
    image: {
        width: '150px',
        [theme.breakpoints.up('sm')]: {
            width: '320px',
        },
        position: 'absolute',
        boxShadow: 'rgb(99 115 129 / 48%) 80px -40px 80px;',
        paddingRight: 3,
        backgroundColor: 'rgb(223, 227, 232)',
        zIndex: 10,
        transform: 'translate(-50% , 40px) skew(0deg, 8deg)',
        borderRadius: 8,
        '&:nth-child(2)': {
            zIndex: 5,
            transform: 'translate(0px, 0px) skew(0deg, 8deg)'
        },
        '&:nth-child(3)': {
            zIndex: 1,
            transform: 'translate(50%, -40px) skew(0deg, 8deg)',
        }
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 0,
        // paddingLeft: '28%',
        // [theme.breakpoints.up('md')]: {
        //     paddingLeft: '35%',
        // },
        position: 'relative',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
    },
    '@keyframe fadeInLeft': {
        '0%': {
            opacity: 0,
            transform: 'translate(0% , 40px)'
        },
        '100%': {
            opacity: 1,
            transform: 'translate(-50%, 40px)'
        }
    },
    '@-webkit-keyframes fadeInLeft': {
        '0%': {
            opacity: 0,
            '-webkit-transform': 'translate(0% , 40px)'
        },
        '100%': {
            opacity: 1,
            '-webkit-transform': 'translate(-50%, 40px)'
        }
    },
    '@keyframe fadeInRight': {
        '0%': {
            opacity: 0,
            transform: 'translate(0% , -40px)'
        },
        '100%': {
            opacity: 1,
            transform: 'translate(50%, -40px)'
        }
    },
    '@-webkit-keyframes fadeInRight': {
        '0%': {
            opacity: 0,
            '-webkit-transform': 'translate(0% , -40px)'
        },
        '100%': {
            opacity: 1,
            '-webkit-transform': 'translate(50%, -40px)'
        }
    },
    fadeInLeft: {
        '-webkit-animation-name': 'fadeInLeft',
        'animationName': 'fadeInLeft'
    },
    fadeInRight: {
        '-webkit-animation-name': 'fadeInRight',
        'animationName': 'fadeInRight'
    }
}));

const Section1 = () => {
    const classes = useStyles();
    useEffect(() => {
        Aos.init({ once: true, duration: 2000, mirror: true })
    }, []);

    return (
        <Grid container>
            <Grid item xs={12} className={classes.containerItem}>
                <Box className={classes.imageContainer}>
                    <Box
                        //data-aos='fade-left'
                        component="img"
                        src={img1}
                        className={classes.image}
                        alt='img1'
                    />
                    <Box
                        component="img"
                        src={img2}
                        className={classes.image}
                        alt='img2'
                    />
                    <Box
                        //data-aos='fade-right'
                        component="img"
                        src={img3}
                        className={classes.image}
                        alt='img3'
                    />
                </Box>
            </Grid>
        </Grid >
    )
}

export default Section1;
