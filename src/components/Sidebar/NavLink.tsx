import { LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { Icon, Link } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";


interface NavLinkProps extends ChakraLinkProps{
  children: ReactNode;
  icon: ElementType;
}

function NavLink({ icon, children }: NavLinkProps) {
  return (
    <Link display="flex" align="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}

export default NavLink;
