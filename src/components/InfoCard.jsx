import React, { useRef } from 'react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Heading, Flex, Card, Grid, GridItem, Text, Divider, Center, Link, Button, FormControl, Input, Show, Hide } from "@chakra-ui/react"
import { ScrollLink } from 'react-scroll'
import { Image } from "@chakra-ui/react"
import ContactCard from './ContactCard'
import chatbubble from '../media/icons/chatbubble.png'
import laptopicon from "../media/icons/laptop.png"
import desktopicon from "../media/icons/desktop.png"
import phoneicon from "../media/icons/phone.png"
import hammer from "../media/icons/hammer.png"

export default function InfoCard(props) {


  return (
    <Flex backgroundColor="bg.300">
        <Text fontSize={{xl:"1.8rem", xxxl: "2.5rem"}} color="white" fontWeight="400" fontFamily="Cocogoose" placeSelf="center"> <Text as="span" fontWeight="600" fontSize="1.3em"> pardon our dust, </Text> we are currently developing our website to make custom builds, and repair requests, easy. We're still open for business, so <Link color="red"> <ScrollLink to="contact-section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500} > click here for sales or repairs!</ScrollLink> </Link>   </Text>
        <Divider display="inline" orientation="vertical" placeSelf="center" h="80%"></Divider>
        <Heading color="white" fontSize={{xl:"8vh", xxxl:"7vh"}} fontFamily="Cocogoose" fontWeight="400" marginLeft="2vw" height={{xl:"30vh", xxxl:"25vh"}}> website coming soon. <Image display="inline" src={hammer} height="20%"/> </Heading>
    </Flex>
  )
}
