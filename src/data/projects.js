const projects = [
    {
        id: 1,
        title: "AI 캐릭터 성장형 웹 플랫폼",
        summary: "AI를 활용하여 캐릭터를 생성, 성장시키고 PVE/PVP 전투 및 커뮤니티 활동을 제공하는 통합 웹 애플리케이션입니다.",
        description: `
### 🎯 프로젝트 개요
이 프로젝트는 사용자가 직접 만든 캐릭터를 중심으로 **AI 기반 성장, 전투, 커뮤니티 활동**이 이루어지는 **통합형 웹 애플리케이션**입니다. 단순한 캐릭터 꾸미기를 넘어, AI가 생성한 캐릭터와 함께 PVE / PVP 대전, 퀘스트 수행, 미니게임, AI 대화 시스템, 상점, 커뮤니티 기능이 제공됩니다.

### 🧩 주요 기능
- **AI 캐릭터 생성**: DALL·E 3 + Stable Diffusion 기반 이미지 생성 및 저장
- **AI 캐릭터 대화**: ChatGPT/Gemini 기반 자연어 캐릭터 대화 기능
- **PVE / PVP 대전**: AI 판단 기반 전투 결과, 로그 저장, 승패 기록
- **캐릭터 성장 시스템**: 경험치, 스탯, 아이템, 퀘스트 기반 성장 로직
- **AI 토론배틀**: 두 캐릭터의 토론 후 GPT·Gemini·Claude 3 모델 3심제 평가
- **상점 시스템**: 캐릭터 부화권 및 아이템 구매, 인벤토리 관리
- **커뮤니티 / 게시판**: 사용자 간 정보 공유 및 캐릭터 자랑
- **회원 / 캐릭터 관리**: JWT 인증 기반 로그인, 캐릭터별 상태 동기화
`.trim(),
        skills: {
            frontend: ["React", "JavaScript", "TailwindCSS", "Axios", "React Router"],
            backend: ["Spring Boot", "Spring MVC", "REST API,", "FastAPI", "WebSocket (STOMP)", "MySQL", "JWT", "OAuth2", "Google Cloud Storage"],
            tools: ["YOLOv8", "DALL·E 3", "GPT API", "Gemini", "Stable Diffusion", "Discord", "Kakao", "GitHub"],
        },
        github: "https://github.com/psm0419/Gmaking",
        dockerGithub: "https://github.com/pnow7/gmaking",
        team: "팀",
        duration: "2025.10.01 ~ 2025.10.29",
        gradientColors: 'linear-gradient(135deg, #8BC34A, #4CAF50)',
        cardColor: 'linear-gradient(135deg, rgba(50, 50, 50, 0.95), #363242)',
        cardTechs: ["Spring Boot", "React", "FastAPI", "Gemini", "DALL·E 3"],
        imageFolder: "ai2th",
        images: [
            "UML.png",
            "SignUpLoginUML.png",
            "CharacterCreateUML.png",
            "LoginPage.png",
            "MainPage.png",
            "MainPage2.png",
            "CharacterCreate1.png",
            "CharacterCreate2.png",
            "CharacterCreate3.png",
            "CharacterCreate4.png",
            "CharacterCreate5.png",
            "bucket.PNG",
            "bucket2.PNG",
            "NoticePage.png",
            "NoticePage2.png",
            "AdminUserTab.png",
            "AdminInventoryTab.png",
            "AdminPurchaseTab.png",
            "AdminCharacterTab.png",
            "AdminProductTab.png",
            "AdminCommunityTab.png",
            "AdminReportTab.png",
            "AdminMonsterTab.png",
            "AdminMonsterTab2.png",
        ],
    },
    {
        id: 2,
        title: "동해안 맛집 웹 서비스",
        summary: "고성부터 부산까지 7번 국도 중심의 맛집 정보를 제공하는 웹 서비스입니다.",
        description: `
**“동해안 맛집 정보 공유 플랫폼”**은 고성부터 부산까지 7번 국도를 중심으로 지역 맛집, 특산물, 문화 정보를 제공하며, 여행객과 현지인이 함께 소통하고 추천할 수 있는 웹 기반 서비스입니다.

### 📋 주요 기능
- **음식점 정보**: 카카오맵 연동, 반경별 위치 설정, 상세 정보 및 메뉴/카테고리 필터링, 평점/댓글 정렬
- **리뷰 & AI**: 리뷰 작성 및 수정, AI 요약, 키워드 추출, 감성 분석
- **스레드/댓글 기능**: 스레드 및 댓글 작성, 수정, 삭제, 좋아요, 신고 기능
- **TOP10**: 지역 투표 및 실시간 막대 그래프, 인기 게시물 10선 표시
- **마이페이지**: 프로필, 닉네임, 소개 정보 수정, 내가 쓴 글, 팔로우/언팔로우 목록 관리
- **유저 검색**: 닉네임/ID/이메일 등으로 유저 검색
- **공지사항**: 공지사항 목록 및 상세 보기
- **AI 챗봇 (R7 봇)**: 사용자 리뷰 및 음식점 데이터를 기반으로 한 AI 맛집 추천
- **관리자 기능**: 유저, 스레드, 댓글, 리뷰, 신고, 공지사항 전체 관리
- **추가 상세 내용**:
  * 역할: 백엔드 개발, 데이터베이스 설계
  * 사용 기술: Spring Boot, Oracle DB
        `.trim(),
        skills: {
            frontend: ["React", "JavaScript", "HTML", "CSS"],
            backend: ["Java", "Spring Boot", "Oracle DB"],
            tools: ["Kakao Maps API", "OpenAi"],
        },
        github: "https://github.com/Team-2Gether/Local7",
        team: "팀",
        duration: "25.07.07 ~ 25.07.28",
        gradientColors: 'linear-gradient(135deg, #42A5F5, #8860D0)',
        cardColor: 'linear-gradient(135deg, rgba(50, 50, 50, 0.95), #363242)',
        cardTechs: ["React", "Spring Boot", "Oracle DB", "OpenAI"],
        imageFolder: "full3th",
        images: [
            "UML.png",
            "WORKFLOW.png",
            "POST.png",
            "REGISTPOST.png",
            "COMMENT.png",
            "RESTAURANTS.png",
            "REVIEW.png",
            "AICHATBOT.png",
            "ADMIN1.png",
            "ADMIN2.png",
            "ADMIN3.png",
            "ADMIN4.png",
            "ADMIN5.png",
        ]
    },
    {
        id: 3,
        title: "기업 스케줄 및 할일 관리 서비스",
        summary: "숙박업체 운영 인력의 업무·일정·객실 관리를 통합하는 웹 기반 스케줄 관리 시스템입니다.",
        description: `
### 📌 프로젝트 주제
**주제:** 숙박업체 운영 인력의 업무·일정·객실 관리를 통합하는 웹 기반 스케줄 관리 시스템
(고객 예약 관리 X / 직원·업소 관리 O)

### 🎯 목표
중형 규모 이상의 숙박업체(호텔, 리조트, 펜션 등)를 대상으로 객실 운영, 청소 상태 확인, 직원 스케줄, 근무 일정, 인력 분배 등을 효율화합니다.

### 🏨 주요 기능
- **로그인 페이지:** 관리자/직원 로그인을 위한 화면 제공
- **메인화면 대시보드:** 오늘의 사원, 주간 스케줄, 오늘의 할 일, 공지사항(최신 3개) 제공
- **객실 관리:** 객실 리스트 확인, 등록, 수정, 삭제, 객실 배정 업무 및 담당자 확인
- **직원 관리:** 직원 목록 조회, 등록, 수정, 삭제, 부서별 검색/조회, 담당 업무 확인
- **스케줄 관리:** 직원별, 일자별 스케줄 관리, 특정 일자 스케줄 등록/삭제
- **할 일 관리:** 오늘의 할 일 등록/삭제, 담당자 지정 및 진행 상황 확인
- **공지사항:** 공지사항 목록 조회 및 등록, 수정, 삭제
- **게시판:** 직원 간 소통을 위한 게시판 기능
        `.trim(),
        skills: {
            frontend: ["JSP"],
            backend: ["Spring Boot", "Oracle Database"],
            tools: ["IntelliJ IDEA", "GitHub", "JANDI"],
        },
        github: "https://github.com/Team-MobyDick/hms",
        team: "팀",
        duration: "25.06.10 ~ 25.06.27",
        gradientColors: 'linear-gradient(135deg, #FF6B6B, #F9D423)',
        cardColor: 'linear-gradient(135deg, rgba(50, 50, 50, 0.95), #363242)',
        cardTechs: ["JSP", "Spring Boot", "Oracle"],
        imageFolder: "full2th",
        images: [
            "UMLEMPLOYEE.png",
            "UMLADMIN.png",
            "ERD.png",
            "MAINEMPLOYEE.png",
            "MAINADMIN.png",
            "EMPLOYEELIST.png",
            "EMPLOYEEREGIST.png",
            "EMPLOYEEUPDATE.png",
            "QRIMAGE.png",
        ]
    },
];

export default projects;
