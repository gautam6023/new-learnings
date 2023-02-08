import { useState } from "react";
import {
   Box,
   Flex,
   Avatar,
   HStack,
   // Link,
   IconButton,
   Button,
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   MenuDivider,
   useDisclosure,
   useColorModeValue,
   Image,
   Stack,
   Text,
   Divider,
} from "@chakra-ui/react";
import styles from "./Nav.module.css";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
// const Links = ["Dashboard", "Projects", "Team"];
import AvatarPNG from "../assets/user.png";
import { FaUserCircle } from "react-icons/fa";
import { Logo } from "./Logo";
const Links = [
   { Name: "Dashboard", Link: "/admin/dashboard", Role: "Admin" },
   { Name: "IA-Status", Link: "/admin/ia-status", Role: "Admin" },
   { Name: "Analytics", Link: "/admin/analytics", Role: "Admin" },
   { Name: "Dashboard", Link: "/dashboard", Role: "Student" },
   { Name: "Pair Programming", Link: "/pair-programming", Role: "Student" },
   { Name: "Profile", Link: "/profile", Role: "Student" },
   { Name: "IA-Dashboard", Link: "/admin/dashboard", Role: "IA-Admin" },
   {
      Name: "Pair-Programming",
      Link: "/admin/pair-programming",
      Role: "IA-Admin",
   },
   { Name: "Profile", Link: "/admin/profile", Role: "IA-Admin" },
   { Name: "Dashboard", Link: "/admin/dashboard", Role: "Super-Admin" },
   { Name: "Analytics", Link: "/admin/analytics", Role: "Super-Admin" },
   { Name: "Data", Link: "/admin/data", Role: "Super-Admin" },
   { Name: "Report", Link: "/admin/report", Role: "Super-Admin" },
   { Name: "Profile", Link: "/admin/profile", Role: "Super-Admin" },
   { Name: "Leave", Link: "/admin/leave", Role: "IA-Admin" },
   { Name: "Leave", Link: "/admin/leave", Role: "Super-Admin" },
   { Name: "Leave Review", Link: "/admin/leave-review", Role: "IA-Admin" },
   { Name: "IA Training Camp", Link: "/ia-training-camp", Role: "IA-Admin" },
   { Name: "Leave Review", Link: "/admin/leave-review", Role: "Super-Admin" },
   { Name: "Training Camp", Link: "/admin/training-camp", Role: "Super-Admin" },
];

const LinkComponent = ({ children, path }) => {
   return (
      <NavLink
         to={path}
         className={({ isActive }) => {
            return `${styles.navlink} ${
               !isActive ? styles.not_active : styles.active
            }`;
         }}
      >
         {children}
      </NavLink>
   );
};

export default function Navbar() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [role, setRole] = useState("Super-Admin");

   return (
      <>
         <Box
            // bg="#5edced"
            style={{
               padding: "0px 50px",
            }}
            className={styles.navbar}
            // border="1px"
         >
            <Flex
               h={"55px"}
               alignItems={"center"}
               justifyContent={"space-between"}
               // border="1px"
            >
               <IconButton
                  size={"md"}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={"Open Menu"}
                  display={{ md: "none" }}
                  onClick={isOpen ? onClose : onOpen}
               />
               <HStack spacing={4} alignItems={"center"} height={"100%"}>
                  <Box
                     // border="1px"
                     height="100%"
                     style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                     }}
                  >
                     <Logo />
                  </Box>
                  <HStack
                     as={"nav"}
                     spacing={3}
                     display={{ base: "none", md: "flex" }}
                     fontSize="1rem"
                     // border="1px"
                     height={"100%"}
                     padding={"0 0rem"}
                  >
                     {Links.map((link, i) =>
                        role === link.Role ? (
                           <LinkComponent key={link.Name + i} path={link.Link}>
                              {link.Name}
                           </LinkComponent>
                        ) : (
                           false
                        )
                     )}
                  </HStack>
               </HStack>
               <Flex alignItems={"center"} h={"100%"} padding={"10px"}>
                  <Menu border="1px" height={"100%"}>
                     <MenuButton
                        as={Button}
                        variant={"link"}
                        cursor={"pointer"}
                        display="flex"
                        alignItems={"center"}
                        style={{
                           textDecoration: "none",
                        }}
                     >
                        <Box
                           style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              textDecoration: "none",
                           }}
                           fontWeight={"normal"}
                        >
                           <Text className="removeHover" color={"#000000"}>
                              Gautam
                           </Text>
                           <span
                              style={{
                                 fontSize: "30px",
                              }}
                           >
                              <FaUserCircle />
                           </span>
                        </Box>
                     </MenuButton>
                     <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Logout</MenuItem>
                     </MenuList>
                  </Menu>
               </Flex>
            </Flex>

            {isOpen ? (
               <Box pb={4} display={{ md: "none" }}>
                  <Stack as={"nav"} spacing={4}>
                     {Links.map((link, i) =>
                        role === link.Role ? (
                           <LinkComponent key={link.Name + i} path={link.Link}>
                              {link.Name}
                           </LinkComponent>
                        ) : (
                           false
                        )
                     )}
                  </Stack>
               </Box>
            ) : null}
         </Box>

         {/* <Divider /> */}
      </>
   );
}
