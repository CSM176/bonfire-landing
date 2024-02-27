import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Heading, Flex, Card, Grid, GridItem, Text, Divider, Center, Link, Button, FormControl, Input, Show, Hide } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import introimg from "../media/landing.png"
import { Container } from "@chakra-ui/react";
import laptopicon from "../media/icons/laptop.png"
import desktopicon from "../media/icons/desktop.png"
import phoneicon from "../media/icons/phone.png"
import DealCard from "../components/DealCard";
import builder from "../media/builder.png"
import hammer from "../media/icons/hammer.png"
import chatbubble from "../media/icons/chatbubble.png"
import ContactCard from "../components/ContactCard";
import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { Link as ScrollLink } from 'react-scroll'
import Helmet from "react-helmet"
import mobileintro from "../media/mobile intro.png"
import InfoCard from "../components/InfoCard";

const slides = ["","",""]

export default function Home() {
    const tawkMessengerRef = useRef()

    const handleMaximize = () => {
      tawkMessengerRef.current.maximize()
    }


  return (
    <>
        <Helmet>
            <title>Home - Bonfire</title>
        </Helmet>
        <Box backgroundColor="bg.300">
            <Box sx={{ boxShadow: "0px 2px 4px #000000", zIndex: "3"}}>
                <Carousel showStatus={false} showArrows={false} showThumbs={false} width="100%">
                        {slides.map((index, thingy) => (                        
                        <>
                            <Hide above="sm">
                                <Image src={mobileintro}/>
                            </Hide>
                            <Show above="sm">
                                <Image src={introimg}/>
                            </Show>
                        </>
                        )
                        )}
                </Carousel>    
            </Box>
        </Box>
        <Grid bgColor='bg.300' padding="4vh" gap={0} templateColumns="15fr 1fr 4fr" sx={{ boxShadow: "inset 0px 2px 4px #000000" }} >
            <Text fontSize={{xl:"1.8rem", xxxl: "2.5rem"}} color="white" fontWeight="400" fontFamily="Cocogoose" placeSelf="center"> <Text as="span" fontWeight="600" fontSize="1.3em"> pardon our dust, </Text> we are currently developing our website to make custom builds, and repair requests, easy. We're still open for business, so <Link color="red"> <ScrollLink to="contact-section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500} > click here for sales or repairs!</ScrollLink> </Link>   </Text>
            <Divider orientation="vertical" h="100%" placeSelf="center"></Divider>
            <Heading color="white" fontSize={{xl:"8vh", xxxl:"7vh"}} fontFamily="Cocogoose" fontWeight="400" marginLeft="2vw" height={{xl:"30vh", xxxl:"25vh"}}> website coming soon. <Image display="inline" src={hammer} height="20%"/> </Heading>
        </Grid>
        <InfoCard></InfoCard>
        <Grid bgColor='bg.200' paddingY="4vh" gap={0} templateColumns="2.8fr 0.5fr 7.5fr 3fr" sx={{ boxShadow: "inset 0px 2px 4px #000000" }}>
        <Heading color="white" fontSize={{xl:"8vh", xxxl:"7vh"}} fontFamily="Cocogoose" fontWeight="400" marginLeft="2vw" placeSelf="center"> looking for repairs? </Heading>
        <Divider orientation="vertical" h="100%" align></Divider>
        <Text fontSize={{xl:"1.8rem", xxxl: "3rem"}} color="white" fontWeight="400" fontFamily="Cocogoose" placeSelf="center"> <Text as="span" fontWeight="600" fontSize={{xl:"1.3em", xxl:"1em"}}> low cost and easy. </Text> We guarantee cheapest fees in the area and will price match on request. We make it easy to repair anything, mobile, PC or laptop, and if we don't fix your problem, there's no fee. 
        <Link color="red"> <ScrollLink to="contact-section"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} > Set up a drop off or a pick up today. </ScrollLink> </Link></Text>
    <Grid templateRows="1fr 1fr 1fr" templateColumns="1fr" gap={0} h={{xl:"35vh", xxl:"30vh"}} w="100%">
        <Image src={laptopicon} maxH="80%" objectFit="cover" placeSelf="center" />
        <Image src={desktopicon} maxH="80%" objectFit="cover" placeSelf="center"/>
        <Image src={phoneicon} maxH="80%" objectFit="cover" placeSelf="center"/>
    </Grid>
</Grid>
        <Flex bgColor="bg.350" sx={{ boxShadow: "0px 2px 4px #000000", zIndex: "3"}} py="5vh" px="2vw" color="white" id="contact-section">
            <Flex width="60%" gap="1vh" flexDir="column">
                <Heading fontFamily="cocogoose" fontSize={{xl: "4rem", xxxl: "5.5rem"}}> ready to get started? </Heading>
                <Text fontFamily="poppins" fontSize={{xl: "1.2rem", xxxl: "1.6rem"}}> To get started with a repair or sale, or just a general enquiry, tap the button to quickly start a chat with a staff member, or send us an email below. </Text>
                <Button marginTop="1vw" colorScheme="highlight" gap="10px" onClick={handleMaximize} size={{xl: 'md', xxxl: "xl"}}> <Image src={chatbubble} h="80%"/> <Text> Start a chat </Text></Button>
                <Flex align="center" marginTop="1vw" gap="1vw" marginBottom="1vh">
                    <Text fontSize={{xl: "1.5rem", xxl: "2rem"}}> OR </Text> <Divider/>
                </Flex>
                <ContactCard page="/landing"/>
            </Flex>
        </Flex>
        <TawkMessengerReact propertyId="65c3674a0ff6374032ca3c01" widgetId="1hm1kmv9s" ref={tawkMessengerRef}/>
    </>
  )
}
