import { Button, Heading, Stack, Text } from "@chakra-ui/react"
import { LuArrowRight } from "react-icons/lu"
import Link from "next/link"

const Banner = () => {
  return (
    <Stack align="flex-start" padding="4" background="#e4f1fe" >
      <Heading size="2xl">FUTURE OF TECH</Heading>
      <Text mb="3" fontSize="md" color="fg.muted">
        Experience Innovation
      </Text>
      <Link href="/login" passHref>
        <Button as="a" background="blue" borderRadius="22px">
          SHOP NOW <LuArrowRight />
        </Button>
      </Link>
    </Stack>
  )
}
export default Banner