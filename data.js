window.ARIVE_REPORT_DATA = {
  reportTitle: "Weekly Owner Report",
  weekEnding: "Sunday, September 27, 2026",
  updatedLabel: "Reporting snapshot",
  kpis: {
    closingsLastWeek: { value: 3, detail: "3 Single-Family · 0 Multifamily" },
    closingsYTD: { value: 75, detail: "53 Single-Family · 22 Multifamily" },
    scheduledDigsYTD: { value: 79, detail: "77 actual dates entered · 2 pending" },
    estClosingsNext30: { value: 10, detail: "8 Single-Family · 2 Multifamily" }
  },
  goals: {
    singleFamilyClosings: 100,
    multifamilyClosings: 40
  },
  closingsLastWeek: [
    { lot: "CV 335", super: "Deryck-Burke", closeDate: "9/25/2026", buildDays: 152 },
    { lot: "ST WH 01", super: "Deryck", closeDate: "9/25/2026", buildDays: 170 },
    { lot: "MD 16", super: "Robbie/Jackson", closeDate: "9/25/2026", buildDays: 175 }
  ],
  buildTime: {
    singleFamily: [
      { milestone: "Dig → 4-Way", actual: 63, goal: 63 },
      { milestone: "4-Way → Cabinets", actual: 46, goal: 48 },
      { milestone: "Cabinets → C/O", actual: 38, goal: 39 },
      { milestone: "Total Build", actual: 146, goal: 150 }
    ],
    multifamily: [
      { milestone: "Dig → 4-Way", actual: 116, goal: 100 },
      { milestone: "4-Way → Cabinets", actual: 60, goal: 60 },
      { milestone: "Cabinets → C/O", actual: 38, goal: 45 },
      { milestone: "Total Build", actual: 214, goal: 205 }
    ]
  },
  closingPipeline: [
    { closeDate: "9/30", lot: "VT 01", type: "Multifamily", super: "Deryck" },
    { closeDate: "9/30", lot: "ST WH 04", type: "Single Family", super: "Deryck" },
    { closeDate: "10/1", lot: "GP 54", type: "Single Family", super: "Greg" },
    { closeDate: "10/2", lot: "OS 80", type: "Single Family", super: "Greg" },
    { closeDate: "10/6", lot: "S5 17", type: "Single Family", super: "Greg" },
    { closeDate: "10/7", lot: "MC 01", type: "Single Family", super: "Deryck" },
    { closeDate: "10/15", lot: "OU 63", type: "Single Family", super: "Burke" },
    { closeDate: "10/26", lot: "VT 05", type: "Multifamily", super: "Deryck" },
    { closeDate: "10/27", lot: "BH 05", type: "Single Family", super: "Greg" },
    { closeDate: "10/27", lot: "ST 10", type: "Single Family", super: "Burke" }
  ],
  digSchedule: [
    { week: "9/28 – 10/2", planned: 2, lots: "LR 15-ARC · GP 10 SPEC" },
    { week: "10/5 – 10/9", planned: 2, lots: "ST EH 11 · ST 08" },
    { week: "10/12 – 10/16", planned: 2, lots: "LR 14-ARC · GP 57" },
    { week: "10/19 – 10/23", planned: 2, lots: "CV 331 · ST EH 12" },
    { week: "10/26 – 10/30", planned: 2, lots: "GP 53 · GP 43" }
  ],
  digSummary: [
    { label: "Scheduled Digs YTD", value: 79 },
    { label: "Actual Dig Dates Entered", value: 77 },
    { label: "Actual Dig Last Week", value: 1, note: "OS 08 on 9/24" },
    { label: "Scheduled Next 5 Weeks", value: 10 }
  ],
  takeaways: [
    "3 verified closings last week.",
    "75 closings YTD: 53 single-family and 22 multifamily.",
    "79 scheduled digs YTD, with 77 actual dig dates entered.",
    "10 forecasted closings in the next 30 days.",
    "Single-family total build time is 146 days versus the 150-day goal.",
    "Multifamily total build time is 214 days versus the 205-day goal, excluding the American Fork one-off townhome buildings."
  ],
  footnote: "Informational reporting only. Forecast workbooks remain read-only. Construction Forecast fields F, K–O and T–V are excluded from reporting."
};
