import { Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import NotificationNAv from "./NotificationNAv";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationNAv />
        <Profile />
      </Flex>
    </Flex>
  );
}