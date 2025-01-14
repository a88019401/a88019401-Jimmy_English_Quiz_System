

  const timeAndDayGrammarQuestions = [
    {
      question: "A: _____did Amy go to bed last night? She looks so tired.<br>B: _____about 1:30 a.m. She stays up(熬夜) every day for a big test.",
      correct_answer: "  What time；At",
      incorrect_answers: ["  What day；On", "  What time; For", "  What day; ╳"]
    },
    {
      question: "Rick: What _______ is your test today?<br>Shiny: It’s ___ two o’clock.",
      correct_answer: "  time ; at",
      incorrect_answers: ["  time ; x", "  day ; on", "  day ; x"]
    },
    {
      question: "Anna: Isn’t it Tuesday?<br>Candice: No, it’s not.<br>Anna: _______________<br>Candice: It’s Monday.",
      correct_answer: "  What day is it today?",
      incorrect_answers: [
        "  What day is your family day?",
        "  What day is the sports day?",
        "  What day is your birthday?"
      ]
    },
    {
      question: "A: What time is the ball game?<br>B: It is _______________ .",
      correct_answer: "  at six twenty",
      incorrect_answers: ["  six o’clock", "  six twenty", "  at twenty o’clock"]
    },
    {
      question: "A: What day is the meeting?<br>B:_______________",
      correct_answer: "  It’s next Monday.",
      incorrect_answers: [
        "  It’s in the morning.",
        "  It’s in a big city.",
        "  It’s a meeting with Mr. Wang"
      ]
    },
    {
      question: "Teresa’s favorite TV show is _____ 4 p.m. _____ Monday.",
      correct_answer: "  at; on",
      incorrect_answers: ["  at; ╳", "  this; ╳", "  on; at"]
    },
    {
      question: "Helen: What day is New Year’s Day this year?<br>Brett: _____",
      correct_answer: "  Isn’t it on Wednesday?",
      incorrect_answers: [
        "  Is it at one one?",
        "  New Year’s Day is coming.",
        "  We can go out together that day"
      ]
    }
  ];

  const HanLinB2L3L4 = [
    {
      question: "A: _____did Amy go to bed last night? She looks so tired.<br>B: _____about 1:30 a.m. She stays up(熬夜) every day for a big test.",
      correct_answer: "  What time；At",
      incorrect_answers: ["  What day；On", "  What time; For", "  What day; ╳"]
    },
    {
      question: "Rick: What _______ is your test today?<br>Shiny: It’s ___ two o’clock.",
      correct_answer: "  time ; at",
      incorrect_answers: ["  time ; x", "  day ; on", "  day ; x"]
    },
    {
      question: "Anna: Isn’t it Tuesday?<br>Candice: No, it’s not.<br>Anna: _______________<br>Candice: It’s Monday.",
      correct_answer: "  What day is it today?",
      incorrect_answers: [
        "  What day is your family day?",
        "  What day is the sports day?",
        "  What day is your birthday?"
      ]
    },
    {
      question: "A: What time is the ball game?<br>B: It is _______________ .",
      correct_answer: "  at six twenty",
      incorrect_answers: ["  six o’clock", "  six twenty", "  at twenty o’clock"]
    },
    {
      question: "A: What day is the meeting?<br>B:_______________",
      correct_answer: "  It’s next Monday.",
      incorrect_answers: [
        "  It’s in the morning.",
        "  It’s in a big city.",
        "  It’s a meeting with Mr. Wang"
      ]
    },
    {
      question: "Teresa’s favorite TV show is _____ 4 p.m. _____ Monday.",
      correct_answer: "  at; on",
      incorrect_answers: ["  at; ╳", "  this; ╳", "  on; at"]
    },
    {
      question: "Helen: What day is New Year’s Day this year?<br>Brett: _____",
      correct_answer: "  Isn’t it on Wednesday?",
      incorrect_answers: [
        "  Is it at one one?",
        "  New Year’s Day is coming.",
        "  We can go out together that day"
      ]
    }
    ,{
      question: "A: What ______ is it?<br>B: It’s five seventeen.",
      correct_answer: "  What time",
      incorrect_answers: ["  How", "  How old", "  What day"]
    },
    {
      question: "That singer’s meet-and-greet is ______ ten ______ Saturday morning.",
      correct_answer: "  on; at",
      incorrect_answers: ["  on; on", "  at; at", "  at; on"]
    },
    {
      question: "A: What day is the basketball game?<br>B: It’s ______ this Tuesday.",
      correct_answer: "  on",
      incorrect_answers: ["  at", "  X", "  in"]
    },
    {
      question: "A: What are you doing?<br>B: ______.",
      correct_answer: "  We are writing a report.",
      incorrect_answers: ["  We are free.", "  You can sing here.", "  The report is ready."]
    },
    {
      question: "A: What day is it today?<br>B: ______.",
      correct_answer: "  Isn’t it Monday?",
      incorrect_answers: ["  It’s on Sunday.", "  It’s six o’clock.", "  It’s a good day."]
    },
    {
      question: "Look! Ellen’s sister ______ now. She is a good singer.",
      correct_answer: "  is singing",
      incorrect_answers: ["  singing", "  are singing", "  sing"]
    },
    {
      question: "My two-year-old daughter can draw ______ a marker.",
      correct_answer: "  with",
      incorrect_answers: ["  to", "  for", "  at"]
    },
    {
      question: "The show is at six p.m. Let’s ______ late.",
      correct_answer: "  not be",
      incorrect_answers: ["  don’t", "  no", "  not"]
    },
    {
      question: "A: ______<br>B: He can sing.",
      correct_answer: "  What can he do?",
      incorrect_answers: ["  Who can do this?", "  Where can he go?", "  What can he sing?"]
    },
    {
      question: "A: Is Jenny at home?<br>B: Maybe she is. Her bag is on the sofa.",
      correct_answer: "  I’m not sure.",
      incorrect_answers: ["  Look at the sign.", "  Where is she now?", "  Please write down her name."]
    },
    {
      question: "A: ______<br>B: Sorry, I can’t. It’s your turn.",
      correct_answer: "  Can you wash the dog for me?",
      incorrect_answers: ["  Can you see me?", "  Can you wait for me here?", "  Can you wait for your turn?"]
    },
    {
      question: "Look at the picture on the right. The truck drivers delivered ________ and made sure they were fine.",
      correct_answer: "  goods",
      incorrect_answers: ["  channels", "  soldiers", "  success"]
    },
    {
      question: "King: Excuse me. I really have to go now. My son ______ for me at home.<br>Kelly: Sure, no problem. See you tomorrow!",
      correct_answer: "  is waiting",
      incorrect_answers: ["  was waiting", "  waits", "  waited"]
    },
    {
      question: "Ray _______ a shower when someone turned off the light. He was nervous and shouted for help.",
      correct_answer: "  was taking",
      incorrect_answers: ["  took", "  is taking", "  takes"]
    },
    {
      question: "Alien Huang, a famous singer in Taiwan, ______ on September 16th, 2020. Many people still can’t believe it.",
      correct_answer: "  died",
      incorrect_answers: ["  was dying", "  dies", "  die"]
    },
    {
      question: "Mr. Lin: Tim, why did you come to school so early today?<br>Tim: I didn’t finish _______ math, so I woke up early to prepare for the test.",
      correct_answer: "  studying",
      incorrect_answers: ["  to study", "  studied", "  study"]
    },
    {
      question: "It’s important not to eat junk food. Eating more vegetables _______ you healthy.",
      correct_answer: "  keeps",
      incorrect_answers: ["  keep", "  keeping", "  to keep"]
    },
    {
      question: "Kidd: Are you excited about the camping next February?<br>Joanne: Of course! _____ always fun to go out with everybody.",
      correct_answer: "  It is",
      incorrect_answers: ["  That is", "  There is", "  I am"]
    },
    {
      question: "When Mr. Chung was young, ________ baseball was his favorite hobby. Now, he is still a big fan of Brothers.",
      correct_answer: "  watching",
      incorrect_answers: ["  watch", "  watched", "  watches"]
    },
    {
      question: "The English singing contest is coming next week. We need ________ after school.",
      correct_answer: "  to practice",
      incorrect_answers: ["  practicing", "  to be practiced", "  practiced"]
    },
    {
      question: "Eric: Did you watch the movie Demon Slayer: Mugen Train? It was on TV at ________ this afternoon.<br>Evelyn: No I didn’t. I studied at the library all afternoon. When I left, it was already ten to eight.",
      correct_answer: "  five to ten",
      incorrect_answers: ["  five to twelve", "  half past nine", "  half past five"]
    },{
      question: "Peter’s eyesight isn’t very good. He ________ see the words on the blackboard in the back of the classroom.",
      correct_answer: "  can’t",
      incorrect_answers: ["  can", "  isn’t", "  not"]
    },
    {
      question: "My dear friend, _________ a good time at today’s Halloween party.",
      correct_answer: "  have",
      incorrect_answers: ["  is having", "  having", "  is playing"]
    },
    {
      question: "Everyone at the concert ______ so happy. They are waving their cellphones and singing with the band.",
      correct_answer: "  is",
      incorrect_answers: ["  are", "  isn’t", "  aren’t"]
    },
    {
      question: "Miss Yu: Wake Kevin up. He is sleeping in class again.<br>Jason: OK. Let me wake________up.",
      correct_answer: "  him",
      incorrect_answers: ["  it", "  her", "  he"]
    },
    {
      question: "_______, look at your teacher and listen to her. Time for class.",
      correct_answer: "  Boys and girls",
      incorrect_answers: ["  Don’t", "  Let’s", "  Please"]
    },
    {
      question: "The cartoon “SLAM DUNK” is on TV ______ Monday______ Friday. I watch it every evening.<br> cartoon 卡通",
      correct_answer: "  from; to",
      incorrect_answers: ["  at; in", "  on; on", "  on; from"]
    },
    {
      question: "Look! The famous singer, Avril, ______ hands with her fans on the stage.  famous 有名的",
      correct_answer: "  is shaking",
      incorrect_answers: ["  shaking", "  are shaking", "  shake"]
    },
    {
      question: "Tina: Jenny and I are going to see a movie twenty minutes later. Are you coming together?<br>Tom: OK, I am free now. _______ meet her at the park. It’s near her house. She can get there very soon.",
      correct_answer: "  Let’s",
      incorrect_answers: ["  Please don’t", "  Let’s not", "  Don’t"]
    },
    {
      question: "Alice: Are you free ________?<br>Milly: Yes, I am. Do you have any good ideas?",
      correct_answer: "  today",
      incorrect_answers: ["  your birthday", "  eight p.m.", "  ten o’clock"]
    },
    {
      question: "Benson: What are you ______________?<br>Willy: My favorite song “Beautiful Sunday.”",
      correct_answer: "  listening to",
      incorrect_answers: ["  drawing", "  using", "  looking at"]
    },
    {
      question: "A: What ______ is it?<br>B: It’s five seventeen.",
      correct_answer: "  What time",
      incorrect_answers: ["  How", "  How old", "  What day"]
    },
    {
      question: "That singer’s meet-and-greet is ______ ten ______ Saturday morning.",
      correct_answer: "  on; at",
      incorrect_answers: ["  on; on", "  at; at", "  at; on"]
    },
    {
      question: "A: What day is the basketball game?<br>B: It’s ______ this Tuesday.",
      correct_answer: "  on",
      incorrect_answers: ["  at", "  X", "  in"]
    },
    {
      question: "A: What are you doing?<br>B: ______.",
      correct_answer: "  We are writing a report.",
      incorrect_answers: ["  We are free.", "  You can sing here.", "  The report is ready."]
    },
    {
      question: "A: What day is it today?<br>B: ______.",
      correct_answer: "  Isn’t it Monday?",
      incorrect_answers: ["  It’s on Sunday.", "  It’s six o’clock.", "  It’s a good day."]
    },
    {
      question: "Look! Ellen’s sister ______ now. She is a good singer.",
      correct_answer: "  is singing",
      incorrect_answers: ["  singing", "  are singing", "  sing"]
    },
    {
      question: "My two-year-old daughter can draw ______ a marker.",
      correct_answer: "  with",
      incorrect_answers: ["  to", "  for", "  at"]
    },
    {
      question: "The show is at six p.m. Let’s ______ late.",
      correct_answer: "  not",
      incorrect_answers: ["  don’t", "  no", "  not be"]
    },
    {
      question: "A: ______<br>B: He can sing.",
      correct_answer: "  What can he do?",
      incorrect_answers: ["  Who can do this?", "  Where can he go?", "  What can he sing?"]
    },
    {
      question: "A: Is Jenny at home?<br>B: Maybe she is. Her bag is on the sofa.",
      correct_answer: "  I’m not sure.",
      incorrect_answers: ["  Look at the sign.", "  Where is she now?", "  Please write down her name."]
    },
    {
      question: "A: ______<br>B: Sorry, I can’t. It’s your turn.",
      correct_answer: "  Can you wash the dog for me?",
      incorrect_answers: ["  Can you see me?", "  Can you wait for me here?", "  Can you wait for your turn?"]
    },
    {
      question: "Look at the picture on the right. The truck drivers delivered ________ and made sure they were fine.",
      correct_answer: "  goods",
      incorrect_answers: ["  channels", "  soldiers", "  success"]
    }, {
      question: "The Browns _____ in the living room when(當…) the mailman rang the doorbell yesterday.",
      correct_answer: "  were watching TV",
      incorrect_answers: ["  watch TV", "  watching TV", "  are watching TV"]
    },
    {
      question: "Stop _____ here, boys. You are giving me a headache. Now, go back to your room and read some books.",
      correct_answer: "  shouting",
      incorrect_answers: ["  to shout", "  shout", "  shouted"]
    },
    {
      question: "Everyone _____ for the relay race (大隊接力) because we all want to win.",
      correct_answer: "  keeps practicing",
      incorrect_answers: ["  need to practice", "  keep to practice", "  needs practicing"]
    },
    {
      question: "_____ up now. It’s seven thirty, and you are late for school again.",
      correct_answer: "  Get",
      incorrect_answers: ["  Getting", "  To get", "  Gets"]
    },
    {
      question: "_____ up early tomorrow morning, you need to go to bed now.",
      correct_answer: "  To get",
      incorrect_answers: ["  Getting", "  Get", "  Gets"]
    },
    {
      question: "_____ up early on cold days is not easy for my little brother.",
      correct_answer: "  Getting",
      incorrect_answers: ["  Get", "  To getting", "  Gets"]
    },
    {
      question: "Mom: It’s time for bed, Dan. Go brush your teeth and _____.<br>Dan: OK, Mom.",
      correct_answer: "  hit the sack",
      incorrect_answers: ["  hit the books", "  hit the road", "  hit the bottle"]
    },
    {
      question: "Choose the CORRECT sentence. (選出正確的句子).",
      correct_answer: "  J.K. Rowling’s books are popular all over the world.",
      incorrect_answers: [
        "  John hurted his right hand yesterday.",
        "  He needs to eat the medicine three times a day.",
        "  The water isn’t enough clean. Don’t drink it."
      ]
    },
    {
      question: "A: ______ is it?<br>B: It’s five seventeen.",
      correct_answer: "  What time",
      incorrect_answers: ["  How", "  How old", "  What day"]
    },
    {
      question: "That singer’s meet-and-greet is ______ ten ______ Saturday morning.",
      correct_answer: "  at; on",
      incorrect_answers: ["  on; on", "  at; at", "  on; at"]
    },
    {
      question: "A: What day is the basketball game?<br>B: It’s ______ this Tuesday.",
      correct_answer: "  X",
      incorrect_answers: ["  on", "  at", "  in"]
    },
    {
      question: "A: What are you doing?<br>B: ______.",
      correct_answer: "  We are writing a report.",
      incorrect_answers: [
        "  We are free.",
        "  You can sing here.",
        "  The report is ready."
      ]
    },
    {
      question: "A: What day is it today?<br>B: ______.",
      correct_answer: "  Isn’t it Monday?",
      incorrect_answers: [
        "  It’s on Sunday.",
        "  It’s six o’clock.",
        "  It’s a good day."
      ]
    },
    {
      question: "Look! Ellen’s sister ______ now. She is a good singer.",
      correct_answer: "  is singing",
      incorrect_answers: ["  singing", "  are singing", "  sing"]
    },
    {
      question: "My two-year-old daughter can draw ______ a marker.",
      correct_answer: "  with",
      incorrect_answers: ["  to", "  for", "  at"]
    },
    {
      question: "The show is at six p.m. Let’s ______ late.",
      correct_answer: "  not be",
      incorrect_answers: ["  not", "  don’t", "  no"]
    },
    {
      question: "A: ______<br>B: He can sing.",
      correct_answer: "  What can he do?",
      incorrect_answers: [
        "  Who can do this?",
        "  Where can he go?",
        "  What can he sing?"
      ]
    },
    {
      question: "A: Is Jenny at home?<br>B: ______ Her bag is on the sofa.",
      correct_answer: "  I’m not sure.",
      incorrect_answers: [
        "  Look at the sign.",
        "  Where is she now?",
        "  Please write down her name."
      ]
    },
    {
      question: "A: ______<br>B: Sorry, I can’t. It’s your turn.",
      correct_answer: "  Can you wash the dog for me?",
      incorrect_answers: [
        "  Can you see me?",
        "  Can you wait for me here?",
        "  Can you wait for your turn?"
      ]
    }
  ];

  const HanLinB4L3L4 = [
    {
      question: "Look at the picture on the right. The truck drivers delivered ________ and made sure they were fine.",
      correct_answer: "  goods",
      incorrect_answers: ["  channels", "  soldiers", "  success"]
    },
    {
      question: "King: Excuse me. I really have to go now. My son ______ for me at home.<br>Kelly: Sure, no problem. See you tomorrow!",
      correct_answer: "  is waiting",
      incorrect_answers: ["  was waiting", "  waits", "  waited"]
    },
    {
      question: "Ray _______ a shower when someone turned off the light. He was nervous and shouted for help.",
      correct_answer: "  was taking",
      incorrect_answers: ["  took", "  is taking", "  takes"]
    },
    {
      question: "Alien Huang, a famous singer in Taiwan, ______ on September 16th, 2020. Many people still can’t believe it.",
      correct_answer: "  died",
      incorrect_answers: ["  was dying", "  dies", "  die"]
    },
    {
      question: "Mr. Lin: Tim, why did you come to school so early today?<br>Tim: I didn’t finish _______ math, so I woke up early to prepare for the test.",
      correct_answer: "  studying",
      incorrect_answers: ["  to study", "  studied", "  study"]
    },
    {
      question: "It’s important not to eat junk food. Eating more vegetables _______ you healthy.",
      correct_answer: "  keeps",
      incorrect_answers: ["  keep", "  keeping", "  to keep"]
    },
    {
      question: "Kidd: Are you excited about the camping next February?<br>Joanne: Of course! _____ always fun to go out with everybody.",
      correct_answer: "  It is",
      incorrect_answers: ["  That is", "  There is", "  I am"]
    },
    {
      question: "When Mr. Chung was young, ________ baseball was his favorite hobby. Now, he is still a big fan of Brothers.",
      correct_answer: "  watching",
      incorrect_answers: ["  watch", "  watched", "  watches"]
    },
    {
      question: "The English singing contest is coming next week. We need ________ after school.",
      correct_answer: "  to practice",
      incorrect_answers: ["  practicing", "  to be practiced", "  practiced"]
    },
    {
      question: "Eric: Did you watch the movie Demon Slayer: Mugen Train? It was on TV at ________ this afternoon.<br>Evelyn: No, I didn’t. I studied at the library all afternoon. When I left, it was already ten to eight.",
      correct_answer: "  five to ten",
      incorrect_answers: ["  five to twelve", "  half past nine", "  half past five"]
    },
    {
      question: "Alice: Noah, thank you for _____ a true friend when I have a very hard time.<br>Noah: You’re welcome. That’s what friends are for!",
      correct_answer: "  being",
      incorrect_answers: ["  be", "  to be", "  been"]
    },
    {
      question: "Daniel: Who left the trash here?<br>Mike: A few students _______ here at this time yesterday. I think it was them.",
      correct_answer: "  were eating",
      incorrect_answers: ["  eat", "  was eating", "  eats"]
    },
    {
      question: "Karen: My mom always tells me, “It’s not good ________ yourself for someone else.”<br>Ms. Lin: I agree. Sometimes, we should follow our own way.",
      correct_answer: "  to change",
      incorrect_answers: ["  to be changed", "  changing", "  change"]
    },
    {
      question: "Lily: What was Jessie doing during cleaning time yesterday?<br>Anita: She ______ the window.",
      correct_answer: "  was wiping",
      incorrect_answers: ["  is wiping", "  wipes", "  wipe"]
    },
    {
      question: "After Emily watched a video about Kinmen, she was surprised by the beautiful view and _______ there in winter vacation.",
      correct_answer: "  hoped to visit",
      incorrect_answers: ["  learned to visit", "  hated to visit", "  stopped to visit"]
    },
    {
    question: "Look at the picture on the right. The truck drivers delivered ________ and made sure they were fine.",
    correct_answer: "  goods",
    incorrect_answers: ["  channels", "  soldiers", "  success"]
  },
  {
    question: "King: Excuse me. I really have to go now. My son ______ for me at home.<br>Kelly: Sure, no problem. See you tomorrow!",
    correct_answer: "  is waiting",
    incorrect_answers: ["  was waiting", "  waits", "  waited"]
  },
  {
    question: "Ray _______ a shower when someone turned off the light. He was nervous and shouted for help.",
    correct_answer: "  was taking",
    incorrect_answers: ["  took", "  is taking", "  takes"]
  },
  {
    question: "Alien Huang, a famous singer in Taiwan, ______ on September 16th, 2020. Many people still can’t believe it.",
    correct_answer: "  died",
    incorrect_answers: ["  was dying", "  dies", "  die"]
  },
  {
    question: "Mr. Lin: Tim, why did you come to school so early today?<br>Tim: I didn’t finish _______ math, so I woke up early to prepare for the test.",
    correct_answer: "  studying",
    incorrect_answers: ["  to study", "  studied", "  study"]
  },
  {
    question: "It’s important not to eat junk food. Eating more vegetables _______ you healthy.",
    correct_answer: "  keeps",
    incorrect_answers: ["  keep", "  keeping", "  to keep"]
  },
  {
    question: "Kidd: Are you excited about the camping next February?<br>Joanne: Of course! _____ always fun to go out with everybody.",
    correct_answer: "  It is",
    incorrect_answers: ["  That is", "  There is", "  I am"]
  },
  {
    question: "When Mr. Chung was young, ________ baseball was his favorite hobby. Now, he is still a big fan of Brothers.",
    correct_answer: "  watching",
    incorrect_answers: ["  watch", "  watched", "  watches"]
  },
  {
    question: "The English singing contest is coming next week. We need ________ after school.",
    correct_answer: "  to practice",
    incorrect_answers: ["  practicing", "  to be practiced", "  practiced"]
  },
  {
    question: "Eric: Did you watch the movie Demon Slayer: Mugen Train? It was on TV at ________ this afternoon.<br>Evelyn: No, I didn’t. I studied at the library all afternoon. When I left, it was already ten to eight.",
    correct_answer: "  five to ten",
    incorrect_answers: ["  five to twelve", "  half past nine", "  half past five"]
  },
  {
    question: "Alice: Noah, thank you for _____ a true friend when I have a very hard time.<br>Noah: You’re welcome. That’s what friends are for!",
    correct_answer: "  being",
    incorrect_answers: ["  be", "  to be", "  been"]
  },
  {
    question: "Daniel: Who left the trash here?<br>Mike: A few students _______ here at this time yesterday. I think it was them.",
    correct_answer: "  were eating",
    incorrect_answers: ["  eat", "  was eating", "  eats"]
  },
  {
    question: "Karen: My mom always tells me, “It’s not good ________ yourself for someone else.”<br>Ms. Lin: I agree. Sometimes, we should follow our own way.",
    correct_answer: "  to change",
    incorrect_answers: ["  to be changed", "  changing", "  change"]
  },
  {
    question: "Lily: What was Jessie doing during cleaning time yesterday?<br>Anita: She ______ the window.",
    correct_answer: "  was wiping",
    incorrect_answers: ["  is wiping", "  wipes", "  wipe"]
  },
  {
    question: "After Emily watched a video about Kinmen, she was surprised by the beautiful view and _______ there in winter vacation.",
    correct_answer: "  hoped to visit",
    incorrect_answers: ["  learned to visit", "  hated to visit", "  stopped to visit"]
  },
  {
    question: "Miss Lin: _____ you cleaning the classroom at seven twenty this morning?<br>Ben: Yes, I was.",
    correct_answer: "  Were",
    incorrect_answers: ["  Was", "  Did", "  Are"]
  },
  {
    question: "_____ English songs is one of the good ways to learn English.",
    correct_answer: "  Listening to",
    incorrect_answers: ["  Listen", "  To listen", "  Listening"]
  },
  {
    question: "Gina enjoys _____ Chinese, and she wants ______ a great teacher like Confucius.",
    correct_answer: "  teaching; to be",
    incorrect_answers: ["  teaching; being", "  to teach; to be", "  to teach; being"]
  },
  {
    question: "Do you have any plan ______ the weekend? I am thinking about ______ a movie on Sunday.",
    correct_answer: "  for; to see",
    incorrect_answers: ["  on; to see", "  on; go to", "  for; seeing"]
  },
  {
    question: "Thank you for _____ so many clothes to us. That’s very kind _____ you.",
    correct_answer: "  donating; of",
    incorrect_answers: ["  send; for", "  buying; of", "  to give; for"]
  },
  {
    question: "Look at the picture on the right. The truck drivers delivered ________ and made sure they were fine.",
    correct_answer: "  goods",
    incorrect_answers: ["  channels", "  soldiers", "  success"]
  },
  {
    question: "King: Excuse me. I really have to go now. My son ______ for me at home.<br>Kelly: Sure, no problem. See you tomorrow!",
    correct_answer: "  is waiting",
    incorrect_answers: ["  was waiting", "  waits", "  waited"]
  },
  {
    question: "Ray _______ a shower when someone turned off the light. He was nervous and shouted for help.",
    correct_answer: "  was taking",
    incorrect_answers: ["  took", "  is taking", "  takes"]
  },
  {
    question: "Alien Huang, a famous singer in Taiwan, ______ on September 16th, 2020. Many people still can’t believe it.",
    correct_answer: "  died",
    incorrect_answers: ["  was dying", "  dies", "  die"]
  },
  {
    question: "Mr. Lin: Tim, why did you come to school so early today?<br>Tim: I didn’t finish _______ math, so I woke up early to prepare for the test.",
    correct_answer: "  studying",
    incorrect_answers: ["  to study", "  studied", "  study"]
  },
  {
    question: "It’s important not to eat junk food. Eating more vegetables _______ you healthy.",
    correct_answer: "  keeps",
    incorrect_answers: ["  keep", "  keeping", "  to keep"]
  },
  {
    question: "Kidd: Are you excited about the camping next February?<br>Joanne: Of course! _____ always fun to go out with everybody.",
    correct_answer: "  It is",
    incorrect_answers: ["  That is", "  There is", "  I am"]
  },
  {
    question: "When Mr. Chung was young, ________ baseball was his favorite hobby. Now, he is still a big fan of Brothers.",
    correct_answer: "  watching",
    incorrect_answers: ["  watch", "  watched", "  watches"]
  },
  {
    question: "The English singing contest is coming next week. We need ________ after school.",
    correct_answer: "  to practice",
    incorrect_answers: ["  practicing", "  to be practiced", "  practiced"]
  },
  {
    question: "Eric: Did you watch the movie Demon Slayer: Mugen Train? It was on TV at ________ this afternoon.<br>Evelyn: No, I didn’t. I studied at the library all afternoon. When I left, it was already ten to eight.",
    correct_answer: "  five to ten",
    incorrect_answers: ["  five to twelve", "  half past nine", "  half past five"]
  },
  {
    question: "Alice: Noah, thank you for _____ a true friend when I have a very hard time.<br>Noah: You’re welcome. That’s what friends are for!",
    correct_answer: "  being",
    incorrect_answers: ["  be", "  to be", "  been"]
  },
  {
    question: "Daniel: Who left the trash here?<br>Mike: A few students _______ here at this time yesterday. I think it was them.",
    correct_answer: "  were eating",
    incorrect_answers: ["  eat", "  was eating", "  eats"]
  },
  {
    question: "Karen: My mom always tells me, “It’s not good ________ yourself for someone else.”<br>Ms. Lin: I agree. Sometimes, we should follow our own way.",
    correct_answer: "  to change",
    incorrect_answers: ["  to be changed", "  changing", "  change"]
  },
  {
    question: "Lily: What was Jessie doing during cleaning time yesterday?<br>Anita: She ______ the window.",
    correct_answer: "  was wiping",
    incorrect_answers: ["  is wiping", "  wipes", "  wipe"]
  },
  {
    question: "After Emily watched a video about Kinmen, she was surprised by the beautiful view and _______ there in winter vacation.",
    correct_answer: "  hoped to visit",
    incorrect_answers: ["  learned to visit", "  hated to visit", "  stopped to visit"]
  },
  {
    question: "Miss Lin: _____ you cleaning the classroom at seven twenty this morning?<br>Ben: Yes, I was.",
    correct_answer: "  Were",
    incorrect_answers: ["  Was", "  Did", "  Are"]
  },
  {
    question: "_____ English songs is one of the good ways to learn English.",
    correct_answer: "  Listening to",
    incorrect_answers: ["  Listen", "  To listen", "  Listening"]
  },
  {
    question: "Gina enjoys _____ Chinese, and she wants ______ a great teacher like Confucius.",
    correct_answer: "  teaching; to be",
    incorrect_answers: ["  teaching; being", "  to teach; to be", "  to teach; being"]
  },
  {
    question: "Do you have any plan ______ the weekend? I am thinking about ______ a movie on Sunday.",
    correct_answer: "  for; to see",
    incorrect_answers: ["  on; to see", "  on; go to", "  for; seeing"]
  },
  {
    question: "Thank you for _____ so many clothes to us. That’s very kind _____ you.",
    correct_answer: "  donating; of",
    incorrect_answers: ["  send; for", "  buying; of", "  to give; for"]
  },{
    question: "Eating vegetables and getting enough sleep _____ good _____ your health.",
    correct_answer: "  is; for",
    incorrect_answers: ["  is; at", "  are; for", "  are; at"]
  },
  {
    question: "The teacher told his students _____ the art works(藝術品) in the museum.",
    correct_answer: "  not to touch",
    incorrect_answers: ["  don’t touch", "  not touching", "  no touch"]
  },
  {
    question: "The Browns _____ in the living room when the mailman rang the doorbell yesterday.",
    correct_answer: "  were watching TV",
    incorrect_answers: ["  watch TV", "  watching TV", "  are watching TV"]
  },
  {
    question: "Stop _____ here, boys. You are giving me a headache. Now, go back to your room and read some books.",
    correct_answer: "  shouting",
    incorrect_answers: ["  to shout", "  shout", "  shouted"]
  },
  {
    question: "Everyone _____ for the relay race (大隊接力) because we all want to win.",
    correct_answer: "  keeps practicing",
    incorrect_answers: ["  need to practice", "  keep to practice", "  needs practicing"]
  },
  {
    question: "_____ up now. It’s seven thirty, and you are late for school again.",
    correct_answer: "  Get",
    incorrect_answers: ["  Getting", "  To get", "  Gets"]
  },
  {
    question: "_____ up early tomorrow morning, you need to go to bed now.",
    correct_answer: "  To get",
    incorrect_answers: ["  Getting", "  Get", "  Gets"]
  },
  {
    question: "_____ up early on cold days is not easy for my little brother.",
    correct_answer: "  Getting",
    incorrect_answers: ["  Get", "  To getting", "  Gets"]
  },
  {
    question: "Mom: It’s time for bed, Dan. Go brush your teeth and _____.<br>Dan: OK, Mom.",
    correct_answer: "  hit the sack",
    incorrect_answers: ["  hit the books", "  hit the road", "  hit the bottle"]
  },
  {
    question: "Choose the CORRECT sentence. (選出正確的句子)",
    correct_answer: "  J.K. Rowling’s books are popular all over the world.",
    incorrect_answers: [
      "  John hurted his right hand yesterday.",
      "  He needs to eat the medicine three times a day.",
      "  The water isn’t enough clean. Don’t drink it."
    ]
  },
  {
    question: "My family were having dinner when the bad guy __________ in the restaurant. I often think of that scary moment now.",
    correct_answer: " went",
    incorrect_answers: ["  was going", "  goes", "  is going"]
  },
  {
    question: "Samuel: Start your car now. The show is at 7:20. We’re late.<br>Roger: Be cool! It’s __________. We have thirty minutes before it starts.",
    correct_answer: " ten to seven",
    incorrect_answers: ["  a quarter to eight", "  twenty after six", "  seven o’clock"]
  },
  {
    question: "__________ a lot of fun for students to camp in the mountains with classmates or friends.",
    correct_answer: "  It is",
    incorrect_answers: ["  They are", "  This is", "  We have"]
  },
  {
    question: "Sandy: When the earthquake happened, Dad and I were at home. Where were you?<br>Tim: On the street. I __________ home then and saw the shaking buildings and trees around me. That was terrible.",
    correct_answer: "  was going",
    incorrect_answers: ["  went", "  go", "  am going"]
  },
  {
    question: "__________ a successful singer was always Stefani’s dream, and she worked so hard for it.",
    correct_answer: "  Being",
    incorrect_answers: ["  Doing", "  Became", "  To make"]
  },
  {
    question: "Scott: Do you need some water? You have a __________ in your throat.<br>Julian: Yes. Thanks. I sang with my friends all night long and lost my voice.",
    correct_answer: "  frog",
    incorrect_answers: ["  sheep", "  pumpkin", "  boss"]
  },
  {
    question: "__________ lending your hand to others, and __________ friends may not be that hard for you.",
    correct_answer: "  Try; making",
    incorrect_answers: ["  Enjoy; make", "  Trying; making", "  To enjoy; to make"]
  },
  {
    question: "A windy October is a great time for ___________ kites with the kids in your family.",
    correct_answer: "  to fly",
    incorrect_answers: ["  fly", "  flying", "  flies"]
  }

  ];
  
