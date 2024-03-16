import React, { useState } from "react";
import { Box, Heading, Flex, Spacer, Image, VStack, Checkbox, Text, Button, Link } from "@chakra-ui/react";

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
      <Flex bg="gray.100" px={8} py={4} alignItems="center">
        <Image src="https://images.unsplash.com/photo-1580115465903-0e4a824a4e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbG9nb3xlbnwwfHx8fDE3MTA2MzIyMDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Laudário Logo" h={12} />
        <Spacer />
        <Flex alignItems="center">
          <Link mx={6}>Home</Link>
          <Link mx={6}>Sobre</Link>
          <Link mx={6}>Contato</Link>
          <Link ml={6}>Login</Link>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex p={8}>
        <Box w="70%">
          {}
          <Box mb={8} p={4} bg="gray.50" border="1px" borderColor="gray.200" borderRadius="md">
            <Heading size="lg" mb={4}>
              Pré-visualização do Laudo
            </Heading>
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

          {}
          <Box p={4} border="1px" borderColor="gray.200" borderRadius="md">
            <Heading size="lg" mb={4}>
              Seleção de Achados
            </Heading>
            <VStack align="start" spacing={6}>
              <Box>
                <Heading size="md">Fígado</Heading>
                <Checkbox onChange={() => handleCheckboxChange("liver", "Achado 1")}>Achado 1</Checkbox>
                <Checkbox onChange={() => handleCheckboxChange("liver", "Achado 2")}>Achado 2</Checkbox>
                <Checkbox onChange={() => handleCheckboxChange("liver", "Achado 3")}>Achado 3</Checkbox>
              </Box>
              <Box>
                <Heading size="md">Pâncreas</Heading>
                <Checkbox onChange={() => handleCheckboxChange("pancreas", "Achado 1")}>Achado 1</Checkbox>
                <Checkbox onChange={() => handleCheckboxChange("pancreas", "Achado 2")}>Achado 2</Checkbox>
                <Checkbox onChange={() => handleCheckboxChange("pancreas", "Achado 3")}>Achado 3</Checkbox>
              </Box>
            </VStack>
          </Box>

          <Flex mt={8}>
            <Button colorScheme="blue" size="lg" mr={4}>
              Gerar Laudo
            </Button>
            <Button size="lg" mr={4}>
              Salvar
            </Button>
            <Button size="lg">Enviar</Button>
          </Flex>
        </Box>

        {}
        <Box w="30%" pl={8}>
          <Box p={4} bg="gray.50" border="1px" borderColor="gray.200" borderRadius="md">
            <Heading size="lg" mb={4}>
              Informações do Exame
            </Heading>
            <Text>Paciente: J. Silva</Text>
            <Text>ID: 12345</Text>
            <Text>Data: 01/01/2023</Text>
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex bg="gray.100" px={8} py={4} alignItems="center" justifyContent="space-between">
        <Link>Termos de Uso</Link>
        <Link>Política de Privacidade</Link>
      </Flex>
    </Box>
  );
};

export default Index;
