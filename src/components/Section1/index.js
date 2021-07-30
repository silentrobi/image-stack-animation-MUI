import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import React from 'react'
import img1 from '../../images/screen_light_1.png';
import img2 from '../../images/screen_light_2.png';
import img3 from '../../images/screen_light_3.png';
import classNames from 'classnames';
const useStyles = makeStyles((theme) => ({
    containerItem: {
        paddingTop: theme.spacing(43),
        paddingBottom: theme.spacing(43),
        overflowX: 'hidden'
    },
    image: {
        width: '150px',
        [theme.breakpoints.up('sm')]: {
            width: '300px',
        },
        position: 'absolute',
        boxShadow: 'rgb(99 115 129 / 48%) 80px -40px 80px;',
        paddingRight: 3,
        backgroundColor: 'rgb(223, 227, 232)',
        zIndex: 10,
        transform: 'skew(0deg, 8deg)',
        borderRadius: 8
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 0,
        position: 'relative',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
    },
    '@keyframes fadeInLeft': {
        '0%': {
            opacity: 0,
            transform: 'translate(0% , 40px) skew(0deg, 8deg)'
        },
        '100%': {
            opacity: 1,
            transform: 'translate(-50%, 40px) skew(0deg, 8deg)'
        }
    },
    '@keyframes fadeInRight': {
        '0%': {
            opacity: 0,
            transform: 'translate(0% , -40px) skew(0deg, 8deg)'
        },
        '100%': {
            opacity: 1,
            transform: 'translate(50%, -40px) skew(0deg, 8deg)'         
        }
    },
    fadeInLeft: {
        animation: `$fadeInLeft 3000ms ${theme.transitions.easing.easeInOut}`,
        animationFillMode: 'both'
    },
    fadeInRight: {
        animation: `$fadeInRight 3000ms ${theme.transitions.easing.easeInOut}`,
        animationFillMode: 'both'
    }
}));

const Section1 = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} className={classes.containerItem}>
                <Box className={classes.imageContainer}>
                    <Box
                        //data-aos='fade-left'
                        component="img"
                        src={img1}
                        style={{ zIndex: 10}}
                        className={classNames(classes.image, classes.fadeInLeft)}
                        alt='img1'
                    />
                    <Box
                        component="img"
                        src={img2}
                        style={{ zIndex: 5, transform: 'transtalate(0px, 0px)'}}
                        className={classes.image}
                        alt='img2'
                    />
                    <Box
                        //data-aos='fade-right'
                        component="img"
                        src={img3}
                        style={{ zIndex: 1}}
                        className={classNames(classes.image, classes.fadeInRight)}
                        alt='img3'
                    />
                </Box>
            </Grid>
        </Grid >
    );
}

export default Section1;
