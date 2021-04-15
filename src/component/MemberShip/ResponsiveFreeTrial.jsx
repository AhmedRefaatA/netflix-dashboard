import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'

const ResponsiveFreeTrial = () => {
    let styles = {
        jumbotronStyle: {textAlign:"center",color:"white",backgroundColor:"black",marginBottom:"0"},
        link: {color:"white", fontSize:"12px"},
    }
    let classNames = {
        hClass:"mb-5",
        btnGroupClass:"mb-2",
        btnClass:"mr-1"
    }
    let text = {
        header1:"Get Premium free for 1 month",
        header3:"Only $9.99 after. Cancel anytime.",
        link:"Terms and conditions apply",
        getStarted:"Get Started",
        viewPlans:"View Plans",
    }
    let colors = {
        btnColor:"danger",
    }
    let sizes = {
        btnSize:"lg",
    }
    let linkReference = {
        anchor:"/"
    }
    return ( 
        <Jumbotron fluid style={styles.jumbotronStyle}>
            <Container>
                <h1 className={classNames.hClass}>{text.header1}</h1>
                <h3 className={classNames.hClass}>{text.header3}</h3>
                <ButtonGroup className={classNames.btnGroupClass} size={sizes.btnSize}>
                    <Button variant={colors.btnColor} className={classNames.btnClass}>{text.getStarted}</Button>
                    <Button variant={colors.btnColor}>{text.viewPlans}</Button>
                </ButtonGroup>
                <p><a style={styles.link} href={linkReference.anchor}><i>{text.link}</i></a></p>
            </Container>
        </Jumbotron>
     );
}
 
export default ResponsiveFreeTrial;