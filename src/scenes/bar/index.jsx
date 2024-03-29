import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
        <Header title="BAR CHART" subtitle="Simple Bar Chart"/>
        <Box m="20px 0 0 0" height="70vh">
            <BarChart/>
        </Box>
    </Box>
  )
}

export default Bar;