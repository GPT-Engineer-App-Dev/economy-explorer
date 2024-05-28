import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={8}>
      <Flex justifyContent="center" alignItems="center">
        <Link as={NavLink} to="/about" mx={2}>About</Link>
        <Link as={NavLink} to="/contact" mx={2}>Contact</Link>
        <Link as={NavLink} to="/privacy-policy" mx={2}>Privacy Policy</Link>
      </Flex>
      <Text textAlign="center" mt={2}>© 2023 Financial Times</Text>
    </Box>
  );
};

export default Footer;