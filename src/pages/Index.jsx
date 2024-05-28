import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import FinancialDataWidget from "../components/FinancialDataWidget";

const Index = () => {
  const stockMarketData = ["Dow Jones: 34,000", "S&P 500: 4,200", "NASDAQ: 14,000"];
  const currencyExchangeData = ["USD/EUR: 0.85", "USD/GBP: 0.75", "USD/JPY: 110.00"];

  return (
    <Container maxW="container.xl" py={8} bg="#fff1e5">
      <Flex direction={{ base: "column", md: "row" }} spacing={8}>
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h1" mb={4}>Featured Article</Heading>
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md" mb={8}>
            <Heading as="h2" size="lg" mb={2}>Breaking News: Market Hits Record High</Heading>
            <Text>Today, the stock market reached an all-time high, driven by strong earnings reports and economic optimism...</Text>
          </Box>
          <Heading as="h2" size="md" mb={4}>Recent Articles</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="sm" mb={2}>Article 1</Heading>
              <Text>Summary of article 1...</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="sm" mb={2}>Article 2</Heading>
              <Text>Summary of article 2...</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="sm" mb={2}>Article 3</Heading>
              <Text>Summary of article 3...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1">
          <FinancialDataWidget title="Stock Market Indices" data={stockMarketData} />
          <FinancialDataWidget title="Currency Exchange Rates" data={currencyExchangeData} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;