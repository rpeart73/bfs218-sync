/* BFS218 Commons: live, cohort-based companion for the Online Synchronous section.
   Companion to Blackboard. No grading. No student-to-student interaction here
   (posting, replies, and the live discussion hand off to Blackboard). Non-extractive:
   no attendance, no camera pressure, no talk-time, no scores, no ranking.
   Deterministic time (never Date.now). Vanilla JS, hash router, localStorage.
   No em or en dashes anywhere. */
(function(){
"use strict";
var C = window.COMMONS;
var SS = C.sessions;
var STORE = 'bfs218-commons';

/* ---------- state ---------- */
var state = {
  demoState: C.course.demoState || 'upcoming',
  route: 'commons',
  selectedWeek: C.course.currentWeek || 5,
  movement: 'prepare',
  prepareDone: {}, notesValues: {}, notesSelfCheck: {},
  pollAnswers: {}, agendaSeg: {}, deckSlide: {},
  captionsOn: true, transcriptOpen: false,
  appearInRoom: false,
  reflectText: {}, lookBackText: {}, lookBackRevealed: {},
  kitQuery: '', deletedData: {},
  showOnboarding: true
};
try{ var saved = JSON.parse(localStorage.getItem(STORE)||'null'); if(saved) Object.assign(state, saved); }catch(e){}
function save(){ try{ localStorage.setItem(STORE, JSON.stringify(state)); }catch(e){} }
// preload: sessions 1 to 4 done
if(!state._preloaded){
  for(var i=1;i<=4;i++){ state.prepareDone[i] = {overview:1,guiding:1,purpose:1,concepts:1,readings:1}; }
  state._preloaded = 1; save();
}

/* ---------- helpers ---------- */
function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
function el(html){ var d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstChild; }
function $(id){ return document.getElementById(id); }
function announce(msg){ var r=$('liveregion'); if(r){ r.textContent=''; setTimeout(function(){ r.textContent=msg; },30); } }
function toast(msg){
  var o=$('overlay'); var t=el('<div class="toast" role="status">'+esc(msg)+'</div>'); o.appendChild(t);
  setTimeout(function(){ if(t.parentNode) t.parentNode.removeChild(t); }, 2600);
}
function session(n){ return SS.filter(function(s){return s.number===n;})[0] || SS[0]; }
function phase(id){ return C.phases.filter(function(p){return p.id===id;})[0] || C.phases[0]; }
function linkify(text){
  return esc(text).replace(/(https?:\/\/[^\s<)]+)|(\b10\.\d{4,9}\/[^\s<)]+)/g, function(m){
    var href = m.indexOf('http')===0 ? m : ('https://doi.org/'+m);
    return '<a href="'+href+'" target="_blank" rel="noopener">'+m+'</a>';
  });
}

/* ---------- deterministic countdown ---------- */
function countdown(){
  var a = new Date(C.course.referenceNow.replace(' ','T'));
  var b = new Date(C.course.nextSessionStart.replace(' ','T'));
  var ms = Math.max(0, b - a);
  var d = Math.floor(ms/86400000); ms -= d*86400000;
  var h = Math.floor(ms/3600000); ms -= h*3600000;
  var m = Math.floor(ms/60000);
  return { d:d, h:h, m:m, text:(d+'d '+h+'h '+m+'m') };
}

/* ---------- routes / nav ---------- */
var ROUTES = [
  { id:'commons',    label:'The Commons',  sub:'Home' },
  { id:'session',    label:'This Session', sub:'Prepare, gather, carry' },
  { id:'cohort',     label:'Cohort',       sub:'Who is here' },
  { id:'discussion', label:'Discussion',   sub:'Shared record' },
  { id:'toolkit',    label:'Toolkit',      sub:'Glossary, your data, help' }
];
function renderNav(){
  var html = '<div class="navsec">Live cohort</div>';
  ROUTES.forEach(function(r){
    var cur = state.route===r.id ? ' aria-current="page"' : '';
    html += '<a href="#/'+r.id+'"'+cur+'>'+esc(r.label)+'<span class="ndot"></span></a>';
  });
  $('nav').innerHTML = html;
}

/* ---------- context bar ---------- */
function liveBits(){
  var ds = state.demoState;
  if(ds==='doors') return { cls:'doors', label:'Doors open', kick:'Class begins', val:'Join when ready' };
  if(ds==='live')  return { cls:'live',  label:'Live', kick:'Segment 3 of 7', val:'In session now' };
  if(ds==='recap') return { cls:'recap', label:'Recap ready', kick:'Last session', val:'Recap is ready' };
  var c=countdown();
  return { cls:'upcoming', label:'Upcoming', kick:'Next live class', val:c.text };
}
function renderCtx(){
  var s = session(state.selectedWeek); var p = phase(s.phaseId); var lb = liveBits();
  var join = (state.demoState==='doors'||state.demoState==='live')
    ? '<a class="btn btn-primary btn-sm" href="#/session" onclick="COMMONSAPP.gotoGather()">Join live</a>' : '';
  var cdAria = state.demoState==='upcoming' ? ' aria-label="Next live class in '+esc(lb.val)+'"' : '';
  $('ctxbar').innerHTML =
    '<span class="ctx-phase"><span class="dot" style="background:'+p.accent+'"></span>'+esc(p.name)+'</span>'+
    '<span class="ctx-wk">WK '+(s.number<10?'0':'')+s.number+'</span>'+
    '<span class="ctx-kick"'+cdAria+'>'+
      '<span class="ctx-status">'+esc(lb.kick)+'<b>'+esc(lb.val)+'</b></span>'+
      '<span class="livepill '+lb.cls+'">'+dotIcon(lb.cls)+esc(lb.label)+'</span>'+
      join+
    '</span>';
}
function dotIcon(cls){
  if(cls==='live'||cls==='doors') return '<span aria-hidden="true">&#9673;</span> ';
  if(cls==='recap') return '<span aria-hidden="true">&#10003;</span> ';
  return '<span aria-hidden="true">&#9201;</span> ';
}

/* ---------- demo control ---------- */
function renderDemo(){
  var opts=[['upcoming','Upcoming'],['doors','Doors open'],['live','Live now'],['recap','Recap ready']];
  var html='<div class="demo" role="group" aria-label="Preview state (reviewer tool)"><div class="lab">Preview state (reviewer tool)</div><div class="row">';
  opts.forEach(function(o){
    html+='<button aria-pressed="'+(state.demoState===o[0])+'" onclick="COMMONSAPP.setDemo(\''+o[0]+'\')">'+esc(o[1])+'</button>';
  });
  html+='</div></div>';
  $('demo').innerHTML=html;
}

/* ---------- COMMONS (home) ---------- */
function viewCommons(){
  var s = session(state.selectedWeek); var p = phase(s.phaseId);
  var ds = state.demoState; var c = countdown();
  var hero='';
  if(ds==='live'){
    var appearing = C.members.filter(function(m){return m.appearing;});
    hero='<div class="hero live"><div class="eyebrow" style="color:#c6cad3">Live now</div>'+
      '<h1>We are in session together.</h1>'+
      '<p class="muted">'+esc(s.title)+'. The live class runs in Blackboard Collaborate.</p>'+
      '<div class="rail" style="margin:8px 0 14px">'+avatars(appearing)+'<span class="muted" style="margin-left:6px">'+appearing.length+' here now, opted in</span></div>'+
      '<a class="btn btn-primary" href="#/session" onclick="COMMONSAPP.gotoGather()">Join the live class in Blackboard</a></div>';
  } else if(ds==='doors'){
    hero='<div class="hero doors"><div class="eyebrow">Doors open</div>'+
      '<h1>The room is open. Come in.</h1>'+
      '<p>We start shortly. Step into the live class when you are ready.</p>'+
      '<a class="btn btn-primary" href="#/session" onclick="COMMONSAPP.gotoGather()">Join the live class in Blackboard</a> '+
      '<a class="btn" href="#/session">See today\'s plan</a></div>';
  } else if(ds==='recap'){
    hero='<div class="hero recap"><div class="eyebrow">Recap ready</div>'+
      '<h1>Here is what we made together.</h1>'+
      '<p class="muted">'+esc(s.title)+'. The shared record is ready to read.</p>'+
      '<a class="btn btn-dark" href="#/discussion">Read the shared record</a></div>';
  } else {
    hero='<div class="hero"><div class="eyebrow">Next live class</div>'+
      '<h1>We gather '+esc(C.course.meetingDay)+' at '+esc(C.course.meetingTime)+'.</h1>'+
      '<p class="muted">'+esc(s.title)+'. '+esc(p.name)+' phase.</p>'+
      '<div class="countcells" role="group" aria-label="Time until the next live class, '+esc(c.text)+'">'+
        cell(c.d,'days')+cell(c.h,'hours')+cell(c.m,'min')+'</div>'+
      '<a class="btn btn-primary" href="#/session">Prepare for this session</a></div>';
  }
  // presence rail card
  var opted = C.members.filter(function(m){return m.appearing;});
  var presence='<div class="card"><div class="eyebrow">Who is around</div>'+
    '<div class="rail">'+avatars(opted)+'</div>'+
    '<p class="muted" style="margin:10px 0 0">You see only people who chose to appear. Presence is opt in, defaults to private, and is never tracked. '+
    '<a href="#/cohort">Change yours in Cohort</a>.</p></div>';
  // phase journey
  var journey='<div class="card"><div class="eyebrow">The journey, together</div>'+journeyHTML()+
    '<p class="muted" style="margin:10px 0 0">A shared path the whole cohort walks. It is never a score on you.</p></div>';
  // latest recap
  var rs = session(Math.max(1, state.selectedWeek-1));
  var moments = rs.deep.recap.moments.map(function(m){return '<li>'+esc(m)+'</li>';}).join('');
  var recap='<div class="card"><div class="eyebrow">Latest recap</div><h3>'+esc(rs.title)+'</h3>'+
    '<ul style="margin:.2em 0 0 1.1em">'+moments+'</ul>'+
    '<div class="hairtop"><a href="#/discussion">Open the shared record</a></div></div>';
  // week between us (read only)
  var thoughts = rs.deep.recap.collective.map(function(t){return '<li style="margin-bottom:6px">'+esc(t)+'</li>';}).join('');
  var between='<div class="card"><div class="eyebrow">The week between us</div>'+
    '<p class="muted">Recent thoughts from the cohort, in their own words. This view is read only.</p>'+
    '<ul style="margin:.2em 0 0 1.1em;list-style:none;padding-left:0">'+thoughts+'</ul>'+
    '<div class="hairtop"><a class="btn btn-sm" href="#/discussion">Add your thought in Blackboard</a> '+
    '<span class="muted" style="font-size:.85rem">Posting happens in Blackboard, not here.</span></div></div>';
  var cont='<p class="muted" style="margin-top:8px">You belong in this room. If you missed last week, that is alright. Come as you are and we will catch you up.</p>';
  return hero+presence+journey+'<div class="grid grid-2">'+recap+between+'</div>'+cont;
}
function cell(n,lab){ return '<div class="cell"><b>'+n+'</b><span>'+lab+'</span></div>'; }
function avatars(list){
  return list.map(function(m){ return '<span class="avatar'+(m.instructor?' inst':'')+'" title="'+esc(m.name)+'">'+esc(m.initials)+'</span>'; }).join('');
}
function journeyHTML(){
  return '<div class="journey">'+C.phases.map(function(p){
    var nodes = p.weeks.map(function(wn){
      var done = wn < state.selectedWeek, cur = wn===state.selectedWeek;
      var style = done ? ('background:'+p.accent+';border-color:'+p.accent) : '';
      var cls = 'node'+(done?' done':'')+(cur?' current':'');
      return '<a class="'+cls+'" style="'+style+'" href="#/session" onclick="COMMONSAPP.pick('+wn+')" aria-label="Session '+wn+(cur?', current':done?', done':', upcoming')+'">'+wn+'</a>';
    }).join('');
    return '<div class="band" style="background:'+p.fill+';border-color:'+p.fill+'">'+
      '<b style="color:'+p.label+'">'+esc(p.name)+'</b> <span class="muted" style="font-size:.85rem">Sessions '+p.weeks[0]+' to '+p.weeks[p.weeks.length-1]+'</span>'+
      '<div class="nodes">'+nodes+'</div></div>';
  }).join('')+'</div>';
}

/* ---------- THIS SESSION ---------- */
function viewSession(){
  var s = session(state.selectedWeek); var p = phase(s.phaseId);
  var picker = '<label for="wkpick" class="muted" style="font-weight:600;margin:0 8px 0 0;display:inline">Session</label>'+
    '<select id="wkpick" style="width:auto;display:inline-block" onchange="COMMONSAPP.pick(parseInt(this.value,10))">'+
    SS.map(function(x){return '<option value="'+x.number+'"'+(x.number===s.number?' selected':'')+'>'+x.number+'. '+esc(x.title)+'</option>';}).join('')+'</select>';
  var head='<div class="card"><div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center">'+
    '<div><span class="tag" style="background:'+p.fill+';border-color:'+p.fill+';color:'+p.label+'">'+esc(p.name)+'</span> '+
    '<span class="mono muted" style="font-size:.78rem">SESSION '+s.number+'</span></div>'+picker+'</div>'+
    '<h1 style="margin-top:10px">'+esc(s.title)+'</h1>'+
    '<div class="card tight" style="margin:6px 0 0;background:'+p.fill+';border-color:'+p.fill+'">'+
      '<b>Key concept: '+esc(s.concept)+'</b><br><span class="muted">'+esc(s.conceptDef)+'</span></div>'+
    (s.headsUp?'<div class="notebar"><b>A heads up.</b> '+esc(s.headsUp)+'</div>':'')+'</div>';
  var tabs='<div class="tabs" role="tablist">'+
    ['prepare','gather','carry'].map(function(t){
      var lab = t==='prepare'?'Prepare':t==='gather'?'Gather (live room)':'Carry';
      return '<button role="tab" aria-selected="'+(state.movement===t)+'" onclick="COMMONSAPP.move(\''+t+'\')">'+lab+'</button>';
    }).join('')+'</div>';
  var body = state.movement==='prepare'?prepareHTML(s):state.movement==='gather'?gatherHTML(s):carryHTML(s);
  return head+tabs+'<div role="tabpanel">'+body+'</div>';
}
function prepCard(s,key,title,est,inner){
  var done = (state.prepareDone[s.number]||{})[key];
  return '<details class="prep"'+(key==='overview'?' open':'')+'><summary>'+
    '<span>'+esc(title)+'</span><span class="est mono">'+esc(est)+'</span>'+
    '<span class="donechip'+(done?' on':'')+'">'+(done?'Done':'To do')+'</span></summary>'+
    '<div class="body">'+inner+
    '<div class="hairtop"><button class="btn btn-sm" onclick="COMMONSAPP.markPrep('+s.number+',\''+key+'\')">'+(done?'Mark as to do':'Mark done')+'</button></div>'+
    '</div></details>';
}
function prepareHTML(s){
  var pd = state.prepareDone[s.number]||{};
  var allDone = ['overview','guiding','purpose','concepts','readings'].every(function(k){return pd[k];});
  var ready = allDone ? '<div class="card tight" style="background:#e9efe7;border-color:#cfe0c9"><b style="color:#2f5b2a">You are ready for this session.</b> Everything below is marked done. Bring one example with you.</div>' : '';
  var ov = '<p>'+esc(s.overview)+'</p>';
  var gq = '<ul style="margin:0 0 0 1.1em">'+(s.guiding||[]).map(function(g){return '<li style="margin-bottom:6px">'+esc(g)+'</li>';}).join('')+'</ul>';
  var pu = '<p>'+esc(s.purpose&&s.purpose.statement||'')+'</p>'+
    '<p style="margin:0 0 6px"><b>By the end of this session you will be able to:</b></p>'+
    '<ul style="margin:0 0 0 1.1em">'+((s.purpose&&s.purpose.outcomes)||[]).map(function(o){return '<li style="margin-bottom:6px">'+esc(o)+'</li>';}).join('')+'</ul>';
  var co = (s.concepts||[]).map(function(c){
    return '<h4 style="margin:.4em 0 .2em">'+esc(c.term)+'</h4>'+(c.paras||[]).map(function(x){return '<p>'+esc(x)+'</p>';}).join('');
  }).join('');
  var rd = readingsHTML(s);
  return ready+
    prepCard(s,'overview','Week overview','3 min',ov)+
    prepCard(s,'guiding','Guiding questions','3 min',gq)+
    prepCard(s,'purpose','Purpose and outcomes','2 min',pu)+
    prepCard(s,'concepts','Key concepts','8 min',co)+
    prepCard(s,'readings','Readings','25 min',rd);
}
function readingsHTML(s){
  return (s.readings||[]).map(function(r){
    if(r.type==='head') return '<h4 style="margin:.5em 0 .2em">'+esc(r.text)+'</h4>';
    if(r.type==='cite'){
      var link = r.url ? '<div style="margin-top:6px"><a class="btn btn-sm" href="'+esc(r.url)+'" target="_blank" rel="noopener">Access reading</a></div>'
        : '<div class="muted" style="margin-top:6px;font-size:.9rem">Available through the Seneca library.</div>';
      return '<div class="card tight" style="margin:8px 0"><span>'+linkify(r.text)+'</span>'+link+'</div>';
    }
    return '<p class="muted">'+linkify(r.text)+'</p>';
  }).join('');
}
function gatherHTML(s){
  var seg = state.agendaSeg[s.number]; if(seg==null) seg=2; var ag=s.deep.agenda;
  if(seg>=ag.length) seg=ag.length-1;
  var bar = ag.map(function(g,i){
    var cls = i<seg?'seg done':i===seg?'seg current':'seg';
    var w = (g.m/ag.reduce(function(a,b){return a+b.m;},0)*100);
    var mark = i<seg?'&#10003; ':i===seg?'&#9673; ':'';
    return '<div class="'+cls+'" style="flex:'+g.m+' 1 0" title="'+esc(g.t)+', '+g.m+' min">'+mark+esc(short(g.t))+'</div>';
  }).join('');
  var cur = ag[seg];
  var room='<div class="room"><div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">'+
    '<div><div class="eyebrow" style="color:#c6cad3">Live session room</div><h2 style="margin:0">'+esc(s.title)+'</h2></div>'+
    '<span class="livepill '+(state.demoState==='live'?'live':'upcoming')+'">'+dotIcon(state.demoState==='live'?'live':'upcoming')+(state.demoState==='live'?'Live':'Room')+'</span></div>'+
    '<p class="muted" style="margin:8px 0 0">The live class itself runs in Blackboard Collaborate. This room is your guide to it.</p>'+
    '<a class="btn btn-primary btn-sm" style="margin-top:8px" href="'+(C.course.collaborateUrl||'#')+'"'+(C.course.collaborateUrl?' target="_blank" rel="noopener"':' onclick="COMMONSAPP.noUrl(event)"')+'>Join the live class in Blackboard</a>'+
    '<div class="agenda" role="img" aria-label="Session agenda timeline, on segment '+(seg+1)+' of '+ag.length+'">'+bar+'</div>'+
    '<div class="segmeta"><div><b>We are here: segment '+(seg+1)+' of '+ag.length+'.</b> '+esc(cur.t)+' <span class="muted">('+cur.m+' min)</span><br>'+
      '<span class="muted">'+esc(cur.note)+'</span></div>'+
      '<div style="display:flex;gap:6px"><button class="btn btn-sm btn-dark" onclick="COMMONSAPP.seg('+s.number+',-1)">Previous</button>'+
      '<button class="btn btn-sm btn-dark" onclick="COMMONSAPP.seg('+s.number+',1)">Next</button></div></div>'+
    deckHTML(s)+'</div>';
  // guided notes
  var nv = state.notesValues[s.number]||{};
  var notes='<div class="card"><div class="eyebrow">Guided notes</div>'+
    '<p class="muted">These are yours. They are private, never scored, and only you ever see them.</p>'+
    s.deep.notes.map(function(q,i){
      return '<label for="note'+s.number+'_'+i+'">'+esc(q)+'</label>'+
      '<textarea id="note'+s.number+'_'+i+'" placeholder="Type here" oninput="COMMONSAPP.note('+s.number+','+i+',this.value)">'+esc(nv[i]||'')+'</textarea>';
    }).join('')+
    '<div style="margin-top:12px"><b>How is this idea sitting with you?</b> <span class="muted">(private)</span></div>'+selfCheck(s)+
    '<div class="notebar" style="margin-bottom:0"><b>Stuck?</b> That is a normal part of learning. Reread the key concept card up top, or bring the question to the live discussion in Blackboard.</div></div>';
  // poll
  var poll = pollHTML(s);
  // raise a point
  var raise='<div class="card"><div class="eyebrow">Raise a point</div>'+
    '<p>Want to say something to the class? The conversation happens in Blackboard Collaborate, where the cohort can hear and reply.</p>'+
    '<a class="btn btn-sm" href="'+(C.course.collaborateUrl||'#')+'"'+(C.course.collaborateUrl?' target="_blank" rel="noopener"':' onclick="COMMONSAPP.noUrl(event)"')+'>Open the live discussion in Blackboard</a></div>';
  return room+notes+poll+raise;
}
function short(t){ return t.length>22 ? t.slice(0,20)+'…' : t; }
function selfCheck(s){
  var opts=['Still fuzzy','Getting it','I could explain it'];
  var cur=(state.notesSelfCheck||{})[s.number];
  return '<div class="chips">'+opts.map(function(o){
    return '<button class="chip" aria-pressed="'+(cur===o)+'" onclick="COMMONSAPP.selfCheck('+s.number+',\''+o+'\')">'+esc(o)+'</button>';
  }).join('')+'</div>';
}
function deckHTML(s){
  var sl=s.slides;
  if(!sl||!sl.available){ return '<div class="deck"><div class="caption">The official deck for this session is in Blackboard.</div></div>'; }
  var n = state.deckSlide[s.number]||0; if(n>=sl.count) n=sl.count-1;
  var pts = (sl.points&&sl.points[n])||{points:[]};
  var img = sl.dir+'/slide-'+(n+1)+'.png';
  var caps = state.captionsOn ? '<div class="caption"><b>'+esc(pts.heading||('Slide '+(n+1)))+'</b><br>'+(pts.points||[]).map(esc).join(' &middot; ')+'</div>' : '';
  var tr = state.transcriptOpen ? '<div class="caption"><b>What this slide is saying</b><br>'+esc((sl.insights&&sl.insights[n])||'')+'</div>' : '';
  return '<div class="deck"><div class="poster"><img src="'+esc(img)+'" alt="Slide '+(n+1)+' of '+sl.count+', '+esc(pts.heading||'')+'"></div>'+
    '<div class="deckbar"><div style="display:flex;gap:6px"><button class="btn btn-sm btn-dark" onclick="COMMONSAPP.slide('+s.number+',-1)">Prev slide</button>'+
    '<button class="btn btn-sm btn-dark" onclick="COMMONSAPP.slide('+s.number+',1)">Next slide</button></div>'+
    '<span class="mono" style="color:#c6cad3;font-size:.78rem">Slide '+(n+1)+' of '+sl.count+'</span>'+
    '<div style="display:flex;gap:6px"><button class="btn btn-sm btn-dark" aria-pressed="'+state.captionsOn+'" onclick="COMMONSAPP.captions()">Captions</button>'+
    '<button class="btn btn-sm btn-dark" aria-pressed="'+state.transcriptOpen+'" onclick="COMMONSAPP.transcript()">Transcript</button></div></div>'+
    caps+tr+
    '<div class="caption" style="background:#0e0f13"><a style="color:#ff9b91" href="#/session">The official deck is in Blackboard.</a></div></div>';
}
function pollHTML(s){
  var poll=s.deep.poll; var ans=state.pollAnswers[s.number];
  if(ans==null){
    return '<div class="card"><div class="eyebrow">Live poll</div><p><b>'+esc(poll.q)+'</b></p>'+
      '<div class="chips" style="flex-direction:column;align-items:stretch">'+
      poll.options.map(function(o,i){return '<button class="chip" style="text-align:left" onclick="COMMONSAPP.poll('+s.number+','+i+')">'+esc(o)+'</button>';}).join('')+'</div>'+
      '<p class="muted" style="margin:.6em 0 0">'+esc(poll.framing)+'</p></div>';
  }
  var dist=[34,41,18,7];
  var bars=poll.options.map(function(o,i){
    var pct=dist[i%dist.length];
    var mine = i===ans ? ' <b>(your answer)</b>' : '';
    return '<div class="bar"><div class="track"><div class="fill" style="width:'+Math.max(12,pct)+'%">'+esc(o)+mine+'</div></div><span class="mono muted">'+pct+'%</span></div>';
  }).join('');
  return '<div class="card"><div class="eyebrow">Live poll</div><p><b>'+esc(poll.q)+'</b></p>'+
    '<div class="bars">'+bars+'</div>'+
    '<p class="muted" style="margin:.4em 0 0">'+esc(poll.framing)+' This is a sample of the room.</p></div>';
}
function carryHTML(s){
  var rt=state.reflectText[s.number]||'';
  var reflect='<div class="card"><div class="eyebrow">Reflection corner</div>'+
    '<label for="ref'+s.number+'">'+esc(s.deep.reflect)+'</label>'+
    '<textarea id="ref'+s.number+'" placeholder="Take your time" oninput="COMMONSAPP.reflect('+s.number+',this.value)">'+esc(rt)+'</textarea>'+
    '<p class="muted" style="margin:.4em 0 0">Yours alone. Saved on your device, sent nowhere.</p></div>';
  var look='';
  if(s.deep.lookBack){
    var lb=s.deep.lookBack; var lv=state.lookBackText[s.number]||''; var rev=state.lookBackRevealed[s.number];
    look='<div class="card"><div class="eyebrow">A look back</div><label for="lb'+s.number+'">'+esc(lb.prompt)+'</label>'+
      '<textarea id="lb'+s.number+'" placeholder="From memory first" oninput="COMMONSAPP.lookText('+s.number+',this.value)">'+esc(lv)+'</textarea>'+
      (rev
        ? '<div class="notebar" style="margin-bottom:0"><b>'+esc(lb.term)+'.</b> '+esc(lb.reveal)+'</div>'
        : '<div class="hairtop"><button class="btn btn-sm" onclick="COMMONSAPP.reveal('+s.number+')">Show me how it was put</button> <span class="muted" style="font-size:.85rem">This is never scored.</span></div>')+'</div>';
  }
  var submit='<div class="card"><div class="eyebrow">Submit your work</div>'+
    '<p>Anything you hand in for a grade is submitted in Blackboard. No grades are ever shown here.</p>'+
    '<a class="btn btn-sm" href="'+(C.course.blackboardUrl||'#')+'"'+(C.course.blackboardUrl?' target="_blank" rel="noopener"':' onclick="COMMONSAPP.noUrl(event)"')+'>Open Blackboard</a></div>';
  var next=s.deep.carry;
  var carry='<div class="card tight" style="background:var(--raised)"><div class="eyebrow">Carry it forward</div>'+
    '<b>Next session: '+esc(next.title)+'</b><br><span class="muted">'+esc(next.line)+'</span></div>';
  return reflect+look+submit+carry;
}

/* ---------- COHORT ---------- */
function viewCohort(){
  var roster=C.members.map(function(m){
    return '<div class="card tight" style="display:flex;align-items:center;gap:12px">'+
      '<span class="avatar'+(m.instructor?' inst':'')+'">'+esc(m.initials)+'</span>'+
      '<div><b>'+esc(m.name)+'</b>'+(m.role?'<br><span class="muted" style="font-size:.85rem">'+esc(m.role)+'</span>':'')+'</div>'+
      (m.instructor?'<span class="tag" style="margin-left:auto">Professor</span>':(m.appearing?'<span class="tag" style="margin-left:auto;background:#e9efe7;border-color:#cfe0c9;color:#2f5b2a">In the room</span>':''))+'</div>';
  }).join('');
  var toggle='<div class="card"><div class="eyebrow">Appear in the room</div>'+
    '<p>Choose whether others can see you in the cohort presence rail. This is your setting alone. It defaults to private.</p>'+
    '<button class="chip" aria-pressed="'+state.appearInRoom+'" onclick="COMMONSAPP.appear()">'+(state.appearInRoom?'You appear in the room':'You are private')+'</button>'+
    '<p class="muted" style="margin:.6em 0 0">No attendance is taken. No one is counted, ranked, or scored.</p></div>';
  var teams='<div class="card"><div class="eyebrow">Breakout teams</div>'+
    C.teams.map(function(t){return '<div class="card tight"><b>'+esc(t.name)+'</b><br><span class="muted">'+t.members.map(esc).join(', ')+'</span></div>';}).join('')+'</div>';
  var note='<div class="notebar"><b>About this list.</b> The cohort shown here is a sample and the names are fictional, for illustration. Your real cohort appears once the term begins.</div>';
  return '<h1>Cohort</h1>'+note+toggle+'<div class="card"><div class="eyebrow">Who is in the room</div>'+roster+'</div>'+teams;
}

/* ---------- DISCUSSION ---------- */
function viewDiscussion(){
  var note='<div class="notebar"><b>This is a read only record.</b> Posting, replying, and the live conversation all happen in Blackboard. What you see here is the cohort\'s shared memory, in their own words. Names are removed.</div>';
  var join='<a class="btn btn-primary" href="'+(C.course.discussionUrl||'#')+'"'+(C.course.discussionUrl?' target="_blank" rel="noopener"':' onclick="COMMONSAPP.noUrl(event)"')+'>Join the discussion in Blackboard</a>';
  var secs=C.discussion.map(function(d){
    var posts=d.posts.map(function(p){
      var tags=p.tags.map(function(t){return '<span class="tag" style="text-transform:none;font-family:var(--sans)">'+esc(t)+'</span>';}).join(' ');
      var replies=(p.replies||[]).map(function(r){return '<div class="card tight" style="margin:8px 0 0 22px"><span class="muted" style="font-size:.8rem">'+esc(r.label)+'</span><br>'+esc(r.text)+'</div>';}).join('');
      return '<div class="card tight"><div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><span class="muted" style="font-size:.8rem">'+esc(p.label)+'</span><span>'+tags+'</span></div><p style="margin:.4em 0 0">'+esc(p.text)+'</p>'+replies+'</div>';
    }).join('');
    var coll=d.collective.map(function(c){return '<li style="margin-bottom:6px">'+esc(c)+'</li>';}).join('');
    return '<div class="card"><div class="eyebrow">Session '+d.session+'</div><h3>'+esc(d.title)+'</h3>'+
      '<p class="muted" style="margin:0 0 6px"><b>What the cohort said, together:</b></p><ul style="margin:0 0 10px 1.1em;list-style:none;padding-left:0">'+coll+'</ul>'+posts+'</div>';
  }).join('');
  return '<h1>Discussion</h1>'+note+'<div style="margin-bottom:16px">'+join+'</div>'+secs;
}

/* ---------- TOOLKIT ---------- */
function viewToolkit(){
  return '<h1>Toolkit</h1>'+glassBox()+refuses()+glossaryBox()+helpBox();
}
function storedItems(){
  var items=[]; var del=state.deletedData;
  SS.forEach(function(s){
    var nv=state.notesValues[s.number]||{};
    Object.keys(nv).forEach(function(i){ if(nv[i]&&!del['note'+s.number+'_'+i]) items.push({id:'note'+s.number+'_'+i,kind:'Guided note',sess:s.number,text:nv[i]}); });
    if(state.reflectText[s.number]&&!del['ref'+s.number]) items.push({id:'ref'+s.number,kind:'Reflection',sess:s.number,text:state.reflectText[s.number]});
    if(state.lookBackText[s.number]&&!del['lb'+s.number]) items.push({id:'lb'+s.number,kind:'Look back',sess:s.number,text:state.lookBackText[s.number]});
    if(state.pollAnswers[s.number]!=null&&!del['poll'+s.number]) items.push({id:'poll'+s.number,kind:'Poll answer',sess:s.number,text:s.deep.poll.options[state.pollAnswers[s.number]]});
  });
  return items;
}
function glassBox(){
  var items=storedItems();
  var list = items.length ? items.map(function(it){
    return '<div class="card tight" style="display:flex;gap:10px;align-items:flex-start">'+
      '<div style="flex:1"><span class="mono muted" style="font-size:.72rem">'+esc(it.kind)+', session '+it.sess+'</span><br>'+esc(it.text)+'</div>'+
      '<div style="display:flex;gap:6px;flex-shrink:0"><button class="btn btn-sm" onclick="COMMONSAPP.exportOne(\''+it.id+'\')">Export</button>'+
      '<button class="btn btn-sm" onclick="COMMONSAPP.del(\''+it.id+'\')">Delete</button></div></div>';
  }).join('') : '<p class="muted">Nothing stored yet. Anything you type in this tool will show up here, and you can export or delete each item.</p>';
  return '<div class="card"><div class="eyebrow">Your data</div>'+
    '<p>This is everything this tool has stored, and it is only what you typed: your guided notes, poll answers, reflections, and look backs. It lives on your device and is sent nowhere.</p>'+
    list+
    (items.length?'<div class="hairtop"><button class="btn btn-sm btn-dark" onclick="COMMONSAPP.exportAll()">Export all</button></div>':'')+'</div>';
}
function refuses(){
  var chips=['No attendance','No scores or grades','No ranking','No attention tracking','No camera pressure','Your data stays yours'];
  return '<div class="card"><div class="eyebrow">How this tool was built, and what it refuses to do</div>'+
    '<div class="refuse">'+chips.map(function(c){return '<span class="tag">&#10003; '+esc(c)+'</span>';}).join('')+'</div>'+
    '<p class="muted" style="margin:.7em 0 0">This room practises the data dignity the course teaches. If anything here ever feels like surveillance, tell your professor. That feedback is welcome.</p></div>';
}
function glossaryBox(){
  var q=(state.kitQuery||'').toLowerCase();
  var list=C.glossary.filter(function(g){ return !q || g.term.toLowerCase().indexOf(q)>=0 || (g.def||'').toLowerCase().indexOf(q)>=0; });
  var rows=list.map(function(g){
    var sess = (g.sessions&&g.sessions.length)?'<span class="mono muted" style="font-size:.72rem">Sessions '+g.sessions.join(', ')+'</span>':'';
    return '<div class="card tight"><b>'+esc(g.term)+'</b> '+sess+'<br>'+esc(g.def)+'</div>';
  }).join('');
  return '<div class="card"><div class="eyebrow">Glossary</div>'+
    '<label for="kitq">Search terms</label><input id="kitq" value="'+esc(state.kitQuery||'')+'" placeholder="Type a term, for example coded exposure" oninput="COMMONSAPP.kit(this.value)">'+
    '<div style="margin-top:10px">'+(rows||'<p class="muted">No terms match that search.</p>')+'</div></div>';
}
function helpBox(){
  return '<div class="card"><div class="eyebrow">How our live class works</div>'+
    '<p><b>When we meet.</b> '+esc(C.course.meetingLine)+'</p>'+
    '<p><b>How to join.</b> The live class runs in Blackboard Collaborate. Use the Join live button on the Commons or in this session\'s room.</p>'+
    '<p><b>No camera needed.</b> You never have to turn your camera on. Come as you are.</p>'+
    '<p><b>Missed a session?</b> That is alright. The recap and the shared record are here, and you can pick up the next prep when you are ready.</p></div>';
}

/* ---------- onboarding ---------- */
function onboarding(){
  if(!state.showOnboarding) return;
  var o=$('overlay');
  var m=el('<div class="backdrop"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="obh">'+
    '<div class="mhead"><span class="livepill doors" style="margin-bottom:8px">'+dotIcon('doors')+'Live cohort</span>'+
    '<h1 id="obh" style="color:#fff;margin:0">Welcome to the cohort.</h1></div>'+
    '<div class="mbody"><p class="lede">This is the live room for BFS218. '+esc(C.course.meetingLine)+'</p>'+
    '<div class="card tight" style="display:flex;align-items:center;gap:10px"><span class="avatar inst">'+esc(C.instructor.initials)+'</span><div><b>'+esc(C.instructor.name)+'</b><br><span class="muted" style="font-size:.85rem">'+esc(C.instructor.role)+'</span></div></div>'+
    '<p class="muted">This tool is a companion to Blackboard. The live video and anything you hand in for a grade live in Blackboard. Here you prepare, follow the live agenda, take private notes, and keep the shared record.</p>'+
    '<button class="btn btn-primary" onclick="COMMONSAPP.enter()">Step into the Commons</button> '+
    '<button class="btn btn-quiet" onclick="COMMONSAPP.enter()">Skip</button></div></div></div>');
  o.appendChild(m);
}

/* ---------- render ---------- */
function render(){
  renderNav(); renderCtx(); renderDemo();
  var v;
  switch(state.route){
    case 'session': v=viewSession(); break;
    case 'cohort': v=viewCohort(); break;
    case 'discussion': v=viewDiscussion(); break;
    case 'toolkit': v=viewToolkit(); break;
    default: v=viewCommons();
  }
  $('main').innerHTML=v;
  document.title='BFS218 Commons: '+ROUTES.filter(function(r){return r.id===state.route;})[0].label;
}

/* ---------- public API (inline handlers) ---------- */
window.COMMONSAPP = {
  setDemo:function(s){ state.demoState=s; save(); render(); },
  pick:function(n){ state.selectedWeek=n; state.route='session'; save(); location.hash='#/session'; render(); window.scrollTo(0,0); },
  move:function(m){ state.movement=m; save(); render(); },
  gotoGather:function(){ state.route='session'; state.movement='gather'; save(); setTimeout(function(){location.hash='#/session';},0); },
  markPrep:function(n,k){ var d=state.prepareDone[n]||{}; d[k]=d[k]?0:1; state.prepareDone[n]=d; save(); render(); },
  seg:function(n,dir){ var ag=session(n).deep.agenda; var s=state.agendaSeg[n]; if(s==null)s=2; s=Math.max(0,Math.min(ag.length-1,s+dir)); state.agendaSeg[n]=s; save(); render(); announce('Now on segment '+(s+1)+' of '+ag.length+', '+ag[s].t); },
  slide:function(n,dir){ var sl=session(n).slides; var s=state.deckSlide[n]||0; s=Math.max(0,Math.min(sl.count-1,s+dir)); state.deckSlide[n]=s; save(); render(); },
  captions:function(){ state.captionsOn=!state.captionsOn; save(); render(); },
  transcript:function(){ state.transcriptOpen=!state.transcriptOpen; save(); render(); },
  note:function(n,i,v){ var d=state.notesValues[n]||{}; d[i]=v; state.notesValues[n]=d; save(); },
  selfCheck:function(n,v){ state.notesSelfCheck[n]=(state.notesSelfCheck[n]===v?null:v); save(); render(); },
  poll:function(n,i){ state.pollAnswers[n]=i; save(); render(); toast('Thanks. Here is where the room sits.'); },
  reflect:function(n,v){ state.reflectText[n]=v; save(); },
  lookText:function(n,v){ state.lookBackText[n]=v; save(); },
  reveal:function(n){ state.lookBackRevealed[n]=1; save(); render(); },
  appear:function(){ state.appearInRoom=!state.appearInRoom; save(); render(); toast(state.appearInRoom?'You now appear in the room.':'You are private again.'); },
  kit:function(v){ state.kitQuery=v; var box=$('kitq'); var pos=box?box.selectionStart:null; save(); render(); var nb=$('kitq'); if(nb){ nb.focus(); if(pos!=null){ try{nb.setSelectionRange(pos,pos);}catch(e){} } } },
  exportOne:function(id){ var it=storedItems().filter(function(x){return x.id===id;})[0]; if(!it)return; download(id+'.txt', it.kind+' (session '+it.sess+')\n\n'+it.text); },
  exportAll:function(){ var t=storedItems().map(function(it){return '['+it.kind+', session '+it.sess+']\n'+it.text;}).join('\n\n'); download('bfs218-commons-my-data.txt', t||'No data stored.'); },
  del:function(id){ state.deletedData[id]=1;
    // also clear the source so it does not regenerate
    var mNote=id.match(/^note(\d+)_(\d+)$/); if(mNote){ var d=state.notesValues[mNote[1]]||{}; d[mNote[2]]=''; state.notesValues[mNote[1]]=d; }
    var mRef=id.match(/^ref(\d+)$/); if(mRef){ delete state.reflectText[mRef[1]]; }
    var mLb=id.match(/^lb(\d+)$/); if(mLb){ delete state.lookBackText[mLb[1]]; }
    var mPoll=id.match(/^poll(\d+)$/); if(mPoll){ delete state.pollAnswers[mPoll[1]]; }
    save(); render(); toast('Deleted. It is gone from this device.'); },
  enter:function(){ state.showOnboarding=false; save(); var b=document.querySelector('.backdrop'); if(b)b.parentNode.removeChild(b); },
  noUrl:function(e){ if(e)e.preventDefault(); toast('This link opens in Blackboard once your professor adds the course URL.'); }
};

function download(name, text){
  try{ var blob=new Blob([text],{type:'text/plain'}); var a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; document.body.appendChild(a); a.click(); setTimeout(function(){URL.revokeObjectURL(a.href); a.remove();},100); }
  catch(e){ toast('Export is not available in this browser.'); }
}

/* ---------- router ---------- */
function onHash(){
  var h=(location.hash||'#/commons').replace(/^#\//,'');
  var id=h.split('/')[0];
  if(!ROUTES.some(function(r){return r.id===id;})) id='commons';
  state.route=id; render(); window.scrollTo(0,0);
}
window.addEventListener('hashchange', onHash);
onHash();
onboarding();
})();
