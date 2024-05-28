import { Box, Flex, Link, Spacer, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box fontWeight="bold" fontSize="xl">Financial Times</Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <Link as={NavLink} to="/" exact>Home</Link>
            <Link as={NavLink} to="/world">World</Link>
            <Link as={NavLink} to="/markets">Markets</Link>
            <Link as={NavLink} to="/opinion">Opinion</Link>
            <Link as={NavLink} to="/more">More</Link>
          </HStack>
        </HStack>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Navbar;