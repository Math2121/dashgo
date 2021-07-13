import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus de Paula</Text>
          <Text color="gray.300" fontSize="small">
            matheusdepaula527@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Matheus de Paula"
        src="https://github.com/math2121.png"
      />
    </Flex>
  );
}

export default Profile;
