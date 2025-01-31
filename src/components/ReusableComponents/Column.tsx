import { Box } from "@mui/system"
import { SxProps } from "@mui/material"
import React, { ReactNode } from "react"

interface ColumnProps {
  gap?: string | number,
  sx?: SxProps,
  children: ReactNode,
  onClick?: () => void;
}

const Column: React.FC<ColumnProps> = ({ children, gap = '5px', onClick, sx }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap,
        ...sx
      }}
    >
      {children}
    </Box>
  )
}

export default Column
