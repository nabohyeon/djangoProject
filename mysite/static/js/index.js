// 사이드바
const sidebarData = [
    { 
      id: "dashboard", 
      value: "대시보드", 
      icon: "mdi mdi-view-dashboard"
    },
    { 
        type: "separator" 
    },
    {
      id: "mainOffice",
      value: "본사",
      icon: "mdi mdi-office-building-marker"
    },
    {
      id: "lab",
      value: "연구소",
      icon: "mdi mdi-office-building-cog"
    },
    { 
        type: "separator" 
    },
    {
        id: "namdong",
        value: "남동공장",
        icon: "mdi mdi-office-building"
      },
      {
        id: "dangjin",
        value: "당진공장",
        icon: "mdi mdi-office-building"
      },
      {
        id: "gunsan",
        value: "군산공장",
        icon: "mdi mdi-office-building"
      },
    // { 
    //   type: "spacer"
    // }
];

const sidebar = new dhx.Sidebar("sidebar", {
    css: "dhx_widget--border_right"
});

sidebar.data.parse(sidebarData);

sidebar.events.on("click", function(id, e) {
    // sidebar 선택시 기존 컨텐츠 hide, 해당 컨텐츠 show
    console.log(id);
    $('.wrap-container').addClass('hide').hide();
    $('.'+id).removeClass('hide').show();
});

// 대시보드의 차트1
const companiesData = [
    { device: "PC", "제품 수": 20 },
    { device: "노트북", "제품 수": 5 },
    { device: "모니터", "제품 수": 55 },
    { device: "OS", "제품 수": 30 },
    { device: "Office", "제품 수": 27 },
    { device: "총근로자", "제품 수": 32 },
];
const config = {
    type: "bar",
    css: "dhx_widget--bg_white dhx_widget--bordered",
    scales: {
        "bottom": {
            text: "device"
        },
        "left": {
            maxTicks: 10,
            max: 100,
            min: 0
        }
    },
    series: [
        {
            id: "A",
            value: "제품 수",
            color: "#81C4E8",
            fill: "#81C4E8"
        }
    ],
    legend: {
        series: ["A"],
        halign: "right",
        valign: "top",
        size: 60
    }
};

const chart = new dhx.Chart("chart", config);
chart.data.parse(companiesData);

// 대시보드의 차트2
const companiesData2 = [
    { office: "본사", "근로자 수": 20, "관리 PC": 52, "company C": 72, "company D": 34 },
    { office: "연구소", "근로자 수": 5, "관리 PC": 33, "company C": 90, "company D": 55 },
    { office: "남동공장", "근로자 수": 55, "관리 PC": 30, "company C": 81, "company D": 66 },
    { office: "당진공장", "근로자 수": 30, "관리 PC": 11, "company C": 62, "company D": 22 },
    { office: "군산공장", "근로자 수": 27, "관리 PC": 14, "company C": 68, "company D": 70 },
];
const config2 = {
    type: "bar",
    css: "dhx_widget--bg_white dhx_widget--bordered",
    scales: {
        "bottom": {
            text: "office"
        },
        "left": {
            maxTicks: 10,
            max: 100,
            min: 0
        }
    },
    series: [
        {
            id: "A",
            value: "근로자 수",
            color: "#81C4E8",
            fill: "#81C4E8"
        },
        {
            id: "B",
            value: "관리 PC",
            color: "#74A2E7",
            fill: "#74A2E7"
        }
    ],
    legend: {
        series: ["A", "B"],
        halign: "right",
        valign: "top",
        size: 60
    }
};

const chart2 = new dhx.Chart("chart2", config2);
chart2.data.parse(companiesData2);