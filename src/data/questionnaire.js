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
      question: '샌프란시스코 Golden Gate Bridge에서 만난 이상형. 당장이라도 사랑에 빠질 것 같아요! 그 사람은 어떤 스타일일까요?',
      options: [
        { id: 1, title: '자기 주관이 뚜렷하며 나를 주도적으로 리드하는 적극러' },
        { id: 2, title: '믿음직하고 성실하며 나를 위해 헌신하는 속깊은 진국' },
        { id: 3, title: '어딘가 모르게 끌리는 신비로운 분위기, 스타일리시한 멋쟁이' },
        { id: 4, title: '애정 어린 눈으로 나를 바라보는 다정다감한 표현왕' },
      ],
    },
  },
  {
    id: 3,
    previousId: 2,
    nextId: 4,
    type: 'question',
    content: {
      title: 'Question2',
      question: '두근두근. 그 사람과 데이트 하러 가는 길!! 101 도로를 타고 약속 장소로 가는데, 차가 엄청나게 막힌다!',
      options: [
        { id: 1, title: '나의 쿨하고 힙한 자율주행자동차의 ‘The shortest path (가장 빠른 길) ‘기능을 사용한다. 그리고 난 잔다. Zzz' },
        { id: 2, title: '“무슨 일이 있어도 시간 약속은 지켜야지” 애초에 이 상황을 대비해서 빨리 나왔어~' },
        { id: 3, title: '“하하~ 괜찮아!” 차가 막혀도 긍정적인 자세를 보이며 주변 친구들에게도 지금 도로가 막힌다는 사실을 공유한다.' },
        { id: 4, title: '“어떻게 하면 101 도로가 막히지 않을까?’ 이 와중에 문제를 해결할 방법을 상상한다.' },
      ],
    },
  },
  {
    id: 4,
    previousId: 3,
    nextId: 5,
    type: 'question',
    content: {
      title: 'Question3',
      question: '겨우겨우 도착했더니... 그 사람은 지각이라네요!^^ 이때 나의 반응은요?',
      options: [
        { id: 1, title: '‘응 괜찮아! 조심히 와~’ 연락만 준다면 언제나 널 기다릴게!' },
        { id: 2, title: '‘어떻게 오면 빨리 오게 할 수 있을까?’ 다음부터는 직접 알람 역할을 하기로 한다.' },
        { id: 3, title: '‘다음부터 늦으면 이렇게 할거야~’ 시간 엄수에 대한 질서를 만든다.' },
        { id: 4, title: '두 세번 웃으며 경고를 주다가 빠른 손절을 결심한다.' },
      ],
    },
  },
  {
    id: 5,
    previousId: 4,
    nextId: 6,
    type: 'question',
    content: {
      title: 'Question4',
      question: '그 사람과 함께 간 데이트 명소는 어디인가요?',
      options: [
        { id: 1, title: '샌프란시스코의 지중해! 휴양과 예술이 가득한 마을 ‘소살리토’' },
        { id: 2, title: '쇼핑하면서 나와 취향이 맞는지 알아보자! ‘유니온 스퀘어’' },
        { id: 3, title: '바다와 주상절리를 보며 조용히 자연을 즐길 수 있는 ‘하프문 베이’' },
        { id: 4, title: '먹는 게 맞아야 해~ 풍미 가득한 와인과 음식을 즐길 수 있는 ‘피어 39’' },
      ],
    },
  },
  {
    id: 6,
    previousId: 5,
    nextId: 7,
    type: 'overview',
    content: {
      title: 'Day2. My_Company_Life',
      explanation: '인생2막 ! 어느 회사의 신입사원이 되었다!',
      tips: [],
    },
  },
  {
    id: 7,
    previousId: 6,
    nextId: 8,
    type: 'question',
    content: {
      title: 'Question5',
      question: '학교 선배의 추천으로 한 회사의 최종면접까지 간 당신. 이 회사에 마지막으로 남길 당찬 포부는요?',
      options: [
        { id: 1, title: '바람이 불지 않으면 노를 저어라! 믿음직하고 성실한 일꾼이 되겠습니다!' },
        { id: 2, title: '저는 팀프로젝트의 왕입니다. 저의 커뮤니케이션 능력과 협업능력을 믿으세요.' },
        { id: 3, title: '저의 뛰어난 실력으로 항상 최고의 성과를 내겠습니다. 그야 전 짱이니까요?' },
        { id: 4, title: '실패도 두렵지 않습니다. 저의 도전정신으로 새로운 혁신을 일으키겠습니다!' },
      ],
    },
  },
  {
    id: 8,
    previousId: 7,
    nextId: 9,
    type: 'question',
    content: {
      title: 'Question6',
      question: '축하합니다. 최종 합격입니다!! 첫 프로젝트를 시작한 당신. 미팅 중 당신은 어떤 역할을 맡았을까?',
      options: [
        { id: 1, title: '다양하고 창의적인 발상을 이끌어내는 아이디어 뱅크' },
        { id: 2, title: '회의 내용을 기록하고, 시간을 관리하며, 현실적인 대안을 내는 서포터' },
        { id: 3, title: '자신의 생각을 논리적이고 분석적으로 주장하는 스피커' },
        { id: 4, title: '회의를 주도적으로 이끌고 의견을 수렴하여 방향성을 제시하는 리더' },
      ],
    },
  },
  {
    id: 9,
    previousId: 8,
    nextId: 10,
    type: 'question',
    content: {
      title: 'Question7',
      question: '오늘은 친절하고 다정한 인사팀의 헤일리와 점심을 먹기로 했어요. 당신이 중요시 여기는 직업 가치관이 무엇인지 물어봅니다.',
      options: [
        { id: 1, title: '‘최고의 성과를 낼테니 그냥 돈으로 보상해주세요 (찡긋)’ 보수와 능력발휘' },
        { id: 2, title: '‘행복하게 즐겁게 살자고 일하는 거 아니겠습니까~’ 자기계발과 워라밸' },
        { id: 3, title: '‘항상 나만의 새로운 방식대로 일해보고 싶었어요~!’ 자율성과 창의성' },
        { id: 4, title: '‘뜻을 같이할 사람과 함께라면 가슴이 웅장해져요...ㅠㅠ’ 나의 비전과 동료' },
      ],
    },
  },
  {
    id: 10,
    previousId: 9,
    nextId: 11,
    type: 'question',
    content: {
      title: 'Question8',
      question: '기나긴 회사생활 후 돌아온 황금주말! 실리콘밸리의 한인들과 즐거운 활동을 해요!',
      options: [
        { id: 1, title: '위워크에서 열리는 유명한 셀럽들의 강연회에 참석한다.' },
        { id: 2, title: '홀리스터에서 스카이다이빙을 한다!' },
        { id: 3, title: '산타클라라 도서관에서 독서 모임을 갖는다!' },
        { id: 4, title: '산호세 다운타운 바에서 맥주파티를 벌인다!' },
      ],
    },
  },
  {
    id: 11,
    previousId: 10,
    nextId: 12,
    type: 'overview',
    content: {
      title: 'Day3. Silicon_Valley_Is_Here',
      explanation: '벌써부터 퇴사가 고픈 당신, 우연히 참석한 네트워킹 파티에서 동기부여를 심하게 얻어버렸다...당신은 결국 돌연 창업을 하게 되는데...(갑자기!?)',
      tips: [],
    },
  },
  {
    id: 12,
    previousId: 11,
    nextId: 13,
    type: 'question',
    content: {
      title: 'Question9',
      question: '산 호세에서 스타트업 founder들의 네트워킹 파티가 열렸대요! 당신이 가장 먼저 든 생각은 무엇일까요?',
      options: [
        { id: 1, title: '‘두근두근!’ 많은 사람들과의 교류할 생각에 마냥 가슴이 설레인다.' },
        { id: 2, title: '‘어떤 사람들이 모였지?’ 모임에 오기로 한 사람들의 프로필을 분석한다.' },
        { id: 3, title: '‘뭐든 익사이팅한게 최고’ 전체적인 행사 스케줄, 맛있는 핑거푸드와 사은품도 기대해^^' },
        { id: 4, title: '‘작년에는 어떻게 진행되었지?’ 이 모임이 유익했다는 확실한 후기와 데이터를 찾아본다.' },
      ],
    },
  },
  {
    id: 13,
    previousId: 12,
    nextId: 14,
    type: 'question',
    content: {
      title: 'Question10',
      question: '네트워킹 파티에서 만난 창업자들의 기업가정신 마인드셋과 그 세계에 푹 빠져버린 당신.. 결국 당신은 퇴사를 하고 창업을 합니다! 당신이 만든 이 회사의 비전은 무엇일까요?',
      options: [
        { id: 1, title: 'Why not change the World?' },
        { id: 2, title: 'Creation Beyond Technology.' },
        { id: 3, title: 'Always a Better way.' },
        { id: 4, title: 'Make Difference.' },
      ],
    },
  },
  {
    id: 14,
    previousId: 13,
    nextId: 15,
    type: 'question',
    content: {
      title: 'Question11',
      question: '당신이 만든 회사는 어떤 회사입니까?',
      options: [
        { id: 1, title: '기술! 혁신! 새로운 기술력으로 승부하는 회사' },
        { id: 2, title: '사용자! 경험! 사용자의 라이프스타일을 바꾸어 놓는 회사' },
        { id: 3, title: '신박한! 아이디어! 반짝이는 아이디어로 승부하는 회사' },
        { id: 4, title: '정보의! 홍수! 유의미한 데이터를 바탕으로 새로운 가치를 창출하는 회사' },
      ],
    },
  },
  {
    id: 15,
    previousId: 14,
    nextId: 16,
    type: 'question',
    content: {
      title: 'Question12',
      question: '투자자 앞에서 피칭을 합니다! 무엇을 어필할까요?',
      options: [
        { id: 1, title: '저희는 이 비전 하나만 보고 달려요. 저희의 비전을 듣고 가슴이 뛰지 않나요!' },
        { id: 2, title: '고객들을 만나본 결과 우리의 아이템이 없어서는 절대절대 안된다고 생각했어요.' },
        { id: 3, title: '저는 이 시장을 독점할 수 있다고 자부합니다. 그 근거는 어쩌고 저쩌고~' },
        { id: 4, title: '그 길을 아는 것과 그 길을 걷는 것은 다르지요. 저는 끝내 이 길을 선구할 것 입니다.' },
      ],
    },
  },
  {
    id: 16,
    previousId: 15,
    nextId: 17,
    type: 'question',
    content: {
      title: 'Question13',
      question: '회사에 위기가 찾아오고 말았다. (쿠궁) 어떻게 극복해나갈 것인가요?',
      options: [
        { id: 1, title: '‘You’re fired.’ 무능한 직원부터 짜른다.' },
        { id: 2, title: '회사 내 재무상태를 파악한 후 낭비되는 비용을 절감하고 자금을 확보한다.' },
        { id: 3, title: '우리 비즈니스 아이템을 사람들이 좋아할 만 하게 개선한다.' },
        { id: 4, title: '물불 가리지 않고 투잡을 뛰어서라도 어떻게든 회사를 살려낼 방법을 찾는다.' },
      ],
    },
  },
  {
    id: 17,
    previousId: 16,
    nextId: null,
    type: 'question',
    content: {
      title: 'Question14',
      question: '모든 고난과 어려움을 극복하고 세계 최고 유수의 실리콘밸리 기업으로 회사를 키워놓은 자수성가한 당신, 난 늙었다. 이제 은퇴할 때가 다 됐어. 회사를 맡겨야 해. 어떤 사람에게 넘길까?',
      options: [
        { id: 1, title: '강력한 리더십과 냉철한 판단력을 가졌지만 히스테리가 심한 리암' },
        { id: 2, title: '창의적이고 도전적이지만 어디로 튈지 모르는 충동적 일 벌리기 대장 에밋 ' },
        { id: 3, title: '동료애가 강하고 팀원들의 성장을 도모하지만 언제나 우유부단한 브랜든' },
        { id: 4, title: '한 분야에 전문가이고 천재성이 뛰어나지만 소통이 불가한 개인주의자 도미닉' },
      ],
    },
  },
];

export default questionnaire;
