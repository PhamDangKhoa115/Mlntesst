import {
  BookOpen,
  Brain,
  Landmark,
  Scale,
  Atom,
  Users,
  ClipboardCheck,
  FileText,
  Download,
  GitBranch,
  Trophy,
  Factory,
  Microscope,
  Gavel,
  Network,
  Target,
  Clock,
} from "lucide-react";

export const navItems = [
  { label: "Trang chủ", path: "/" },
  { label: "Chương 1", path: "/chuong-1" },
  { label: "Chương 2", path: "/chuong-2" },
  { label: "Chương 3", path: "/chuong-3" },
  { label: "Ôn tập", path: "/on-tap" },
  { label: "Nhóm", path: "/nhom" },
  { label: "Phụ lục AI", path: "/phu-luc-ai" },
];
export const benefits = [
  {
    icon: BookOpen,
    title: "Khoa học",
    desc: "Hệ thống kiến thức logic, rõ ràng.",
  },
  {
    icon: Brain,
    title: "Dễ hiểu",
    desc: "Giải thích bằng sơ đồ, ví dụ và thực tiễn.",
  },
  {
    icon: Landmark,
    title: "Ứng dụng",
    desc: "Vận dụng vào học tập, công việc và cuộc sống.",
  },
  {
    icon: GitBranch,
    title: "Tư duy",
    desc: "Phát triển tư duy biện chứng, toàn diện.",
  },
  {
    icon: Trophy,
    title: "Hiệu quả",
    desc: "Ôn tập thông minh theo từng chương.",
  },
];

export const courseCards = [
  {
    no: "01",
    icon: Landmark,
    title: "Chương 1",
    desc: "Nhập môn CN Mác - Lênin và triết học",
  },
  {
    no: "02",
    icon: Atom,
    title: "Chương 2",
    desc: "Chủ nghĩa duy vật biện chứng",
  },
  {
    no: "03",
    icon: Users,
    title: "Chương 3",
    desc: "Chủ nghĩa duy vật lịch sử",
  },
  {
    no: "04",
    icon: Brain,
    title: "Lý luận nhận thức",
    desc: "Thực tiễn, nhận thức và chân lý",
  },
  {
    no: "05",
    icon: ClipboardCheck,
    title: "Ôn tập",
    desc: "Trắc nghiệm, flashcard, timeline",
  },
];

export const chapter1Sections = [
  {
    title: "Chủ nghĩa Mác - Lênin là gì?",
    content:
      "Dưới góc độ lịch sử, chủ nghĩa Mác - Lênin là học thuyết khoa học do Marx và Engels sáng lập, được Lenin kế thừa và phát triển. Dưới góc độ mục đích, đây là khoa học về sự nghiệp giải phóng giai cấp vô sản, người lao động và con người. Dưới góc độ nội dung, đây là thế giới quan và phương pháp luận phổ biến của nhận thức khoa học.",
  },
  {
    title: "Thế giới quan và phương pháp luận",
    content:
      "Thế giới quan là quan niệm của con người về thế giới và vị trí của con người trong thế giới đó. Trong lịch sử có ba hình thức thế giới quan: huyền thoại, tôn giáo và triết học. Phương pháp luận là lý luận về phương pháp, là hệ thống quan điểm chỉ đạo việc tìm tòi, xây dựng và vận dụng phương pháp.",
  },
  {
    title: "Ba bộ phận cấu thành chủ nghĩa Mác - Lênin",
    content:
      "Triết học Mác - Lênin nghiên cứu những quy luật chung nhất của tự nhiên, xã hội và tư duy. Kinh tế chính trị Mác - Lênin nghiên cứu các quy luật kinh tế, đặc biệt quá trình phát sinh, phát triển và tiêu vong của chủ nghĩa tư bản. Chủ nghĩa xã hội khoa học nghiên cứu các quy luật của cách mạng xã hội chủ nghĩa và con đường xây dựng xã hội mới.",
  },
  {
    title: "Điều kiện kinh tế - xã hội cho sự ra đời của chủ nghĩa Mác - Lênin",
    content:
      "Chủ nghĩa Mác - Lênin ra đời vào những năm 40 của thế kỷ XIX, khi cách mạng công nghiệp làm phương thức sản xuất tư bản phát triển mạnh. Xã hội tư bản chứa đựng mâu thuẫn sâu sắc giữa tư sản và vô sản. Giai cấp vô sản đấu tranh nhưng thất bại do thiếu lý luận soi đường, vì vậy sự ra đời của chủ nghĩa Mác - Lênin là tất yếu khách quan.",
  },
  {
    title: "Tiền đề lý luận và khoa học tự nhiên",
    content:
      "Marx và Engels kế thừa triết học cổ điển Đức, gồm phép biện chứng của Hegel và chủ nghĩa duy vật của Feuerbach; kế thừa kinh tế chính trị học cổ điển Anh và chủ nghĩa xã hội không tưởng Pháp - Anh. Về khoa học tự nhiên, các học thuyết như thuyết tế bào, thuyết tiến hóa Darwin, định luật bảo toàn và chuyển hóa năng lượng góp phần tạo cơ sở khoa học cho thế giới quan duy vật.",
  },
  {
    title: "Triết học là gì và ra đời khi nào?",
    content:
      "Triết học là hệ thống tri thức lý luận chung nhất về thế giới, con người và vị trí của con người trong thế giới đó. Triết học chỉ ra đời khi tư duy con người đạt tới trình độ trừu tượng hóa và trong xã hội có sự phân chia giữa lao động chân tay với lao động trí óc.",
  },
  {
    title: "Vấn đề cơ bản của triết học",
    content:
      "Theo Engels, vấn đề cơ bản của triết học là mối quan hệ giữa vật chất và ý thức. Mặt thứ nhất trả lời vật chất hay ý thức có trước và cái nào quyết định cái nào. Mặt thứ hai trả lời con người có khả năng nhận thức thế giới hay không. Từ đó hình thành chủ nghĩa duy vật, chủ nghĩa duy tâm, nhị nguyên luận, khả tri luận, bất khả tri luận và hoài nghi luận.",
  },
  {
    title: "Ba hình thức của chủ nghĩa duy vật trong lịch sử",
    content:
      "Chủ nghĩa duy vật chất phác cổ đại mang tính ngây thơ, cảm tính và phỏng đoán. Chủ nghĩa duy vật siêu hình thế kỷ XVII - XVIII xem thế giới trong trạng thái tĩnh, ít chú ý đến mối liên hệ và phát triển. Chủ nghĩa duy vật biện chứng do Marx, Engels và Lenin sáng lập là hình thức phát triển cao nhất vì kế thừa, khắc phục hạn chế cũ và dựa trên cơ sở khoa học.",
  },
];
export const extendedTheory = [
  {
    title: "Ba hình thức thế giới quan",
    content: [
      "Thế giới quan huyền thoại",
      "Thế giới quan tôn giáo",
      "Thế giới quan triết học",
    ],
  },

  {
    title: "Ba bộ phận cấu thành Chủ nghĩa Mác - Lênin",
    content: [
      "Triết học Mác - Lênin",
      "Kinh tế chính trị học Mác - Lênin",
      "Chủ nghĩa xã hội khoa học",
    ],
  },

  {
    title: "Ba hình thức chủ nghĩa duy vật",
    content: [
      "Chủ nghĩa duy vật chất phác cổ đại",
      "Chủ nghĩa duy vật siêu hình",
      "Chủ nghĩa duy vật biện chứng",
    ],
  },

  {
    title: "Hai hình thức chủ nghĩa duy tâm",
    content: ["Duy tâm chủ quan", "Duy tâm khách quan"],
  },
];
export const chapter2Cards = [
  {
    title: "2.1 Vật chất",
    icon: Atom,
    desc: "Theo Lenin, vật chất là phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác chép lại, chụp lại, phản ánh và tồn tại không lệ thuộc vào cảm giác.",
  },
  {
    title: "2.2 Ý thức",
    icon: Brain,
    desc: "Ý thức là sự phản ánh thế giới khách quan vào não người, là hình ảnh chủ quan của thế giới khách quan, có tính năng động, sáng tạo và bản chất xã hội.",
  },
  {
    title: "2.3 Mối quan hệ vật chất - ý thức",
    icon: Scale,
    desc: "Vật chất có trước và quyết định ý thức. Ý thức tác động trở lại vật chất thông qua hoạt động thực tiễn, có thể thúc đẩy hoặc kìm hãm sự phát triển.",
  },
  {
    title: "2.4 Phép biện chứng duy vật",
    icon: Network,
    desc: "Là khoa học nghiên cứu những mối liên hệ phổ biến nhất và những quy luật chung nhất của sự vận động, phát triển của tự nhiên, xã hội và tư duy.",
  },
  {
    title: "2.5 Thực tiễn và nhận thức",
    icon: Target,
    desc: "Thực tiễn là toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử - xã hội nhằm cải biến tự nhiên và xã hội; là cơ sở, động lực, mục đích và tiêu chuẩn của chân lý.",
  },
  {
    title: "2.6 Chân lý",
    icon: Gavel,
    desc: "Chân lý là tri thức phù hợp với hiện thực khách quan và được thực tiễn kiểm nghiệm. Chân lý có tính khách quan, cụ thể, tuyệt đối và tương đối.",
  },
];
export const advancedDialectics = [
  {
    title: "5 hình thức vận động của vật chất",
    items: [
      "Vận động cơ học",
      "Vận động vật lý",
      "Vận động hóa học",
      "Vận động sinh học",
      "Vận động xã hội",
    ],
  },
  {
    title: "4 tính chất của sự phát triển",
    items: ["Tính khách quan", "Tính phổ biến", "Tính đa dạng", "Tính kế thừa"],
  },
  {
    title: "Các tính chất của chân lý",
    items: [
      "Tính khách quan",
      "Tính tuyệt đối",
      "Tính tương đối",
      "Tính cụ thể",
    ],
  },
];

export const chapter2DetailSections = [
  {
    title: "Phương thức và hình thức tồn tại của vật chất",
    points: [
      "Phương thức tồn tại của vật chất là vận động.",
      "Có 5 hình thức vận động: cơ học, vật lý, hóa học, sinh học và xã hội.",
      "Đứng im là trạng thái đặc biệt của vận động, có tính tương đối và tạm thời.",
      "Hình thức tồn tại của vật chất là không gian và thời gian.",
    ],
  },
  {
    title: "Nguồn gốc, bản chất và kết cấu của ý thức",
    points: [
      "Nguồn gốc tự nhiên của ý thức là não người và thế giới khách quan.",
      "Nguồn gốc xã hội của ý thức là lao động và ngôn ngữ.",
      "Ý thức là sự phản ánh sáng tạo, mang bản chất xã hội.",
      "Ba yếu tố cơ bản của ý thức là tri thức, tình cảm và ý chí.",
    ],
  },
  {
    title: "Ý nghĩa phương pháp luận của quan hệ vật chất - ý thức",
    points: [
      "Trong nhận thức và thực tiễn phải xuất phát từ thực tế khách quan.",
      "Phải tôn trọng khách quan, tránh chủ quan duy ý chí.",
      "Cần phát huy tính năng động, sáng tạo của ý thức con người.",
    ],
  },
];

export const dialecticPrinciples = [
  {
    title: "Nguyên lý về mối liên hệ phổ biến",
    desc: "Mối liên hệ là sự quy định, tác động qua lại và chuyển hóa lẫn nhau giữa các sự vật, hiện tượng hoặc giữa các mặt của cùng một sự vật. Mối liên hệ có tính khách quan, phổ biến, đa dạng và phong phú.",
    method:
      "Ý nghĩa phương pháp luận: cần có quan điểm toàn diện và quan điểm lịch sử - cụ thể khi xem xét sự vật.",
  },
  {
    title: "Nguyên lý về sự phát triển",
    desc: "Phát triển là sự vận động đi lên từ thấp đến cao, từ đơn giản đến phức tạp, diễn ra theo khuynh hướng xoáy ốc. Nguyên nhân phát triển nằm trong mâu thuẫn bên trong của sự vật.",
    method:
      "Ý nghĩa phương pháp luận: phải xem xét sự vật trong vận động, biến đổi và tìm ra khuynh hướng phát triển của nó.",
  },
];

export const dialecticCategories = [
  "Cái chung – cái riêng – cái đơn nhất",
  "Nguyên nhân – kết quả",
  "Bản chất – hiện tượng",
  "Nội dung – hình thức",
  "Tất nhiên – ngẫu nhiên",
  "Khả năng – hiện thực",
];

export const dialecticRules = [
  {
    title: "Quy luật lượng – chất",
    desc: "Chỉ ra cách thức của sự vận động và phát triển. Lượng thay đổi trong giới hạn độ chưa làm chất đổi ngay; đến điểm nút sẽ tạo bước nhảy làm chất thay đổi. Cần tránh nôn nóng, đốt cháy giai đoạn và cũng tránh bảo thủ, trì trệ.",
  },
  {
    title: "Quy luật mâu thuẫn",
    desc: "Chỉ ra nguồn gốc của sự phát triển và là hạt nhân của phép biện chứng. Mâu thuẫn biện chứng là sự thống nhất và đấu tranh giữa các mặt đối lập. Muốn sự vật phát triển phải giải quyết mâu thuẫn chứ không điều hòa mâu thuẫn.",
  },
  {
    title: "Quy luật phủ định của phủ định",
    desc: "Chỉ ra khuynh hướng phát triển. Phủ định biện chứng có tính khách quan và kế thừa. Sự phát triển diễn ra theo hình xoáy ốc, vừa lặp lại, vừa kế thừa, vừa nâng lên trình độ mới.",
  },
];

export const cognitionSections = [
  {
    title: "Thực tiễn",
    desc: "Thực tiễn là toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử - xã hội của con người nhằm cải biến tự nhiên và xã hội.",
    points: [
      "Sản xuất vật chất",
      "Thực nghiệm khoa học",
      "Hoạt động chính trị - xã hội",
    ],
  },
  {
    title: "Nhận thức",
    desc: "Nhận thức là quá trình phản ánh tích cực, tự giác và sáng tạo thế giới khách quan vào não người trên cơ sở thực tiễn.",
    points: [
      "Nhận thức thông thường / kinh nghiệm",
      "Nhận thức khoa học / lý luận",
    ],
  },
  {
    title: "Con đường biện chứng của nhận thức",
    desc: "Từ trực quan sinh động đến tư duy trừu tượng, từ tư duy trừu tượng đến thực tiễn.",
    points: [
      "Cảm giác",
      "Tri giác",
      "Biểu tượng",
      "Khái niệm",
      "Phán đoán",
      "Suy luận",
    ],
  },
  {
    title: "Chân lý",
    desc: "Chân lý là tri thức phù hợp với hiện thực khách quan và được thực tiễn kiểm nghiệm.",
    points: [
      "Tính khách quan",
      "Tính tuyệt đối",
      "Tính tương đối",
      "Tính cụ thể",
    ],
  },
];

export const chapter3Sections = [
  {
    title: "Hình thái kinh tế - xã hội",
    image: "/chapter3-economic.png",
    desc: "Lực lượng sản xuất, quan hệ sản xuất, cơ sở hạ tầng và kiến trúc thượng tầng trong mối quan hệ biện chứng.",
    details: [
      "Hình thái kinh tế - xã hội là xã hội ở một giai đoạn lịch sử nhất định.",
      "Kết cấu gồm: lực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng.",
      "Sự phát triển các hình thái kinh tế - xã hội là quá trình lịch sử tự nhiên.",
    ],
  },
  {
    title: "Giai cấp và dân tộc",
    image: "/chapter3-class.png",
    desc: "Khái niệm giai cấp, đấu tranh giai cấp và vấn đề dân tộc trong lịch sử xã hội.",
    details: [
      "Giai cấp khác nhau về địa vị trong hệ thống sản xuất xã hội.",
      "Nguồn gốc trực tiếp của giai cấp là chế độ chiếm hữu tư nhân về tư liệu sản xuất.",
      "Đấu tranh giai cấp là động lực quan trọng của xã hội có giai cấp.",
    ],
  },
  {
    title: "Nhà nước và cách mạng",
    image: "/chapter3-state.png",
    desc: "Nguồn gốc, bản chất của nhà nước và vai trò của cách mạng xã hội trong phát triển.",
    details: [
      "Cách mạng xã hội là sự biến đổi có tính bước ngoặt và căn bản về chất.",
      "Nguyên nhân sâu xa là mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất.",
      "Cách mạng xã hội là một phương thức, động lực của sự phát triển xã hội.",
    ],
  },
  {
    title: "Ý thức xã hội",
    image: "/chapter3-consciousness.png",
    desc: "Bản chất, kết cấu và các hình thái ý thức xã hội; quan hệ giữa tồn tại xã hội và ý thức xã hội.",
    details: [
      "Tồn tại xã hội quyết định ý thức xã hội.",
      "Ý thức xã hội có tính độc lập tương đối.",
      "Ý thức xã hội có thể lạc hậu hoặc vượt trước tồn tại xã hội.",
    ],
  },
  {
    title: "Triết học về con người",
    image: "/chapter3-human.png",
    desc: "Bản chất con người, mối quan hệ cá nhân - xã hội và vai trò sáng tạo của quần chúng nhân dân.",
    details: [
      "Con người là thực thể tự nhiên đã được xã hội hóa.",
      "Theo Mác, bản chất con người là tổng hòa các quan hệ xã hội.",
      "Quần chúng nhân dân là chủ thể sáng tạo ra lịch sử.",
    ],
  },
];

export const chapter3Map = [
  "Lực lượng sản xuất",
  "Quan hệ sản xuất",
  "Cơ sở hạ tầng",
  "Kiến trúc thượng tầng",
  "Giai cấp và dân tộc",
  "Nhà nước và cách mạng",
  "Ý thức xã hội",
  "Triết học về con người",
];
export const socialTheory = [
  {
    title: "Cấu trúc hình thái kinh tế - xã hội",
    items: ["Lực lượng sản xuất", "Quan hệ sản xuất", "Kiến trúc thượng tầng"],
  },

  {
    title: "Nguồn gốc xuất hiện giai cấp",
    items: ["Sự ra đời chế độ tư hữu", "Phân hóa xã hội", "Mâu thuẫn lợi ích"],
  },

  {
    title: "Vai trò quần chúng nhân dân",
    items: [
      "Lực lượng sáng tạo lịch sử",
      "Động lực phát triển xã hội",
      "Cơ sở hình thành lãnh tụ",
    ],
  },
];
export const reviewGroups = [
  {
    title: "Nhập môn CN Mác - Lênin",
    questions: [
      {
        q: "Chủ nghĩa Mác - Lênin do ai sáng lập và phát triển?",
        options: [
          "Platon và Aristotle",
          "Marx, Engels và Lenin",
          "Hegel và Feuerbach",
          "Adam Smith và Ricardo",
        ],
        answer: "Marx, Engels và Lenin",
      },
      {
        q: "Ba bộ phận cấu thành chủ nghĩa Mác - Lênin là gì?",
        options: [
          "Triết học, kinh tế chính trị, CNXH khoa học",
          "Đạo đức, pháp luật, tôn giáo",
          "Văn học, sử học, logic học",
          "Chính trị, quân sự, ngoại giao",
        ],
        answer: "Triết học, kinh tế chính trị, CNXH khoa học",
      },
      {
        q: "Ba hình thức thế giới quan trong lịch sử là gì?",
        options: [
          "Huyền thoại, tôn giáo, triết học",
          "Duy vật, duy tâm, nhị nguyên",
          "Khoa học, nghệ thuật, đạo đức",
          "Tự nhiên, xã hội, tư duy",
        ],
        answer: "Huyền thoại, tôn giáo, triết học",
      },
      {
        q: "Chủ nghĩa Mác - Lênin ra đời chủ yếu do yêu cầu nào của thực tiễn?",
        options: [
          "Nhu cầu trang trí nghệ thuật",
          "Giai cấp vô sản cần lý luận soi đường",
          "Sự phát triển của tôn giáo",
          "Sự khủng hoảng văn học",
        ],
        answer: "Giai cấp vô sản cần lý luận soi đường",
      },
    ],
  },
  {
    title: "Triết học và chủ nghĩa duy vật biện chứng",
    questions: [
      {
        q: "Vấn đề cơ bản của triết học theo Engels là gì?",
        options: [
          "Quan hệ giữa kinh tế và chính trị",
          "Quan hệ giữa vật chất và ý thức",
          "Quan hệ giữa cá nhân và xã hội",
          "Quan hệ giữa đạo đức và pháp luật",
        ],
        answer: "Quan hệ giữa vật chất và ý thức",
      },
      {
        q: "Quan điểm cho rằng vật chất có trước và quyết định ý thức thuộc lập trường nào?",
        options: [
          "Chủ nghĩa duy tâm",
          "Chủ nghĩa duy vật",
          "Nhị nguyên luận",
          "Hoài nghi luận",
        ],
        answer: "Chủ nghĩa duy vật",
      },
      {
        q: "Định nghĩa vật chất kinh điển được Lenin trình bày trong tác phẩm nào?",
        options: [
          "Tuyên ngôn của Đảng Cộng sản",
          "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán",
          "Tư bản",
          "Nhà nước và cách mạng",
        ],
        answer: "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán",
      },
      {
        q: "Thuộc tính cơ bản nhất để phân biệt vật chất với ý thức là gì?",
        options: [
          "Tính khách quan",
          "Tính tưởng tượng",
          "Tính cá nhân",
          "Tính cảm xúc",
        ],
        answer: "Tính khách quan",
      },
      {
        q: "Phương thức tồn tại của vật chất là gì?",
        options: ["Không gian", "Thời gian", "Vận động", "Cảm giác"],
        answer: "Vận động",
      },
      {
        q: "Hình thức vận động cao nhất là gì?",
        options: ["Cơ học", "Vật lý", "Sinh học", "Xã hội"],
        answer: "Xã hội",
      },
      {
        q: "Nguồn gốc xã hội của ý thức là gì?",
        options: [
          "Bộ não và phản xạ",
          "Lao động và ngôn ngữ",
          "Cảm giác và tri giác",
          "Bản năng sinh học",
        ],
        answer: "Lao động và ngôn ngữ",
      },
      {
        q: "Yếu tố quan trọng nhất trong kết cấu của ý thức là gì?",
        options: ["Tri thức", "Tình cảm", "Ý chí", "Thói quen"],
        answer: "Tri thức",
      },
    ],
  },
  {
    title: "Phép biện chứng duy vật",
    questions: [
      {
        q: "Phép biện chứng duy vật nghiên cứu điều gì?",
        options: [
          "Các mối liên hệ và quy luật chung nhất của sự vận động, phát triển",
          "Các sự kiện lịch sử riêng lẻ",
          "Các quy tắc ngữ pháp",
          "Các hiện tượng tâm linh",
        ],
        answer:
          "Các mối liên hệ và quy luật chung nhất của sự vận động, phát triển",
      },
      {
        q: "Mối liên hệ phổ biến có những tính chất nào?",
        options: [
          "Khách quan, phổ biến, đa dạng phong phú",
          "Chủ quan, ngẫu nhiên, tách biệt",
          "Cố định, bất biến, đơn nhất",
          "Trừu tượng, cá nhân, bí ẩn",
        ],
        answer: "Khách quan, phổ biến, đa dạng phong phú",
      },
      {
        q: "Nguyên lý về mối liên hệ phổ biến yêu cầu quan điểm phương pháp luận nào?",
        options: [
          "Quan điểm toàn diện",
          "Quan điểm phiến diện",
          "Quan điểm cô lập",
          "Quan điểm thần bí",
        ],
        answer: "Quan điểm toàn diện",
      },
      {
        q: "Theo chủ nghĩa Mác - Lênin, phát triển là gì?",
        options: [
          "Vận động đi lên từ thấp đến cao",
          "Sự lặp lại y nguyên",
          "Sự đứng yên",
          "Sự tăng số lượng đơn thuần",
        ],
        answer: "Vận động đi lên từ thấp đến cao",
      },
      {
        q: "Quy luật lượng – chất chỉ ra điều gì?",
        options: [
          "Cách thức phát triển",
          "Nguồn gốc phát triển",
          "Khuynh hướng phát triển",
          "Mục đích phát triển",
        ],
        answer: "Cách thức phát triển",
      },
      {
        q: "Điểm nút là gì?",
        options: [
          "Giới hạn mà lượng đạt tới khiến chất thay đổi",
          "Mối liên hệ ngẫu nhiên",
          "Một dạng ý thức",
          "Một hình thức thực tiễn",
        ],
        answer: "Giới hạn mà lượng đạt tới khiến chất thay đổi",
      },
      {
        q: "Quy luật mâu thuẫn chỉ ra điều gì?",
        options: [
          "Nguồn gốc của sự vận động và phát triển",
          "Cách thức ghi nhớ",
          "Sự phủ định sạch trơn",
          "Sự đứng yên tuyệt đối",
        ],
        answer: "Nguồn gốc của sự vận động và phát triển",
      },
      {
        q: "Phủ định biện chứng có hai tính chất cơ bản nào?",
        options: [
          "Khách quan và kế thừa",
          "Chủ quan và xóa bỏ",
          "Ngẫu nhiên và cô lập",
          "Tĩnh tại và bất biến",
        ],
        answer: "Khách quan và kế thừa",
      },
    ],
  },
  {
    title: "Thực tiễn, nhận thức và chân lý",
    questions: [
      {
        q: "Thực tiễn là gì?",
        options: [
          "Hoạt động vật chất có mục đích nhằm cải biến tự nhiên và xã hội",
          "Hoạt động tưởng tượng cá nhân",
          "Sự ghi nhớ máy móc",
          "Cảm giác nhất thời",
        ],
        answer:
          "Hoạt động vật chất có mục đích nhằm cải biến tự nhiên và xã hội",
      },
      {
        q: "Hình thức thực tiễn cơ bản và quan trọng nhất là gì?",
        options: [
          "Sản xuất vật chất",
          "Thực nghiệm khoa học",
          "Hoạt động chính trị xã hội",
          "Tranh luận lý thuyết",
        ],
        answer: "Sản xuất vật chất",
      },
      {
        q: "Thực tiễn có vai trò gì đối với nhận thức?",
        options: [
          "Cơ sở, động lực, mục đích và tiêu chuẩn chân lý",
          "Chỉ là kết quả phụ",
          "Không liên quan",
          "Chỉ là cảm xúc",
        ],
        answer: "Cơ sở, động lực, mục đích và tiêu chuẩn chân lý",
      },
      {
        q: "Con đường biện chứng của nhận thức chân lý là gì?",
        options: [
          "Trực quan sinh động → tư duy trừu tượng → thực tiễn",
          "Tưởng tượng → niềm tin → cảm xúc",
          "Thực tiễn → bỏ qua lý luận",
          "Cảm giác → phủ nhận thế giới",
        ],
        answer: "Trực quan sinh động → tư duy trừu tượng → thực tiễn",
      },
      {
        q: "Ba cấp độ của nhận thức cảm tính là gì?",
        options: [
          "Cảm giác, tri giác, biểu tượng",
          "Khái niệm, phán đoán, suy luận",
          "Lý luận, giả thuyết, quy luật",
          "Ý chí, tình cảm, tri thức",
        ],
        answer: "Cảm giác, tri giác, biểu tượng",
      },
      {
        q: "Ba cấp độ của nhận thức lý tính là gì?",
        options: [
          "Khái niệm, phán đoán, suy luận",
          "Cảm giác, tri giác, biểu tượng",
          "Lao động, ngôn ngữ, não người",
          "Chất, lượng, độ",
        ],
        answer: "Khái niệm, phán đoán, suy luận",
      },
      {
        q: "Chân lý là gì?",
        options: [
          "Tri thức phù hợp hiện thực khách quan và được thực tiễn kiểm nghiệm",
          "Ý kiến cá nhân",
          "Niềm tin chưa kiểm chứng",
          "Cảm xúc chủ quan",
        ],
        answer:
          "Tri thức phù hợp hiện thực khách quan và được thực tiễn kiểm nghiệm",
      },
    ],
  },
  {
    title: "Chủ nghĩa duy vật lịch sử",
    questions: [
      {
        q: "Chủ nghĩa duy vật lịch sử là gì?",
        options: [
          "Sự vận dụng quan điểm duy vật biện chứng vào xã hội và con người",
          "Học thuyết về nguyên tử",
          "Lý luận về ngữ pháp",
          "Quan điểm duy tâm về lịch sử",
        ],
        answer:
          "Sự vận dụng quan điểm duy vật biện chứng vào xã hội và con người",
      },
      {
        q: "Phương thức sản xuất gồm hai mặt nào?",
        options: [
          "Lực lượng sản xuất và quan hệ sản xuất",
          "Chính trị và pháp luật",
          "Tôn giáo và đạo đức",
          "Ý chí và tình cảm",
        ],
        answer: "Lực lượng sản xuất và quan hệ sản xuất",
      },
      {
        q: "Yếu tố nào quyết định quan hệ sản xuất?",
        options: [
          "Lực lượng sản xuất",
          "Kiến trúc thượng tầng",
          "Tâm lý xã hội",
          "Địa lý dân cư",
        ],
        answer: "Lực lượng sản xuất",
      },
      {
        q: "Trong tư liệu lao động, yếu tố nào thường xuyên biến đổi nhất?",
        options: ["Công cụ lao động", "Phong tục", "Tình cảm", "Tôn giáo"],
        answer: "Công cụ lao động",
      },
      {
        q: "Cơ sở hạ tầng là gì?",
        options: [
          "Toàn bộ quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội",
          "Tổng hợp quan điểm tôn giáo",
          "Hệ thống cảm xúc cá nhân",
          "Chỉ là nhà cửa đường sá",
        ],
        answer: "Toàn bộ quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội",
      },
      {
        q: "Cơ sở hạ tầng quyết định yếu tố nào?",
        options: [
          "Kiến trúc thượng tầng",
          "Cảm giác",
          "Ngôn ngữ",
          "Ý chí cá nhân",
        ],
        answer: "Kiến trúc thượng tầng",
      },
      {
        q: "Tồn tại xã hội quyết định yếu tố nào?",
        options: [
          "Ý thức xã hội",
          "Khái niệm toán học",
          "Cảm giác cá nhân",
          "Bản năng sinh học",
        ],
        answer: "Ý thức xã hội",
      },
      {
        q: "Hình thái kinh tế - xã hội gồm những yếu tố nào?",
        options: [
          "Lực lượng sản xuất, quan hệ sản xuất, kiến trúc thượng tầng",
          "Tôn giáo, nghệ thuật, văn học",
          "Cảm giác, tri giác, biểu tượng",
          "Chất, lượng, độ",
        ],
        answer: "Lực lượng sản xuất, quan hệ sản xuất, kiến trúc thượng tầng",
      },
      {
        q: "Nguồn gốc trực tiếp làm xuất hiện giai cấp là gì?",
        options: [
          "Chế độ chiếm hữu tư nhân về tư liệu sản xuất",
          "Sự khác nhau về sở thích",
          "Sự khác biệt khí hậu",
          "Sự phát triển ngôn ngữ",
        ],
        answer: "Chế độ chiếm hữu tư nhân về tư liệu sản xuất",
      },
      {
        q: "Nguyên nhân sâu xa của cách mạng xã hội là gì?",
        options: [
          "Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất",
          "Sự thay đổi trang phục",
          "Sở thích cá nhân",
          "Sự phát triển âm nhạc",
        ],
        answer: "Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất",
      },
      {
        q: "Theo Marx, bản chất con người là gì?",
        options: [
          "Tổng hòa các quan hệ xã hội",
          "Bản năng sinh học cố định",
          "Linh hồn bất biến",
          "Cảm xúc cá nhân thuần túy",
        ],
        answer: "Tổng hòa các quan hệ xã hội",
      },
      {
        q: "Ai là chủ thể sáng tạo ra lịch sử?",
        options: [
          "Quần chúng nhân dân",
          "Một cá nhân biệt lập",
          "Tự nhiên thuần túy",
          "Ý niệm tuyệt đối",
        ],
        answer: "Quần chúng nhân dân",
      },
    ],
  },
];

export const quizQuestions = reviewGroups.flatMap((group) =>
  group.questions.map((question) => ({ ...question, group: group.title })),
);

export const resources = [
  {
    icon: FileText,
    title: "Giáo trình Triết học Mác - Lênin",
    desc: "NXB Chính trị quốc gia",
    button: "Tải xuống",
  },
  {
    icon: FileText,
    title: "Vở ghi Triết 1 - Nhập môn CN Mác - Lênin và CNDV biện chứng",
    desc: "Tài liệu bổ sung từ file bạn gửi",
    button: "Xem tài liệu",
  },
  {
    icon: FileText,
    title: "Tóm tắt nội dung môn Triết học",
    desc: "Slideshare / tài liệu ôn tập",
    button: "Xem tài liệu",
  },
  {
    icon: FileText,
    title: "Bài giảng Triết học Mác - Lênin",
    desc: "Trường Đại học FPT",
    button: "Đọc thêm",
  },
  {
    icon: Download,
    title: "Vận dụng phép biện chứng trong cuộc sống",
    desc: "Bài viết tham khảo",
    button: "Đọc thêm",
  },
];

export const learningStats = [
  { icon: BookOpen, label: "Chương", value: "3" },
  { icon: ClipboardCheck, label: "Câu hỏi", value: `${quizQuestions.length}+` },
  { icon: Clock, label: "Giờ học", value: "15+" },
  { icon: Trophy, label: "Tiến độ", value: "85%" },
];
