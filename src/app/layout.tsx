import { Provider } from "@/components/ui/provider"
import { Box } from "@chakra-ui/react"

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Box maxW="90" mx="auto" p={4}>
            {children}
          </Box>
        </Provider>
      </body>
    </html>
  )
}
