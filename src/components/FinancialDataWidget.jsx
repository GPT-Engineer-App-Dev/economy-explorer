import { Box, Text, VStack } from "@chakra-ui/react";

const FinancialDataWidget = ({ title, data }) => {
  return (
    <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md" mb={4}>
      <Text fontWeight="bold" mb={2}>{title}</Text>
      <VStack spacing={2}>
        {data.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default FinancialDataWidget;