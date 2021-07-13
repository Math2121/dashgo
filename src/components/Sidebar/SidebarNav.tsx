import { Icon, Stack, Text, Link, Box } from "@chakra-ui/react";
import React from "react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

function SidebarNav() {
  return (

      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
          <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine} href="/formulario">Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}  href="/automacao">Automação</NavLink>
        </NavSection>
      </Stack>

  );
}

export default SidebarNav;