import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart"

const pie = () => {
  return (
    <Box m="20px">
        <Header title="PIE CHART" subtitle="Simple Pie Chart"/>
        <Box m="20px 0 0 0"
        height="70vh">
            <PieChart/>
        </Box>
    </Box>
  )
}

export default pie