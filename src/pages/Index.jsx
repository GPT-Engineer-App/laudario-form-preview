import React, { useState } from "react";
import { Box, Heading, Flex, Spacer, Image, VStack, Checkbox, Text, Divider, Link } from "@chakra-ui/react";

const Index = () => {
  const [findings, setFindings] = useState({
    liver: [],
    pancreas: [],
  });

  const handleCheckboxChange = (organ, finding) => {
    const newFindings = { ...findings };
    const index = newFindings[organ].indexOf(finding);
    if (index > -1) {
      newFindings[organ].splice(index, 1);
    } else {
      newFindings[organ].push(finding);
    }
    setFindings(newFindings);
  };

  return (
    <Box>
      {/* Header */}
      <Flex bg="gray.100" p={4} alignItems="center">
        <Image src="https://images.unsplash.com/photo-1580115465903-0e4a824a4e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbG9nb3xlbnwwfHx8fDE3MTA2MzIyMDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Laudário Logo" h={12} />
        <Spacer />
        <Flex>
          <Link mx={4}>Home</Link>
          <Link mx={4}>About</Link>
          <Link mx={4}>Contact</Link>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex>
        {/* Form */}
        <Box w="50%" p={8}>
          <VStack align="start" spacing={8}>
            <Box>
              <Heading size="md">Fígado</Heading>
              <Checkbox onChange={() => handleCheckboxChange("liver", "Achado 1")}>Achado 1</Checkbox>
              <Checkbox onChange={() => handleCheckboxChange("liver", "Achado 2")}>Achado 2</Checkbox>
            </Box>
            <Box>
              <Heading size="md">Pâncreas</Heading>
              <Checkbox onChange={() => handleCheckboxChange("pancreas", "Achado 1")}>Achado 1</Checkbox>
              <Checkbox onChange={() => handleCheckboxChange("pancreas", "Achado 2")}>Achado 2</Checkbox>
            </Box>
          </VStack>
        </Box>

        {/* Preview */}
        <Box w="50%" p={8} bg="gray.50">
          <Heading size="lg" mb={4}>
            Pré-visualização do Laudo
          </Heading>
          <Box p={4} border="1px" borderColor="gray.200" borderRadius="md">
            {findings.liver.length > 0 && (
              <Box mb={4}>
                <Heading size="md">Fígado</Heading>
                {findings.liver.map((finding, index) => (
                  <Text key={index}>{finding}</Text>
                ))}
              </Box>
            )}
            {findings.pancreas.length > 0 && (
              <Box mb={4}>
                <Heading size="md">Pâncreas</Heading>
                {findings.pancreas.map((finding, index) => (
                  <Text key={index}>{finding}</Text>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex bg="gray.100" p={4} alignItems="center">
        <Text>Informações de Contato</Text>
        <Spacer />
        <Flex>
          <Link mx={4}>Termos de Uso</Link>
          <Link mx={4}>Política de Privacidade</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;
