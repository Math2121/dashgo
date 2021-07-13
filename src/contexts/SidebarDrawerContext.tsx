import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react";
type SidebarDrawerContextData = UseDisclosureReturn
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

interface SIdebarDrawerProps{
    children:ReactNode
}
export function SidebarDrawerProvider({children}:SIdebarDrawerProps){
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(()=>{
        disclosure.onClose()
    },[router.asPath])
    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)