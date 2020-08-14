const questionnaire = [
  {
    id: 1,
    previousId: null,
    nextId: 2,
    type: 'overview',
    content: {
      title: 'Day1. In_Sanfrancisco',
      explanation: '스탠포드대학교를 갓 졸업한 당신! 미래에 대한 부푼 꿈과 기대를 안고, 나를 위한 졸업선물로 샌프란시스코를 여행하게 됩니다. 🥳',
      tips: [
        '# 실리콘밸리는 미국 캘리포니아 주의 샌프란시스코 만을 둘러싼 지역으로, 세계 최대의 기술 연구가 활발한 창업의 성지에요!',
        '# 스탠포드 대학교는 실리콘밸리 기업에게 새롭고 젊은 피를 공급하는 대표적인 명문 대학이에요.',
      ],
    },
  },
  {
    id: 2,
    previousId: 1,
    nextId: 3,
    type: 'question',
    content: {
      title: 'Question1',
      question: '샌프란시스코 Golden Gate Bridge에서 만난 이상형. 당장이라도 사랑에 빠질 것 같아요 ! 그 사람은 어떤 스타일일까요 ? ',
      options: [
        { id: 1, title: '자기 주관이 뚜렷하며 주도적으로 나를 리드하는, 똑소리 나는 프로페셔널' },
        { id: 2, title: '믿음직하고 성실하며 나를 위해 한 몸 바치는, 츤데레 진국 ' },
        { id: 3, title: '어딘가 모르게 끌리는 신비로운 분위기, 스타일리시한 멋쟁이' },
        { id: 4, title: '애정 어린 눈으로 나를 바라보는 애교쟁이, 다정다감 표현왕' },
      ],
    },
  },
  {
    id: 3,
    previousId: 2,
    nextId: 4,
    type: 'question-with-images',
    content: {
      title: 'Question2',
      question: '그 사람과 함께 간 데이트 명소는 어디인가요?',
      options: [
        { id: 1, title: '샌프란시스코의 지중해! 휴양과 예술이 가득한 마을 ‘소살리토’' },
        { id: 2, title: '쇼핑하면서 나와 취향이 맞는지 알아보자! ‘유니온 스퀘어’' },
        { id: 3, title: '바다와 주상절리를 보며 조용히 자연을 즐길 수 있는 ‘하프문 베이’' },
        { id: 4, title: '먹는게맞아야해~풍미가득한와인과음식을즐길수있는‘피어39’' },
      ],
      tags: ['소살리토', '유니온_스퀘어', '하프문_베이', '피어39'],
    },
  },
  {
    id: 4,
    previousId: 3,
    nextId: 5,
    type: 'overview',
    content: {
      title: 'Day2. Networking_Party_In_SanJose',
      explanation: '오늘은 산호세에 스타트업 founter들의 네트워킹 파티가 열렸 ~',
      tips: [
        '# 산호세란~',
      ],
    },
  },
  {
    id: 5,
    previousId: 4,
    nextId: null,
    type: 'question',
    content: {
      title: 'Question3',
      question: '투자자 앞에서 피칭을 합니다 당신은 무엇을 내세우시겠습니까',
      options: [
        { id: 1, title: '저희는 이 팀과 비전 하나만 보고 달려요. 세상을 변화시키고 싶지 않나요?' },
        { id: 2, title: '고객들을 만나본 결과 우리의 아이템이 없어서는 안된다고 생각합니다.' },
        { id: 3, title: '저는 이 시장을 독점할 수 있는 전문가입니다. 절 전적으로 믿으세요~' },
        { id: 4, title: '그 길을 아는 것과 그 길을 걷는 것은 다릅니다. 저는 이 길을 선구하고 개척하겠습니다.' },
      ],
    },
  },
];

export default questionnaire;
