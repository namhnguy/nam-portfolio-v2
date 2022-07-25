import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Button,
  Container,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';
import headerImg from '../../assets/img/header-img.svg';
import './Banner.css';

const Banner2 = () => {
  return (
    <section className='banner' id='home'>
      <Container maxW={'container.xl'}>
        <SimpleGrid columns={[1, 2, 2]}>
          <Box>
            <span className='tagline'>Welcome to my Portfolio</span>
            <Heading as='h1'>Hi! I'm Nam</Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Button size='lg' variant='ghost'>
              Let's Connect <ArrowForwardIcon boxSize={25} />
            </Button>
          </Box>
          <Box>
            <img src={headerImg} alt='Header Img' />
          </Box>
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default Banner2;
