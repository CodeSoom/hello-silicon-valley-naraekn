// TODO: Decide which file type is better - .json / .js

const questionnaire = [
  {
    id: 1,
    previousId: null,
    nextId: 2,
    type: 'overview',
    content: {
      title: 'Day1,',
      explanation: '오늘은 샌프란시스코로 ~',
    },
  },
  {
    id: 2,
    previousId: 1,
    nextId: 3,
    type: 'question',
    content: {
      question: '샌프란시스코 Golden Gate Bridge에서 만난 이상형. 당장이라도 사랑에 빠질 것 같아요 ! 그 사람은 어떤 스타일일까요 ? ',
      answers: [
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
    type: 'question',
    content: {
      question: '그 / 그녀와의 데이트 전날, 당신은 무엇을 하고 있을까요?',
      answers: [
        { id: 1, title: '취향 사전 조사를 하고 둘다 만족할 수 있는 장소를 찾아 제시한다' },
        { id: 2, title: '평소 내가 눈여겨뒀던 곳을 권유한다' },
        { id: 3, title: '가까우면서도 리뷰가 좋은 곳으로 간다' },
        { id: 4, title: '우선 만나고 생각해보자.' },
      ],
    },
  },
  {
    id: 4,
    previousId: 3,
    nextId: 5,
    type: 'overview',
    content: {
      title: 'Day2,',
      explanation: '오늘은 산호세에 스타트업 founter들의 네트워킹 파티가 열렸 ~',
    },
  },
  {
    id: 5,
    previousId: 4,
    nextId: null,
    type: 'question',
    content: {
      question: '투자자 앞에서 피칭을 합니다 당신은 무엇을 내세우시겠습니까',
      answers: [
        { id: 1, title: '저희는 이 팀과 비전 하나만 보고 달려요. 세상을 변화시키고 싶지 않나요?' },
        { id: 2, title: '고객들을 만나본 결과 우리의 아이템이 없어서는 안된다고 생각합니다.' },
        { id: 3, title: '저는 이 시장을 독점할 수 있는 전문가입니다. 절 전적으로 믿으세요~' },
        { id: 4, title: '그 길을 아는 것과 그 길을 걷는 것은 다릅니다. 저는 이 길을 선구하고 개척하겠습니다.' },
      ],
    },
  },
];

export default questionnaire;
