import { Avatar, Box, Flex,Text } from '@chakra-ui/react';
import { ReactNode } from 'react';



function Profile() {
  return (

   <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Matheus de Paula</Text>
            <Text color="gray.300" fontSize="small">
              matheusdepaula527@gmail.com
            </Text>
          </Box>

          <Avatar size="md" name="Matheus de Paula" src="https://github.com/math2121.png"/>
        </Flex>

  );
}

export default Profile;
