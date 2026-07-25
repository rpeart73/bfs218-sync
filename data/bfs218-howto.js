/* BFS218 (Synchronous) per-page how-to registry (2026-07-25). Every screen carries
   its own "How to use this page" panel so students can teach themselves each surface.
   tour.file is the chaptered video tour; each page's clip value is a
   media-fragment time range inside that one file, filled in later. Plain language, no dashes.
   Collapsed aliases (sub-views resolve to their parent's entry, matching howtoKey):
     library -> journey
     detail, reading -> readings
     activity, sandbox -> station (weekly activity sub-screens opened from a week page)
     assignment-program, assignment-details, assignment-rubric, assignment-release,
     assignment-ai, assignment-faq, starter -> assignments */
window.BFS218_HOWTO = {
 "tour": {
  "file": "videos/howto-tour.mp4",
  "note": "Silent screen tour with on-screen captions."
 },
 "byScreen": {
  "journey": {
   "title": "How to use your home page",
   "intro": "This page is your course map. Our class meets live most weeks, and everything around the class lives here: every week is a station on one journey.",
   "steps": [
    {
     "do": "Read the class rhythm panel first.",
     "detail": "The panel near the top tells you what to do before and after this week's class, or how an independent week runs. It updates as the term moves."
    },
    {
     "do": "Find the current week.",
     "detail": "The This Week card and the highlighted station show where the course is right now. Click any station to open that week's page."
    },
    {
     "do": "Read the delivery label before you click.",
     "detail": "The legend marks live class weeks, asynchronous weeks with no lecture, and Study Week. Weeks 4 and 11 are independent learning weeks; Weeks 13 and 14 turn the class window into office hours."
    },
    {
     "do": "Use the Study Compass.",
     "detail": "The compass box suggests what to do next based on what you have already done on this device. A few fixed rules run in your browser; no AI and no server. It is a suggestion, never a requirement."
    },
    {
     "do": "Pick your program lens if you want one.",
     "detail": "The Viewing as chip personalizes examples to your field of study. The course content stays the same for everyone; only the framing changes. Choose or change it any time on Career Choices."
    }
   ],
   "saves": "Your visited weeks, compass activity, optional first name, and program lens choice are saved only in this browser on this device. Nothing is sent anywhere.",
   "graded": "Nothing on this page is graded or reported to your professor.",
   "next": "Open the current week's station and check how that week runs.",
   "clip": "4,18"
  },
  "station": {
   "title": "How to use a week page",
   "intro": "Your live class carries the teaching; this page is your companion before and after class. It names the week's delivery mode at the top and holds the readings, recording space, practice, and notes around every format.",
   "steps": [
    {
     "do": "Check the delivery label first.",
     "detail": "The How this week works box says whether the week meets live, runs as independent asynchronous learning (Weeks 4 and 11), or uses office hours with no lecture (Weeks 13 and 14)."
    },
    {
     "do": "Before a live class, prepare.",
     "detail": "Do the readings, skim the key concepts, and carry your version of the guiding question into class."
    },
    {
     "do": "After class, return for the recording.",
     "detail": "Live weeks have a class recording space; the captioned recording appears there once it is processed and posted. Independent weeks may carry a short instructor update instead."
    },
    {
     "do": "Work the sections one at a time.",
     "detail": "Weeks open folded so you can see the whole map. Up to two sections stay open at once, and the In this week list jumps straight to any section."
    },
    {
     "do": "Use the supports that fit you.",
     "detail": "If the week has an audio lecture, Listen to this week plays it with a follow-along transcript. Reading Rescue in the Readings section gives you the shortest honest path back in when you are behind."
    },
    {
     "do": "Run the activity, then take the Knowledge Check with honest confidence.",
     "detail": "There are three sets: A and B are multiple choice, C brings scenarios and short writing. Answer, mark how sure you were, then reveal. Confident misses are the most valuable thing to review."
    },
    {
     "do": "Close with the reflection and Generate Your Weekly Notes.",
     "detail": "Rate the same ideas you rated in Before you begin, write your reflection, then generate the Word file. It collects your week into one organized record on Seneca letterhead."
    }
   ],
   "saves": "Your ratings, notes, practice results, and reflections are saved only in this browser on this device. Generate Your Weekly Notes is how you keep a permanent copy.",
   "graded": "Every check on this page is practice. None of it is scored, recorded, or visible to your professor. Graded work is submitted on Blackboard only.",
   "next": "When the week feels solid, carry one question forward into the next live class.",
   "clip": "18,32"
  },
  "site": {
   "title": "How to use this page",
   "intro": "This page explains how the whole site works and how it sits beside Blackboard. The panel you are reading now appears on every page, always tuned to that page.",
   "steps": [
    {
     "do": "Skim the cards in order.",
     "detail": "They cover Blackboard, privacy, copyright, translation, accessibility, and the site's known limits."
    },
    {
     "do": "Learn the loop with Blackboard.",
     "detail": "You learn and practise here; you submit, discuss, and get grades on Blackboard. If the two ever disagree, Blackboard is the source of truth."
    },
    {
     "do": "Open the Reading Lens when you need it.",
     "detail": "The button at the top of every page offers text size, spacing, a high-legibility font, page tints, a reading ruler, a magnifier, and read-aloud."
    },
    {
     "do": "Look for the How to use this page bar anywhere you go.",
     "detail": "Every page carries its own version of this panel with steps for that page. Open it whenever a page feels unfamiliar."
    },
    {
     "do": "Report anything broken.",
     "detail": "The Report a problem button opens your own email with the page details filled in. Nothing is collected by this site."
    },
    {
     "do": "On a shared computer, clear your work.",
     "detail": "The Clear my saved work button on this page removes everything this site has saved in this browser. Download your weekly notes first if you want to keep them."
    },
    {
     "do": "Back up your saved work.",
     "detail": "The Take your saved work with you box on this page downloads everything you have typed and rated as one file, and restores it on any device. The accessibility statement lives here too."
    }
   ],
   "saves": "Everything you type or rate on this site stays in this browser on this device. The Clear my saved work button on this page wipes it.",
   "graded": "Nothing on this site is graded. Blackboard is the only official gradebook.",
   "next": "Head back Home and open the current week.",
   "clip": "32,46"
  },
  "pathways": {
   "title": "How to use Course Pathways",
   "intro": "This page shows the shape of the whole term at once, so no week ever surprises you.",
   "steps": [
    {
     "do": "Read the rhythm.",
     "detail": "Most weeks meet live. Weeks 4 and 11 are independent asynchronous learning, and in Weeks 13 and 14 the usual class window becomes office hours with no lecture."
    },
    {
     "do": "Note the weeks that change mode.",
     "detail": "Independent weeks have a purpose: Week 4 applies the early foundations and Week 11 is a synthesis point before the final live class. The week page always names its own mode at the top."
    },
    {
     "do": "Follow the five-step route.",
     "detail": "Preview before class, meet or work independently, return to finish the week, connect your class takeaways to your notes, and carry it forward into your map."
    },
    {
     "do": "Plan your heavy weeks early.",
     "detail": "Use the rhythm to spot where readings and due dates stack up against your other courses, then start those weeks earlier."
    }
   ],
   "saves": "This page stores nothing.",
   "graded": "Nothing here is graded.",
   "next": "Open Calendar and Due Dates to put exact dates against this rhythm.",
   "clip": "46,59"
  },
  "readings": {
   "title": "How to use Readings and Media",
   "intro": "This is the course library: every assigned source in one place, ready to open online.",
   "steps": [
    {
     "do": "Browse or filter to find a source.",
     "detail": "Filter by week or by topic. Each card shows the core idea, the format, and where the source lives."
    },
    {
     "do": "Open the full text.",
     "detail": "The red button on each card opens the reading, video, or audio in a new tab, on Blackboard, in open access, or on the official site. This site never hosts the reading itself."
    },
    {
     "do": "Open a source's detail page.",
     "detail": "It shows the abstract, the core idea, roughly how long the source takes, and an evidence profile: what the source studied and what it does not prove."
    },
    {
     "do": "Use Source Practice on sources you have read.",
     "detail": "Source Practice in the sidebar gives each source guided questions and a read-out of what landed, so you know whether the reading actually stuck."
    },
    {
     "do": "Send sources to Compare.",
     "detail": "The Compare button on a detail page adds the source to your comparison tray."
    }
   ],
   "saves": "Your Source Practice answers and notes stay in this browser on this device.",
   "graded": "Source Practice is never scored.",
   "next": "Take two or three sources into Compare Sources and hold them side by side.",
   "clip": "59,73"
  },
  "compare": {
   "title": "How to use Compare Sources",
   "intro": "Comparison is where course thinking gets real. This page holds two or three sources next to each other so you can see what each one argues.",
   "steps": [
    {
     "do": "Pick two or three sources.",
     "detail": "Use the picker on the right. Choose sources that speak to the same question from different angles."
    },
    {
     "do": "Read the side-by-side cards.",
     "detail": "Each card keeps the source's core idea, evidence type, and limits visible."
    },
    {
     "do": "Work the guided comparison.",
     "detail": "Pick a lens, then write what the sources share, how they differ, and why the differences matter. Open the worked example if you want a model first."
    },
    {
     "do": "Press Synthesize when you are ready.",
     "detail": "The synthesis builds a frame across your chosen sources. Use it as a thinking scaffold, not as sentences to copy, and reveal the model comparison only after you have written your own."
    },
    {
     "do": "Save your comparison.",
     "detail": "Save my comparison keeps your notes, and the synthesis can be copied, printed, or saved to your notes."
    }
   ],
   "saves": "Your comparison notes stay in this browser on this device.",
   "graded": "Comparisons are never graded. They exist to sharpen your written work.",
   "next": "Carry your comparison insight into this week's reflection or your Personal Cartography.",
   "clip": "73,87"
  },
  "walkthroughs": {
   "title": "How to use Weekly Experiences",
   "intro": "Each teaching week has an immersive experience that walks the week's idea as a sequence of scenes, evidence rooms, decisions, and reflection. It reinforces the live class and the readings; it never replaces them.",
   "steps": [
    {
     "do": "Pick a week and enter.",
     "detail": "The experience opens over the page. Nothing behind it is lost."
    },
    {
     "do": "Move with the on-screen arrows or your keyboard.",
     "detail": "Each slide is one move: a scene, evidence, a decision, or a diagram."
    },
    {
     "do": "Use the voice narration if you want it.",
     "detail": "The accessibility panel can read the current chapter aloud with a voice and speed you choose. It is optional and off by default."
    },
    {
     "do": "Leave any time.",
     "detail": "Close returns you to the page you came from. If you come back in the same sitting, you can re-enter and pick up where you left off."
    }
   ],
   "saves": "Your experience notes live on the week page. The experience itself keeps your place only for the current sitting.",
   "graded": "Experiences are teaching, not testing. Nothing is scored.",
   "next": "After an experience, open the same week's readings or Study Guide to lock the idea in.",
   "clip": "87,101"
  },
  "lectures": {
   "title": "How to use Lectures",
   "intro": "Every posted week has a short audio lecture written by your professor. This page lists them all in one place, ready to play.",
   "steps": [
    {
     "do": "Press play on any week.",
     "detail": "The lecture keeps playing while you move around the site, so you can listen while you work."
    },
    {
     "do": "Know whose voice it is.",
     "detail": "Your professor wrote each lecture; it is read by the Eleven Labs Narrator, an AI-generated voice, for clarity and accessibility."
    },
    {
     "do": "Use it to catch up, not to replace.",
     "detail": "The lecture is your catch-up if you missed the live class. The readings still carry the citations and evidence your graded work needs."
    },
    {
     "do": "Open the week page for more.",
     "detail": "The week page has the same lecture with a follow-along transcript, a download button, and voice and language options."
    }
   ],
   "saves": "This page stores nothing, and your listening is never tracked.",
   "graded": "Nothing here is graded.",
   "next": "Open the current week's page and read along with the transcript.",
   "clip": "101,114"
  },
  "videos": {
   "title": "How to use Videos and Podcasts",
   "intro": "This gallery collects scholar media for the course: the researchers you are reading, speaking for themselves.",
   "steps": [
    {
     "do": "Filter by week or by format.",
     "detail": "Each card names the scholar, what the item explains, and what to watch or listen for."
    },
    {
     "do": "Play inside the page where you can.",
     "detail": "Embeddable videos use official platform players, and nothing loads until you press play. Podcasts and restricted media link out to the official source."
    },
    {
     "do": "Watch or listen, then read.",
     "detail": "A talk is a way into a source, not a replacement for it. Each card names the reading move to make next."
    },
    {
     "do": "Write the Reading Rescue note.",
     "detail": "After the media, write one sentence you can prove from the reading. It becomes part of your weekly notes."
    }
   ],
   "saves": "Your media notes and program lens choice stay in this browser on this device.",
   "graded": "Watching is never tracked or graded.",
   "next": "Open the reading the media connects to in Readings and Media.",
   "clip": "114,128"
  },
  "glossary": {
   "title": "How to use the Glossary",
   "intro": "Every key term and thinker in the course lives here, with real definitions and real citations.",
   "steps": [
    {
     "do": "Search or browse by week.",
     "detail": "Type any concept into the search box, or use the week menu to see a week's terms together. Each entry carries the citation it comes from."
    },
    {
     "do": "Use terms to speak precisely.",
     "detail": "Map Exchange posts and written work read stronger when the course vocabulary is used accurately."
    },
    {
     "do": "Follow a term back to its week.",
     "detail": "Each entry names its home week, so you can revisit the fuller context."
    }
   ],
   "saves": "This page stores nothing.",
   "graded": "Nothing here is graded.",
   "next": "Turn terms into memory with Concept Flashcards.",
   "clip": "128,142"
  },
  "cards": {
   "title": "How to use Concept Flashcards",
   "intro": "One flip card per course concept: the term in front, the definition behind.",
   "steps": [
    {
     "do": "Try to answer before you flip.",
     "detail": "Recalling before revealing is what makes flashcards work. Guessing first, even wrongly, strengthens the memory."
    },
    {
     "do": "Filter by week.",
     "detail": "Before a Knowledge Check, run the cards for that week plus one earlier week."
    },
    {
     "do": "Work the Accountability Chain Lab.",
     "detail": "The studio above the cards walks the chain from system to response, with a quick check and a button that saves your work as a Word file."
    },
    {
     "do": "Say the definition out loud in your own words.",
     "detail": "If you can only repeat the card's wording, flip it again tomorrow."
    }
   ],
   "saves": "Your studio answers stay in this browser on this device. The cards themselves store nothing.",
   "graded": "Cards and the studio are pure practice. Nothing is scored.",
   "next": "Take the week's Knowledge Check and see what stuck.",
   "clip": "142,156"
  },
  "assignments": {
   "title": "How to use Starting Your Assignment",
   "intro": "The five assessments build one Personal Cartography across the term. These pages explain the arc, the rooms, the marking, the dates, and the AI rules, so the blank page never wins.",
   "steps": [
    {
     "do": "Read the overview first.",
     "detail": "Five assignments, each worth 20 percent, move through one arc: notice, interpret, investigate, repair, and integrate."
    },
    {
     "do": "Open one assignment room at a time.",
     "detail": "Each room shows what you are really doing, what to submit, the marking criteria, and a final self-check with common misses."
    },
    {
     "do": "Check How Stronger Work Grows.",
     "detail": "The grading page shows what stronger work does, so you can aim before you submit."
    },
    {
     "do": "Confirm dates on the release page.",
     "detail": "It lists when each Blackboard dropbox opens and when work is due. Nothing is due in Study Week or Week 14."
    },
    {
     "do": "Open the Assignment Start Lab when you want a working session.",
     "detail": "It turns your assignment, progress, sticking point, and available time into a private start plan you can print or save. For Compass Check it builds readiness steps only and never generates or rehearses graded answers."
    },
    {
     "do": "Read the AI page before you disclose.",
     "detail": "It gives the AI-use rules clearly, with honest disclosure examples you can adapt."
    },
    {
     "do": "Submit on Blackboard, always.",
     "detail": "This site helps you start and plan. The official assignment, rubric, and submission all live on Blackboard."
    }
   ],
   "saves": "Your starter answers and plans stay in this browser on this device.",
   "graded": "Nothing here is submitted or graded. Blackboard is the only submission channel.",
   "next": "Block one hour, open the lab, and leave with a plan.",
   "clip": "156,170"
  },
  "career": {
   "title": "How to use Career Choices",
   "intro": "This page connects the course to your own field of study, whatever you are here to become.",
   "steps": [
    {
     "do": "Pick your area of study, or your exact program.",
     "detail": "General stream and still exploring are real options and have their own write-ups."
    },
    {
     "do": "Read the lens first.",
     "detail": "The Read the course this way line gives you one question to carry through the whole course from your field's point of view."
    },
    {
     "do": "Work the field write-up.",
     "detail": "Each field names the systems to watch, a concrete scenario from that world, and the skills you practise by reading the course this way."
    },
    {
     "do": "Follow the week links.",
     "detail": "Each field points at the weeks that matter most for it, and those links jump straight to the stations."
    },
    {
     "do": "Write the reflection.",
     "detail": "One honest note about where this course could land in your field is a seed for assignments later."
    }
   ],
   "saves": "Your field choice and reflection stay in this browser on this device. The Viewing as chip follows you around the site until you change it.",
   "graded": "The graded curriculum is identical for every student. The lens changes examples and framing only.",
   "next": "Visit a week the page recommends for your field and watch the framing follow you.",
   "clip": "170,183"
  },
  "calendar": {
   "title": "How to use Calendar and Due Dates",
   "intro": "Every date that matters in one place: live classes, asynchronous weeks, openings, deadlines, Study Week, and the end of term.",
   "steps": [
    {
     "do": "Read the colours first.",
     "detail": "Seneca red marks due dates. Black marks live classes. Grey marks asynchronous weeks with no lecture, and a light outline marks Study Week."
    },
    {
     "do": "Scan the term at a glance.",
     "detail": "Deadlines follow the course rhythm: Compass Check in Week 7, Canadian Case File in Week 8, Design the Repair and the Map Exchange close in Week 12, then the final project on Sunday, December 13."
    },
    {
     "do": "Subscribe on your phone.",
     "detail": "The mobile calendar link is a live subscription, not a downloaded copy, so your calendar app can refresh when the course schedule changes."
    },
    {
     "do": "Treat Blackboard as the official source.",
     "detail": "If anything ever differs, Blackboard and your professor's announcements win."
    }
   ],
   "saves": "This page stores nothing.",
   "graded": "Nothing here is graded.",
   "next": "Put the deadline weeks into your own planner now, before they are close.",
   "clip": "183,197"
  },
  "review": {
   "title": "How to use Term Review",
   "intro": "This page mixes practice questions from every week so far into one set, so ideas stay alive instead of fading after their week ends.",
   "steps": [
    {
     "do": "Answer, then mark how sure you were.",
     "detail": "Pick an answer, choose Guessing, Think so, or Sure, then press See how I did. The reveal explains the right answer and what each wrong option gets wrong."
    },
    {
     "do": "Trust the ordering.",
     "detail": "Questions you have missed before come first. That is deliberate: reviewing what almost stuck is worth more than repeating what already has."
    },
    {
     "do": "Read the calibration report at the end.",
     "detail": "It sorts the set into mastered, fragile, confident misses, and growing edges. Confident misses are gold: ideas that feel settled but are not."
    },
    {
     "do": "Follow the revisit buttons.",
     "detail": "Every item links back to its home week. Reread the concept, then run another set."
    },
    {
     "do": "Come back weekly.",
     "detail": "Two short mixed sets a week beat one long cram. The pool grows as the course does."
    }
   ],
   "saves": "Your practice history is saved only in this browser and feeds the missed-first ordering here and in the weekly Knowledge Checks.",
   "graded": "Nothing here is scored, recorded, or visible to your professor.",
   "next": "Run one set now, then revisit the week your confident misses point at.",
   "clip": "197,211"
  },
  "outcomes": {
   "title": "How to use What This Course Builds",
   "intro": "This page shows the official course learning outcomes and the Ontario employability skills behind every week, so you can always see why the work exists.",
   "steps": [
    {
     "do": "Read the outcomes as promises.",
     "detail": "Each one names something you will be able to do by the end. They are the same for every student on every route through the course."
    },
    {
     "do": "Use the week buttons.",
     "detail": "Each outcome lists the weeks that build it. If an outcome feels shaky, those weeks are where to go."
    },
    {
     "do": "Check the assessment lines.",
     "detail": "Each outcome names the assessments that measure it, so no graded task ever comes out of nowhere."
    },
    {
     "do": "Notice the skills employers name.",
     "detail": "The Essential Employability Skills list is what Ontario colleges promise every graduate. This course practises the ones shown."
    }
   ],
   "saves": "This page stores nothing.",
   "graded": "Nothing here is graded. Blackboard carries the official documents.",
   "next": "Open a week one of your shakier outcomes points at.",
   "clip": "211,225"
  }
 }
};
