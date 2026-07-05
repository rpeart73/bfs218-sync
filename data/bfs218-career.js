/* BFS218 Career Choices: how the course connects to each Seneca field of study. */
window.BFS218_CAREER = {
 "intro": "This course can feel far from your program at first. It is not. The technologies this course examines, the ones that hire, screen, police, rank, and recommend, are already inside your field. Pick your field of study below and see how the ideas here follow you into your actual work.",
 "prompt": "Pick your field of study above, and this course will show you where it lands in your future work.",
 "fields": [
  "Aviation",
  "Business",
  "Creative Arts, Animation and Design",
  "Education, Community and Social Services",
  "Engineering Technology",
  "Fashion and Esthetics",
  "Health and Wellness",
  "Hospitality and Tourism",
  "Information Technology",
  "Law, Administration and Public Safety",
  "Liberal Arts and University Transfers",
  "Media and Communications",
  "Science"
 ],
 "byField": {
  "Health and Wellness": {
   "lens": "Read this whole course asking one question: when a tool in a clinic looks neutral and objective, who does it quietly decide gets seen, believed, and cared for?",
   "paras": [
    "Health care runs on tools that claim to be neutral: risk scores that flag which patients need follow-up, triage systems that sort who is urgent, algorithms that estimate need or predict who will not show up. This course is about exactly that claim. A widely studied example is a hospital risk algorithm that used past health spending as a stand-in for how sick a patient was. Because less money had historically been spent on Black patients, the tool judged them healthier than they were and steered care away from them. Nobody wrote a racist rule. The bias came in through a proxy, which is the course's core idea of the New Jim Code: a system presented as objective that reproduces inequity anyway.",
    "As someone heading into health and wellness, your instinct is already to ask who is being cared for and who is being missed. This course gives that instinct a sharper edge for the digital tools you will inherit. You will learn to look past what a tool says it measures and ask what it actually measures, what stands in for what, and whose outcomes get worse when it is wrong. That is not anti-technology. It is the difference between a practitioner who trusts the screen and one who can tell when the screen is failing a patient in front of them.",
    "The course also takes seriously that some communities have good reason not to trust health data systems at all. The weeks on Indigenous data sovereignty speak directly to health: they are about who owns health information, who gets to define what counts as a good outcome, and why data collected about a community without its control has so often harmed it. If your field touches Indigenous, Black, or newcomer health, this is not a side topic. It is the ground your practice stands on."
   ],
   "scenario": "You are a new grad and your unit adopts an app that predicts which patients are likely to miss appointments, so staff can prioritize outreach. Weeks in, you notice the flagged list skews toward one postal code and one community. This course is what lets you name what is probably happening (a proxy for race or poverty doing the sorting), ask the right question in the staff meeting, and not simply trust the list.",
   "skills": [
    "Reading a supposedly neutral tool for the proxy that is really doing the work",
    "Naming who benefits and who pays when a system is wrong, using an intersectional lens",
    "Understanding data sovereignty well enough to advocate for the communities you serve"
   ],
   "weeks": [
    6,
    8
   ],
   "weeksWhy": "Zoom in on Week 6 (Algorithms in Canada, including health and risk systems) and Week 8 (Indigenous Data Sovereignty). Those two land most directly in a health and wellness career.",
   "roles": [
    "Nurse or personal support worker using clinical decision tools",
    "Public health or community health worker",
    "Health informatics and data roles",
    "Social work and mental health support"
   ]
  },
  "Information Technology": {
   "lens": "Read this course asking: I am going to build, configure, and maintain these systems, so where does harm get designed in, and where could I have caught it?",
   "paras": [
    "You are the person who will actually build, deploy, and maintain the systems this course examines. That makes this the most practical course you will take about the ethics of your own craft. Facial recognition that fails on darker skin, hiring filters that learn to prefer resumes like the ones already hired, recommendation engines that quietly sort people: none of these were built by villains. They were built by capable technologists who did not ask a few questions in time. This course is those questions, taught early enough to matter.",
    "The New Jim Code, engineered inequity, and default discrimination are not abstract theory for you. They are failure modes. Engineered inequity is what happens when the training data carries a history you did not examine. Default discrimination is what happens when the easy, standard design choice quietly disadvantages a group. Coded exposure, from the Gender Shades study, is the measured evidence that a shipped product can perform far worse for some faces than others. Once you can name these, you can spot them in a design review, a data pipeline, or a model evaluation, which is exactly where a good engineer catches them.",
    "The back half of the course is your toolkit for doing better: design justice, which asks who is at the table when a system is designed, and accountability and policy, including Canada's proposed AI legislation. If you want to work in a field that is heading straight into regulation and audit, being fluent in how AI harms are named and governed is not a soft skill. It is fast becoming part of the job."
   ],
   "scenario": "Your team ships a photo feature that autocrops images, and a user shows that it consistently centers lighter faces over darker ones. The room wants to call it a one-off bug. This course is what lets you say, precisely, that this is coded exposure, that it is measurable, that it is a pattern and not a fluke, and that the fix is in the training data and the evaluation, not a patch.",
   "skills": [
    "Auditing a dataset or model for the bias it inherited, before it ships",
    "Recognizing default discrimination in a standard design choice",
    "Speaking the language of AI accountability and policy that audits now require"
   ],
   "weeks": [
    5,
    11
   ],
   "weeksWhy": "Zoom in on Week 5 (Coded Exposure and the measured evidence of the Gender Shades study) and Week 11 (Resistance and abolitionist tools, including design justice). Those turn the critique into things you can actually build with.",
   "roles": [
    "Software developer and data scientist",
    "Systems and security administrator",
    "QA and model evaluation",
    "Product and design roles in tech"
   ]
  },
  "Business": {
   "lens": "Read this course asking: the systems my company buys and runs make decisions about people, so where is the legal, financial, and reputational risk hiding, and how would I catch it?",
   "paras": [
    "Business runs on automated decisions about people: who gets hired, who gets credit, who gets flagged for fraud, who sees which price. Every one of those is a place where this course applies directly. An automated hiring tool that learned to downgrade resumes containing the word women, a credit model that charges more in some neighbourhoods, a screening system that filters out names it was never trained to read: these are not just ethics problems. They are legal exposure, financial loss, and reputational damage waiting to happen, and they are exactly what this course teaches you to see.",
    "As a business student, you will often be the one deciding which system to buy, how to deploy it, and how to answer for it when it goes wrong. This course gives you the vocabulary to ask a vendor the questions that matter: what does this model actually optimize for, what did it learn from, who has it been tested on, and what happens when it is wrong. A manager who can ask those questions protects the company. A manager who cannot is trusting a black box with the firm's liability.",
    "The course's later weeks on accountability, policy, and Canada's proposed AI law are, for business, a preview of the compliance landscape you are walking into. Procurement, human resources, marketing, and finance are all being reshaped by rules about automated decision-making. Being the person in the room who already understands how these harms are named and governed is a genuine advantage, not a burden."
   ],
   "scenario": "Your company is about to buy an off-the-shelf tool that ranks job applicants to save recruiters time. In the demo it looks efficient and neutral. This course is what lets you ask the vendor the three questions that reveal whether it will quietly filter out qualified people and expose your firm to a discrimination complaint, before you sign.",
   "skills": [
    "Evaluating an automated decision tool for bias and liability before you buy it",
    "Asking a vendor the questions that reveal what a model really does",
    "Reading the emerging AI accountability and compliance landscape"
   ],
   "weeks": [
    10,
    12
   ],
   "weeksWhy": "Zoom in on Week 10 (Algorithmic Gatekeeping in hiring, credit, and housing) and Week 12 (Tech Accountability and Policy Futures). Those are where the business stakes are clearest.",
   "roles": [
    "Human resources and talent",
    "Marketing and analytics",
    "Finance, credit, and risk",
    "Management and procurement"
   ]
  },
  "Aviation": {
   "lens": "Read this whole course asking one question: when a screening system at the gate, the checkpoint, or the border flags a passenger, is it actually reading that person, or is it reading a pattern that mostly tracks race and name?",
   "paras": [
    "Aviation runs on screening. Every passenger is sorted before they fly: watchlists, automated risk scores, biometric boarding gates, facial recognition at customs. The industry sells these systems as neutral and efficient, which is exactly the claim this course examines. When Molnar describes digital border technologies, she is describing your workplace, because an international airport is a border, and the biometrics, automated decisions, and surveillance she studies are the tools running at your gate. The course teaches you to see that a system marketed as objective can carry old bias forward, which is the heart of the New Jim Code.",
    "The place this bites hardest for aviation is facial recognition and biometric matching. The Gender Shades study, which anchors Week 5, showed commercial facial analysis performing far worse on darker-skinned faces, especially darker-skinned women. Put that failure inside a biometric boarding gate or an automated passport kiosk and the result is predictable: some passengers clear in seconds while others are repeatedly rejected, pulled aside, and sent for manual checks, not because they did anything, but because the technology was never built to see them well. As the person working that gate, you will either treat the machine as truth or understand why it is failing certain travellers and act accordingly.",
    "Week 6, Algorithms in Canada, widens the picture beyond the gate. The same family of tools that screens passengers also builds watchlists and automated risk scores, and the Canadian readings show these systems deployed ahead of clear rules, with the burden falling on racialized travellers. Secondary screening that always seems to select the same kinds of passengers is not always random. This course gives you a sober way to think about where the automation genuinely helps safety and where it just reproduces an old suspicion.",
    "Aviation already understands that safety-critical systems need oversight, checklists, and accountability, which is why Week 12 on tech accountability and policy will feel familiar rather than foreign. You are trained to ask how a system fails and who is responsible when it does. Pointing that same discipline at screening and biometric tools is a natural extension of an aviation professional's instincts, and it is fast becoming part of how the industry is regulated."
   ],
   "scenario": "You are working a biometric boarding gate or an automated customs kiosk, and you notice the same kinds of passengers keep getting rejected and routed to manual screening while others clear in seconds. This course is what lets you name what is probably happening (facial recognition that performs worse on some faces than others), raise it as a real operational and fairness problem, and not simply assume the flagged passengers are at fault.",
   "skills": [
    "Reading a screening or biometric system for the bias built into it, instead of trusting the output",
    "Understanding how airport and border surveillance tools actually sort people, and who they fail",
    "Speaking the language of technology accountability and regulation that aviation oversight is moving toward"
   ],
   "weeks": [
    5,
    6
   ],
   "weeksWhy": "Zoom in on Week 5 (Coded Exposure and the Gender Shades evidence behind biometric matching) and Week 6 (Algorithms in Canada, including border and surveillance technologies). Those two land right on the aviation checkpoint.",
   "roles": [
    "Airport and airline operations",
    "Passenger and gate services",
    "Aviation security and screening roles",
    "Aviation management and safety"
   ]
  },
  "Creative Arts, Animation and Design": {
   "lens": "Read this whole course asking one question: when a design tool or an image generator hands you a default look, whose face, body, and story did it treat as normal, and who did it leave out of the frame?",
   "paras": [
    "You are going to make the images a culture sees itself in. That puts you close to this course in two ways: you shape representation, and you increasingly work with tools trained on other people's work and other people's faces. When Noble showed that search engines returned demeaning, stereotyped results for Black women and girls, she was describing a representation problem produced by a system, which is your territory. The course gives you a precise vocabulary for what happens when a tool that looks neutral quietly encodes who counts as the default human.",
    "Generative AI is where this gets personal for your field. Week 12's reading is literally about generative AI and its impact on artists and creators, and the gaps in Canada's proposed AI law. These systems learned from enormous amounts of scraped creative work, sometimes including art like yours, and they can reproduce a style without crediting or paying the people who made it. Image generators also carry defaults: ask for a professional, a beautiful person, or a criminal, and the narrow, stereotyped range they return tells you whose image the training data treated as standard. You will be the person in the studio who can name that instead of shipping it.",
    "The back half of the course hands you a constructive philosophy for your craft. Week 11's design justice, from Costanza-Chock, asks who is at the table when a thing is designed, insists that a design be judged by its impact rather than the intention behind it, and treats community-led making as the way to build. That turns inclusive design from a nice-to-have into an actual method, and it is a method you can carry into a real brief, a real product, and a real campaign.",
    "There is a craft-level version of this too. Week 5, Coded Exposure, traces how imaging technology was long calibrated for lighter skin, so darker faces were rendered and lit poorly by default. If you work in animation, film, photography, or visual effects, that history lives in your pipeline: in how skin tones render, how lighting rigs are set, and how a tool decides what looks correct. Knowing it lets you light and render every subject well, which is simply better work."
   ],
   "scenario": "You prompt an image generator for something generic like a beautiful woman or a successful professional, and it returns the same narrow band of faces and bodies over and over. This course is what lets you see that as coded exposure and default discrimination rather than a coincidence, and it gives you the standing to push your team toward tools and choices that widen the frame.",
   "skills": [
    "Spotting whose image a tool or dataset treats as the default, and designing against it",
    "Applying design justice principles (impact over intention, community at the table) to real projects",
    "Thinking clearly about generative AI, training data, and creative labour in your own field"
   ],
   "weeks": [
    5,
    11,
    12
   ],
   "weeksWhy": "Zoom in on Week 5 (Coded Exposure and the coded gaze), Week 11 (design justice and community-led making), and Week 12 (generative AI and its impact on creators). Those three sit right in a creative career.",
   "roles": [
    "Animator and motion designer",
    "Graphic, UX, and product designer",
    "Illustrator and concept artist",
    "Game and interactive media designer"
   ]
  },
  "Education, Community and Social Services": {
   "lens": "Read this whole course asking one question: when a screening tool tells you which child, family, or student is at risk, is it seeing the person, or seeing poverty and race and calling that risk?",
   "paras": [
    "Your work is about who gets support and who gets missed, and more of that sorting is being handed to software. Schools use early warning systems that flag students likely to struggle. Child protection agencies use risk scoring tools that rate families. Benefits and eligibility systems decide who qualifies. Every one of these presents itself as objective, and every one is exactly what this course teaches you to read. The New Jim Code is the name for a system sold as neutral that reproduces inequity anyway, and the helping professions are full of them.",
    "Week 10 gives you the clearest case. Bird, Castleman, and Song studied predictive models built to flag at-risk community college students so support could be directed to them, and found the models would actually send fewer supports to Black students, with the bias shifting depending on how at-risk was defined. That is your world: a tool designed with good intentions that quietly steers help away from the students who need it. The course teaches you to ask what the tool really measures, what stands in for what, and who loses when it is wrong. In child welfare especially, tools that lean on prior contact with services can mistake being poor and heavily surveilled for being unsafe.",
    "Week 11 offers the hopeful half of the story. Tanksley writes about an abolitionist, critical race pedagogy that centres Black youth as creators of technology rather than only its subjects. For anyone heading into education or youth work, that is a model of practice, not just a critique: it asks you to treat the young people you work with as capable makers and authorities, not as problems a system manages. It is a constructive answer to the harms the earlier weeks document.",
    "The weeks on Indigenous data sovereignty and the digital divide (Week 8) speak straight to community and social services. They are about who controls data collected about a community, who can even get online to reach services in the first place, and why data gathered without a community's consent has so often been used against it. If your work touches Indigenous, newcomer, or low-income communities, this is not a side topic. It is the ground your practice stands on, and the course asks you to respect those communities as holding rights over their own information."
   ],
   "scenario": "You are an educational assistant or a social service worker, and a dashboard flags a set of students or families as high risk. Weeks in, you notice the flagged list skews heavily toward one neighbourhood and one community. This course is what lets you name what is probably happening (a proxy for poverty and race doing the sorting), raise the right question with your team, and advocate for the families instead of deferring to the list.",
   "skills": [
    "Reading a risk or early warning tool for the proxy that is really doing the sorting",
    "Naming who is helped and who is harmed when a well-meaning system is wrong",
    "Advocating for families and communities, including their right to control data about them"
   ],
   "weeks": [
    8,
    10,
    11
   ],
   "weeksWhy": "Zoom in on Week 10 (at-risk prediction that steers support away from Black students), Week 11 (Tanksley's abolitionist pedagogy), and Week 8 (Indigenous data sovereignty and the digital divide). Those three land right in the helping professions.",
   "roles": [
    "Educational assistant and teaching support",
    "Early childhood educator",
    "Social service and community worker",
    "Child and youth care worker"
   ]
  },
  "Engineering Technology": {
   "lens": "Read this whole course asking one question: when a device or system works perfectly in testing but fails for some users, was it ever designed and tested for them, or did the default user quietly leave them out?",
   "paras": [
    "You will design, build, and test the physical systems this course examines: sensors, cameras, biometric readers, embedded control systems. Engineered inequity (Week 3) and default discrimination (Week 4) are not abstract ethics for you, they are engineering failure modes. Engineered inequity is what happens when the choices baked into a design carry a history you did not examine. Default discrimination is what happens when the standard, easy design choice quietly disadvantages a group. Once you can name them, you can catch them in a spec review or a test plan, which is where a good engineer catches them.",
    "Coded exposure (Week 5) is the most literally engineering-relevant idea in the course. Benjamin's point starts with hardware: for decades, camera film and lighting were calibrated for lighter skin, so darker-skinned faces were poorly exposed by default, not by malice but by a technical standard that treated one skin tone as normal. The same pattern recurs in modern devices. Pulse oximeters have been shown to read less accurately on darker skin. Facial recognition and some optical sensors underperform on darker faces. These are calibration and test-coverage problems, and they are yours to prevent.",
    "The fix sits inside your process. If a system is only validated on a narrow slice of users, it will fail the rest in the field. The course pushes you to ask, at design time, who is in the test set, what the default assumes, and whose body the tolerance was tuned for. That is not politics laid over engineering, it is just better engineering, and it is increasingly what standards and audits will demand of the products you build."
   ],
   "scenario": "A camera, biometric reader, or medical sensor you helped build passes every test on your team and then underperforms for darker-skinned users once it ships. The room wants to call it an edge case. This course is what lets you say precisely that this is coded exposure and default discrimination, that it is a calibration and test-coverage problem, and that the real fix is in the design and the validation set, not a late apology.",
   "skills": [
    "Auditing a design and its test coverage for the users it silently excludes",
    "Recognizing default discrimination in a standard technical choice or calibration",
    "Building validation that reflects who will actually use the system"
   ],
   "weeks": [
    4,
    5
   ],
   "weeksWhy": "Zoom in on Week 4 (Default Discrimination in standard design choices) and Week 5 (Coded Exposure, from camera calibration to modern sensors). Those two turn the critique into things you can catch on the bench.",
   "roles": [
    "Electronics and hardware design",
    "Systems and embedded design",
    "Biomedical and instrumentation technology",
    "Quality assurance and test engineering"
   ]
  },
  "Fashion and Esthetics": {
   "lens": "Read this whole course asking one question: when a beauty filter, a skin-tone match, or a flawless standard is built into a tool, whose face was it calibrated for, and whose does it quietly try to correct?",
   "paras": [
    "Your field is about faces, skin, and how people are seen, which puts it right on top of this course. Beauty and esthetics increasingly run on tools that claim to be objective: augmented-reality try-on filters, skin-analysis apps, foundation-shade matchers, and beauty-scoring systems. Every one of them encodes an idea of what a normal or ideal face looks like. When an online beauty contest judged by AI ended up favouring lighter-skinned faces, that was not a glitch, it was the training data and the standard showing through, which is exactly what this course calls the New Jim Code.",
    "Coded exposure (Week 5) is your chapter. Buolamwini and Gebru's Gender Shades study showed facial analysis performing worse on darker-skinned faces, and the same logic runs through beauty tech: filters that lighten skin and narrow noses, cameras calibrated for lighter tones, shade ranges that stop short of the darkest and lightest skin. A product that works beautifully for some clients and mismatches or corrects others is telling you who it was built for. As the professional in the chair, you are the one who can see that and choose tools and shade ranges that actually serve the person in front of you.",
    "There is a second layer where fashion meets this course: retail and representation. Stores and brands are adopting facial recognition for loss prevention, and it tends to flag racialized shoppers more, turning a shopping trip into a suspicion. Marketing and imagery decide whose face is the default model and whose is the exception. Week 11's design justice framework gives you a constructive answer to all of this: build products, shade ranges, and campaigns with the people usually left out, and judge the result by its impact rather than the intention behind it."
   ],
   "scenario": "An augmented-reality try-on or skin-analysis tool you use at work matches and flatters some clients while mismatching or lightening others, or a store system keeps flagging certain shoppers as risks. This course is what lets you name it as coded exposure and default discrimination rather than a quirk, and gives you the standing to push for tools, shade ranges, and displays that serve every client.",
   "skills": [
    "Seeing whose skin and face a beauty tool was calibrated for, and choosing better",
    "Applying inclusive, design justice thinking to products, shade ranges, and campaigns",
    "Naming bias in retail surveillance and representation without hand-waving"
   ],
   "weeks": [
    5,
    11
   ],
   "weeksWhy": "Zoom in on Week 5 (Coded Exposure, from Gender Shades to skin-tone calibration) and Week 11 (Resistance and design justice, including inclusive design). Those two land right on the chair and the shop floor.",
   "roles": [
    "Esthetician and skincare specialist",
    "Makeup artist",
    "Fashion buyer and merchandiser",
    "Beauty brand and product development"
   ]
  },
  "Hospitality and Tourism": {
   "lens": "Read this whole course asking one question: when a booking platform, a pricing engine, or a guest-screening tool decides who is welcome and at what price, is it judging the guest, or a proxy for who they are?",
   "paras": [
    "Hospitality runs on automated decisions about people: who gets the booking, who sees which price, who gets flagged at check-in, who a review system rewards. Each of those is a place this course applies directly. Research on short-term rental platforms has documented guests with certain names being rejected more often, a bias that lives inside a system marketed as open to everyone. That gap between how neutral a platform looks and how unevenly it treats people is the course's central subject, the New Jim Code in a booking app.",
    "Travel is also a border story, and Week 6 is about exactly the surveillance and screening tools that now sit between a traveller and their trip. Molnar's work on digital border technologies, biometrics, automated risk scoring, and facial recognition, describes what your international guests pass through, and those tools fail unevenly along lines of race and name. Add facial recognition in hotels, casinos, and venues for security, and you get a guest experience that can quietly treat some visitors as suspects. Your job is hospitality, and this course helps you notice when the technology is working against it.",
    "The back-of-house side matters too. Hospitality hires at high volume, often through automated resume screening that can learn to prefer the kinds of people already hired, and it runs on dynamic pricing and personalization that decide which guest sees which offer. Week 10 on algorithmic gatekeeping is about precisely these systems. A manager who understands how they can misfire protects both the guests and the business from decisions that look efficient but quietly discriminate."
   ],
   "scenario": "A booking or guest-scoring platform, or a venue facial-recognition system, keeps treating certain guests differently by name or appearance: more rejections, more scrutiny, worse prices. This course is what lets you recognize the pattern, name the proxy doing the sorting, and push for practices that match the welcome your brand promises.",
   "skills": [
    "Evaluating a booking, pricing, or screening system for the bias hiding inside it",
    "Understanding how travel and venue surveillance tools sort guests, and who they fail",
    "Protecting guest experience and fairness when automated decisions run the front desk"
   ],
   "weeks": [
    6,
    10
   ],
   "weeksWhy": "Zoom in on Week 6 (Algorithms in Canada, including travel and border surveillance) and Week 10 (Algorithmic Gatekeeping in booking, pricing, and hiring). Those two land right in a hospitality operation.",
   "roles": [
    "Hotel and front-office management",
    "Guest services and reservations",
    "Event and venue management",
    "Tourism and travel services"
   ]
  },
  "Law, Administration and Public Safety": {
   "lens": "Read this whole course asking one question: when a policing or court tool says someone is high risk, is it predicting the person, or predicting the over-policing of the neighbourhood they came from?",
   "paras": [
    "No field sits closer to this course than yours. Week 6, Algorithms in Canada, is built on the readings you will meet in your career: Robertson, Khoo, and Song on algorithmic policing in Canada, the Clearview AI facial recognition case that the federal privacy commissioner found unlawful, and Singh on how these tools were authorized through court rulings rather than laws Parliament debated. Predictive policing, facial recognition, and risk scoring are already inside Canadian justice, and this course is where you learn what they do and to whom.",
    "The core trap is the feedback loop. A predictive-policing tool trained on past arrests will send officers back to the neighbourhoods that were most policed before, generating the very arrests that seem to confirm its prediction. A recidivism risk score built on data shaped by unequal enforcement can label people from over-policed communities as higher risk, and that label then follows them through bail, sentencing, and parole. The course teaches you to see that a number presented as objective can simply be laundering an old bias, which is the New Jim Code operating inside the justice system.",
    "The course also prepares you for the other half of your field, the governance side. Week 12 looks at Canada's attempt to regulate AI and the gaps critics have found in it, and the Canadian readings return again and again to Charter rights, privacy, and equality. Whether you become an officer, a paralegal, a corrections worker, or a policy analyst, you will be in rooms where these tools are proposed, procured, or challenged, and being the person who understands both the technology and the rights at stake is a real advantage."
   ],
   "scenario": "A predictive-policing map, a facial-recognition match, or a recidivism risk score lands on your desk and points at a specific person, and everyone treats the output as fact. This course is what lets you ask where the data came from, what the score is really measuring, and whether relying on it puts a Charter right or an innocent person at risk, before a decision gets made.",
   "skills": [
    "Reading a policing or risk-assessment tool for the biased data feeding it",
    "Connecting algorithmic decisions to Charter rights, privacy, and equality",
    "Speaking to the accountability and policy debate now shaping justice technology"
   ],
   "weeks": [
    6,
    12
   ],
   "weeksWhy": "Zoom in on Week 6 (Algorithms in Canada, the policing and facial recognition readings) and Week 12 (Tech Accountability and Policy Futures). Those two are the heart of a law and public safety career.",
   "roles": [
    "Policing and police foundations",
    "Paralegal and law clerk",
    "Corrections and community justice",
    "Public administration and policy"
   ]
  },
  "Liberal Arts and University Transfers": {
   "lens": "Whatever discipline you transfer into, read this whole course asking one question: how do I take a claim that a system is objective and neutral, and test it rather than trust it?",
   "paras": [
    "You are not heading into one fixed job, you are building the thinking you will carry into a university program and whatever comes after. That makes this course less about the technology and more about a method, and the method is the most transferable thing you can take. Week 2 installs the lens: Crenshaw on intersectionality, the idea that harm is clearest where systems overlap and that looking at one axis at a time misses the people hit hardest, and Benjamin on the New Jim Code, the way a system sold as objective can carry old bias forward. Those are tools for any discipline, not just for studying technology.",
    "Wherever you transfer, this shows up. Law and criminology meet predictive policing and risk scores. Medicine and health sciences meet clinical algorithms. Education meets early warning systems. Political science and public policy meet the fight over how to regulate AI. Sociology and gender studies gave the course its foundational lenses in the first place. The course is a working model of how to think across fields at once, holding technology, law, history, and social science in the same frame, which is exactly what strong university work demands.",
    "The course is also, frankly, good training in the academic skills universities grade you on. It is reading-heavy and argument-heavy, and Week 7, Assembling the Anatomy, asks you to synthesize many sources into one coherent picture rather than summarizing them one by one. Learning to hold a claim up to the evidence, to notice who a framework leaves out, and to build an argument from several readings is the difference between a transfer student who survives second year and one who thrives in it."
   ],
   "scenario": "In a seminar or an essay, someone hands you a confident claim that a policy, a tool, or a method is objective and evidence-based. This course is what lets you take that claim apart with real precision, ask whose data and whose experience it rests on, and build a stronger argument instead of nodding along.",
   "skills": [
    "Testing a claim of objectivity instead of accepting it",
    "Analysing a problem across several disciplines at once",
    "Synthesizing many sources into one clear, defensible argument"
   ],
   "weeks": [
    2,
    7
   ],
   "weeksWhy": "Zoom in on Week 2 (the critical race theory and New Jim Code lenses that travel into any field) and Week 7 (Assembling the Anatomy, where you learn to synthesize). Those two build the transferable thinking.",
   "roles": [
    "Undergraduate study and research",
    "Public policy and administration",
    "Journalism and communications",
    "Law, education, and social science pathways"
   ]
  },
  "Media and Communications": {
   "lens": "Read this whole course asking one question: when a platform decides which stories rise and which disappear, whose version of the world is it amplifying, and who is it quietly making invisible?",
   "paras": [
    "Your field decides what a public sees and hears, and increasingly the first editor is an algorithm. Search rankings, feed sorting, and recommendation engines choose which stories surface and which sink. Noble's work, which the course meets in Week 2, showed search engines returning demeaning and stereotyped results for Black women and girls, harm built into how a supposedly neutral system ranks and surfaces information. That is a media problem at its core: a ranking is an editorial choice wearing the costume of neutrality, and this course teaches you to see the choice.",
    "Week 8 gives you the deeper frame with Thomas King, who argues that stories are how people make and hold their world, so whoever controls the story holds real power. For a communicator, that is not poetry, it is the job. When a platform amplifies some voices and buries others, it is deciding whose narrative a society treats as true. The course helps you notice that power, whether you are the journalist covering an algorithmic-harm story and needing to explain it accurately, or the social media manager watching certain communities get throttled in the feed.",
    "Generative AI now sits inside your field too. Week 12 examines generative systems and their impact on creators, along with the gaps in Canada's proposed AI law. Newsrooms and agencies are using these tools to produce copy, images, and video, and they raise hard questions you will have to answer: synthetic media and deepfakes, uncredited training on real journalists and artists, and content that carries the biases of its training data. Being the communicator who understands how these systems work, and how they fail, is quickly becoming part of the craft."
   ],
   "scenario": "You are a reporter or a social media manager and you watch the algorithm bury certain voices and amplify others, or you have to explain an algorithmic-bias story to a general audience without getting it wrong. This course is what gives you the accurate language, the New Jim Code, coded exposure, algorithmic gatekeeping, to report it and work with it responsibly.",
   "skills": [
    "Reading how ranking and recommendation systems shape whose story gets heard",
    "Explaining algorithmic bias accurately to a general audience",
    "Working critically with generative AI and synthetic media in your own field"
   ],
   "weeks": [
    2,
    8,
    12
   ],
   "weeksWhy": "Zoom in on Week 2 (Noble on search and ranking), Week 8 (King on story as power), and Week 12 (generative AI and creators). Those three sit right in the communications job.",
   "roles": [
    "Journalist and reporter",
    "Social media and content management",
    "Public relations and communications",
    "Broadcast and digital media production"
   ]
  },
  "Science": {
   "lens": "Read this whole course asking one question: when you are told that data and method make a result objective, ask objective for whom, built from whose data, and standing in for what?",
   "paras": [
    "Science trains you to trust data, method, and measurement, and that instinct is mostly right. This course adds a discipline that makes it stronger: the habit of asking what a measurement actually stands in for and who was in the data that produced it. The New Jim Code, the course's central idea, works precisely by hiding behind a claim of objectivity. A well-studied hospital algorithm used past health spending as a proxy for how sick a patient was, and because less had historically been spent on Black patients, it judged them healthier than they were. No one wrote a biased rule. The bias entered through a proxy, and spotting proxies like that is a core scientific skill this course sharpens.",
    "Measurement and instruments are where this meets the bench. Week 5, Coded Exposure, starts from the fact that imaging technology was long calibrated for lighter skin, and the pattern persists: pulse oximeters have been shown to read less accurately on darker skin, and some clinical calculators have historically adjusted results by race in ways researchers now question. For a science student, these are sampling, calibration, and validity problems, the exact things you are trained to interrogate. The course simply insists you ask who your instrument and your reference range were built for.",
    "Week 8, Indigenous Data Sovereignty, speaks directly to how science is done. It is about who owns data taken from a community, who decides what counts as a valid outcome, and why data gathered about a people without their control has so often harmed them. If you go into genomics, health research, environmental science, or any field that collects data from human communities, this is not a side topic in research ethics, it is central to it. The course asks you to treat the communities in your data as partners with rights over it, not just as sources, and that stance will make you a more careful and more trusted researcher."
   ],
   "scenario": "A clinical algorithm, a reference range, or a research dataset you are working with turns out to use a proxy or a sample that quietly encodes race, and the team treats its output as simply objective. This course is what lets you spot that the neutral-looking measure is doing something else, ask the sampling and validity questions, and raise the ethics of whose data it rests on.",
   "skills": [
    "Interrogating what a measurement really stands in for, and who was in the sample",
    "Spotting calibration and validity problems that track race",
    "Practising research ethics that respect community rights over data, including Indigenous data sovereignty"
   ],
   "weeks": [
    5,
    8
   ],
   "weeksWhy": "Zoom in on Week 5 (Coded Exposure, calibration and measurement) and Week 8 (Indigenous Data Sovereignty and research ethics). Those two land right in scientific practice.",
   "roles": [
    "Laboratory and research technologist",
    "Health and biomedical science",
    "Environmental and field science",
    "Data and research analysis"
   ]
  }
 }
};
