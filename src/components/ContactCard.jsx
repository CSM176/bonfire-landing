import { Box, Button, Checkbox, Divider, Flex, FormControl, FormHelperText, FormLabel, Grid, Heading, Image, Input, Select, Text, Textarea, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import chatbubble from "../media/icons/chatbubble.png"
import { Form, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ContactCard(props) {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

  return (
    <>
        <Text marginBottom="0.5vw" color="lightgray" fontSize={{xl: "1rem", xxxl: "1.3rem"}}> Send us an email (*required field)</Text>
        <Form method='post' action={props.page}>
            <Grid templateColumns="1.5fr 3fr" columnGap="1vw" >
                <FormControl marginBottom="1vw">
                    <Input type="text" name="name" placeholder='Name*' variant="filled" backgroundColor="bg.200" size={{xl: "md", xxxl: "lg"}}/>
                </FormControl>

                <FormControl isRequired marginBottom="1vw">
                    <Input variant="filled" backgroundColor="bg.200" type="email" name="email" placeholder='Email*' size={{xl: "md", xxxl: "lg"}}/>
                </FormControl>
            </Grid>

            <FormControl marginBottom="1vw">
                <Select variant="filled" backgroundColor="bg.200" placeholder='What are you enquiring about?*' size={{xl: "md", xxxl: "lg"}} name='enquirytype'>
                    <option  style={{backgroundColor: "black"}} value="sales"> Sales </option>
                    <option style={{backgroundColor: "black"}} value="techsupport"> Technical Support </option>
                    <option style={{backgroundColor: "black"}} value="repair"> Repair </option>
                    <option style={{backgroundColor: "black"}} value="general"> General Enquiry </option>
                </Select>
            </FormControl>

            <Grid templateColumns="1fr 3fr" columnGap="1vw">

                <FormControl marginBottom="1vw">   
                    <Input variant="filled" backgroundColor="bg.200" type="number" name="postcode" placeholder='Postcode' size={{xl: "md", xxxl: "lg"}}/>
                </FormControl>

                <FormControl marginBottom="1vw" >
                    <Input variant="filled" backgroundColor="bg.200" type="number" name="phone" placeholder='Phone' size={{xl: "md", xxxl: "lg"}}/>
                </FormControl>


            </Grid>

            <FormControl marginBottom="1vw">
                <Textarea 
                variant="filled" backgroundColor="bg.200"
                placeholder='How can we help you?*'
                name="message"
                size={{xl: "md", xxxl: "lg"}}/>
            </FormControl>


            <Button type="submit"  size={{xl: "md", xxxl: "lg"}} onSubmit={useToast({
                title: 'Message sent.',
                description: 'You should receive a confirmation email in 1-2 minutes.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            })}>
                Submit
            </Button>
        </Form>
    </>
  )
}

export const createAction = async ({ request }) => {
    const data = await request.formData()

    const task = {
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message'),
        phone: data.get('phone'),
        postcode: data.get('postcode'),
        enquirytype: data.get('enquirytype')
    }

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "service_id": "service_omro8as",
                "template_id": "template_1vg68h3",
                "user_id": "noSKe9q4pG9tTE82k",
                "template_params": {
                    "to_email": `${task.email}`,
                    "customer_name": `${task.name}`,
                    "message": `${task.message}`
                }
            }),
        })
        if (response.ok) {
            console.log('Email sent successfully!')
        } else
            console.log('Email failed, ', response.status, response.statusText)
            
    } catch (error) {
        console.error("Error sending email ):", error)
        
    }

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "service_id": "service_omro8as",
                "template_id": "template_s2h32uf",
                "user_id": "noSKe9q4pG9tTE82k",
                "template_params": {
                    "to_email": `${task.email}`,
                    "customer_name": `${task.name}`,
                    "message": `${task.message}`,
                    "customer_phone": `${task.phone}`,
                    "customer_postcode": `${task.postcode}`,
                    "enquirytype": `${task.enquirytype}`
                }
            }),
        })
        if (response.ok) {
            console.log('yay')
        } else
            console.log('Email failed, ', response.status, response.statusText)
            
    } catch (error) {
        console.error("Error sending email ):", error)
        
    }


    console.log(task)

    return redirect('/landing')
}