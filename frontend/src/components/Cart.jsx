import React from 'react';
import { useCart } from '../context/CartContext';
import { Box, VStack, Heading, Text, Button, Divider, Flex, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box
      borderWidth={1} 
      borderRadius="lg" 
      p={4} 
      bg="#e0b3f4"  // Light purple background
      color="white"
      borderColor="#d9a3f1"  // Darker purple border
      shadow="md"
    >
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="md" color="white">Keranjang Belanja</Heading> {/* White text */}
        <Divider borderColor="white" /> {/* White divider */}
        {cart.length === 0 ? (
          <Text>Keranjang kosong.</Text>
        ) : (
          <>
            {cart.map((item) => (
              <Flex key={item.id} justify="space-between" align="center">
                <Box>
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text color="white">Rp{item.price.toLocaleString()}</Text> {/* White text */}
                </Box>
                <IconButton
                  icon={<DeleteIcon />}
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Hapus item"
                  size="sm"
                  colorScheme="purple" // Purple icon button
                  variant="ghost"
                />
              </Flex>
            ))}
            <Divider borderColor="white" /> {/* White divider */}
            <Flex justify="space-between" fontWeight="bold">
              <Text>Total:</Text>
              <Text>Rp{total.toLocaleString()}</Text>
            </Flex>
            <Button 
              colorScheme="purple" // Purple button
              size="md" 
              width="full"
            >
              Pembayaran
            </Button>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Cart;
