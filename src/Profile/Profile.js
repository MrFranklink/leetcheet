import React from 'react';
import { HStack, Box, useMediaQuery } from '@chakra-ui/react';
import CustomCard from '../Container/container';

function UserProfile() {
  
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <HStack spacing={4}>
    
      {isLargerThan768 ? (
        <Box ml="30%" mt="3%">
          <CustomCard
            name="Harshit Kaundal"
            role="Student, Chitkara University"
            text="Bio-: I want to be Good at Coding😊😊"
            imageSrc="/assests/c.gif"
          />
        </Box>
      ) : (
        <Box ml="10%" mt="3%">
          <CustomCard
            name="Harshit Kaundal"
            role="Student, Chitkara University"
            text="Bio-: I want to be Good at Coding😊😊"
            imageSrc="/assests/c.gif"
          />
        </Box>
      )}
    </HStack>
  );
}

export default UserProfile;
