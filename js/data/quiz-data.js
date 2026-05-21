const QUIZ_DATA = [
  {
    q: "Scrum được sáng lập dựa trên gì?",
    opts: ["Empiricism và Lean Thinking", "Waterfall và Agile Manifesto", "Kanban và XP", "PMBOK và PRINCE2"],
    ans: 0,
    explain: "Scrum is founded on empiricism and lean thinking. Empiricism = knowledge from experience; Lean = reduce waste."
  },
  {
    q: "Scrum là gì?",
    opts: ["Lightweight framework", "Methodology", "Process", "Set of best practices"],
    ans: 0,
    explain: "Scrum is a lightweight framework, NOT a methodology, process, or technique."
  },
  {
    q: "3 trụ cột thực nghiệm của Scrum?",
    opts: ["Transparency, Inspection, Adaptation", "Plan, Do, Check", "People, Process, Tools", "Vision, Strategy, Execution"],
    ans: 0,
    explain: "T-I-A: Transparency → Inspection → Adaptation. Theo thứ tự tiên quyết."
  },
  {
    q: "5 giá trị Scrum?",
    opts: ["Commitment, Focus, Openness, Respect, Courage", "Trust, Transparency, Teamwork, Quality, Speed", "Communication, Simplicity, Feedback, Respect, Courage", "Honesty, Integrity, Quality, Speed, Courage"],
    ans: 0,
    explain: "F-O-R-C-C: Focus, Openness, Respect, Commitment, Courage."
  },
  {
    q: "Scrum Team được thiết kế để tối ưu điều gì?",
    opts: ["Flexibility, Creativity, Productivity", "Speed, Quality, Cost", "Scope, Time, Budget", "Communication, Documentation, Testing"],
    ans: 0,
    explain: "F-C-P: Flexibility, Creativity, Productivity."
  },
  {
    q: "Scrum Team bao gồm?",
    opts: ["Product Owner, Scrum Master, Developers", "PO, SM, Developers, Stakeholders", "PO, Project Manager, Developers", "PO, SM, Developers, Testers"],
    ans: 0,
    explain: "3 accountabilities: PO + SM + Developers. Không có sub-teams, hierarchies, hay titles."
  },
  {
    q: "Quy mô Scrum Team?",
    opts: ["10 hoặc ít hơn", "5-9", "3-9", "Không giới hạn"],
    ans: 0,
    explain: "Typically 10 or fewer people. Nếu quá lớn → reorganize into multiple teams."
  },
  {
    q: "Scrum Master chịu trách nhiệm gì?",
    opts: ["Ensuring Scrum is understood and enacted, và effectiveness của Scrum Team", "Quản lý Product Backlog", "Assign tasks cho Developers", "Báo cáo tiến độ cho management"],
    ans: 0,
    explain: "SM accountable for establishing Scrum AND the Scrum Team's effectiveness. Manage process, NOT people."
  },
  {
    q: "SM là loại leader gì?",
    opts: ["True leader who serves (servant-leader)", "Traditional manager", "Technical lead", "Project coordinator"],
    ans: 0,
    explain: "Scrum Masters are true leaders who serve the Scrum Team and the larger organization."
  },
  {
    q: "SM manage gì?",
    opts: ["The process (not people)", "People and tasks", "Budget và timeline", "Stakeholder expectations"],
    ans: 0,
    explain: "SM is a management role but manages the PROCESS, not the people."
  },
  {
    q: "SM copes with incomplete artifact transparency bằng?",
    opts: ["Learning, convincing, and change", "Reporting to management", "Adding more documentation", "Increasing meeting frequency"],
    ans: 0,
    explain: "SM detects incomplete transparency và copes via learning, convincing, and change."
  },
  {
    q: "SM detect incomplete transparency qua?",
    opts: ["Inspecting artifacts, sensing patterns, listening closely, detecting differences between expected vs real results", "Reading reports", "Asking developers to report daily", "Checking Jira tickets"],
    ans: 0,
    explain: "4 cách: inspect artifacts, sense patterns, listen closely, detect expected vs real results gaps."
  },
  {
    q: "1 SM có thể manage bao nhiêu teams?",
    opts: ["Multiple teams", "Chỉ 1 team", "Tối đa 2 teams", "Tối đa 3 teams"],
    ans: 0,
    explain: "One Scrum Master can manage multiple Scrum teams."
  },
  {
    q: "PO là?",
    opts: ["1 person, NOT a committee/PMO", "Một hội đồng", "Nhóm 2-3 người", "Tuỳ tổ chức"],
    ans: 0,
    explain: "PO is one person, never a committee or PMO. Even when multiple teams exist."
  },
  {
    q: "Ai có quyền huỷ Sprint?",
    opts: ["Chỉ Product Owner", "Scrum Master", "Developers", "Stakeholders"],
    ans: 0,
    explain: "Only the Product Owner has authority to cancel the Sprint."
  },
  {
    q: "Sprint có thể bị huỷ khi nào?",
    opts: ["Khi Sprint Goal becomes obsolete", "Khi team không kịp", "Khi stakeholders thay đổi requirements", "Khi có bug"],
    ans: 0,
    explain: "Sprint cancelled when Sprint Goal becomes obsolete. Incomplete PBIs → re-estimate → back to PB."
  },
  {
    q: "Sprint duration sau khi bắt đầu?",
    opts: ["Fixed — cannot be shortened or lengthened", "Có thể rút ngắn", "Có thể kéo dài", "Tuỳ team"],
    ans: 0,
    explain: "Once a Sprint begins, its duration is fixed and cannot be shortened or lengthened."
  },
  {
    q: "Sprint mới bắt đầu khi nào?",
    opts: ["Immediately after previous Sprint (no gaps)", "Sau 1-2 ngày nghỉ", "Đầu tuần tiếp theo", "Sau khi PO approve"],
    ans: 0,
    explain: "New Sprint starts immediately after the conclusion of previous Sprint. No gaps, no prerequisites."
  },
  {
    q: "Có Sprint Zero trong Scrum không?",
    opts: ["Không — anti-pattern, không tồn tại", "Có — cho setup ban đầu", "Tuỳ team", "Chỉ cho project mới"],
    ans: 0,
    explain: "There are NO Sprint Zero, Hardening Sprints, Release Sprints in Scrum. Anti-patterns."
  },
  {
    q: "Sprint Planning timebox cho Sprint 1 tháng?",
    opts: ["≤ 8 giờ", "≤ 4 giờ", "≤ 2 giờ", "Không giới hạn"],
    ans: 0,
    explain: "Sprint Planning is time-boxed for 8 hours or shorter (for one-month Sprint)."
  },
  {
    q: "Sprint Planning input?",
    opts: ["Product Backlog, latest Increment, projected capacity, past performance", "Chỉ Product Backlog", "Sprint Goal + PBIs", "Stakeholder requirements"],
    ans: 0,
    explain: "Input: 1) PB prioritized, 2) latest Increment, 3) projected capacity, 4) past performance."
  },
  {
    q: "Daily Scrum dành cho ai?",
    opts: ["Developers (participate/talk)", "Toàn bộ Scrum Team", "SM và Developers", "Bất kỳ ai"],
    ans: 0,
    explain: "Daily Scrum is for Developers — they participate (talk). Others can attend (observe only)."
  },
  {
    q: "PO tại Daily Scrum?",
    opts: ["Can attend (observe) but NOT participate (unless doing Sprint Backlog work)", "Must participate", "Cannot attend at all", "Must report to PO after"],
    ans: 0,
    explain: "'PO can attend Daily' ✅ but 'PO participates in Daily' ❌ (trừ khi đang làm SB item)."
  },
  {
    q: "Sprint Review là?",
    opts: ["Working session (informal meeting), NOT presentation", "Formal presentation/demo", "Sign-off meeting", "Approval gate"],
    ans: 0,
    explain: "Sprint Review is an informal meeting / working session. Scrum Team + stakeholders collaborate."
  },
  {
    q: "Sprint Review output?",
    opts: ["Inspected Increment + revised Product Backlog", "Approved Increment", "Performance report", "Sprint Backlog cho Sprint tiếp"],
    ans: 0,
    explain: "Output: Inspected Increment + revised PB that defines probable items for next Sprint."
  },
  {
    q: "2 events nào stakeholders (ngoài Scrum Team) có thể participate?",
    opts: ["Sprint Review + Sprint Planning", "Sprint Review + Retro", "Daily Scrum + Review", "Planning + Retro"],
    ans: 0,
    explain: "Only Sprint Review and Sprint Planning allow external participation."
  },
  {
    q: "Sự kiện nào KẾT THÚC Sprint?",
    opts: ["Sprint Retrospective", "Sprint Review", "Daily Scrum cuối", "Hết timebox"],
    ans: 0,
    explain: "Sprint Retrospective concludes the Sprint. Review là kế cuối (second to last)."
  },
  {
    q: "Sprint Retrospective inspects?",
    opts: ["People, relationships, process, tools", "Only code quality", "Only process", "Only technical debt"],
    ans: 0,
    explain: "Inspect last Sprint: people, relationships, process, tools. Create improvement plan."
  },
  {
    q: "PO tại Sprint Retrospective?",
    opts: ["Participating as Scrum Team member", "Không tham dự", "Chỉ observe", "Chỉ khi SM mời"],
    ans: 0,
    explain: "PO participates in Sprint Retrospective as a Scrum Team member."
  },
  {
    q: "Product Backlog attributes?",
    opts: ["Description, order, estimate, value", "Title, status, assignee", "Priority, effort, deadline", "Story points, acceptance criteria"],
    ans: 0,
    explain: "PBIs have attributes: description, order, estimate, and value. Often include test descriptions."
  },
  {
    q: "Refinement chiếm bao nhiêu?",
    opts: ["No more than 10% of Developers' capacity", "25% of Sprint", "50% of Sprint Planning", "Tuỳ team"],
    ans: 0,
    explain: "Refinement usually takes no more than 10% of the capacity of the Developers."
  },
  {
    q: "Ai owns Sprint Backlog?",
    opts: ["Developers", "Product Owner", "Scrum Master", "Whole Scrum Team"],
    ans: 0,
    explain: "Sprint Backlog is owned and managed by Developers. Not the whole Scrum Team."
  },
  {
    q: "Sprint Goal có thể thay đổi trong Sprint?",
    opts: ["KHÔNG — cannot be changed", "Có nếu PO đồng ý", "Có nếu team vote", "Tuỳ tình huống"],
    ans: 0,
    explain: "Sprint Goal can't be changed during Sprint. Only PO can cancel Sprint if Goal becomes obsolete."
  },
  {
    q: "Ai craft Sprint Goal?",
    opts: ["Whole Scrum Team (collaboratively)", "Product Owner alone", "Developers", "Scrum Master"],
    ans: 0,
    explain: "Sprint Goal is created by the whole Scrum Team during Sprint Planning."
  },
  {
    q: "DoD có thể thay đổi giữa Sprint không?",
    opts: ["KHÔNG — can improve between Sprints but NOT mid-Sprint", "Có bất cứ lúc nào", "Chỉ PO đổi", "Chỉ SM đổi"],
    ans: 0,
    explain: "DoD shouldn't change in the middle of Sprint. Can be improved during project (at Retro)."
  },
  {
    q: "DoD do ai tạo/thay đổi?",
    opts: ["Scrum Team (Developers adjust); NOT PO alone", "Product Owner", "Scrum Master", "Management"],
    ans: 0,
    explain: "DoD created by Scrum Team. Inside project, only Developers may change/define it. NOT PO."
  },
  {
    q: "Multiple teams cùng product — DoD?",
    opts: ["Can have multiple DoDs, must be compatible & capable of creating integrated Increment", "Mỗi team DoD riêng không liên quan", "Chỉ 1 DoD cho tất cả", "PO chọn"],
    ans: 0,
    explain: "Can be multiple definitions, as long as compatible and capable of creating integrated Increments."
  },
  {
    q: "PBI không đạt DoD?",
    opts: ["Cannot release, re-estimate, back to Product Backlog", "Vẫn release được", "Auto move to next Sprint", "Bị xoá"],
    ans: 0,
    explain: "Cannot be released or presented at Sprint Review. Returns to Product Backlog."
  },
  {
    q: "Ai tạo Increment?",
    opts: ["Only Developers", "Whole Scrum Team", "PO + Developers", "SM coordinates"],
    ans: 0,
    explain: "Only members of the Developers create the Increment."
  },
  {
    q: "Increment phải?",
    opts: ["Potentially releasable and usable", "Complete all PBIs", "Pass all tests", "Be deployed to production"],
    ans: 0,
    explain: "All increments must be potentially releasable to enable usable feedback."
  },
  {
    q: "Ai estimate PBIs?",
    opts: ["Developers (effort/size)", "Product Owner", "Scrum Master", "Stakeholders"],
    ans: 0,
    explain: "Developers estimate effort/size. PO estimates VALUE (different from size)."
  },
  {
    q: "PO đo product performance bằng?",
    opts: ["Customer satisfaction, revenue, stakeholder engagement", "Velocity", "Burn-down charts", "Individual developer output"],
    ans: 0,
    explain: "PO measures via customer satisfaction, stakeholder engagement, revenues. NEVER velocity, burn-down, individual performance."
  },
  {
    q: "Developers đo gì?",
    opts: ["Sprint performance (daily, Sprint Backlog)", "Product value", "Customer satisfaction", "Revenue"],
    ans: 0,
    explain: "Developers measure Sprint performance. PO measures project/product performance."
  },
  {
    q: "Velocity dùng cho?",
    opts: ["Internal use by Developers for forecasting — NOT performance measurement", "Management reporting", "PO planning", "Comparing teams"],
    ans: 0,
    explain: "Velocity tracked by Developers for internal use. Not for comparing teams or measuring performance."
  },
  {
    q: "SM serves PO bằng cách?",
    opts: ["Finding PB management techniques, helping clear PBIs, empirical planning, facilitating stakeholders", "Writing PBIs for PO", "Ordering PB", "Cancelling Sprint khi cần"],
    ans: 0,
    explain: "SM helps PO: effective PB management techniques, clear PBIs, empirical planning, stakeholder collaboration."
  },
  {
    q: "SM response tốt nhất khi Developer báo security issue?",
    opts: ["Ask Developer to share with Scrum Team ASAP", "SM confirms with test team", "SM creates PBI", "SM postpones Sprint"],
    ans: 0,
    explain: "SM facilitates — ask Developer to share issue with Team. NOT: SM tự giải quyết."
  },
  {
    q: "Developer bị stakeholder yêu cầu làm item ngoài Sprint?",
    opts: ["Notify Product Owner để PO work với stakeholder", "Add to Sprint Backlog", "Replace equal-size item", "Immediately work on it"],
    ans: 0,
    explain: "Notify PO. PO manages stakeholder expectations. Developers don't take orders from stakeholders."
  },
  {
    q: "SM scenario: đáp án đúng thường liên quan?",
    opts: ["Coaching, teaching, facilitating, supporting self-problem solving", "SM tự giải quyết vấn đề", "SM assign task", "SM agree/disagree với opinion"],
    ans: 0,
    explain: "SM coaches/facilitates. Answers suggesting SM agrees, disagrees, or prescribes solutions are usually INCORRECT."
  },
  {
    q: "Trong Sprint, scope có thể thay đổi không?",
    opts: ["Có — re-negotiate với PO, nhưng Sprint Goal KHÔNG đổi", "Không bao giờ", "Chỉ SM cho phép", "Chỉ trong Daily Scrum"],
    ans: 0,
    explain: "Scope can be re-negotiated between PO and Developers. But Sprint Goal cannot change."
  },
  {
    q: "Quality goals trong Sprint?",
    opts: ["Do NOT decrease", "Có thể giảm nếu PO đồng ý", "Tuỳ team", "Giảm để kịp deadline"],
    ans: 0,
    explain: "Quality goals do not decrease during Sprint. Non-negotiable."
  },
  {
    q: "Developers members thay đổi giữa Sprint?",
    opts: ["Possible nhưng gây short-term reduction in productivity", "Không được", "Chỉ SM approve", "Chỉ cuối Sprint"],
    ans: 0,
    explain: "Members can change during Sprint, with the concern of creating a short time reduction in productivity."
  },
  {
    q: "Tuckman's Model: thêm người vào team đang chạy?",
    opts: ["Productivity likely DECREASES short-term", "Productivity tăng ngay", "Không ảnh hưởng", "Chỉ tăng bugs"],
    ans: 0,
    explain: "Tuckman: adding/removing people → productivity decreases short-term. Team must reform."
  },
  {
    q: "Burn-down chart trong Scrum?",
    opts: ["Optional, helpful to visualize remaining work — does NOT replace empiricism", "Mandatory", "Required by SM", "Only for management"],
    ans: 0,
    explain: "Burn-down charts are optional tools. Helpful but do not replace the importance of empiricism."
  },
  {
    q: "Scaled Scrum: n teams cần?",
    opts: ["1 Product Backlog, 1 PO, n Sprint Backlogs, 1 integrated Increment", "n Product Backlogs", "n POs", "n Product Goals"],
    ans: 0,
    explain: "1 Product = 1 PB = 1 PO. n teams → n Sprint Backlogs, n SMs possible, 1 integrated Increment."
  },
  {
    q: "Có titles trong Developers không?",
    opts: ["KHÔNG — tất cả đều là 'Developers', no titles", "Có: Tester, Architect, etc.", "SM assign titles", "PO assign roles"],
    ans: 0,
    explain: "No titles in Developers. All are just 'developers'. We want all accountable for everything."
  },
  {
    q: "All Scrum roles, events, artifacts?",
    opts: ["Necessary and should NOT be ignored for any reason", "Optional, tuỳ team", "Có thể bỏ bớt", "Chỉ áp dụng một phần"],
    ans: 0,
    explain: "All Scrum roles, events, and artifacts are necessary and should not be ignored for any reason."
  },
  {
    q: "Scrum KHÔNG có?",
    opts: ["Project Manager role — activities distributed among 3 Scrum roles", "Product Owner", "Scrum Master", "Developers"],
    ans: 0,
    explain: "Scrum doesn't have a Project Manager role. Project management activities distributed among the three Scrum roles."
  },
  {
    q: "Developers cross-functional nghĩa là?",
    opts: ["Team AS A WHOLE has all skills needed — not individual members", "Mỗi người biết mọi thứ", "Có ít nhất 1 tester", "Có architect"],
    ans: 0,
    explain: "Cross-functional is about the team as a whole, not individual members. Team doesn't need outside help."
  },
  {
    q: "PO có thể delegate responsibilities?",
    opts: ["Có, nhưng PO remains ACCOUNTABLE", "Không bao giờ", "Chỉ cho SM", "Accountability cũng chuyển"],
    ans: 0,
    explain: "PO can delegate responsibilities to Developers. But PO remains accountable."
  },
  {
    q: "PO trong Sprint Retrospective làm gì?",
    opts: ["Participating as a Scrum Team member", "Không tham dự", "Chỉ observe", "Report cho stakeholders"],
    ans: 0,
    explain: "PO participates in Retrospective as a Scrum Team member."
  },
  {
    q: "Sprint Goal helps?",
    opts: ["Focus on the outcome expected from the Sprint", "Track individual tasks", "Measure velocity", "Report to management"],
    ans: 0,
    explain: "Sprint Goal helps focus on the outcome expected from the Sprint."
  },
  {
    q: "All teams in Scaled Scrum should have same Sprint length?",
    opts: ["FALSE — not required", "TRUE — must be same", "Only if SM decides", "Only if PO requires"],
    ans: 0,
    explain: "Teams working on same product do NOT need to have same Sprint length. This is FALSE."
  },
  {
    q: "Ai decides how teams are formed in scaled Scrum?",
    opts: ["Developers themselves", "Management", "SM", "PO"],
    ans: 0,
    explain: "Developers themselves will decide on how to form the teams when multiple teams are composed."
  },
  {
    q: "Non-functional requirements in Scrum?",
    opts: ["Incorporated into every Increment (via PB items or DoD)", "Handled after all Sprints", "Separate team handles", "Ignored"],
    ans: 0,
    explain: "Developers deal with non-functional features incorporating them into every increment."
  },
  {
    q: "One person can have more than one role?",
    opts: ["Possible but NOT recommended (e.g., PO + SM)", "Forbidden", "Required for small teams", "Only PO + Developer"],
    ans: 0,
    explain: "One person can have more than one role (e.g., both PO and SM). Not forbidden but not recommended."
  },
  {
    q: "PO có thể order Developers làm gì không?",
    opts: ["KHÔNG — Developers is self-managing, PO may not order them", "Có — PO là boss", "Chỉ urgent items", "Qua SM"],
    ans: 0,
    explain: "PO may not order the Developers to do things. Developers is self-organized/self-managed."
  },
  {
    q: "Feedback loops trong Scrum?",
    opts: ["Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective", "Only Daily Scrum", "Only Retrospective", "All meetings including standup"],
    ans: 0,
    explain: "All 4 events within Sprint are formal opportunities for inspecting and adapting (feedback loops)."
  },
  {
    q: "Sustainable pace trong Scrum?",
    opts: ["Agile principle — increases productivity & quality", "Sprint faster mỗi Sprint", "Maximize overtime", "Optional"],
    ans: 0,
    explain: "Working at sustainable pace is an Agile principle. Helps increase productivity and quality."
  },
  {
    q: "Release decision by?",
    opts: ["Product Owner decides when to release", "Scrum Master", "Developers", "Stakeholders"],
    ans: 0,
    explain: "Product Owner decides when to release the product."
  },
  {
    q: "Product Backlog Refinement?",
    opts: ["Ongoing process — adding detail, estimates, order. NOT a formal event", "Formal event", "Done only in Sprint Planning", "SM's responsibility"],
    ans: 0,
    explain: "Refinement is an ongoing process. Act of adding detail, estimates, and order to PBIs."
  },
  {
    q: "Sprint Review có phải gate to release?",
    opts: ["KHÔNG — Increment can be released anytime, Sprint Review is not a gate", "Có — phải qua Review", "Chỉ PO approve tại Review", "Tuỳ team"],
    ans: 0,
    explain: "Sprint Review should never be considered a gate to releasing value. Product can be released multiple times within Sprint."
  },
  {
    q: "Developers chịu trách nhiệm?",
    opts: ["Managing Sprint Backlog, all estimates, doing all work for PBIs", "Managing Product Backlog", "Reporting to PO daily", "Following SM instructions"],
    ans: 0,
    explain: "Developers responsible for: managing Sprint Backlog, all estimates, all work for PBIs."
  },
  {
    q: "Technical approach decided by?",
    opts: ["Developers (completely up to them)", "Scrum Master", "Product Owner", "Architect role"],
    ans: 0,
    explain: "The technical approach is completely up to the Developers. Self-organizing."
  },
  {
    q: "Developers can change engineering practices?",
    opts: ["Whenever they want", "Only at Retrospective", "Only with SM approval", "Only between Sprints"],
    ans: 0,
    explain: "Developers is free to change their engineering practices whenever they want."
  },
  {
    q: "Sprint burn-down chart helpful for?",
    opts: ["Indicate total work remaining for the Sprint", "Know hours each Developer worked", "SM to manage tasks", "Indicate if more people needed"],
    ans: 0,
    explain: "Burn-down helpful to indicate total work remaining. NOT for tracking individual hours or managing tasks."
  },
  {
    q: "Budgeting in Scrum?",
    opts: ["Ideally revised each Sprint to ensure value is being delivered", "Fixed at project start", "Only PO decides", "Not mentioned"],
    ans: 0,
    explain: "Budgeting done in Scrum ideally revised each Sprint to ensure value is being delivered."
  },
  {
    q: "After Sprint is cancelled, incomplete PBIs?",
    opts: ["Re-estimated and moved back to Product Backlog", "Automatically in next Sprint", "Deleted", "Marked as failed"],
    ans: 0,
    explain: "Incomplete PBIs re-estimated and moved into Product Backlog."
  },
  {
    q: "Timeboxes in Scrum help?",
    opts: ["Limit work-in-progress", "Ensure all items finished", "Maximize velocity", "Help PO determine Iron Triangle"],
    ans: 0,
    explain: "Using timeboxes limits work in progress. This is the desired benefit of having time-boxes."
  },
  {
    q: "Scrum Master facilitates Scrum events?",
    opts: ["If requested or needed", "Always mandatory", "Never — team self-facilitates", "Only Daily Scrum"],
    ans: 0,
    explain: "SM facilitates Scrum events as requested or needed. Not mandatory for SM to facilitate every event."
  },
  {
    q: "Purpose of each Sprint?",
    opts: ["Create a potentially releasable piece of product (doesn't have to be released)", "Deliver everything in Sprint Backlog", "Achieve maximum velocity", "Complete all PBIs"],
    ans: 0,
    explain: "Purpose is to create potentially releasable product. It doesn't have to be released."
  },
  {
    q: "KVA categories PO should consider?",
    opts: ["Current Value, Time-to-Market, Ability to Innovate", "Velocity, Burn-down, Throughput", "Revenue only", "Customer NPS only"],
    ans: 0,
    explain: "Key Value Areas: Current Value, Time-to-Market, Ability to Innovate."
  },
  {
    q: "Transparency best described as?",
    opts: ["Significant aspects of process visible to those responsible for outcome", "Daily status reports", "Detailed documentation", "Open office layout"],
    ans: 0,
    explain: "Transparency: significant aspects of the process must be visible to those responsible for the outcome."
  },
  {
    q: "PO work that PO might delegate?",
    opts: ["Ordering the Product Backlog", "Attending Sprint Planning", "Writing User Stories (not PO's core work)", "Creating acceptance criteria"],
    ans: 0,
    explain: "PO might delegate ordering PB. Writing stories & acceptance criteria are not specifically PO work in Scrum."
  },
  {
    q: "Sprint Planning prerequisite?",
    opts: ["None — starts after previous Sprint's Retro ends", "Product Backlog must be 100% refined", "SM must approve", "Architecture must be in place"],
    ans: 0,
    explain: "No prerequisite for Sprint Planning. After previous Sprint's Retro, new Sprint begins immediately with Planning."
  },
  {
    q: "First Sprint trong project?",
    opts: ["Results in potentially releasable Increment, same as all Sprints", "Only for setup/architecture", "No Increment expected", "Used to finalize project plan"],
    ans: 0,
    explain: "First Sprint results in potentially releasable Increment. At least one piece of functionality developed."
  },
  {
    q: "Scrum framework?",
    opts: ["Immutable — exists only in its entirety", "Can be partially implemented", "Flexible to remove events", "Adjustable per team"],
    ans: 0,
    explain: "Scrum framework is immutable. Implementing parts = result is NOT Scrum."
  },
  {
    q: "Daily Scrum improves?",
    opts: ["Communication, identifies impediments, promotes quick decision-making", "Documentation", "Code quality", "Stakeholder visibility"],
    ans: 0,
    explain: "Daily Scrum improves communications, identifies impediments, promotes quick decision-making."
  },
];
