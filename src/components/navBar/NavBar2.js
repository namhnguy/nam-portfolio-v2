import React, { useState, useEffect } from 'react';
import { Flex, Box, Image, Link, Container, Button } from '@chakra-ui/react';
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import './NavBar.css';

const NavBar2 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Flex
      justify={'space-around'}
      align={'center'}
      className={scrolled ? 'scrolled navbar' : 'navbar'}
    >
      <Flex
        justify={'space-between'}
        align={'center'}
        className='navbar__page-nav'
      >
        <Link href='#home'>
          <Image src={logo} alt='Logo' />
        </Link>
        <Link href='#home' className='navbar__link'>
          Home
        </Link>
        <Link href='#skills' className='navbar__link'>
          Skills
        </Link>
        <Link href='#project' className='navbar__link'>
          Projects
        </Link>
      </Flex>
      <Flex justify={'space-between'} align={'center'}>
        <Box className='navbar__social'>
          <Link href='#home'>
            <Image src={navIcon1} alt='linkedin' />
          </Link>
          <Link href='#skills'>
            <Image src={navIcon2} alt='facebook' />
          </Link>
          <Link href='#project'>
            <Image src={navIcon3} alt='instagram' />
          </Link>
        </Box>
        <Button
          size={'lg'}
          variant={'outline'}
          fontWeight={'700'}
          color={'#fff'}
          border={'1px solid #fff'}
          padding={'18px 34px'}
          fontSize={'18px'}
          marginLeft={'18px'}
          pos={'relative'}
          backgroundColor={'transparent'}
          transition={'0.3s ease-in-out'}
          className='navbar__social-button'
        >
          <span>Let's Connect</span>
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar2;
