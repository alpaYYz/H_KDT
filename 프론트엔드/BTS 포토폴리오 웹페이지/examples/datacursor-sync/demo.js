const DataCursor = Dashboards.DataCursor;
const DataTable = Dashboards.DataTable;
const cursor = new DataCursor();

// Build table with Highcharts.Series aliases
function buildVegeTable(vegetable, amounts) {
  const table = new DataTable({
    columns: {
      vegetable: ["2017년", "2018년", "2019년", "2020년", "2021년"],
      amount: amounts,
    },
    id: vegetable,
  });

  table.setColumnAlias("name", "vegetable");
  table.setColumnAlias("y", "amount");

  return table;
}

// Build chart options for each HighchartsComponent
function buildChartOptions(chartOptions) {
  return chartOptions;
}

// Create Dashboards.Board
Dashboards.board("container", {
  gui: {
    layouts: [
      {
        id: "dashboards-layout-1",
        rows: [
          {
            cells: [
              {
                id: "highcharts-dashboards-cell-a0",
              },
              {
                id: "highcharts-dashboards-cell-b0",
              },
            ],
          },
          {
            cells: [
              {
                id: "highcharts-dashboards-cell-a1",
              },
              {
                id: "highcharts-dashboards-cell-b1",
              },
            ],
          },
          {
            cells: [
              {
                id: "highcharts-dashboards-cell-a2",
              },
              {
                id: "highcharts-dashboards-cell-b2",
              },
            ],
          },
          {
            cells: [
              {
                id: "highcharts-dashboards-cell-a3",
              },
              {
                id: "highcharts-dashboards-cell-b3",
              },
            ],
          },
        ],
      },
    ],
  },
  components: [
    {
      cell: "highcharts-dashboards-cell-a0",
      type: "Highcharts",
      chartOptions: buildChartOptions({
        chart: {
          type: "line",
        },
        title: {
          text: "전체 교통사고 총 피해자",
        },
        xAxis: {
          categories: ["2017년", "2018년", "2019년", "2020년", "2021년"],
        },
        yAxis: {
          title: {
            text: "피해자 수",
          },
        },
        series: [
          {
            name: "전체 교통사고 총 피해자",
            data: [216335, 217148, 229600, 209664, 203130],
          },
        ],
      }),
    },
    {
      cell: "highcharts-dashboards-cell-b0",
      type: "Highcharts",
      chartOptions: buildChartOptions({
        chart: {
          type: "line",
        },
        title: {
          text: "전체 교통사고 총 사망자",
        },
        xAxis: {
          categories: ["2017년", "2018년", "2019년", "2020년", "2021년"],
        },
        yAxis: {
          title: {
            text: "사망자 수",
          },
        },
        series: [
          {
            name: "전체 교통사고 총 사망자",
            data: [4185, 3781, 3349, 3081, 2916],
          },
        ],
      }),
    },
    {
      cell: "highcharts-dashboards-cell-a1",
      type: "Highcharts",
      chartOptions: buildChartOptions({
        chart: {
          type: "pie",
        },
        title: {
          text: "5년간 전체 사고 중 음주 운전 사고 비율",
        },
        series: [
          {
            name: "비율",
            data: [
              {
                name: "전체 교통사고 비율",
                y: 95.14,
              },
              {
                name: "음주운전 사고 비율",
                y: 4.86,
              },
            ],
          },
        ],
      }),
    },
    {
      cell: "highcharts-dashboards-cell-b1",
      type: "Highcharts",
      chartOptions: buildChartOptions({
        chart: {
          type: "pie",
        },
        title: {
          text: "5년간 전체 교통사고 중 음주운전 사고 사망자 비율",
        },
        series: [
          {
            name: "비율",
            data: [
              {
                name: "전체 교통사고 사망자 비율",
                y: 95.14,
              },
              {
                name: "음주운전 사고 사망자 비율",
                y: 4.86,
              },
            ],
          },
        ],
      }),
    },
    // Chart for '어린이 교통사고 총 피해자'
    {
      cell: "highcharts-dashboards-cell-a2",
      type: "Highcharts",
      chartOptions: buildChartOptions({
        chart: {
          type: "line",
        },
        title: {
          text: "어린이 교통사고 총 피해자",
        },
        xAxis: {
          categories: ["2017년", "2018년", "2019년", "2020년", "2021년"],
        },
        yAxis: {
          title: {
            text: "피해자 수",
          },
        },
        series: [
          {
            name: "어린이 교통사고 총 피해자",
            data: [10960, 10009, 11054, 8400, 8889],
          },
        ],
      }),
    },
    // Chart for '어린이 교통사고 총 사망자'
    {
      cell: "highcharts-dashboards-cell-b2",
      type: "Highcharts",
      chartOptions: buildChartOptions({
        chart: {
          type: "line",
        },
        title: {
          text: "어린이 교통사고 총 사망자",
        },
        xAxis: {
          categories: ["2017년", "2018년", "2019년", "2020년", "2021년"],
        },
        yAxis: {
          title: {
            text: "사망자 수",
          },
        },
        series: [
          {
            name: "어린이 교통사고 총 사망자",
            data: [54, 34, 28, 24, 23],
          },
        ],
      }),
    },
    // Chart for '5년간 어린이 교통사고 중 어린이 보호구역 사고 비율'
    {
      cell: "highcharts-dashboards-cell-a3",
      type: "Highcharts",
      chartOptions: buildChartOptions({
        chart: {
          type: "pie",
        },
        title: {
          text: "5년간 어린이 교통사고 중 어린이 보호구역 사고 비율",
        },
        series: [
          {
            name: "비율",
            data: [
              {
                name: "어린이 교통사고 비율",
                y: 95.14,
              },
              {
                name: "어린이 보호구역 사고 비율",
                y: 4.86,
              },
            ],
          },
        ],
      }),
    },
    // Chart for '5년간 어린이 교통사고 사망자 중 어린이 보호구역 사망자 비율'
    {
      cell: "highcharts-dashboards-cell-b3",
      type: "Highcharts",
      chartOptions: buildChartOptions({
        chart: {
          type: "pie",
        },
        title: {
          text: "5년간 어린이 교통사고 사망자 중 어린이 보호구역 사망자 비율",
        },
        series: [
          {
            name: "비율",
            data: [
              {
                name: "어린이 교통사고 사망자 비율",
                y: 92.4,
              },
              {
                name: "어린이 보호구역 사망자 비율",
                y: 7.6,
              },
            ],
          },
        ],
      }),
    },
  ],
});
