import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"



const theme = {
  fonts:{
    body: `'Montserrat Alternates',sans-serif`, // TODO() fix size
    heading: `'Montserrat Alternates',sans-serif"`
  },
  }
  
  // declare a variable for our theme and pass our overrides in the e`xtendTheme` method from chakra
  const AppTheme = extendTheme(theme)
  
  // export our theme
  export default AppTheme