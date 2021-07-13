import { LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { Icon, Link as ChakraLink } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import Link from 'next/link'
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps{
  children: ReactNode;
  icon: ElementType;
  href: string;
}

function NavLink({ icon, children,href }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
    <ChakraLink display="flex" align="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
    </ActiveLink>
  );
}

export default NavLink;
