import React from 'react';
import { VStack, Heading, Text, Box, Image, Flex } from '@chakra-ui/react';

const About = () => {
  return (
    <VStack spacing={8} align="stretch" bg="#e0b3f4" color="white" p={4}>
      <Flex
        direction={{ base: 'column', md: 'row' }}  // Stack vertically on small screens, horizontally on larger screens
        align="center"
        justify="center"
      >
        <Image
          src="https://i.pinimg.com/736x/77/61/71/7761711cf1467238bb03216a95af0972.jpg"  // Ganti dengan URL logo yang sesuai
          alt="ALIAS Logo"
          boxSize="150px"  // Sesuaikan ukuran logo
          borderRadius="8px"
          mb={{ base: 4, md: 0 }}  // Margin bottom pada tampilan mobile
        />
        <Box textAlign={{ base: 'center', md: 'left' }} ml={{ md: 4 }}>
          <Heading as="h2" size="2xl" mb={4} color="white">Tentang Kami</Heading>
          <Text fontSize="xl" color="white" textAlign={{ base: 'center', md: 'left' }}>
            Selamat datang di ALIAS, toko baju yang berdedikasi untuk menghadirkan tren mode terkini dengan kualitas terbaik. Kami percaya bahwa pakaian bukan hanya sekadar kebutuhan, tetapi juga cara untuk mengekspresikan diri dan menunjukkan keunikan Anda.
            <br /><br />
            Sejak didirikan, kami berkomitmen untuk menyediakan koleksi pakaian yang stylish, nyaman, dan terjangkau bagi semua kalangan. Dari pakaian kasual sehari-hari hingga busana formal, kami memastikan setiap item dipilih dengan cermat untuk memenuhi standar mode dan kenyamanan Anda.
            <br /><br />
            Kami berusaha untuk memberikan pengalaman belanja yang menyenangkan, baik di toko fisik maupun online, dengan layanan pelanggan yang ramah dan responsif. Bergabunglah dengan komunitas fashion kami dan temukan gaya yang mencerminkan diri Anda di ALIAS.
            <br /><br />
            Terima kasih telah memilih ALIAS sebagai destinasi mode Anda!
          </Text>
        </Box>
      </Flex>
    </VStack>
  );
};

export default About;
