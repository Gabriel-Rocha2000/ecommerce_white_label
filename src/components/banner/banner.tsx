"use client"

import { Button, Heading, Stack, Text, Box } from "@chakra-ui/react"
import { LuArrowRight } from "react-icons/lu"
import Link from "next/link"

const Banner = () => {
  return (
    <Box
      position="relative"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      height={{ base: "300px", md: "400px" }}
      backgroundImage="url('/bannerImage.svg')"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
    >
      {/* Overlay escuro para melhor legibilidade */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.400"
        zIndex="1"
      />
      
      <Stack
        align="flex-start"
        padding={{ base: "6", md: "10" }}
        justify="center"
        position="relative"
        zIndex="2"
        color="white"
        gap={4}
        maxW={{ base: "100%", md: "600px" }}
      >
        <Heading 
          size={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          lineHeight="shorter"
        >
          FUTURE OF TECH
        </Heading>
        <Text 
          fontSize={{ base: "sm", md: "lg" }}
          color="whiteAlpha.900"
        >
          Experience Innovation
        </Text>
        <Link href="/login" passHref>
          <Button 
            colorScheme="blue" 
            size={{ base: "md", md: "lg" }}
            borderRadius="full"
            rightIcon={<LuArrowRight />}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg"
            }}
            transition="all 0.2s"
          >
            SHOP NOW
          </Button>
        </Link>
      </Stack>
    </Box>
  )
}

export default Banner
