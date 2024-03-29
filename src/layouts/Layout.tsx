import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'

import Content from './Content'
import DrawerMenu from './DrawerMenu'
import Header from './Header'
import { NavigationTypeArr } from 'App'

const drawerWidth = 240

interface Props {
  window?: () => Window
  navigation: NavigationTypeArr
}

export default function Layout(props: Props) {
  const { window, navigation } = props

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
      <DrawerMenu
        window={window}
        navigation={navigation}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Content navigation={navigation} />
    </Box>
  )
}
