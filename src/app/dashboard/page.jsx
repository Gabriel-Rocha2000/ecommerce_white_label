"use client"
import { useState } from "react"
import { Flex,  Box, Text, Button, HStack, Stack, VStack, Heading } from "@chakra-ui/react"
import List from "@/components/List/List"
import Grafico from "@/components/grafico/grafico"
import Header from "@/components/header/header"
import { ProductsProvider } from "@/context/ProductsContext"
import { Tabs } from "@chakra-ui/react"
import { ProductForm } from "@/components/criar/ProductForm"
import DashMenu from "./dash-menu"
import DashBody from "./dash-body"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("products")
  const [activeMenu, setActiveMenu] = useState("Produtos")
  const handleCreateClick = () => {
    setActiveTab("members")
  }

  const handleFormSave = () => {
    setActiveTab("products")
  }

  const handleFormCancel = () => {
    setActiveTab("products")
  }

  return (
    <Box> 
      <Flex direction="column" gap="6"> 
      <Heading>
        Dashboard
      </Heading>
      <DashMenu activeMenu ={activeMenu} setActiveMenu={setActiveMenu} />
      <DashBody activeMenu={activeMenu} />
      </Flex>

    </Box>
  )}
export default Dashboard
