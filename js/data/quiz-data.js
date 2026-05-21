const QUIZ_DATA = [
  // ==================== RECALL QUESTIONS (Scrum Guide 2020) ====================

  // --- Foundation ---
  {
    q: "Scrum được sáng lập dựa trên gì?",
    opts: ["Empiricism và Lean Thinking", "Waterfall và Agile Manifesto", "Kanban và XP", "PMBOK và PRINCE2"],
    ans: 0,
    explain: "Scrum is founded on empiricism and lean thinking. Empiricism = knowledge from experience; Lean = reduce waste."
  },
  {
    q: "Scrum là gì?",
    opts: ["Lightweight framework giúp generate value thông qua adaptive solutions cho complex problems", "Một methodology hoàn chỉnh", "Một process có các bước cố định", "Một set of best practices"],
    ans: 0,
    explain: "Scrum is a lightweight framework. NOT a methodology, process, or technique."
  },
  {
    q: "3 trụ cột thực nghiệm (empirical pillars) của Scrum?",
    opts: ["Transparency, Inspection, Adaptation", "Plan, Do, Check", "People, Process, Tools", "Vision, Strategy, Execution"],
    ans: 0,
    explain: "T-I-A: Transparency → Inspection → Adaptation. Theo thứ tự tiên quyết."
  },
  {
    q: "5 giá trị Scrum (Scrum Values)?",
    opts: ["Commitment, Focus, Openness, Respect, Courage", "Trust, Transparency, Teamwork, Quality, Speed", "Communication, Simplicity, Feedback, Respect, Courage", "Honesty, Integrity, Quality, Speed, Courage"],
    ans: 0,
    explain: "C-F-O-R-C: Commitment, Focus, Openness, Respect, Courage."
  },
  {
    q: "Scrum framework có thể được implement một phần không?",
    opts: ["KHÔNG — Scrum exists only in its entirety, immutable", "Có — tuỳ team chọn phần phù hợp", "Có — bỏ Retrospective nếu team mature", "Có — SM có thể quyết định"],
    ans: 0,
    explain: "Scrum framework is immutable. Each element serves a specific purpose. Partial implementation ≠ Scrum."
  },

  // --- Scrum Team ---
  {
    q: "Scrum Team bao gồm những accountabilities nào?",
    opts: ["Product Owner, Scrum Master, Developers", "PO, SM, Developers, Stakeholders", "PO, Project Manager, Developers", "PO, SM, Developers, Testers"],
    ans: 0,
    explain: "3 accountabilities: PO + SM + Developers. No sub-teams, no hierarchies."
  },
  {
    q: "Quy mô Scrum Team theo Scrum Guide 2020?",
    opts: ["Typically 10 or fewer people", "5-9 người", "3-9 người", "Không giới hạn"],
    ans: 0,
    explain: "Typically 10 or fewer. Nếu quá lớn → consider reorganizing into multiple cohesive teams sharing same PO, PB, Product Goal."
  },
  {
    q: "Scrum Team là gì theo Scrum Guide 2020?",
    opts: ["Cross-functional, self-managing unit — no sub-teams or hierarchies", "Functional team theo specialization", "Self-directed team không cần PO", "Matrix team report nhiều manager"],
    ans: 0,
    explain: "Scrum Teams are cross-functional and self-managing. They decide who does what, when, and how."
  },
  {
    q: "Developers cross-functional nghĩa là gì?",
    opts: ["Team AS A WHOLE has all skills needed to create value each Sprint", "Mỗi người biết mọi thứ", "Có ít nhất 1 tester, 1 designer", "Có architect role"],
    ans: 0,
    explain: "Cross-functional is about the team collectively, not individuals. Team doesn't need outside help."
  },
  {
    q: "Có titles/sub-teams trong Developers không?",
    opts: ["KHÔNG — regardless of work being done, no titles except 'Developers'", "Có: Tester, Architect, etc.", "SM assign titles", "PO assign roles"],
    ans: 0,
    explain: "No titles or sub-teams for Developers. All are accountable as Developers."
  },

  // --- Product Owner ---
  {
    q: "Product Owner là?",
    opts: ["1 person (NOT a committee), accountable for maximizing value of product", "Một hội đồng", "Nhóm 2-3 người", "Tuỳ tổ chức quyết định"],
    ans: 0,
    explain: "PO is ONE person, accountable for maximizing value. May represent needs of many stakeholders."
  },
  {
    q: "PO có thể delegate responsibilities không?",
    opts: ["Có — nhưng PO remains ACCOUNTABLE", "Không bao giờ", "Chỉ delegate cho SM", "Accountability cũng chuyển theo"],
    ans: 0,
    explain: "PO can delegate work to others but remains accountable for PB management and value."
  },
  {
    q: "PO accountable for Product Backlog management bao gồm?",
    opts: ["Developing Product Goal, creating/communicating PBIs, ordering PBIs, ensuring PB is transparent/visible/understood", "Chỉ ordering PBIs", "Chỉ viết User Stories", "Approve Sprint Backlog"],
    ans: 0,
    explain: "PO accountable for: Product Goal, PBI creation/communication, ordering, transparency of PB."
  },

  // --- Scrum Master ---
  {
    q: "Scrum Master accountable for?",
    opts: ["Establishing Scrum as defined in Scrum Guide AND the Scrum Team's effectiveness", "Quản lý Product Backlog", "Assign tasks cho Developers", "Báo cáo tiến độ cho management"],
    ans: 0,
    explain: "SM accountable for establishing Scrum AND Team's effectiveness within Scrum framework."
  },
  {
    q: "Scrum Master là loại leader gì?",
    opts: ["True leader who serves the Scrum Team and larger organization", "Traditional manager", "Technical lead", "Project coordinator"],
    ans: 0,
    explain: "Scrum Masters are true leaders who serve the Scrum Team and the larger organization."
  },
  {
    q: "SM serves the organization bằng cách nào?",
    opts: ["Leading/coaching Scrum adoption, planning/advising implementations, removing barriers between stakeholders and Scrum Teams", "Reporting velocity to management", "Assigning people to teams", "Approving budget"],
    ans: 0,
    explain: "SM serves org: lead/coach adoption, plan implementations, remove barriers, help understand empirical approach."
  },

  // --- Sprint ---
  {
    q: "Sprint duration tối đa?",
    opts: ["One month (fixed-length, cannot shorten or lengthen once started)", "2 weeks bắt buộc", "Tuỳ team quyết định không giới hạn", "6 weeks"],
    ans: 0,
    explain: "Sprints are one month or less. Once started, duration is fixed."
  },
  {
    q: "Sprint mới bắt đầu khi nào?",
    opts: ["Immediately after previous Sprint concludes (no gaps)", "Sau 1-2 ngày nghỉ", "Đầu tuần tiếp theo", "Sau khi PO approve Increment"],
    ans: 0,
    explain: "New Sprint starts immediately after conclusion of previous Sprint."
  },
  {
    q: "Ai có quyền cancel Sprint?",
    opts: ["Chỉ Product Owner", "Scrum Master", "Developers", "Stakeholders"],
    ans: 0,
    explain: "Only the Product Owner has authority to cancel the Sprint."
  },
  {
    q: "Sprint có thể bị cancel khi nào?",
    opts: ["Khi Sprint Goal becomes obsolete", "Khi team không kịp hoàn thành hết PBIs", "Khi stakeholders thay đổi requirements", "Khi có critical bug"],
    ans: 0,
    explain: "Sprint cancelled only when Sprint Goal becomes obsolete."
  },
  {
    q: "Trong Sprint, điều gì KHÔNG thể thay đổi?",
    opts: ["Sprint Goal — nothing that endangers it", "Sprint Backlog items", "Technical approach", "Team composition"],
    ans: 0,
    explain: "No changes that endanger the Sprint Goal. Quality does not decrease. Scope may be clarified/re-negotiated with PO."
  },

  // --- Events ---
  {
    q: "Sprint Planning timebox cho Sprint 1 tháng?",
    opts: ["Maximum 8 hours", "Maximum 4 hours", "Maximum 2 hours", "Không giới hạn"],
    ans: 0,
    explain: "Sprint Planning is timeboxed to max 8 hours for a one-month Sprint. Shorter Sprints = shorter Planning."
  },
  {
    q: "Sprint Planning addresses 3 topics nào?",
    opts: ["Why is this Sprint valuable? What can be Done? How will chosen work get done?", "What, When, Who", "Scope, Time, Budget", "Plan, Do, Check"],
    ans: 0,
    explain: "Topic 1: Why (Sprint Goal), Topic 2: What (select PBIs), Topic 3: How (plan work)."
  },
  {
    q: "Daily Scrum timebox?",
    opts: ["15 minutes", "30 minutes", "1 hour", "Tuỳ team"],
    ans: 0,
    explain: "Daily Scrum is timeboxed to 15 minutes, every working day of Sprint."
  },
  {
    q: "Daily Scrum dành cho ai?",
    opts: ["Developers (they own and conduct it)", "Toàn bộ Scrum Team bắt buộc", "SM và Developers", "Bất kỳ ai muốn tham dự"],
    ans: 0,
    explain: "Daily Scrum is for Developers. SM/PO can attend but only Developers conduct it."
  },
  {
    q: "Daily Scrum purpose?",
    opts: ["Inspect progress toward Sprint Goal and adapt Sprint Backlog as necessary", "Status report cho SM", "SM assign daily tasks", "PO kiểm tra progress"],
    ans: 0,
    explain: "Purpose: inspect progress toward Sprint Goal, adapt Sprint Backlog. Improves communication, identifies impediments."
  },
  {
    q: "Sprint Review timebox cho Sprint 1 tháng?",
    opts: ["Maximum 4 hours", "Maximum 8 hours", "Maximum 2 hours", "Maximum 1 hour"],
    ans: 0,
    explain: "Sprint Review timeboxed to max 4 hours for one-month Sprint."
  },
  {
    q: "Sprint Review là gì?",
    opts: ["Working session to inspect Increment and adapt Product Backlog — NOT a presentation", "Formal presentation/demo cho stakeholders", "Sign-off meeting", "Approval gate để release"],
    ans: 0,
    explain: "Sprint Review is a working session. Scrum Team presents results and discusses progress toward Product Goal."
  },
  {
    q: "Sự kiện nào KẾT THÚC Sprint?",
    opts: ["Sprint Retrospective", "Sprint Review", "Daily Scrum cuối cùng", "Khi hết timebox Sprint"],
    ans: 0,
    explain: "Sprint Retrospective concludes the Sprint."
  },
  {
    q: "Sprint Retrospective purpose?",
    opts: ["Plan ways to increase quality and effectiveness", "Blame team members", "Report to management", "Only discuss process"],
    ans: 0,
    explain: "Retro purpose: plan ways to increase quality and effectiveness. Inspects individuals, interactions, processes, tools, DoD."
  },
  {
    q: "Sprint Retrospective timebox cho Sprint 1 tháng?",
    opts: ["Maximum 3 hours", "Maximum 4 hours", "Maximum 1 hour", "Không giới hạn"],
    ans: 0,
    explain: "Sprint Retrospective timeboxed to max 3 hours for one-month Sprint."
  },

  // --- Artifacts & Commitments ---
  {
    q: "3 artifacts trong Scrum và commitments tương ứng?",
    opts: ["Product Backlog → Product Goal, Sprint Backlog → Sprint Goal, Increment → Definition of Done", "PB → Vision, SB → Plan, Increment → Release", "PB → Scope, SB → Schedule, Increment → Quality", "PB → Requirements, SB → Tasks, Increment → Delivery"],
    ans: 0,
    explain: "Each artifact has a commitment: PB→Product Goal, SB→Sprint Goal, Increment→DoD."
  },
  {
    q: "Product Goal là gì?",
    opts: ["Long-term objective for the Scrum Team — future state of product in Product Backlog", "Sprint-level target", "Release date", "Feature list"],
    ans: 0,
    explain: "Product Goal describes future state of product. It is in the Product Backlog. Team must fulfill (or abandon) one before next."
  },
  {
    q: "Sprint Goal được tạo khi nào và bởi ai?",
    opts: ["During Sprint Planning, by the entire Scrum Team collaboratively", "Trước Sprint bởi PO", "Bởi Developers trong Daily Scrum", "Bởi SM"],
    ans: 0,
    explain: "Sprint Goal crafted during Sprint Planning by entire Scrum Team."
  },
  {
    q: "Ai owns Sprint Backlog?",
    opts: ["Developers", "Product Owner", "Scrum Master", "Whole Scrum Team"],
    ans: 0,
    explain: "Sprint Backlog belongs to Developers. They manage it and update it throughout Sprint."
  },
  {
    q: "Sprint Backlog gồm những gì?",
    opts: ["Sprint Goal (why) + selected PBIs (what) + actionable plan for delivering Increment (how)", "Chỉ list of PBIs", "Chỉ tasks", "PBIs + estimates"],
    ans: 0,
    explain: "Sprint Backlog = Sprint Goal + PBIs selected + plan to deliver Increment."
  },
  {
    q: "Definition of Done (DoD) là gì?",
    opts: ["Formal description of state of Increment when it meets quality measures required for product", "Acceptance criteria của từng PBI", "Test cases", "PO approval checklist"],
    ans: 0,
    explain: "DoD is formal description of Increment's state when it meets quality measures. Creates transparency."
  },
  {
    q: "Khi nhiều Scrum Teams cùng làm 1 product, DoD phải như thế nào?",
    opts: ["All teams must mutually define and comply with the SAME Definition of Done", "Mỗi team tự có DoD riêng không liên quan", "Team nào DoD cao hơn thì tốt hơn", "PO quyết định DoD cho từng team"],
    ans: 0,
    explain: "Scrum Guide 2020: If multiple teams work on same product, they must mutually define and comply with the same DoD."
  },
  {
    q: "Nếu DoD là part of standards of the organization?",
    opts: ["All Scrum Teams must follow it as a minimum; teams can add stricter criteria", "Teams có thể ignore", "Chỉ áp dụng cho 1 team", "SM quyết định có follow không"],
    ans: 0,
    explain: "If org standards exist, all teams follow as minimum. If not org standard, Scrum Team must create appropriate DoD."
  },
  {
    q: "PBI không meet Definition of Done?",
    opts: ["Cannot be released — returns to Product Backlog for future consideration", "Vẫn release được nếu PO đồng ý", "Auto chuyển sang Sprint tiếp", "Bị xoá khỏi PB"],
    ans: 0,
    explain: "If PBI doesn't meet DoD, it cannot be released or presented at Sprint Review. Goes back to PB."
  },
  {
    q: "Increment là gì?",
    opts: ["Concrete stepping stone toward Product Goal — must be usable and meet DoD", "Chỉ code mới viết trong Sprint", "Release package", "Demo tại Sprint Review"],
    ans: 0,
    explain: "Increment = concrete stepping stone toward Product Goal. Each must be additive to prior Increments, verified to work together."
  },
  {
    q: "Có thể có nhiều Increments trong 1 Sprint không?",
    opts: ["Có — multiple Increments may be created within a Sprint, delivery not limited to Sprint Review", "Không — chỉ 1 Increment per Sprint", "Chỉ nếu PO cho phép", "Chỉ ở Sprint cuối"],
    ans: 0,
    explain: "Multiple Increments may be created within Sprint. Can be delivered to stakeholders anytime, not just at Review."
  },

  // --- Scaling & Other ---
  {
    q: "Scaled Scrum: n teams cùng 1 product cần?",
    opts: ["1 Product Backlog, 1 Product Owner, 1 Product Goal, same DoD", "n Product Backlogs", "n Product Owners", "n Product Goals"],
    ans: 0,
    explain: "1 Product = 1 PB = 1 PO = 1 Product Goal = same DoD. Multiple teams share these."
  },
  {
    q: "Product Backlog Refinement là gì?",
    opts: ["Ongoing activity to break down and further define PBIs — NOT a formal event", "Formal Scrum event", "Chỉ làm trong Sprint Planning", "SM's responsibility"],
    ans: 0,
    explain: "Refinement is ongoing activity. Developers and PO collaborate to add detail, order, and size to PBIs."
  },
  {
    q: "Ai estimate PBIs?",
    opts: ["Developers (those doing the work make the estimate)", "Product Owner", "Scrum Master", "Stakeholders"],
    ans: 0,
    explain: "Developers who will do the work are responsible for sizing/estimating."
  },
  {
    q: "PO có thể order Developers làm gì không?",
    opts: ["KHÔNG — Developers are self-managing, they decide how to turn PBIs into Increments", "Có — PO quyết định ai làm gì", "Chỉ urgent items", "Thông qua SM"],
    ans: 0,
    explain: "Developers are self-managing. Nobody tells them how to turn PBIs into Increments of value."
  },
  {
    q: "Scrum có role Project Manager không?",
    opts: ["KHÔNG — không có PM role trong Scrum", "Có — SM kiêm PM", "Có — PO kiêm PM", "Tuỳ organization"],
    ans: 0,
    explain: "No Project Manager role in Scrum. PM activities distributed among PO, SM, and Developers."
  },
  {
    q: "SM facilitates Scrum events khi nào?",
    opts: ["As requested or needed — not mandatory for SM to facilitate every event", "Bắt buộc mọi event", "Chỉ Sprint Planning", "Không bao giờ — team tự facilitate"],
    ans: 0,
    explain: "SM ensures events take place and are productive. Facilitates as requested or needed."
  },
  {
    q: "Transparency best described as?",
    opts: ["Emergent process and work must be visible to those performing and receiving the work", "Daily status reports cho management", "Detailed documentation", "Open office layout"],
    ans: 0,
    explain: "Transparency: emergent process/work visible to those performing and receiving work. Enables inspection."
  },
  {
    q: "Release decision thuộc về ai?",
    opts: ["Product Owner — releasing value là business decision", "Scrum Master", "Developers", "Stakeholders vote"],
    ans: 0,
    explain: "PO decides when to release. Increment can be released at any time, not limited to Sprint Review."
  },

  // ==================== SCENARIO-BASED QUESTIONS (Scrum Master focus) ====================

  {
    q: "Developer báo với SM: 'Tôi phát hiện technical debt nghiêm trọng.' SM nên làm gì?",
    opts: ["Coach Developer chia sẻ với cả team và encourage team tự quyết định cách xử lý", "SM tạo PBI về technical debt", "SM báo PO yêu cầu thêm Sprint", "SM đồng ý rằng đó là vấn đề lớn và hứa sẽ fix"],
    ans: 0,
    explain: "SM coaches — encourage Developer to raise with team. Team self-manages solutions. SM doesn't prescribe."
  },
  {
    q: "2 Developers xung đột về technical approach. SM nên?",
    opts: ["Facilitate discussion giữa họ, coach team tự resolve conflict", "Quyết định approach nào đúng", "Tách 2 người ra làm riêng", "Escalate lên management"],
    ans: 0,
    explain: "SM facilitates, not decides. Help team develop conflict resolution skills. Technical decisions belong to Developers."
  },
  {
    q: "Stakeholder yêu cầu SM thêm item vào Sprint đang chạy. SM nên?",
    opts: ["Redirect stakeholder đến Product Owner — PO manages Product Backlog", "Thêm vào Sprint Backlog nếu quan trọng", "Từ chối thẳng stakeholder", "Họp team ngay để discuss"],
    ans: 0,
    explain: "SM redirects to PO. Only PO manages PB. Scope negotiation during Sprint is between PO and Developers."
  },
  {
    q: "Developer nói với SM: 'Daily Scrum vô ích, mất thời gian.' SM nên?",
    opts: ["Coach Developer về purpose của Daily Scrum, hỏi team muốn adjust format thế nào", "Đồng ý bỏ Daily Scrum", "Bắt buộc Developer phải tham dự và report", "Report Developer lên management"],
    ans: 0,
    explain: "SM coaches on purpose (inspect progress toward Sprint Goal). Team can choose any structure/technique for Daily."
  },
  {
    q: "Manager yêu cầu SM cung cấp individual performance report của Developers. SM nên?",
    opts: ["Explain rằng Scrum Team is accountable as a whole, coach manager về team accountability", "Cung cấp report theo yêu cầu", "Hỏi Developers có đồng ý không", "Gửi velocity chart thay thế"],
    ans: 0,
    explain: "SM coaches organization. Scrum has no individual performance tracking. Whole team is accountable together."
  },
  {
    q: "PO muốn skip Sprint Retrospective vì 'không có thời gian'. SM nên?",
    opts: ["Coach PO rằng Retro là mandatory event, explain value của continuous improvement", "Đồng ý skip vì PO quyết định", "Chạy Retro không có PO", "Cancel Sprint"],
    ans: 0,
    explain: "All Scrum events are mandatory. SM ensures events take place and are productive. Coach on importance."
  },
  {
    q: "Team mới liên tục không hoàn thành Sprint Goal. SM nên?",
    opts: ["Facilitate team discussion về root causes, coach team cách forecast tốt hơn và giảm scope", "Yêu cầu team làm overtime", "Thêm người vào team", "Report team performance cho management"],
    ans: 0,
    explain: "SM facilitates learning. Help team inspect/adapt. Coach on forecasting, not force overtime or blame."
  },
  {
    q: "Developer bị stakeholder trực tiếp yêu cầu làm feature ngoài Sprint Backlog. SM nên?",
    opts: ["Coach Developer to redirect stakeholder đến PO — Developers don't take direction from outside", "Cho phép nếu feature nhỏ", "SM nói với stakeholder rằng không được", "Thêm feature vào Sprint Backlog"],
    ans: 0,
    explain: "Nobody outside team tells Developers what to do. SM coaches Developer to redirect stakeholder to PO."
  },
  {
    q: "Trong Sprint Review, stakeholder không hài lòng và yêu cầu thay đổi lớn. SM nên?",
    opts: ["Facilitate discussion, ensure feedback is captured — PO will decide ordering of new work in PB", "Hứa team sẽ fix ngay Sprint sau", "Bảo vệ team khỏi criticism", "Yêu cầu stakeholder viết formal change request"],
    ans: 0,
    explain: "SM facilitates. Sprint Review is for gathering feedback. PO decides what goes into PB and priority."
  },
  {
    q: "Developer mới join team và hỏi SM: 'Ai assign tasks cho tôi?' SM nên?",
    opts: ["Coach rằng Developers self-manage — team cùng decide who does what, when, how", "SM assign tasks cho Developer mới", "Hỏi PO assign", "Chỉ Developer senior nhất"],
    ans: 0,
    explain: "SM coaches on self-management. Nobody assigns tasks — Developers collectively decide."
  },
  {
    q: "PO muốn thay đổi Sprint Goal giữa Sprint. SM nên?",
    opts: ["Explain Sprint Goal cannot change during Sprint — nếu Goal obsolete, chỉ PO cancel Sprint", "Đồng ý vì PO có quyền", "Hỏi team vote", "Cho phép nếu change nhỏ"],
    ans: 0,
    explain: "Sprint Goal is fixed during Sprint. If obsolete, only recourse is PO cancels Sprint."
  },
  {
    q: "Team muốn extend Sprint thêm 2 ngày để hoàn thành tất cả PBIs. SM nên?",
    opts: ["Explain Sprint duration is fixed — coach team rằng không cần hoàn thành all PBIs, focus Sprint Goal", "Đồng ý extend vì team cần", "Hỏi PO approve extension", "Cho thêm 1 ngày thay vì 2"],
    ans: 0,
    explain: "Sprint length is fixed, cannot be extended. Incomplete PBIs go back to PB. Sprint Goal matters, not completing all items."
  },
  {
    q: "Developers không muốn cho PO tham dự Daily Scrum. SM nên?",
    opts: ["Support Developers — Daily Scrum is for Developers; PO doesn't need to attend", "Bắt buộc PO phải dự", "Compromise: PO dự 2 ngày/tuần", "Nói Developers phải accept PO"],
    ans: 0,
    explain: "Daily Scrum is for Developers. PO/SM may attend if doing Dev work, but it's Developers' event."
  },
  {
    q: "SM nhận thấy DoD của team quá thấp, Increments có nhiều bugs. SM nên?",
    opts: ["Facilitate team discussion về quality, coach team strengthen DoD tại Retrospective", "SM tự nâng DoD", "Report cho management", "Thêm QA member vào team"],
    ans: 0,
    explain: "SM coaches on quality. DoD improvement is discussed at Retro. Team decides how to strengthen it."
  },
  {
    q: "Organization yêu cầu team dùng specific tool. SM nên?",
    opts: ["Coach organization rằng Developers self-manage their tools; facilitate discussion để tìm compromise", "Bắt team phải comply ngay", "Ignore organization requirement", "Escalate cho PO xử lý"],
    ans: 0,
    explain: "SM serves org AND team. Facilitate conversation — Developers are self-managing but must work within org context."
  },
  {
    q: "PO bận và không attend Sprint Planning. SM nên?",
    opts: ["Coach PO rằng participation in Sprint Planning is essential — PO proposes how product could increase value", "Chạy Planning không có PO", "SM thay PO chọn PBIs", "Cancel Sprint Planning"],
    ans: 0,
    explain: "PO's participation is important — proposes value, discusses Product Goal. SM coaches PO to attend."
  },
  {
    q: "Developer báo bị blocked bởi external dependency. SM nên?",
    opts: ["Help remove impediment — SM serves team by removing blockers/barriers that impede progress", "Bảo Developer tự liên hệ", "Đợi đến Sprint Review để discuss", "Cancel Sprint"],
    ans: 0,
    explain: "Removing impediments is part of SM's service to the team. SM helps clear organizational obstacles."
  },
  {
    q: "Sau nhiều Sprints, team không improve velocity. SM nên?",
    opts: ["Facilitate Retrospective focus on continuous improvement — inspect what slows them down", "Đặt velocity target cho team", "Yêu cầu team commit nhiều hơn", "Report cho management để tăng pressure"],
    ans: 0,
    explain: "SM facilitates improvement through Retro. Never sets velocity targets or pressures team. Velocity is not a performance metric."
  },

  // ==================== MULTI-SELECT QUESTIONS ====================

  {
    q: "Scrum Master serves Developers bằng những cách nào? (chọn tất cả đúng)",
    multi: true,
    opts: [
      "Coaching team trong self-management và cross-functionality",
      "Helping team focus on creating high-value Increments that meet DoD",
      "Causing removal of impediments to team's progress",
      "Assigning tasks cho từng Developer",
      "Approving technical decisions"
    ],
    ans: [0, 1, 2],
    explain: "SM coaches self-management, helps focus on DoD Increments, removes impediments. NEVER assigns tasks or approves tech decisions."
  },
  {
    q: "Scrum Master serves Product Owner bằng những cách nào? (chọn tất cả đúng)",
    multi: true,
    opts: [
      "Helping find techniques for effective Product Goal definition and PB management",
      "Helping establish empirical product planning for complex environment",
      "Facilitating stakeholder collaboration as requested or needed",
      "Writing Product Backlog Items cho PO",
      "Making ordering decisions thay PO"
    ],
    ans: [0, 1, 2],
    explain: "SM helps PO with techniques, empirical planning, stakeholder facilitation. Never writes PBIs or makes ordering decisions for PO."
  },
  {
    q: "Sprint Backlog bao gồm những gì? (chọn tất cả đúng)",
    multi: true,
    opts: [
      "Sprint Goal (why)",
      "Set of Product Backlog Items selected for Sprint (what)",
      "Actionable plan for delivering Increment (how)",
      "Product Goal",
      "Definition of Done"
    ],
    ans: [0, 1, 2],
    explain: "Sprint Backlog = Sprint Goal + selected PBIs + plan. Product Goal belongs to PB. DoD is commitment for Increment."
  },
  {
    q: "Trong Sprint, điều gì đúng? (chọn tất cả đúng)",
    multi: true,
    opts: [
      "No changes are made that would endanger the Sprint Goal",
      "Quality does not decrease",
      "Product Backlog is refined as needed",
      "Scope may be clarified and re-negotiated with PO as more is learned",
      "Sprint Goal có thể thay đổi nếu PO đồng ý"
    ],
    ans: [0, 1, 2, 3],
    explain: "During Sprint: Goal protected, quality maintained, PB refined, scope negotiable. Sprint Goal CANNOT change mid-Sprint."
  },
  {
    q: "Scrum Values bao gồm? (chọn tất cả đúng)",
    multi: true,
    opts: [
      "Commitment",
      "Courage",
      "Focus",
      "Openness",
      "Respect",
      "Trust",
      "Transparency"
    ],
    ans: [0, 1, 2, 3, 4],
    explain: "5 Scrum Values: Commitment, Courage, Focus, Openness, Respect. Trust/Transparency are NOT Scrum values (pillars ≠ values)."
  },
  {
    q: "Events nào là formal opportunities to inspect and adapt? (chọn tất cả đúng)",
    multi: true,
    opts: [
      "Sprint Planning",
      "Daily Scrum",
      "Sprint Review",
      "Sprint Retrospective",
      "Product Backlog Refinement"
    ],
    ans: [0, 1, 2, 3],
    explain: "4 formal events within Sprint are inspect-and-adapt opportunities. Refinement is an ongoing activity, NOT a formal event."
  },
  {
    q: "Về Increment, điều gì đúng? (chọn tất cả đúng)",
    multi: true,
    opts: [
      "Must meet Definition of Done",
      "Must be usable",
      "Multiple Increments may be created within a Sprint",
      "Can be delivered to stakeholders prior to Sprint Review",
      "Chỉ được release tại Sprint Review"
    ],
    ans: [0, 1, 2, 3],
    explain: "Increment meets DoD, is usable, multiple per Sprint possible, can deliver anytime. Sprint Review is NOT a release gate."
  },

  // ==================== MORE RECALL QUESTIONS ====================

  {
    q: "Ai quyết định Developers how to form teams trong scaled Scrum?",
    opts: ["Developers themselves", "Management", "Scrum Master", "Product Owner"],
    ans: 0,
    explain: "Developers themselves decide how to organize and form teams."
  },
  {
    q: "Sprint Review có phải gate to release không?",
    opts: ["KHÔNG — Sprint Review should never be considered a gate to releasing value", "Có — phải qua Review mới release", "Tuỳ PO quyết định", "Tuỳ organization"],
    ans: 0,
    explain: "Sprint Review is NOT a gate. Value can be delivered at any time during or after Sprint."
  },
  {
    q: "Developers thay đổi members giữa Sprint — hệ quả?",
    opts: ["Possible nhưng may cause short-term reduction in productivity", "Không được phép thay đổi", "Chỉ SM approve được", "Không ảnh hưởng gì"],
    ans: 0,
    explain: "Composition can change but expect short-term productivity reduction as team reforms."
  },
  {
    q: "Velocity trong Scrum dùng cho mục đích gì?",
    opts: ["Internal forecasting tool cho Developers — NOT performance measurement", "Measure team performance cho management", "So sánh giữa các teams", "PO dùng để plan release date"],
    ans: 0,
    explain: "Velocity is Developers' internal forecasting tool. Never used to compare teams or measure performance."
  },
  {
    q: "Purpose of Sprint?",
    opts: ["Create valuable, useful Increment — Sprints enable predictability via inspect & adapt toward Product Goal", "Deliver hết Sprint Backlog", "Maximize velocity", "Complete all PBIs committed"],
    ans: 0,
    explain: "Sprint purpose: create value, enable predictability, inspect/adapt toward Product Goal. Not about completing everything."
  },
  {
    q: "DoD có thể thay đổi giữa Sprint không?",
    opts: ["KHÔNG — DoD should not change mid-Sprint; can be improved at Retrospective", "Có bất cứ lúc nào", "Chỉ PO thay đổi", "Chỉ SM thay đổi"],
    ans: 0,
    explain: "DoD doesn't change mid-Sprint. Improvement happens at Retrospective for subsequent Sprints."
  },
  {
    q: "Sustainable pace trong Agile/Scrum?",
    opts: ["Team should maintain sustainable pace — increases long-term productivity and quality", "Sprint faster mỗi Sprint", "Maximize overtime khi cần", "Chỉ là nice-to-have"],
    ans: 0,
    explain: "Sustainable pace is fundamental. Overwork decreases quality and long-term productivity."
  },
  {
    q: "First Sprint trong project?",
    opts: ["Must result in usable Increment, same as all Sprints — no Sprint Zero", "Chỉ cho setup/architecture", "Không cần Increment", "Used to finalize project plan"],
    ans: 0,
    explain: "Every Sprint, including the first, must produce usable Increment. No Sprint Zero concept in Scrum."
  },
];
