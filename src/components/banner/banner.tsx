import { Button, Heading, Stack, Text } from "@chakra-ui/react"
import { LuArrowRight } from "react-icons/lu"
import Link from "next/link"

const Banner = () => {
  return (
    <Stack
      align="flex-start"
      padding="8"      
      height="356px"
      justify="center"
      backgroundImage="url('/bannerImage.svg')"
      backgroundSize="cover"
      backgroundPosition="center"
      borderRadius="lg"
      position="relative"
      color="white"
    >
      <Heading size="2xl">FUTURE OF TECH</Heading>
      <Text mb="3" fontSize="md">
        Experience Innovation
      </Text>
      <Link href="/login" passHref>
        <Button background="blue.500" borderRadius="22px" color="white">
          SHOP NOW <LuArrowRight />
        </Button>
      </Link>
    </Stack>
  )
}

export default Banner
