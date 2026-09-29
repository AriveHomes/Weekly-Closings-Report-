(() => {
  const d=window.ARIVE_REPORT_DATA;
  const $=id=>document.getElementById(id);
  const esc=v=>String(v??"").replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  $('weekEnding').textContent=d.weekEnding;
  const kpis=[
    ['CLOSINGS LAST WEEK',d.kpis.closingsLastWeek],
    ['VERIFIED CLOSINGS YTD',d.kpis.closingsYTD],
    ['SCHEDULED DIGS YTD',d.kpis.scheduledDigsYTD],
    ['EST. CLOSINGS — NEXT 30 DAYS',d.kpis.estClosingsNext30]
  ];
  $('kpiRow').innerHTML=kpis.map(([l,k])=>`<div class="kpi"><div class="kpi-label">${l}</div><div class="kpi-value">${k.value}</div><div class="kpi-detail">${k.detail}</div></div>`).join('')+
    `<div class="kpi goal"><div class="kpi-label">2026 C/O GOALS</div><div class="kpi-value">${d.goals.sf} / ${d.goals.mf}</div><div class="kpi-detail">Single-Family / Multifamily</div></div>`;
  $('closingsVerified').textContent=`${d.closingsLastWeek.length} verified`;
  $('closingTotal').textContent=`${d.closingsLastWeek.length} CLOSINGS`;
  $('closingsBody').innerHTML=d.closingsLastWeek.map(r=>`<tr><td>${esc(r.lot)}</td><td>${esc(r.community)}</td><td>${esc(r.super)}</td><td>${esc(r.close)}</td><td>${esc(r.build)}</td></tr>`).join('');
  function metricRows(rows){return rows.map(r=>{const v=r.actual-r.goal; const cls=v<0?'delta-good':v>0?'delta-bad':''; const tr=r.total?`total ${v>0?'bad-total':''}`:''; return `<tr class="${tr}"><td>${r.name}</td><td>${r.actual}</td><td>${r.goal}</td><td class="${cls}">${v>0?'+':''}${v}</td></tr>`}).join('')}
  $('sfBuildBody').innerHTML=metricRows(d.buildTime.sf); $('mfBuildBody').innerHTML=metricRows(d.buildTime.mf);
  $('pipelineCount').textContent=`${d.pipeline.length} forecasted`;
  $('pipelineBody').innerHTML=d.pipeline.map(r=>`<tr><td>${r.date}</td><td>${r.lot}</td><td><span class="type-badge ${r.type==='SF'?'sf':'mf'}">${r.type}</span></td><td>${r.super}</td></tr>`).join('');
  const sf=d.pipeline.filter(x=>x.type==='SF').length,mf=d.pipeline.length-sf; $('mixSF').style.width=`${sf/d.pipeline.length*100}%`; $('mixMF').style.width=`${mf/d.pipeline.length*100}%`;
  $('digsCount').textContent=`${d.digs.reduce((a,b)=>a+b.count,0)} scheduled`;
  $('digScheduleBody').innerHTML=d.digs.map(r=>`<tr><td>${r.week}</td><td>${r.count}</td><td>${r.lots}</td></tr>`).join('');
  $('digStats').innerHTML=d.digStats.map(s=>`<div class="mini-stat"><strong>${s.value}</strong><span>${s.label}</span></div>`).join('');
  $('snapshotBody').innerHTML=d.snapshot.map(s=>`<div class="snap ${s.state==='alert'?'alert':''}"><div><div class="label">${s.label}</div><strong>${s.value}</strong></div><p>${s.detail}</p></div>`).join('')+`<div class="data-check"><strong>DATA CHECK</strong>${d.dataCheck}</div>`;
})();
