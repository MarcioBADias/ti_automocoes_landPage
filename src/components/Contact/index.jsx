import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import axios from 'axios';
import * as Yup from 'yup';
import { Button, Container, ErrorMessage, Input, InputTextArea, Section, Title } from "./styles";

const schema = Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.number().min(11).required()
});


const Contact = () => {

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        const fetchCountries = async () => {
            const response = await axios.get('https://countryapi.gear.host/v1/Country/getCountries');
            setCountries(response.data.Response);
        };
        fetchCountries();
    }, []);

    console.log(countries);

    return(
        <Section id="contacts">   
             
            <Formik
                validationSchema={schema}
                initialValues={{
                    fullName:'',
                    email:'',
                    phone:'',
                    message:''
                }}
            >
                {( { errors })=>(
                    <Form>
                        <Container>
                            <Title>
                                Fale Conosco
                            </Title>  
                            <Input
                                name='fullName' 
                                type='text' 
                                placeholder='Nome Completo' />
                            {errors.fullName && (
                                <ErrorMessage >Campo obrigatótio</ErrorMessage>
                            )}
                            <Input
                                name='email' 
                                type='text' 
                                placeholder='E-Mail' />
                            {errors.email && (
                                <ErrorMessage >Campo obrigatótio</ErrorMessage>
                            )}
                            <Input
                                name='phone' 
                                type='text' 
                                placeholder='Telefone' />
                            {errors.phone && (
                                <ErrorMessage >Campo obrigatótio</ErrorMessage>
                            )}
                            <InputTextArea name='message' type='text' placeholder='Digite sua menssagem' />
                            <Button>
                                Enviar
                            </Button>
                        </Container>
                    </Form>
                )}
            </Formik>
        </Section>
    )
}
export { Contact };