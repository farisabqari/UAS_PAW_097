import React from 'react';
import { VStack, Heading, Text, Image, Box, Center, Slide, Container } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box
      position="relative"
      bgImage="url('https://i.pinimg.com/736x/70/8d/e6/708de6ea6963ca5abf85681988d1020e.jpg')"  // Gambar latar belakang
      bgSize="cover"
      bgPosition="center"
      minHeight="50vh"  // Pastikan latar belakang menutupi seluruh viewport
      p={0}
    >
      {/* Overlay untuk transparansi */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.3)"  // Semi-transparent overlay
        zIndex={1}
      />
      {/* Konten */}
      <Container maxW="container.sm" position="relative" zIndex={2} px={4}> {/* Mengubah maxW untuk kotak */}
        <VStack
          spacing={6}  // Mengurangi jarak antar elemen
          align="center"  // Mengubah align untuk center
          color="#333"
        >
          <Center>
            <Slide direction="bottom" in={true} style={{ transitionDelay: '0.5s' }}>
              <Image 
                src=""  // Ganti dengan URL gambar yang sesuai
                alt="ALIAS" 
                mb={4} 
                borderRadius="8px" 
                boxShadow="0 0 10px rgba(0,0,0,0.1)" // Mengurangi ukuran box shadow
                maxW="300px"  // Mengatur lebar maksimal gambar
                maxH="200px"  // Mengatur tinggi maksimal gambar
              />
            </Slide>
            <Heading 
              as="h2" 
              size="xl"  // Mengubah ukuran heading
              mb={4} 
              color="#e0b3f4"  // Light purple for Heading
              fontFamily="Segoe UI, sans-serif"
            >
              Selamat Datang
            </Heading>
          </Center>
        </VStack>
      </Container>
    </Box>
  );
};

const Feature = ({ icon, title, text }) => {
  return (
    <VStack 
      spacing={4} 
      align="center" 
      bg="#fff"  // White background
      borderRadius="8px" 
      boxShadow="0 0 10px rgba(0,0,0,0.1)" // Mengurangi ukuran box shadow
      p={4}  // Mengurangi padding
      maxW="container.md"  // Mengubah lebar maksimum kotak
      mx="auto"  // Center horizontally
      px={4}  // Padding horizontal
    >
      <Box fontSize="4xl" mb={4} color="#e0b3f4"> {/* Mengurangi ukuran font ikon */}
        {icon}
      </Box>
      <Text 
        fontWeight="bold" 
        fontSize="lg"  // Mengurangi ukuran font judul
        mb={2} 
        color="#e0b3f4"  // Light purple for title
        fontFamily="Segoe UI, sans-serif"
      >
        {title}
      </Text>
      <Text textAlign="center" fontFamily="Segoe UI, sans-serif" color="#333">
        {text} {/* Dark gray text */}
      </Text>
    </VStack>
  );
};

export default Home;
