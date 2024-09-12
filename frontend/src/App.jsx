import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Heading, Link, Container, VStack } from '@chakra-ui/react';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Flex minHeight="100vh" direction="column">
        <Box as="header" bg="#e0b3f4" color="white" p={4} borderBottom="1px solid #d9a3f1" boxShadow="md">
          <Container maxW="container.xl">
            <Flex alignItems="center" justifyContent="space-between">
              <Heading as="h1" size="lg">ALIAS</Heading>
              <Flex as="nav">
                <Link as={RouterLink} to="/" mr={4} _hover={{ textDecoration: 'underline' }} fontWeight="bold">Home</Link>
                <Link as={RouterLink} to="/products" mr={4} _hover={{ textDecoration: 'underline' }} fontWeight="bold">Produk</Link>
                <Link as={RouterLink} to="/about" _hover={{ textDecoration: 'underline' }} fontWeight="bold">About</Link>
              </Flex>
            </Flex>
          </Container>
        </Box>

        <Container maxW="container.xl" flex="1" py={8}>
          <Flex>
            <VStack flex={1} mr={8} align="stretch" spacing={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </VStack>
          </Flex>
        </Container>
      </Flex>
    </Router>
  );
}

export default App;


