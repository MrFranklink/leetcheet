import React from 'react';
import { HStack, Box, useMediaQuery } from '@chakra-ui/react'; 
import CustomCard from './Container/container'; 
import './App.css';

function App() {
 
  const [isScreenLessThan800px] = useMediaQuery("(max-width: 800px)");

  const [isScreenLessThan500px] = useMediaQuery("(max-width: 500px)");

  return (
    <HStack spacing={4}>
      <Box className='box' ml="10px"> 
        <CustomCard
          name="Ayush Kumar"
          role="Student, Chitkara University"
          text="I Hate the LeetCheet!"
          imageSrc="/assests/c.gif"
        />
      </Box>
      {isScreenLessThan500px ? null : ( 
        <Box ml="30px">
          <CustomCard
            name="Geetansh Saini"
            role="Student, Chitkara University"
            text="I love the Python!"
            imageSrc="/assests/b.gif"
          />
        </Box>
      )}
      {isScreenLessThan800px ? null : ( 
        <Box ml="30px">
          <CustomCard
            name="Harshit Kaundal"
            role="Student, Chitkara University"
            text="I love the LeetCheet!"
            imageSrc="/assests/a.gif"
          />
        </Box>
      )}
    </HStack>
  );
}

export default App;
