(() => {
  const d = window.ARIVE_REPORT_DATA;
  const $ = (id) => document.getElementById(id);
  const esc = (v) => String(v ?? "").replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  $('reportTitle').textContent = d.reportTitle;
  $('weekEnding').textContent = d.weekEnding;
  $('sfGoal').textContent = d.goals.singleFamilyClosings;
  $('mfGoal').textContent = d.goals.multifamilyClosings;
  $('footnote').textContent = d.footnote;

  const kpiDefs = [
    ['Closings Last Week', d.kpis.closingsLastWeek],
    ['Closings YTD (2026)', d.kpis.closingsYTD],
    ['Scheduled Digs YTD (2026)', d.kpis.scheduledDigsYTD],
    ['Est. C/Os Next 30 Days', d.kpis.estClosingsNext30]
  ];
  $('kpis').innerHTML = kpiDefs.map(([label,k]) => `
    <div class="kpi-card">
      <div class="kpi-label">${esc(label)}</div>
      <div class="kpi-value">${esc(k.value)}</div>
      <div class="kpi-detail">${esc(k.detail)}</div>
    </div>`).join('');

  $('closingCountNote').textContent = `${d.closingsLastWeek.length} verified closings`;
  $('closingsBody').innerHTML = d.closingsLastWeek.map(r => `
    <tr><td><strong>${esc(r.lot)}</strong></td><td>${esc(r.super)}</td><td>${esc(r.closeDate)}</td><td class="num">${esc(r.buildDays)}</td></tr>`).join('');

  $('pipelineBody').innerHTML = d.closingPipeline.map(r => `
    <tr><td>${esc(r.closeDate)}</td><td><strong>${esc(r.lot)}</strong></td><td>${esc(r.type)}</td><td>${esc(r.super)}</td></tr>`).join('');

  function buildRows(rows){
    return rows.map((r,i) => {
      const variance = r.actual - r.goal;
      const cls = variance < 0 ? 'good' : variance > 0 ? 'bad' : '';
      const sign = variance > 0 ? '+' : '';
      return `<tr class="${i === rows.length - 1 ? 'total' : ''}">
        <td>${esc(r.milestone)}</td><td class="num">${r.actual}</td><td class="num">${r.goal}</td><td class="num variance ${cls}">${sign}${variance}</td></tr>`;
    }).join('');
  }
  $('sfBuildBody').innerHTML = buildRows(d.buildTime.singleFamily);
  $('mfBuildBody').innerHTML = buildRows(d.buildTime.multifamily);

  $('digScheduleBody').innerHTML = d.digSchedule.map(r => `
    <tr><td>${esc(r.week)}</td><td class="num">${r.planned}</td><td>${esc(r.lots)}</td></tr>`).join('');

  $('digSummary').innerHTML = d.digSummary.map(r => `
    <div class="summary-item"><div class="summary-value">${esc(r.value)}</div><div><div class="summary-label">${esc(r.label)}</div>${r.note ? `<div class="summary-note">${esc(r.note)}</div>` : ''}</div></div>`).join('');

  $('takeaways').innerHTML = d.takeaways.map(x => `<li>${esc(x)}</li>`).join('');
})();
