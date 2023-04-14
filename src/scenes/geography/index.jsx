import { Box } from "@mui/material";
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
        <Header title="GEO CHART" subtitle="Simple Geo Chart"/>
        <Box m="20px 0 0 0"
        height="70vh" border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
            <GeographyChart/>
        </Box>
    </Box>
  )
}

export default Geography