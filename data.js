window.ARIVE_REPORT_DATA = {
  weekEnding: "Sunday, September 27, 2026",
  goals: { sf: 100, mf: 40 },
  kpis: {
    closingsLastWeek: { value: 3, detail: "3 Single-Family  •  0 Multifamily" },
    closingsYTD: { value: 75, detail: "53 Single-Family  •  22 Multifamily" },
    scheduledDigsYTD: { value: 79, detail: "77 actual dates entered  •  2 pending" },
    estClosingsNext30: { value: 10, detail: "8 Single-Family  •  2 Multifamily" }
  },
  closingsLastWeek: [
    { lot:"CV 335", community:"Canyon View Meadows", super:"Deryck-Burke", close:"9/25", build:152 },
    { lot:"ST WH 01", community:"ST Whiting Homestead", super:"Deryck", close:"9/25", build:170 },
    { lot:"MD 16", community:"Makin Dreams", super:"Robbie/Jackson", close:"9/25", build:175 }
  ],
  buildTime: {
    sf:[
      {name:"Dig → 4-Way",actual:63,goal:63},
      {name:"4-Way → Cab",actual:46,goal:48},
      {name:"Cab → C/O",actual:38,goal:39},
      {name:"TOTAL BUILD",actual:146,goal:150,total:true}
    ],
    mf:[
      {name:"Dig → 4-Way",actual:116,goal:100},
      {name:"4-Way → Cab",actual:60,goal:60},
      {name:"Cab → C/O",actual:38,goal:45},
      {name:"TOTAL BUILD",actual:214,goal:205,total:true}
    ]
  },
  pipeline:[
    {date:"9/30",lot:"VT 01",type:"MF",super:"Deryck"},
    {date:"9/30",lot:"ST WH 04",type:"SF",super:"Deryck"},
    {date:"10/1",lot:"GP 54",type:"SF",super:"Greg"},
    {date:"10/2",lot:"OS 80",type:"SF",super:"Greg"},
    {date:"10/6",lot:"S5 17",type:"SF",super:"Greg"},
    {date:"10/7",lot:"MC 01",type:"SF",super:"Deryck"},
    {date:"10/15",lot:"OU 63",type:"SF",super:"Burke"},
    {date:"10/26",lot:"VT 05",type:"MF",super:"Deryck"},
    {date:"10/27",lot:"BH 05",type:"SF",super:"Greg"},
    {date:"10/27",lot:"ST 10",type:"SF",super:"Burke"}
  ],
  digs:[
    {week:"9/28–10/2",count:2,lots:"LR 15-ARC  •  GP 10 SPEC"},
    {week:"10/5–10/9",count:2,lots:"ST EH 11  •  ST 08"},
    {week:"10/12–10/16",count:2,lots:"LR 14-ARC  •  GP 57"},
    {week:"10/19–10/23",count:2,lots:"CV 331  •  ST EH 12"},
    {week:"10/26–10/30",count:2,lots:"GP 53  •  GP 43"}
  ],
  digStats:[
    {value:79,label:"Scheduled digs YTD"},
    {value:77,label:"Actual dig dates entered"},
    {value:1,label:"Actual dig last week"},
    {value:10,label:"Scheduled next 5 weeks"}
  ],
  snapshot:[
    {label:"SF Build Time",value:"146 days",detail:"4 days ahead of 150-day goal",state:"good"},
    {label:"MF Build Time",value:"214 days",detail:"9 days over 205-day goal",state:"alert"},
    {label:"Last Week",value:"3 closings",detail:"all verified actual close dates",state:"good"},
    {label:"Next 30 Days",value:"10 closings",detail:"8 SF  •  2 MF forecasted",state:"good"}
  ],
  dataCheck:"2 malformed Actual Close Date values are included in YTD closing count but excluded from date-based weekly/monthly timing."
};
