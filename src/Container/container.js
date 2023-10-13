import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Flex, Avatar, Box, Heading, Text } from '@chakra-ui/react';

import './CustomCard.css'; 

function CustomCard({ name, role, text, imageSrc }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className={`custom-card ${isVisible ? 'show' : ''}`} maxW='md' h='300px' ml='22px' pr='90px' pl='20px' mt='2px' zIndex='-10' borderWidth='1px' borderColor='gray.700' borderRadius='lg' overflow='hidden'>
      <CardHeader>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name={name} src='/assests/man.png' />
            <Box>
              <Heading size='sm'>{name}</Heading>
              <Text>{role}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text
           marginTop='-2rem'>
          {text}
        </Text>
      </CardBody>
      <Image
        className={`custom-card-image ${isVisible ? 'show' : ''}`}
        objectFit='cover'
        src={imageSrc}
        alt='Chakra UI'
        maxW='50%'
        margin="10px"
        marginTop="-30px"
      />
      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
      </CardFooter>
    </Card>
  )
}

export default CustomCard;
