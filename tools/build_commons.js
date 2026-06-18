// Build the BFS218 Commons (Online Synchronous) data model from the fact-checked
// async course-data (window.BFS218). Output: data/commons-data.js -> window.COMMONS.
// Content is the same BFS218 course; the Commons adds the live-cohort layer
// (sessions, agendas, polls, recaps) generated deterministically from the real concepts.
// No em or en dashes. Grade 6 to 8. Bold-only emphasis is applied in the UI, not here.
const path = require('path');
global.window = {};
require(path.resolve(__dirname, '../../../Asynchronous/_app/data/course-data.js'));
const B = window.window ? window.window.BFS218 : window.BFS218;
const src = (global.window.BFS218) || B;
const data = global.window.BFS218;

const fs = require('fs');

function firstSentence(s){
  if(!s) return '';
  const m = String(s).split(/(?<=[.!?])\s/);
  return (m[0] || String(s)).trim();
}
function glossaryDef(term){
  const g = (data.glossary || []).find(x => x.term && x.term.toLowerCase() === String(term).toLowerCase());
  if(g) return firstSentence(g.def);
  return '';
}
// Phase accents: brighter jewel tones (functional wayfinding, distinct from the async earth tones).
const PHASES = [
  { id:'listening',  name:'Listening',                weeks:[1,2,3],     accent:'#2C7A7B', fill:'#E2F0F0', label:'#1f5a5b' },
  { id:'inquiring',  name:'Inquiring and Gathering',  weeks:[4,5,6,7],   accent:'#4C5FD5', fill:'#E7E9FB', label:'#3a47a8' },
  { id:'rooting',    name:'Rooting',                  weeks:[8,9,10],    accent:'#B83280', fill:'#F6E4F0', label:'#8f2566' },
  { id:'weaving',    name:'Weaving',                  weeks:[11,12,13,14],accent:'#B7791F', fill:'#F6ECD9', label:'#8a5a13' },
];

function agendaFor(w){
  const c = (w.concepts || []).map(x => x.term);
  const segs = [];
  segs.push({ t:'Arrive and land', m:8, note:'Settle in, say hello in the chat, and read the one line on the board.' });
  segs.push({ t:'Opening frame: ' + w.concept, m:10, note:'Why this session matters, and the one thing we are tracking together today.' });
  if(c[0]) segs.push({ t:'Mini-lecture: ' + c[0], m:18, note:'The core idea, in plain language, with real examples.' });
  else     segs.push({ t:'Mini-lecture: ' + w.concept, m:18, note:'The core idea, in plain language, with real examples.' });
  segs.push({ t:'Small group in Blackboard breakout', m:14, note:'Work the idea together in your breakout room. Bring one example back to the class.' });
  if(c[1]) segs.push({ t:'Mini-lecture: ' + c[1], m:18, note:'Building on the first idea, with a case to test it.' });
  else     segs.push({ t:'Working ' + w.concept + ' through a case', m:18, note:'We test the idea against a real situation.' });
  segs.push({ t:'Live poll and shared discussion', m:12, note:'Where does the room sit? We look at the result together, with no names attached.' });
  segs.push({ t:'Close and carry forward', m:9, note:'One thing to keep, and a first look at next session.' });
  return segs;
}
function pollFor(w){
  return {
    q: 'Thinking about ' + w.concept + ': can a tool built inside an unfair world ever be neutral?',
    options: ['No, never neutral', 'Only with deliberate work', 'Sometimes', 'I am still deciding'],
    framing: 'A shared view of where the room sits right now. It is never a score on you.'
  };
}
function notesFor(w){
  return [
    'In your own words, what is ' + w.concept + '?',
    'One real example of ' + w.concept + ' that you have noticed.',
    'A question that ' + w.concept + ' raises for you.'
  ];
}
// Small pools so sample cohort copy varies per session and is never identical.
const COLLECTIVE_POOL = [
  'I keep noticing this in apps I already use every day.',
  'The hardest part for me was seeing the design choice behind the harm.',
  'I want to bring an example from my own field next time.',
  'This changed how I read the news about new technology.',
  'I used to think the glitch was the problem. Now I am not so sure.',
  'It helped to hear how other people in the room framed it.',
  'I am sitting with the idea that being unseen can be its own harm.',
  'The Canadian example made it feel close to home.',
];
function recapFor(w, idx){
  const c = (w.concepts || []).map(x => x.term).slice(0,3);
  const moments = c.length ? c.map(t => 'We worked through ' + t + '.') : ['We opened the session and set the question for the week.'];
  const collective = [
    COLLECTIVE_POOL[(idx*3) % COLLECTIVE_POOL.length],
    COLLECTIVE_POOL[(idx*3+1) % COLLECTIVE_POOL.length],
    COLLECTIVE_POOL[(idx*3+2) % COLLECTIVE_POOL.length],
  ];
  return { moments, collective };
}

const weeks = data.weeks;
const sessions = weeks.map((w, i) => {
  const prev = i > 0 ? weeks[i-1] : null;
  const next = i < weeks.length-1 ? weeks[i+1] : null;
  const lookBack = prev ? {
    term: prev.concept,
    prompt: 'Last session was about ' + prev.title + '. In your own words, what does "' + prev.concept + '" mean? Try it from memory first.',
    reveal: glossaryDef(prev.concept) || firstSentence(prev.overview)
  } : null;
  const carry = next
    ? { title: next.title, line: firstSentence(next.overview) || ('We open ' + next.concept + '.') }
    : { title: 'After the course', line: 'You keep your cartography and the way of seeing it gave you.' };
  const reflect = (w.guiding && w.guiding.length) ? w.guiding[w.guiding.length-1] : data.course.reflectionQuestion;
  const headsUp = (w.number === 8)
    ? 'This session looks at how data and research have been used against Indigenous communities. We move through it slowly and with care. You belong here for it.'
    : '';
  return {
    number: w.number,
    phaseId: w.phaseId,
    title: w.title,
    concept: w.concept,
    conceptDef: glossaryDef(w.concept) || firstSentence((w.concepts && w.concepts[0] && w.concepts[0].paras && w.concepts[0].paras[0]) || w.overview),
    overview: w.overview,
    purpose: w.purpose,
    guiding: w.guiding,
    concepts: w.concepts,
    readings: w.readings,
    references: w.references,
    slides: w.slides,
    video: w.video,
    headsUp,
    deep: {
      agenda: agendaFor(w),
      poll: pollFor(w),
      notes: notesFor(w),
      reflect,
      lookBack,
      carry,
      recap: recapFor(w, i),
    }
  };
});

// Sample cohort (clearly fictional). Presence defaults to private; a few opted in.
const members = [
  { name:'Raymond Peart', initials:'RP', role:'Your professor', instructor:true, appearing:true },
  { name:'Amara',  initials:'A', appearing:true },
  { name:'Devon',  initials:'D', appearing:true },
  { name:'Priya',  initials:'P', appearing:true },
  { name:'Sam',    initials:'S', appearing:false },
  { name:'Lena',   initials:'L', appearing:true },
  { name:'Marcus', initials:'M', appearing:false },
  { name:'Yuki',   initials:'Y', appearing:true },
  { name:'Tomas',  initials:'T', appearing:false },
  { name:'Joelle', initials:'J', appearing:true },
];
const teams = [
  { name:'The Auditors', members:['Amara','Devon','Priya','Sam'] },
  { name:'The Cartographers', members:['Lena','Yuki','Tomas','Joelle'] },
];

// Read-only discussion archive (anonymized sample; real talk happens in Blackboard).
const TAGSEED = {};
const discussion = sessions.slice(0,5).map((s, i) => ({
  session: s.number,
  title: s.title,
  collective: s.deep.recap.collective,
  posts: [
    { label:'A classmate', tags:[ (s.concepts && s.concepts[0] && s.concepts[0].term) || s.concept ],
      text:'Here is an example of ' + s.concept + ' I ran into this week, and what made me notice it.',
      replies:[ { label:'Another classmate', text:'I saw something close to that too. The design choice behind it is what stood out for me.' } ] },
  ]
}));

const COMMONS = {
  course: {
    code: 'BFS218',
    title: data.course.title,
    subtitle: data.course.subtitle,
    mode: 'Online Synchronous',
    institution: 'Seneca Polytechnic',
    meetingDay: 'Tuesday',
    meetingTime: '6 p.m.',
    meetingLine: 'We gather live every Tuesday at 6 p.m.',
    referenceNow: '2026-10-13T16:30:00',
    nextSessionStart: '2026-10-14T18:00:00',
    blackboardUrl: data.course.blackboardCourseUrl || '',
    collaborateUrl: '',
    discussionUrl: '',
    demoState: 'upcoming',
    currentWeek: 5,
    reflectionQuestion: data.course.reflectionQuestion,
  },
  instructor: data.instructor,
  phases: PHASES,
  sessions,
  glossary: (data.glossary || []).map(g => ({ term:g.term, def:g.def, ex:'', sessions:g.weeks || [] })),
  assignments: data.assignments,
  members,
  teams,
  discussion,
};

const out = 'window.COMMONS = ' + JSON.stringify(COMMONS, null, 1) + ';\n';
fs.writeFileSync(path.resolve(__dirname, '../data/commons-data.js'), out);
console.log('wrote commons-data.js:', out.length, 'bytes; sessions:', sessions.length,
  '; glossary:', COMMONS.glossary.length, '; members:', members.length);
// quick sanity
const s5 = sessions[4];
console.log('session5 agenda segs:', s5.deep.agenda.length, 'total min:', s5.deep.agenda.reduce((a,b)=>a+b.m,0));
console.log('session5 poll q:', s5.deep.poll.q.slice(0,60));
console.log('session5 lookBack term:', s5.deep.lookBack && s5.deep.lookBack.term);
console.log('session8 headsUp present:', !!sessions[7].headsUp);
