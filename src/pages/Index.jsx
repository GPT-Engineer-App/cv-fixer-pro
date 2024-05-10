import { Box, Button, Container, Flex, Heading, Input, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = "blue.500";
  const hoverBgColor = "blue.600";
  const borderColor = useColorModeValue("gray.300", "gray.700");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh" bg={bgColor}>
        <VStack spacing={8} w="full" maxW="md" px={6}>
          <Heading as="h1" size="xl" textAlign="center" color={textColor}>
            CV Fixer
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Upload your CV and choose a design to make it stand out!
          </Text>
          <Box as="form" w="full">
            <Input placeholder="Upload your CV" size="lg" type="file" p={2} borderColor={borderColor} _hover={{ borderColor: accentColor }} _placeholder={{ color: useColorModeValue("gray.500", "gray.300") }} />
            <Button leftIcon={<FaUpload />} colorScheme="blue" variant="solid" size="lg" mt={4} w="full" bg={accentColor} _hover={{ bg: hoverBgColor }}>
              Upload
            </Button>
          </Box>
          <Flex direction="column" align="start" w="full">
            <Heading as="h3" size="md" color={textColor} mt={10}>
              Design Options
            </Heading>
            <VStack spacing={4} mt={4}>
              <Button w="full" bg={accentColor} _hover={{ bg: hoverBgColor }}>
                Modern Minimalist
              </Button>
              <Button w="full" bg={accentColor} _hover={{ bg: hoverBgColor }}>
                Classic Elegance
              </Button>
              <Button w="full" bg={accentColor} _hover={{ bg: hoverBgColor }}>
                Creative Pop
              </Button>
            </VStack>
          </Flex>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
