// 非遗知识数据库 - 临时JSON存储
// 十大门类代表性项目（从中国非遗网整理）

export interface HeritageItem {
  id: string;
  name: string;
  category: string; // 十大门类
  region: string;
  level: string;
  batch: number;
  code?: string;
  summary: string;
  description: string;
  history?: string;
  technique?: string;
  inheritance?: string;
  value?: string;
  images?: string[];
}

export const categories = [
  { id: "folk-literature", name: "民间文学", code: "Ⅰ", icon: "📚" },
  { id: "traditional-music", name: "传统音乐", code: "Ⅱ", icon: "🎵" },
  { id: "traditional-dance", name: "传统舞蹈", code: "Ⅲ", icon: "💃" },
  { id: "traditional-opera", name: "传统戏剧", code: "Ⅳ", icon: "🎭" },
  { id: "quyi", name: "曲艺", code: "Ⅴ", icon: "🎪" },
  { id: "sports", name: "传统体育游艺杂技", code: "Ⅵ", icon: "🥋" },
  { id: "traditional-art", name: "传统美术", code: "Ⅶ", icon: "🎨" },
  { id: "traditional-skills", name: "传统技艺", code: "Ⅷ", icon: "🔨" },
  { id: "traditional-medicine", name: "传统医药", code: "Ⅸ", icon: "🌿" },
  { id: "folk-custom", name: "民俗", code: "Ⅹ", icon: "🏮" },
];

export const heritageData: HeritageItem[] = [
  {
    id: "gesar",
    name: "格萨尔",
    category: "民间文学",
    region: "西藏、青海、四川、甘肃、云南、内蒙古、新疆",
    level: "国家级",
    batch: 1,
    code: "Ⅰ-27",
    summary: "世界上唯一一部至今还在不断创造的'活着的史诗'",
    description: "《格萨尔》是一部篇幅极其宏大的藏族民间说唱体英雄史诗。它是世界上唯一一部至今还在不断创造的'活着的史诗'。史诗讲述了格萨尔王降伏妖魔、抑强扶弱、统一各部落、造福百姓的故事。",
    history: "《格萨尔》大约产生于古代藏族氏族社会开始瓦解、奴隶制国家政权逐渐形成的历史时期，距今已有1000多年的历史。",
    technique: "以口头说唱形式流传，由'仲肯'（说唱艺人）即兴表演",
    value: "被誉为'东方的荷马史诗'，具有极高的文学、历史、民俗、语言学价值"
  },
  {
    id: "miao-guge",
    name: "苗族古歌",
    category: "民间文学", 
    region: "贵州省台江县、黄平县",
    level: "国家级",
    batch: 1,
    code: "Ⅰ-1",
    summary: "苗族古代文化的百科全书",
    description: "苗族古歌是苗族古代先民在长期的生产劳动中创造出来的口传史诗，内容包罗万象，从宇宙的诞生、人类和物种的起源、开天辟地、初民时期的滔天洪水，到苗族的大迁徙、苗族的古代社会制度和日常生产生活等。",
    history: "苗族古歌历史悠久，源远流长，是苗族文化的重要载体",
    technique: "以歌唱形式传承，多在节日、婚礼、祭祀等场合演唱",
    value: "被称为苗族的'百科全书'，是研究苗族历史文化的活化石"
  },
  {
    id: "dong-dage",
    name: "侗族大歌",
    category: "传统音乐",
    region: "贵州省黎平县、广西三江县、湖南通道县",
    level: "国家级",
    batch: 1,
    code: "Ⅱ-28",
    summary: "清泉般闪光的音乐，掠过古梦边缘的旋律",
    description: "侗族大歌是侗族地区一种多声部、无指挥、无伴奏、自然合声的民间合唱形式。2009年被联合国教科文组织列入人类非物质文化遗产代表作名录。",
    history: "起源于春秋战国时期，距今已有2500多年的历史",
    technique: "多声部合唱，一领众和，无伴奏、无指挥",
    value: "被认为是'清泉般闪光的音乐，掠过古梦边缘的旋律'"
  },
  {
    id: "guqin",
    name: "古琴艺术",
    category: "传统音乐",
    region: "全国各地",
    level: "国家级",
    batch: 1,
    code: "Ⅱ-34",
    summary: "中国文人音乐的代表，人类非物质文化遗产",
    description: "古琴又称'七弦琴'，是中国最古老的弹拨乐器之一，距今已有3000多年历史。古琴艺术包括琴曲、琴谱、琴史、琴器、琴人等。2003年被联合国教科文组织列入人类非物质文化遗产代表作名录。",
    history: "传说为伏羲、神农、舜帝所创，有文字可考的历史约3000年",
    technique: "指法丰富，有减字谱记谱法",
    value: "位列'琴棋书画'四艺之首，是中国文人精神的象征"
  },
  {
    id: "dragon-dance",
    name: "龙舞",
    category: "传统舞蹈",
    region: "全国各地",
    level: "国家级",
    batch: 1,
    code: "Ⅲ-4",
    summary: "华夏民族的精神图腾，喜庆祥和的象征",
    description: "龙舞也称'舞龙'，是中国民间传统舞蹈。龙是中华民族的图腾，舞龙祈求风调雨顺、国泰民安。全国各地都有舞龙传统，如重庆铜梁龙舞、广东醒狮等。",
    history: "起源于汉代，距今已有2000多年历史",
    technique: "多人配合，手持龙具舞动，形式多样",
    value: "象征着中华民族的凝聚力和向心力"
  },
  {
    id: "lion-dance",
    name: "狮舞",
    category: "传统舞蹈",
    region: "广东、福建、河南等地",
    level: "国家级",
    batch: 1,
    code: "Ⅲ-5",
    summary: "驱邪避害，祈求吉祥",
    description: "狮舞是中国民间传统舞蹈，有北狮和南狮之分。北狮重写实，南狮重写意。广东醒狮是南狮的代表，2006年列入第一批国家级非遗名录。",
    history: "相传起源于南北朝时期，已有1500多年历史",
    technique: "两人配合舞狮，一人舞狮头一人舞狮尾",
    value: "象征吉祥如意，是华人文化的重要符号"
  },
  {
    id: "peking-opera",
    name: "京剧",
    category: "传统戏剧",
    region: "全国各地",
    level: "国家级",
    batch: 1,
    code: "Ⅳ-28",
    summary: "国粹艺术，东方戏剧的明珠",
    description: "京剧形成于北京，距今已有200多年历史，是中国影响最大的戏曲剧种。2010年被联合国教科文组织列入人类非物质文化遗产代表作名录。以梅兰芳命名的京剧表演体系被视为东方戏剧表演体系的代表。",
    history: "形成于清代乾隆年间，由徽班进京后融合发展而成",
    technique: "唱念做打，生旦净丑四大行当，程式化表演",
    value: "被誉为'国粹'，是中国传统文化的瑰宝"
  },
  {
    id: "kunqu",
    name: "昆曲",
    category: "传统戏剧",
    region: "江苏、浙江、上海、北京等地",
    level: "国家级",
    batch: 1,
    code: "Ⅳ-1",
    summary: "百戏之祖，中国戏曲艺术的活化石",
    description: "昆曲发源于14世纪苏州昆山，是中国最古老的剧种之一。2001年被联合国教科文组织列入人类非物质文化遗产代表作名录，被誉为'百戏之祖'。",
    history: "元末明初起源于江苏昆山，明代嘉靖年间经魏良辅改革后兴盛",
    technique: "曲牌体，水磨调，载歌载舞，程式严谨",
    value: "中国戏曲艺术的活化石，对后世戏曲影响深远"
  },
  {
    id: "xiangsheng",
    name: "相声",
    category: "曲艺",
    region: "北京、天津等地",
    level: "国家级",
    batch: 1,
    code: "Ⅴ-18",
    summary: "说学逗唱，雅俗共赏的语言艺术",
    description: "相声是一种民间说唱曲艺，以说、学、逗、唱为表演手段。主要流行于北京、天津，使用北京方言表演。",
    history: "形成于清代咸丰年间，距今已有150多年历史",
    technique: "说学逗唱，单口、对口、群口三种形式",
    value: "中国独有的曲艺形式，深受群众喜爱"
  },
  {
    id: "taijiquan",
    name: "太极拳",
    category: "传统体育游艺杂技",
    region: "河南温县、河北永年等地",
    level: "国家级",
    batch: 1,
    code: "Ⅵ-11",
    summary: "以柔克刚，阴阳调和的武术哲学",
    description: "太极拳是基于阴阳循环、天人合一的中国传统哲学思想和养生观念，以中正圆活为特点的运动。2020年被联合国教科文组织列入人类非物质文化遗产代表作名录。",
    history: "起源于17世纪中叶河南温县陈家沟",
    technique: "以掤、捋、挤、按、採、挒、肘、靠、进、退、顾、盼、定十三法为核心",
    value: "体现中国传统哲学思想，健身与修身的完美结合"
  },
  {
    id: "shaolin-kungfu",
    name: "少林功夫",
    category: "传统体育游艺杂技",
    region: "河南省登封市",
    level: "国家级",
    batch: 1,
    code: "Ⅵ-7",
    summary: "禅武合一，天下武功出少林",
    description: "少林功夫是指在河南登封嵩山少林寺特定佛教文化环境中历史地形成的，以紧那罗王信仰为核心，以少林武僧演练的武术为表现形式，并充分体现禅宗智慧的传统武术体系。",
    history: "起源于北魏时期，距今已有1500多年历史",
    technique: "拳术、器械、功法共700余种套路",
    value: "中国武术的重要流派，禅武合一的典范"
  },
  {
    id: "papercut",
    name: "中国剪纸",
    category: "传统美术",
    region: "全国各地",
    level: "国家级",
    batch: 1,
    code: "Ⅶ-16",
    summary: "剪刀与纸张的艺术，民间审美的结晶",
    description: "中国剪纸是用剪刀或刻刀在纸上剪刻花纹，用于装点生活或配合其他民俗活动的民间艺术。2009年被联合国教科文组织列入人类非物质文化遗产代表作名录。",
    history: "起源于汉代，距今已有1500多年历史",
    technique: "剪、刻、撕、烧等多种技法，南北风格各异",
    value: "蕴含着丰富的文化历史信息，表达了广大民众的社会认同"
  },
  {
    id: "suzhou-embroidery",
    name: "苏绣",
    category: "传统美术",
    region: "江苏省苏州市",
    level: "国家级",
    batch: 1,
    code: "Ⅶ-18",
    summary: "东方明珠，刺绣艺术的巅峰",
    description: "苏绣是苏州地区刺绣产品的总称，与湘绣、粤绣、蜀绣并称中国四大名绣。以'精细雅洁'著称，图案秀丽、构思巧妙、绣工细致、针法活泼、色彩清雅。",
    history: "起源于三国时期，宋代已具相当规模，明清时期达到鼎盛",
    technique: "平、齐、细、密、和、光、顺、匀，针法多达40余种",
    value: "被誉为'东方明珠'，多次作为国礼赠送给外国元首"
  },
  {
    id: "jingdezhen-porcelain",
    name: "景德镇手工制瓷技艺",
    category: "传统技艺",
    region: "江西省景德镇市",
    level: "国家级",
    batch: 1,
    code: "Ⅷ-7",
    summary: "白如玉、明如镜、薄如纸、声如磬",
    description: "景德镇手工制瓷技艺是江西省景德镇市的传统手工技艺。景德镇制瓷历史悠久，技艺精湛，产品'白如玉、明如镜、薄如纸、声如磬'，享誉世界。",
    history: "始于汉代，兴于唐宋，盛于明清，有2000多年历史",
    technique: "拉坯、利坯、施釉、画坯、烧窑等72道工序",
    value: "中国陶瓷艺术的最高代表，海上丝绸之路的重要商品"
  },
  {
    id: "yixing-zisha",
    name: "宜兴紫砂陶制作技艺",
    category: "传统技艺",
    region: "江苏省宜兴市",
    level: "国家级",
    batch: 1,
    code: "Ⅷ-1",
    summary: "世间茶具称为首，土与火的艺术",
    description: "宜兴紫砂陶制作技艺是江苏省宜兴市的传统手工技艺。紫砂陶器以宜兴特有的紫砂泥为原料，质地细腻，色泽雅致，透气性好，泡茶不走味。",
    history: "起源于宋代，明代供春、时大彬等名家辈出",
    technique: "打身筒、镶身筒，手工拍打成型",
    value: "茶文化的重要载体，文人雅士的最爱"
  },
  {
    id: "tcmp",
    name: "中医针灸",
    category: "传统医药",
    region: "全国各地",
    level: "国家级",
    batch: 1,
    code: "Ⅸ-1",
    summary: "东方医学的瑰宝，经络学说的实践",
    description: "中医针灸是针法和灸法的合称，是中国传统医学的重要组成部分。2010年被联合国教科文组织列入人类非物质文化遗产代表作名录。",
    history: "起源于新石器时代，距今已有数千年历史",
    technique: "针刺和艾灸，通过刺激经络穴位治病",
    value: "中医学的核心内容，世界医学的重要组成部分"
  },
  {
    id: "tibetan-medicine",
    name: "藏医药",
    category: "传统医药",
    region: "西藏、青海、四川、甘肃、云南",
    level: "国家级",
    batch: 1,
    code: "Ⅸ-9",
    summary: "雪域高原的医学智慧",
    description: "藏医药是藏族人民在高原环境下创造的独特医药体系，以《四部医典》为代表著作，具有完整的理论体系和丰富的临床经验。",
    history: "起源于公元前1世纪，有2000多年历史",
    technique: "望、触、问三诊，尿诊、脉诊独具特色",
    value: "世界四大传统医学之一，高原医学的瑰宝"
  },
  {
    id: "spring-festival",
    name: "春节",
    category: "民俗",
    region: "全国各地",
    level: "国家级",
    batch: 1,
    code: "Ⅹ-1",
    summary: "中华民族最隆重的传统节日",
    description: "春节是中国民间最隆重、最热闹的传统节日，包括除夕、正月初一和正月十五元宵节。习俗有贴春联、放鞭炮、吃年夜饭、拜年、舞龙舞狮等。2006年列入第一批国家级非遗名录。",
    history: "起源于殷商时期的岁首祭神祭祖活动，距今已有4000年历史",
    technique: "各种民俗活动：贴春联、包饺子、放鞭炮、舞龙舞狮等",
    value: "中华民族最重要的文化符号，体现团圆、祈福的文化内涵"
  },
  {
    id: "dragon-boat",
    name: "端午节",
    category: "民俗",
    region: "全国各地",
    level: "国家级",
    batch: 1,
    code: "Ⅹ-8",
    summary: "纪念屈原，龙舟竞渡",
    description: "端午节为每年农历五月初五，又称端阳节、午日节等。主要习俗有吃粽子、赛龙舟、挂艾草、佩香囊等。2009年被联合国教科文组织列入人类非物质文化遗产代表作名录。",
    history: "起源于先秦，最初为驱邪避疫，后与纪念屈原结合",
    technique: "包粽子、赛龙舟、挂艾草菖蒲、佩香囊",
    value: "体现中华民族爱国主义精神和健康防疫理念"
  },
  {
    id: "mid-autumn",
    name: "中秋节",
    category: "民俗",
    region: "全国各地",
    level: "国家级",
    batch: 1,
    code: "Ⅹ-49",
    summary: "月圆人团圆，千里共婵娟",
    description: "中秋节为农历八月十五，又称月夕、秋节、仲秋节等。主要习俗有赏月、吃月饼、饮桂花酒等。2006年列入第一批国家级非遗名录。",
    history: "起源于上古时期的月亮崇拜，唐代成为固定节日",
    technique: "赏月、吃月饼、燃灯、观潮等",
    value: "体现中华民族对团圆美满的向往"
  }
];

// 获取分类统计
export function getCategoryStats() {
  const stats = categories.map(cat => {
    const count = heritageData.filter(item => item.category === cat.name).length;
    return { ...cat, count };
  });
  return stats;
}

// 搜索功能
export function searchHeritage(query: string): HeritageItem[] {
  const lowerQuery = query.toLowerCase();
  return heritageData.filter(item => 
    item.name.includes(query) ||
    item.category.includes(query) ||
    item.region.includes(query) ||
    item.summary.includes(query) ||
    item.description.includes(query)
  );
}

// 按分类获取
export function getByCategory(category: string): HeritageItem[] {
  return heritageData.filter(item => item.category === category);
}

// 获取单个项目
export function getHeritageById(id: string): HeritageItem | undefined {
  return heritageData.find(item => item.id === id);
}
