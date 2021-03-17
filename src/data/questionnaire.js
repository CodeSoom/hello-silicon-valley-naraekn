const questionnaire = [
  {
    id: 1,
    previousId: null,
    nextId: 2,
    type: 'overview',
    content: {
      title: 'Day1. 집사와의 만남',
      explanation: '이제 막 고양이의 삶을 시작한 당신. 자신이 집사를 자처하는 낯선 사람을 만났습니다. 과연 잘지낼 수 있을까요? 🥳',
      tips: [
        '# 당신은 이제 부터 고양이',
        '# 그것도 아기 고양이',
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
      question: '처음 보는 환경! 처음 보는 사람! 나는 과연 어떻게 행동할까요?',
      options: [
        { id: 1, title: '"야옹 야옹-" 반갑다 새로운 집사냥이! 인사한다.' },
        { id: 2, title: '집사에게 다가가 머리를 부비적댄다.' },
        { id: 3, title: '천천히 그리고 조용히 집사를 관찰한다.' },
        { id: 4, title: '낯설어서 일단 숨을 곳을 찾아본다.' },
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
      question: '새로운 환경이 정신 없다가도 문득 허기짐이 느껴졌어요.',
      options: [
        { id: 1, title: '집사에게 달려가 있는 힘껏 애정표현 해본다.' },
        { id: 2, title: '“냥 냐냐냥!”  집사에게 전해질 때 까지 말해본다.' },
        { id: 3, title: '조용히 집사를 계속 바라보며 아이컨택을 시도한다.' },
        { id: 4, title: '집사에게 달려가서 “냥냥 펀치!”를 시전한다.' },
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
      question: '배고파 하는걸 눈치챈 집사가 다가와서 사료를 챙겨주었어요. ',
      options: [
        { id: 1, title: '“배고프다 냥!” 일단 달려가서 허겁지겁 먹는다.' },
        { id: 2, title: '배는 고프지만 고고한 자세를 유지하며 먹는다.' },
        { id: 3, title: '“이 사료에는 뭐가 들었을까냥?” 맛을 음미하며 먹는다.' },
        { id: 4, title: '“저리 가라냥!” 친해질 때 까지 숨어있다가 먹는다.' },
      ],
    },
  },
  {
    id: 5,
    previousId: 4,
    nextId: null,
    type: 'question',
    content: {
      title: 'Question4',
      question: '몸이 근질근질하던 참에 집사가 어떤 막대기를 흔들자 내 몸에서 어떤 욕구가 생겼어요. 어떤 욕구일까요?',
      options: [
        { id: 1, title: '“사냥감이다냥!!” 흥분하며 달려가서 씹고 뜯고 맛보고 즐긴다.' },
        { id: 2, title: '장난감에 달려가서 적당히 놀아주는 척 해준다.' },
        { id: 3, title: '조용히 엎드려서 사냥감을 관찰하다가 낚아챈다.' },
        { id: 4, title: '“집사가 더 좋다냥!” 사냥감을 무시하고 집사에게 달려간다.' },
      ],
    },
  },
  {
    id: 6,
    previousId: 5,
    nextId: 7,
    type: 'overview',
    content: {
      title: 'Day2. Welcome_To_Real_Valley',
      explanation: `
        어느 회사의 햇병아리 신입사원이 되었습니다. 
        내 몸에 딱 맞는 핏의 캐주얼 룩과, 
        아이스 아메리카노 한 잔, 맥북을 들고.
        기대반 걱정반 떨리는 마음으로 첫 출근을 하게 되는데..!
      `,
      tips: [
        '# 실리콘밸리는 ‘Bay area’ 라는 제 2의 별명을 가졌답니다!',
        '# ‘Bay area k group’ 이라는 한인 네트워크가 있으며, 한인들과 여러가지 취미 활동을 즐길 수 있습니다',
      ],
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
      explanation: `
        벌써부터 퇴사가 고픈 당신, 
        우연히 참석한 네트워킹 파티에서 동기부여를 심하게 얻어버렸습니다...
        당신은 결국 돌연 창업을 하게 되는데…(갑자기!?)
      `,
      tips: [
        '# 실리콘밸리에서는 스타트업 관련 사람들이 모여서 자신의 비즈니스 아이템을 알리고 서로 네트워킹하는 밋업이 열려요!',
        '# 기업가정신 마인드셋이란 기회를 포착하고, 혁신적인 사고와 행동을 하고, 시장에 새로운 가치를 창출하고자 하는 마인드셋입니다.',
      ],
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
