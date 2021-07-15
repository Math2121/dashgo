import { Flex, Icon } from "@chakra-ui/react";
import { useRef, useState } from "react";

import { RiSearchLine } from "react-icons/ri";
import { Input } from "../Form/Input";

function SearchBox() {
  // const [search, setSearch] = useState("");

  // console.log(searchInputRef.current?.value)
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      align="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        name="search"
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
  
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}

export default SearchBox;
