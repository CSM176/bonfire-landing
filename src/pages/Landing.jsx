import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Heading, Flex, Card, Grid, GridItem, Text, Divider, Center, Link, Button, FormControl, Input, Show, Hide, AbsoluteCenter } from "@chakra-ui/react"
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

const deviceicons = [ laptopicon, desktopicon, phoneicon]

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
                                <Image alt="Based in the Macedon Ranges, we provide computer repairs and custom computer builds for anyone, beginnner or expert. We guarantee the cheapest prices possible, and will beat any competitor price. We service the macedon ranges, including Kyenton, Macedon, Woodend, Gisborne, Riddells Creek, Lancefield, and even Sunbury!"

src={mobileintro}/>
                            </Hide>
                            <Show above="sm">
                                <Image  alt="Based in the Macedon Ranges, we provide computer repairs and custom computer builds for anyone, beginnner or expert. We guarantee the cheapest prices possible, and will beat any competitor price We service the macedon ranges, including Kyenton, Macedon, Woodend, Gisborne, Riddells Creek, Lancefield, and even Sunbury!"  src={introimg}/>
                            </Show>
                        </>
                        )
                        )}
                </Carousel>    
            </Box>
        </Box>
        <InfoCard bg="bg.300" subtitle="pardon our dust," bait="We're still open for business, so" linktext="click here for sales or repairs!" button="Click here for sales and repairs." title="website coming soon." titleimg={hammer} scrolllinkto="contact-section"> we are currently developing our website to make custom builds, and repair requests, easy. </InfoCard>
        <InfoCard orientation="row-reverse" bg="bg.200" subtitle="low cost and easy." linktext="Set up a drop off or pickup today." button="Set up a drop off or pickup today." title="looking for repairs?" scrolllinkto="contact-section" images={deviceicons}>  We guarantee cheapest fees in the area and will price match on request. We make it easy to repair anything, mobile, PC or laptop, and if we don't fix your problem, there's no fee. </InfoCard>
        <Flex bgColor="bg.350" sx={{ boxShadow: "0px 2px 4px #000000", zIndex: "3"}} py="3vh" px="2vw" color="white" id="contact-section">
            <Flex width={{lg:"60%", base:"100%"}} gap="1vh" flexDir="column">
                <Heading fontFamily="cocogoose" textAlign={{base:"center",lg:"left"}} fontSize={{base: "2.5rem", xl: "4rem", xxxl: "5.5rem"}}> ready to get started? </Heading>
                <Text fontFamily="poppins" fontSize={{xl: "1.2rem", xxxl: "1.6rem"}} textAlign={{base: "center", lg:"left"}}> To get started with a repair or sale, or just a general enquiry, tap the button to quickly start a chat with a staff member, or send us an email below. </Text>
                <Button marginTop="1vw" colorScheme="highlight" gap="10px" onClick={handleMaximize} size={{base: 'md', xl: 'md', xxxl: "xl"}} w="100%"> <Image src={chatbubble} h="80%"/> <Text> Start a chat </Text></Button>
                <Flex align="center" marginTop="1vw" gap="1vw" marginBottom="1vh">
                    <Show above="lg"><Text fontSize={{xl: "1.5rem", xxl: "2rem"}}> OR </Text> </Show>  
                    <Divider/>  
                    <Hide above="lg"> OR <Divider/> </Hide> 
                </Flex>
                <ContactCard page="/landing"/>
            </Flex>
        </Flex>
        <TawkMessengerReact propertyId="65c3674a0ff6374032ca3c01" widgetId="1hm1kmv9s" ref={tawkMessengerRef}/>
    </>
  )
}
