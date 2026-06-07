const makeOptions = (correct, wrongs, seed) => {
  const base = [correct, wrongs[0], wrongs[1], wrongs[2]];
  const shift = seed % 4;
  const options = [...base.slice(shift), ...base.slice(0, shift)];
  return {
    options,
    correctAnswer: options.indexOf(correct),
  };
};

const createChapterQuestions = (chapter, concepts, startId) => {
  const templates = [
    (term) => `${term} được hiểu đúng nhất là gì?`,
    (term) => `Chọn nhận định đúng về ${term}.`,
    (term) => `Trong môn MLN111, ${term} có nội dung nào?`,
    (term) => `Nội dung nào sau đây phù hợp với ${term}?`,
  ];

  const result = [];
  let id = startId;

  concepts.forEach((item, conceptIndex) => {
    templates.forEach((template, templateIndex) => {
      const seed = conceptIndex + templateIndex + id;
      const { options, correctAnswer } = makeOptions(
        item.correct,
        item.wrongs,
        seed,
      );

      result.push({
        id,
        chapter,
        category: item.category,
        question: template(item.term),
        options,
        correctAnswer,
      });

      id += 1;
    });
  });

  return result;
};

const chapter1Concepts = [
  {
    category: "Nguồn gốc triết học",
    term: "Triết học",
    correct:
      "Hệ thống lý luận chung nhất về thế giới và vị trí con người trong thế giới",
    wrongs: [
      "Một hình thức tôn giáo thuần túy",
      "Một ngành khoa học chỉ nghiên cứu vật thể riêng lẻ",
      "Một phương pháp kinh doanh hiện đại",
    ],
  },
  {
    category: "Nguồn gốc triết học",
    term: "Nguồn gốc nhận thức của triết học",
    correct: "Nhu cầu nhận thức thế giới ở trình độ khái quát và trừu tượng",
    wrongs: [
      "Nhu cầu giải trí của con người",
      "Nhu cầu trao đổi hàng hóa",
      "Nhu cầu tổ chức chiến tranh",
    ],
  },
  {
    category: "Nguồn gốc triết học",
    term: "Nguồn gốc xã hội của triết học",
    correct:
      "Sự phân công lao động, phân chia giai cấp và hình thành lao động trí óc",
    wrongs: [
      "Sự xuất hiện mạng xã hội",
      "Sự phát triển của máy tính",
      "Sự ra đời của tiền giấy",
    ],
  },
  {
    category: "Khái niệm triết học",
    term: "Triết học theo Hy Lạp cổ đại",
    correct: "Yêu mến sự thông thái",
    wrongs: [
      "Chiêm ngưỡng trí tuệ",
      "Truy tìm lợi nhuận",
      "Quản lý xã hội bằng pháp luật",
    ],
  },
  {
    category: "Khái niệm triết học",
    term: "Triết học theo Ấn Độ cổ đại",
    correct: "Sự chiêm ngưỡng trí tuệ",
    wrongs: [
      "Yêu mến sự thông thái",
      "Khoa học về thị trường",
      "Kỹ thuật tổ chức nhà nước",
    ],
  },
  {
    category: "Khái niệm triết học",
    term: "Triết học theo Trung Quốc cổ đại",
    correct: "Sự truy tìm bản chất và đạo lý của sự vật",
    wrongs: [
      "Sự nghiên cứu nguyên tử",
      "Sự tính toán kinh tế",
      "Sự mô tả hiện tượng sinh học",
    ],
  },
  {
    category: "Chức năng triết học",
    term: "Chức năng thế giới quan",
    correct:
      "Giúp con người hình thành quan niệm chung về thế giới và vị trí của mình",
    wrongs: [
      "Giúp thay thế mọi khoa học cụ thể",
      "Giúp dự đoán chính xác mọi sự kiện",
      "Giúp loại bỏ toàn bộ thực tiễn",
    ],
  },
  {
    category: "Chức năng triết học",
    term: "Chức năng phương pháp luận",
    correct: "Định hướng phương pháp nhận thức và hoạt động thực tiễn",
    wrongs: [
      "Chỉ dùng để ghi nhớ khái niệm",
      "Chỉ dùng trong toán học",
      "Không liên quan đến hoạt động thực tiễn",
    ],
  },
  {
    category: "Thế giới quan",
    term: "Thế giới quan",
    correct:
      "Toàn bộ quan niệm của con người về thế giới và vị trí con người trong thế giới",
    wrongs: [
      "Bản đồ địa lý của thế giới",
      "Một môn học về khí hậu",
      "Một kỹ năng giao tiếp",
    ],
  },
  {
    category: "Thế giới quan",
    term: "Thế giới quan huyền thoại",
    correct:
      "Hình thức thế giới quan sơ khai giải thích thế giới bằng thần thoại",
    wrongs: [
      "Thế giới quan dựa trên thực nghiệm khoa học hiện đại",
      "Thế giới quan duy vật biện chứng",
      "Hệ thống lý luận hoàn chỉnh nhất",
    ],
  },
  {
    category: "Thế giới quan",
    term: "Thế giới quan tôn giáo",
    correct:
      "Hình thức thế giới quan dựa vào niềm tin vào lực lượng siêu nhiên",
    wrongs: [
      "Thế giới quan dựa hoàn toàn vào thực nghiệm",
      "Thế giới quan phủ nhận thần linh tuyệt đối",
      "Thế giới quan chỉ nghiên cứu sản xuất",
    ],
  },
  {
    category: "Thế giới quan",
    term: "Thế giới quan triết học",
    correct: "Hình thức thế giới quan lý luận, có tính khái quát cao",
    wrongs: [
      "Hình thức thế giới quan chỉ dựa vào thần thoại",
      "Hình thức thế giới quan không cần tư duy",
      "Hình thức thế giới quan chỉ dựa vào cảm xúc",
    ],
  },
  {
    category: "Vấn đề cơ bản của triết học",
    term: "Vấn đề cơ bản của triết học",
    correct: "Mối quan hệ giữa vật chất và ý thức",
    wrongs: [
      "Mối quan hệ giữa tiền tệ và hàng hóa",
      "Mối quan hệ giữa cá nhân và gia đình",
      "Mối quan hệ giữa nghệ thuật và giải trí",
    ],
  },
  {
    category: "Vấn đề cơ bản của triết học",
    term: "Mặt thứ nhất của vấn đề cơ bản triết học",
    correct: "Trả lời vật chất và ý thức cái nào có trước, cái nào quyết định",
    wrongs: [
      "Trả lời con người có bao nhiêu giác quan",
      "Trả lời xã hội có bao nhiêu ngành nghề",
      "Trả lời nhà nước ra đời năm nào",
    ],
  },
  {
    category: "Vấn đề cơ bản của triết học",
    term: "Mặt thứ hai của vấn đề cơ bản triết học",
    correct: "Trả lời con người có khả năng nhận thức thế giới hay không",
    wrongs: [
      "Trả lời vật chất có màu gì",
      "Trả lời tiền tệ có chức năng gì",
      "Trả lời nhà nước có bao nhiêu cấp",
    ],
  },
  {
    category: "Chủ nghĩa duy vật",
    term: "Chủ nghĩa duy vật",
    correct: "Quan điểm cho rằng vật chất có trước và quyết định ý thức",
    wrongs: [
      "Quan điểm cho rằng ý thức có trước vật chất",
      "Quan điểm phủ nhận khả năng nhận thức",
      "Quan điểm cho rằng thế giới do thần linh tạo ra",
    ],
  },
  {
    category: "Chủ nghĩa duy tâm",
    term: "Chủ nghĩa duy tâm",
    correct: "Quan điểm cho rằng ý thức, tinh thần có trước vật chất",
    wrongs: [
      "Quan điểm cho rằng vật chất quyết định ý thức",
      "Quan điểm đề cao sản xuất vật chất",
      "Quan điểm duy vật lịch sử",
    ],
  },
  {
    category: "Chủ nghĩa duy vật",
    term: "Chủ nghĩa duy vật chất phác",
    correct: "Hình thức duy vật cổ đại, còn ngây thơ, cảm tính và phỏng đoán",
    wrongs: [
      "Hình thức duy vật khoa học hiện đại nhất",
      "Hình thức duy tâm khách quan",
      "Học thuyết phủ nhận vật chất",
    ],
  },
  {
    category: "Chủ nghĩa duy vật",
    term: "Chủ nghĩa duy vật siêu hình",
    correct:
      "Hình thức duy vật xem sự vật tương đối cô lập, tĩnh tại, ít thấy phát triển",
    wrongs: [
      "Hình thức duy vật biện chứng phát triển cao nhất",
      "Hình thức duy tâm chủ quan",
      "Học thuyết phủ nhận thế giới khách quan",
    ],
  },
  {
    category: "Chủ nghĩa duy vật",
    term: "Chủ nghĩa duy vật biện chứng",
    correct:
      "Hình thức duy vật khoa học, thống nhất giữa duy vật và biện chứng",
    wrongs: [
      "Hình thức duy vật cổ đại ngây thơ",
      "Hình thức duy tâm khách quan",
      "Học thuyết phủ nhận vận động",
    ],
  },
  {
    category: "Chủ nghĩa duy tâm",
    term: "Duy tâm chủ quan",
    correct: "Quan điểm coi cảm giác hoặc ý thức cá nhân là cơ sở của thế giới",
    wrongs: [
      "Quan điểm coi vật chất quyết định ý thức",
      "Quan điểm đề cao thực tiễn vật chất",
      "Quan điểm duy vật biện chứng",
    ],
  },
  {
    category: "Chủ nghĩa duy tâm",
    term: "Duy tâm khách quan",
    correct:
      "Quan điểm coi một tinh thần khách quan hay ý niệm tuyệt đối là cơ sở của thế giới",
    wrongs: [
      "Quan điểm coi cảm giác cá nhân là tất cả",
      "Quan điểm coi vật chất có trước ý thức",
      "Quan điểm phủ nhận tinh thần tuyệt đối",
    ],
  },
  {
    category: "Nhận thức luận",
    term: "Khả tri luận",
    correct: "Quan điểm thừa nhận con người có khả năng nhận thức thế giới",
    wrongs: [
      "Quan điểm phủ nhận khả năng nhận thức thế giới",
      "Quan điểm cho rằng chỉ thần linh mới nhận thức được",
      "Quan điểm phủ nhận thực tiễn",
    ],
  },
  {
    category: "Nhận thức luận",
    term: "Bất khả tri luận",
    correct:
      "Quan điểm phủ nhận hoặc nghi ngờ khả năng nhận thức thế giới của con người",
    wrongs: [
      "Quan điểm khẳng định con người nhận thức được thế giới",
      "Quan điểm duy vật biện chứng",
      "Quan điểm đề cao thực tiễn là tiêu chuẩn chân lý",
    ],
  },
  {
    category: "Phương pháp luận",
    term: "Phương pháp biện chứng",
    correct: "Xem xét sự vật trong mối liên hệ, vận động và phát triển",
    wrongs: [
      "Xem xét sự vật cô lập, tách rời, bất biến",
      "Xem xét sự vật chỉ bằng cảm xúc",
      "Phủ nhận mọi mối liên hệ",
    ],
  },
  {
    category: "Phương pháp luận",
    term: "Phương pháp siêu hình",
    correct: "Xem xét sự vật cô lập, tách rời, tĩnh tại và ít thấy phát triển",
    wrongs: [
      "Xem xét sự vật trong mối liên hệ phổ biến",
      "Xem xét sự vật trong sự vận động",
      "Xem xét sự vật theo quan điểm phát triển",
    ],
  },
];

const chapter2Concepts = [
  {
    category: "Chủ nghĩa duy vật biện chứng",
    term: "Chủ nghĩa duy vật biện chứng",
    correct:
      "Sự thống nhất giữa thế giới quan duy vật và phương pháp biện chứng",
    wrongs: [
      "Sự thống nhất giữa duy tâm và siêu hình",
      "Một hình thức tôn giáo hiện đại",
      "Một học thuyết phủ nhận vật chất",
    ],
  },
  {
    category: "Vật chất",
    term: "Vật chất theo Lênin",
    correct:
      "Phạm trù triết học chỉ thực tại khách quan tồn tại không lệ thuộc vào cảm giác",
    wrongs: [
      "Sản phẩm thuần túy của ý thức",
      "Một cảm xúc cá nhân",
      "Một ý niệm tuyệt đối",
    ],
  },
  {
    category: "Vật chất",
    term: "Thuộc tính cơ bản nhất của vật chất",
    correct: "Tính khách quan",
    wrongs: ["Màu sắc", "Khối lượng riêng", "Hình dáng bên ngoài"],
  },
  {
    category: "Vật chất",
    term: "Thực tại khách quan",
    correct: "Cái tồn tại độc lập với ý thức của con người",
    wrongs: [
      "Cái chỉ tồn tại trong tưởng tượng",
      "Cái phụ thuộc hoàn toàn vào cảm giác",
      "Cái do ý thức cá nhân tạo ra",
    ],
  },
  {
    category: "Vật chất",
    term: "Ý nghĩa định nghĩa vật chất của Lênin",
    correct: "Khắc phục hạn chế của duy vật cũ và chống lại quan điểm duy tâm",
    wrongs: [
      "Phủ nhận thế giới khách quan",
      "Đồng nhất vật chất với nguyên tử",
      "Cho rằng ý thức sinh ra vật chất",
    ],
  },
  {
    category: "Vận động",
    term: "Vận động",
    correct: "Phương thức tồn tại của vật chất, là sự biến đổi nói chung",
    wrongs: [
      "Sự đứng im tuyệt đối",
      "Một trạng thái tinh thần",
      "Một hình thức ý thức xã hội",
    ],
  },
  {
    category: "Vận động",
    term: "Đứng im",
    correct: "Trạng thái đặc biệt của vận động, có tính tương đối",
    wrongs: [
      "Trạng thái tuyệt đối không vận động",
      "Sự phủ nhận hoàn toàn vận động",
      "Một hiện tượng không tồn tại trong thực tế",
    ],
  },
  {
    category: "Vận động",
    term: "Năm hình thức vận động cơ bản",
    correct: "Cơ học, vật lý, hóa học, sinh học và xã hội",
    wrongs: [
      "Kinh tế, chính trị, văn hóa, đạo đức, pháp luật",
      "Cảm giác, tri giác, biểu tượng, khái niệm, suy luận",
      "Tôn giáo, nghệ thuật, pháp luật, đạo đức, triết học",
    ],
  },
  {
    category: "Không gian và thời gian",
    term: "Không gian",
    correct:
      "Hình thức tồn tại của vật chất thể hiện vị trí, kích thước và kết cấu",
    wrongs: [
      "Hình thức tồn tại của ý thức cá nhân",
      "Một loại cảm giác",
      "Một dạng niềm tin",
    ],
  },
  {
    category: "Không gian và thời gian",
    term: "Thời gian",
    correct:
      "Hình thức tồn tại của vật chất thể hiện trình tự, độ dài và nhịp độ biến đổi",
    wrongs: [
      "Một hình thức của tôn giáo",
      "Một trạng thái không liên quan vật chất",
      "Một sản phẩm của ý muốn cá nhân",
    ],
  },
  {
    category: "Ý thức",
    term: "Ý thức",
    correct:
      "Sự phản ánh năng động, sáng tạo thế giới khách quan vào bộ não người",
    wrongs: [
      "Một dạng vật chất thô sơ",
      "Một vật thể tồn tại độc lập ngoài con người",
      "Một hiện tượng không có nguồn gốc xã hội",
    ],
  },
  {
    category: "Ý thức",
    term: "Nguồn gốc tự nhiên của ý thức",
    correct: "Bộ não người và sự phản ánh thế giới khách quan",
    wrongs: [
      "Nhà nước và pháp luật",
      "Tôn giáo và nghệ thuật",
      "Tiền tệ và hàng hóa",
    ],
  },
  {
    category: "Ý thức",
    term: "Nguồn gốc xã hội của ý thức",
    correct: "Lao động và ngôn ngữ",
    wrongs: [
      "Không gian và thời gian",
      "Cảm giác và tri giác",
      "Nguyên tử và phân tử",
    ],
  },
  {
    category: "Ý thức",
    term: "Bản chất của ý thức",
    correct:
      "Hình ảnh chủ quan của thế giới khách quan, có tính năng động và sáng tạo",
    wrongs: [
      "Bản sao máy móc tuyệt đối của hiện thực",
      "Một dạng vật chất đặc biệt",
      "Cái tồn tại không cần bộ não người",
    ],
  },
  {
    category: "Ý thức",
    term: "Tri thức",
    correct: "Yếu tố cơ bản và quan trọng nhất trong kết cấu ý thức",
    wrongs: [
      "Một hình thức vận động cơ học",
      "Một yếu tố không liên quan ý thức",
      "Một dạng vật chất cụ thể",
    ],
  },
  {
    category: "Vật chất và ý thức",
    term: "Mối quan hệ giữa vật chất và ý thức",
    correct:
      "Vật chất quyết định ý thức, ý thức tác động trở lại vật chất thông qua thực tiễn",
    wrongs: [
      "Ý thức quyết định tuyệt đối vật chất",
      "Vật chất và ý thức không liên hệ nhau",
      "Ý thức sinh ra toàn bộ thế giới vật chất",
    ],
  },
  {
    category: "Vật chất và ý thức",
    term: "Nguyên tắc khách quan",
    correct: "Xuất phát từ thực tế khách quan và tôn trọng quy luật khách quan",
    wrongs: [
      "Xuất phát từ mong muốn chủ quan",
      "Tuyệt đối hóa ý chí cá nhân",
      "Phủ nhận điều kiện vật chất",
    ],
  },
  {
    category: "Hai nguyên lý",
    term: "Nguyên lý mối liên hệ phổ biến",
    correct: "Mọi sự vật, hiện tượng đều tồn tại trong mối liên hệ với nhau",
    wrongs: [
      "Mọi sự vật tồn tại cô lập tuyệt đối",
      "Chỉ ý thức mới có mối liên hệ",
      "Sự vật không tác động lẫn nhau",
    ],
  },
  {
    category: "Hai nguyên lý",
    term: "Nguyên lý phát triển",
    correct:
      "Mọi sự vật đều vận động, biến đổi và phát triển theo khuynh hướng nhất định",
    wrongs: [
      "Mọi sự vật đứng im tuyệt đối",
      "Phát triển chỉ do ý muốn cá nhân",
      "Không có cái mới ra đời",
    ],
  },
  {
    category: "Quy luật lượng - chất",
    term: "Quy luật lượng - chất",
    correct: "Chỉ ra cách thức vận động và phát triển của sự vật",
    wrongs: [
      "Chỉ ra nguồn gốc của nhận thức",
      "Chỉ ra bản chất của nhà nước",
      "Chỉ ra vai trò của giai cấp",
    ],
  },
  {
    category: "Quy luật lượng - chất",
    term: "Độ",
    correct: "Khoảng giới hạn mà sự thay đổi về lượng chưa làm thay đổi chất",
    wrongs: [
      "Điểm làm chất biến đổi ngay lập tức",
      "Sự phủ định sạch trơn cái cũ",
      "Nguồn gốc của mâu thuẫn",
    ],
  },
  {
    category: "Quy luật lượng - chất",
    term: "Điểm nút",
    correct: "Điểm giới hạn mà lượng tích lũy đủ làm chất có thể biến đổi",
    wrongs: [
      "Khoảng ổn định của chất",
      "Một dạng đứng im tuyệt đối",
      "Một yếu tố của ý thức",
    ],
  },
  {
    category: "Quy luật lượng - chất",
    term: "Bước nhảy",
    correct: "Quá trình chuyển hóa từ chất cũ sang chất mới",
    wrongs: [
      "Sự tích lũy lượng thông thường",
      "Sự đứng im tuyệt đối",
      "Một hình thức cảm giác",
    ],
  },
  {
    category: "Quy luật mâu thuẫn",
    term: "Quy luật mâu thuẫn",
    correct: "Chỉ ra nguồn gốc và động lực của sự phát triển",
    wrongs: [
      "Chỉ ra cách thức tích lũy lượng",
      "Chỉ ra hình thức tồn tại của vật chất",
      "Chỉ ra kết cấu của ý thức",
    ],
  },
  {
    category: "Quy luật phủ định của phủ định",
    term: "Quy luật phủ định của phủ định",
    correct: "Chỉ ra khuynh hướng phát triển theo đường xoắn ốc",
    wrongs: [
      "Chỉ ra sự đứng im tuyệt đối",
      "Chỉ ra sự phủ nhận sạch trơn không kế thừa",
      "Chỉ ra ý thức sinh ra vật chất",
    ],
  },
];

const chapter3Concepts = [
  {
    category: "Chủ nghĩa duy vật lịch sử",
    term: "Chủ nghĩa duy vật lịch sử",
    correct:
      "Sự vận dụng chủ nghĩa duy vật biện chứng vào nghiên cứu xã hội và lịch sử",
    wrongs: [
      "Một học thuyết duy tâm về lịch sử",
      "Một lý thuyết tôn giáo",
      "Một phương pháp sinh học",
    ],
  },
  {
    category: "Sản xuất vật chất",
    term: "Sản xuất vật chất",
    correct:
      "Quá trình con người tác động vào tự nhiên để tạo ra của cải vật chất",
    wrongs: [
      "Hoạt động tinh thần thuần túy",
      "Một hình thức cầu nguyện",
      "Một hoạt động không liên quan xã hội",
    ],
  },
  {
    category: "Phương thức sản xuất",
    term: "Phương thức sản xuất",
    correct:
      "Cách thức con người tiến hành sản xuất trong một giai đoạn lịch sử nhất định",
    wrongs: [
      "Một phương pháp học tập cá nhân",
      "Một loại hình nghệ thuật",
      "Một hình thức tín ngưỡng",
    ],
  },
  {
    category: "Phương thức sản xuất",
    term: "Lực lượng sản xuất",
    correct:
      "Sự thống nhất giữa người lao động với tư liệu sản xuất trong quá trình sản xuất",
    wrongs: [
      "Quan hệ giữa người với người trong phân phối",
      "Một hình thức ý thức xã hội",
      "Một thiết chế chính trị",
    ],
  },
  {
    category: "Phương thức sản xuất",
    term: "Quan hệ sản xuất",
    correct: "Quan hệ giữa người với người trong quá trình sản xuất",
    wrongs: [
      "Quan hệ giữa con người với thần linh",
      "Quan hệ giữa cảm giác và tri giác",
      "Quan hệ giữa ý thức và vô thức",
    ],
  },
  {
    category: "Phương thức sản xuất",
    term: "Công cụ lao động",
    correct:
      "Bộ phận quan trọng nhất của tư liệu lao động, quyết định năng suất lao động",
    wrongs: [
      "Một hình thức ý thức xã hội",
      "Một loại quan hệ pháp luật",
      "Một yếu tố của kiến trúc thượng tầng",
    ],
  },
  {
    category: "Phương thức sản xuất",
    term: "Quy luật quan hệ sản xuất phù hợp với lực lượng sản xuất",
    correct:
      "Quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất",
    wrongs: [
      "Lực lượng sản xuất không liên quan quan hệ sản xuất",
      "Ý thức cá nhân quyết định tuyệt đối sản xuất",
      "Nhà nước làm biến mất mọi quy luật",
    ],
  },
  {
    category: "Tồn tại xã hội và ý thức xã hội",
    term: "Tồn tại xã hội",
    correct: "Toàn bộ điều kiện sinh hoạt vật chất của xã hội",
    wrongs: [
      "Toàn bộ cảm xúc cá nhân",
      "Một dạng ý thức tôn giáo",
      "Một học thuyết nghệ thuật",
    ],
  },
  {
    category: "Tồn tại xã hội và ý thức xã hội",
    term: "Ý thức xã hội",
    correct: "Mặt tinh thần của đời sống xã hội phản ánh tồn tại xã hội",
    wrongs: [
      "Toàn bộ điều kiện vật chất của xã hội",
      "Công cụ lao động",
      "Tư liệu sản xuất",
    ],
  },
  {
    category: "Tồn tại xã hội và ý thức xã hội",
    term: "Tâm lý xã hội",
    correct:
      "Những tình cảm, tâm trạng, thói quen hình thành tự phát trong đời sống xã hội",
    wrongs: [
      "Hệ thống lý luận khoa học chặt chẽ",
      "Cơ sở kinh tế của xã hội",
      "Một loại công cụ sản xuất",
    ],
  },
  {
    category: "Tồn tại xã hội và ý thức xã hội",
    term: "Hệ tư tưởng",
    correct:
      "Ý thức lý luận có tính hệ thống của một giai cấp hoặc lực lượng xã hội",
    wrongs: [
      "Tâm trạng tự phát hằng ngày",
      "Công cụ sản xuất vật chất",
      "Một loại vận động cơ học",
    ],
  },
  {
    category: "Cơ sở hạ tầng và kiến trúc thượng tầng",
    term: "Cơ sở hạ tầng",
    correct: "Toàn bộ quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội",
    wrongs: [
      "Đường sá và cầu cống theo nghĩa thông thường",
      "Một hình thức tôn giáo",
      "Một hệ thống cảm xúc cá nhân",
    ],
  },
  {
    category: "Cơ sở hạ tầng và kiến trúc thượng tầng",
    term: "Kiến trúc thượng tầng",
    correct:
      "Toàn bộ quan điểm chính trị, pháp luật, đạo đức, tôn giáo và thiết chế tương ứng",
    wrongs: [
      "Toàn bộ công cụ lao động",
      "Toàn bộ tư liệu sản xuất",
      "Toàn bộ dân số tự nhiên",
    ],
  },
  {
    category: "Hình thái kinh tế - xã hội",
    term: "Hình thái kinh tế - xã hội",
    correct:
      "Xã hội ở một giai đoạn lịch sử với lực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng tương ứng",
    wrongs: [
      "Một nhóm người có cùng sở thích",
      "Một phong cách nghệ thuật",
      "Một hiện tượng thời tiết",
    ],
  },
  {
    category: "Giai cấp",
    term: "Giai cấp",
    correct:
      "Những tập đoàn người khác nhau về địa vị trong hệ thống sản xuất xã hội",
    wrongs: [
      "Những người cùng màu áo",
      "Những cá nhân có cùng sở thích",
      "Một cộng đồng không liên quan sản xuất",
    ],
  },
  {
    category: "Giai cấp",
    term: "Đấu tranh giai cấp",
    correct: "Cuộc đấu tranh giữa các giai cấp có lợi ích căn bản đối lập nhau",
    wrongs: [
      "Một hoạt động thể thao",
      "Một cuộc tranh luận cá nhân ngẫu nhiên",
      "Một hình thức giải trí",
    ],
  },
  {
    category: "Nhà nước",
    term: "Nhà nước",
    correct: "Tổ chức quyền lực chính trị đặc biệt của giai cấp thống trị",
    wrongs: [
      "Một tổ chức phi giai cấp tuyệt đối",
      "Một nhóm học thuật tự phát",
      "Một hiện tượng tự nhiên",
    ],
  },
  {
    category: "Nhà nước",
    term: "Nguồn gốc ra đời của nhà nước",
    correct: "Mâu thuẫn giai cấp phát triển đến mức không thể điều hòa",
    wrongs: [
      "Xã hội không còn mâu thuẫn",
      "Con người không cần quản lý",
      "Tôn giáo biến mất hoàn toàn",
    ],
  },
  {
    category: "Cách mạng xã hội",
    term: "Cách mạng xã hội",
    correct: "Sự biến đổi căn bản về chất của toàn bộ đời sống xã hội",
    wrongs: [
      "Một thay đổi nhỏ trong thói quen cá nhân",
      "Một hiện tượng tự nhiên đơn thuần",
      "Một hoạt động giải trí",
    ],
  },
  {
    category: "Cách mạng xã hội",
    term: "Nguyên nhân sâu xa của cách mạng xã hội",
    correct: "Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất",
    wrongs: [
      "Ý thích cá nhân",
      "Biến đổi thời tiết",
      "Một trào lưu mạng xã hội",
    ],
  },
  {
    category: "Quần chúng nhân dân",
    term: "Quần chúng nhân dân",
    correct:
      "Lực lượng đông đảo sáng tạo ra của cải vật chất, tinh thần và thúc đẩy lịch sử",
    wrongs: [
      "Chỉ là một nhóm nhỏ lãnh tụ",
      "Một tầng lớp không liên quan lịch sử",
      "Một lực lượng đứng ngoài xã hội",
    ],
  },
  {
    category: "Quần chúng nhân dân",
    term: "Vai trò của quần chúng nhân dân",
    correct: "Chủ thể sáng tạo chân chính của lịch sử",
    wrongs: [
      "Yếu tố hoàn toàn thụ động",
      "Lực lượng không có vai trò",
      "Chỉ là đối tượng bị quản lý",
    ],
  },
  {
    category: "Lãnh tụ",
    term: "Lãnh tụ",
    correct:
      "Cá nhân kiệt xuất gắn bó với quần chúng và có khả năng định hướng phong trào",
    wrongs: [
      "Người tách rời hoàn toàn quần chúng",
      "Một hiện tượng tự nhiên",
      "Một loại công cụ lao động",
    ],
  },
  {
    category: "Con người",
    term: "Con người theo triết học Mác",
    correct: "Thực thể tự nhiên - xã hội",
    wrongs: [
      "Một linh hồn thuần túy",
      "Một cỗ máy sinh học đơn giản",
      "Một ý niệm tuyệt đối",
    ],
  },
  {
    category: "Con người",
    term: "Bản chất con người",
    correct: "Tổng hòa những quan hệ xã hội",
    wrongs: [
      "Bản năng sinh học bất biến",
      "Linh hồn siêu nhiên",
      "Ý thức cá nhân tách khỏi xã hội",
    ],
  },
];

export const questionBank = [
  ...createChapterQuestions("Chương 1", chapter1Concepts, 1),
  ...createChapterQuestions("Chương 2", chapter2Concepts, 101),
  ...createChapterQuestions("Chương 3", chapter3Concepts, 201),
];

export const homeMenu = [
  {
    id: "chapter-1",
    title: "Chương 1",
    subtitle: "Triết học và vai trò của triết học",
    type: "chapter",
    chapter: "Chương 1",
  },
  {
    id: "chapter-2",
    title: "Chương 2",
    subtitle: "Chủ nghĩa duy vật biện chứng",
    type: "chapter",
    chapter: "Chương 2",
  },
  {
    id: "chapter-3",
    title: "Chương 3",
    subtitle: "Chủ nghĩa duy vật lịch sử",
    type: "chapter",
    chapter: "Chương 3",
  },
  {
    id: "mock-exam",
    title: "Thi thử MLN111",
    subtitle: "60 câu random từ 3 chương",
    type: "mockExam",
  },
];

export function getQuestionsByChapter(chapter) {
  return questionBank.filter((q) => q.chapter === chapter);
}

export function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export function getRandomQuestions(array, count) {
  return shuffleArray(array).slice(0, count);
}

export function generateMockExam() {
  const chapter1 = getQuestionsByChapter("Chương 1");
  const chapter2 = getQuestionsByChapter("Chương 2");
  const chapter3 = getQuestionsByChapter("Chương 3");

  return shuffleArray([
    ...getRandomQuestions(chapter1, 20),
    ...getRandomQuestions(chapter2, 20),
    ...getRandomQuestions(chapter3, 20),
  ]);
}

export function calculateScore(selectedAnswers, examQuestions) {
  let correct = 0;

  examQuestions.forEach((q) => {
    if (selectedAnswers[q.id] === q.correctAnswer) {
      correct += 1;
    }
  });

  return {
    correct,
    total: examQuestions.length,
    percentage: Math.round((correct / examQuestions.length) * 100),
  };
}

export function getChapterResult(selectedAnswers, examQuestions) {
  const result = {};

  examQuestions.forEach((q) => {
    if (!result[q.chapter]) {
      result[q.chapter] = {
        correct: 0,
        total: 0,
      };
    }

    result[q.chapter].total += 1;

    if (selectedAnswers[q.id] === q.correctAnswer) {
      result[q.chapter].correct += 1;
    }
  });

  return result;
}
