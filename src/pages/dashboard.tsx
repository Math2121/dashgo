import { SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import dynamic from "next/dynamic"; //Carrega componenets de forma dinâmica
//Os gráficos são carregados pela browser para não ocorrer falhas
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
  //modifica o gráfico
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        "2021-03-18T00:00:00.000Z",
        "2021-03-19T00:00:00.000Z",
        "2021-03-20T00:00:00.000Z",
        "2021-03-21T00:00:00.000Z",
        "2021-03-22T00:00:00.000Z",
      ],
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };
  const series = [
    {
      name: "series1",
      data: [1, 25, 66, 36, 8],
    },
  ];
function Dashboard() {

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={['6','8']} pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Incritos da semana
            </Text>
            <Chart type="area" heigh={160} options={options} series={series} />
          </Box>
          <Box p="4" pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" heigh={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
