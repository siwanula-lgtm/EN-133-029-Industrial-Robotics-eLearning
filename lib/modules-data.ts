export interface ModuleData {
  id: string;
  week: string;
  titleTh: string;
  titleEn: string;
  description: string;
  clo: string;
  hoursT: number;
  hoursP: number;
  topics: string[];
  labTitle: string;
  labCount: number;
  reviewSheet: string;
  icon: string;
  color: string;
}

// 9 หน่วยเรียน ตามเอกสารประกอบการสอน EN-133-029 ฉบับสมบูรณ์ R13 (สัปดาห์ ชั่วโมง ท/ป CLO หัวข้อ)
export const modules: ModuleData[] = [
  {
    id: "01",
    week: "1",
    titleTh: "โครงสร้างและส่วนประกอบของหุ่นยนต์อุตสาหกรรม",
    titleEn: "Structure and Components of Industrial Robots",
    description:
      "หุ่นยนต์อุตสาหกรรม (Industrial Robot) คือเครื่องจักรกลอัตโนมัติที่สามารถโปรแกรมให้เคลื่อนที่ได้หลายแกนอิสระ เพื่อทำงานแทนมนุษย์ในกระบวนการผลิต โดยจำแนกตามโครงสร้างทางกลได้ 6 แบบหลัก ได้แก่ Cartesian, Cylindrical, Spherical, …",
    clo: "CLO2, CLO3, CLO4",
    hoursT: 2,
    hoursP: 2,
    topics: ["1.1 ประเภทและการจำแนกหุ่นยนต์อุตสาหกรรม", "1.2 ส่วนประกอบหลักของหุ่นยนต์อุตสาหกรรม", "1.3 หลักการทำงานและระบบพิกัดของหุ่นยนต์", "1.4 การนำหุ่นยนต์ไปใช้งานในอุตสาหกรรม", "1.5 การควบคุมมุมหมุนของมอเตอร์เซอร์โวด้วย ESP32"],
    labTitle: "ใบงานปฏิบัติหน่วยเรียนที่ 1",
    labCount: 1,
    reviewSheet: "review_sheet_01.html",
    icon: "Bot",
    color: "slate",
  },
  {
    id: "02",
    week: "2–3",
    titleTh: "จลนศาสตร์และพลศาสตร์ของหุ่นยนต์",
    titleEn: "Robot Kinematics and Dynamics",
    description:
      "จลนศาสตร์ (Kinematics) ของหุ่นยนต์ศึกษาความสัมพันธ์ระหว่างมุม/ระยะของข้อต่อกับตำแหน่งและทิศทางของปลายแขน โดยไม่พิจารณาแรงที่ทำให้เกิดการเคลื่อนที่ แบ่งเป็นจลนศาสตร์ตรง (Forward Kinematics) …",
    clo: "CLO2, CLO3, CLO4",
    hoursT: 4,
    hoursP: 4,
    topics: ["2.1 จลนศาสตร์ของหุ่นยนต์", "2.2 การตรวจสอบจลนศาสตร์ตรงของแขนกล 2-DOF", "2.3 พลศาสตร์ของหุ่นยนต์", "2.4 การวิเคราะห์แรงบิดข้อต่อของแขนกล 2-DOF"],
    labTitle: "ใบงานปฏิบัติหน่วยเรียนที่ 2.1 / ใบงานปฏิบัติหน่วยเรียนที่ 2.2",
    labCount: 2,
    reviewSheet: "review_sheet_02.html",
    icon: "Move3d",
    color: "blue",
  },
  {
    id: "03",
    week: "4",
    titleTh: "การเขียนโปรแกรมควบคุมแบบลำดับและเซนเซอร์สำหรับหุ่นยนต์",
    titleEn: "Sequential Control Programming and Sensors for Robots",
    description:
      "การเขียนโปรแกรมควบคุมหุ่นยนต์แบบลำดับขั้น (Sequential Control) เป็นพื้นฐานสำคัญของการใช้งานหุ่นยนต์อุตสาหกรรม โดยกำหนดให้หุ่นยนต์ทำงาน ตามขั้นตอนที่แน่นอนซ้ำกันในแต่ละรอบการทำงาน (Work Cycle) ตั้งแต่ระบบควบคุมอย่างง่าย (Limited …",
    clo: "CLO2, CLO3, CLO4",
    hoursT: 2,
    hoursP: 2,
    topics: ["3.1 ระบบควบคุมและวิธีการโปรแกรมหุ่นยนต์", "3.2 คำสั่งพื้นฐานและเซนเซอร์สำหรับหุ่นยนต์", "3.3 การเขียนโปรแกรมแบบมีเงื่อนไขและโปรแกรมย่อย", "3.4 การเขียนโปรแกรมควบคุมแบบลำดับขั้นร่วมกับเซนเซอร์"],
    labTitle: "ใบงานปฏิบัติหน่วยเรียนที่ 3",
    labCount: 1,
    reviewSheet: "review_sheet_03.html",
    icon: "ListOrdered",
    color: "green",
  },
  {
    id: "04",
    week: "5–6",
    titleTh: "การเขียนโปรแกรมควบคุมแบบต่อเนื่อง",
    titleEn: "Continuous Path Control Programming",
    description:
      "การควบคุมแบบต่อเนื่อง (Continuous Path Control: CP) เป็นการเคลื่อนที่ของหุ่นยนต์ผ่านหลายตำแหน่งอย่างต่อเนื่องโดยไม่หยุดกะทันหันระหว่างทาง แตกต่างจากการควบคุมแบบจุดต่อจุด (Point-to-Point) ที่เน้นความแม่นยำ ณ ตำแหน่งปลายทางเป็นหลัก …",
    clo: "CLO2, CLO3, CLO4",
    hoursT: 4,
    hoursP: 4,
    topics: ["4.1 การควบคุมแบบต่อเนื่องและการโปรแกรมตำแหน่ง", "4.2 การเปรียบเทียบการเคลื่อนที่แบบจุดต่อจุดกับแบบต่อเนื่อง", "4.3 การเขียนโปรแกรมแบบพาเลทและการควบคุมจังหวะเวลา", "4.4 การเขียนโปรแกรมจัดเรียงชิ้นงานแบบพาเลท"],
    labTitle: "ใบงานปฏิบัติหน่วยเรียนที่ 4.1 / ใบงานปฏิบัติหน่วยเรียนที่ 4.2",
    labCount: 2,
    reviewSheet: "review_sheet_04.html",
    icon: "Spline",
    color: "yellow",
  },
  {
    id: "05",
    week: "7",
    titleTh: "ระบบควบคุมหุ่นยนต์แบบ PID",
    titleEn: "PID Control Systems for Robots",
    description:
      "ระบบควบคุมหุ่นยนต์อุตสาหกรรมส่วนใหญ่อาศัยหลักการควบคุมป้อนกลับ (Feedback Control) โดยวัดค่าตำแหน่งหรือความเร็วจริงของข้อต่อด้วยเซนเซอร์ แล้วนำมาเปรียบเทียบกับค่าเป้าหมาย (Setpoint) เกิดเป็นค่าความผิดพลาด (Error) ที่ตัวควบคุมแบบ …",
    clo: "CLO2, CLO3, CLO4",
    hoursT: 2,
    hoursP: 2,
    topics: ["5.1 หลักการควบคุมแบบป้อนกลับและตัวควบคุม PID", "5.2 การประเมินผลการตอบสนองและการปรับจูนตัวควบคุม PID", "5.3 การควบคุมตำแหน่งข้อต่อด้วย PID"],
    labTitle: "ใบงานปฏิบัติหน่วยเรียนที่ 5",
    labCount: 1,
    reviewSheet: "review_sheet_05.html",
    icon: "Activity",
    color: "red",
  },
  {
    id: "06",
    week: "9–10",
    titleTh: "การเชื่อมต่อหุ่นยนต์กับระบบอัตโนมัติ",
    titleEn: "Integrating Robots with Automation Systems",
    description:
      "หุ่นยนต์อุตสาหกรรมที่ทำงานเดี่ยวโดยไม่เชื่อมต่อกับระบบอื่นมีประโยชน์ในเชิงการผลิตจำกัด การนำหุ่นยนต์ไปใช้งานจริงในสายการผลิตอัตโนมัติจึงต้องอาศัย การเชื่อมต่อกับอุปกรณ์และระบบภายนอกหลายส่วน ได้แก่ …",
    clo: "CLO2, CLO3, CLO4",
    hoursT: 4,
    hoursP: 4,
    topics: ["6.1 การเชื่อมต่อและการสื่อสารของหุ่นยนต์กับระบบอัตโนมัติ", "6.2 การจำลองสัญญาณ Handshaking ระหว่างหุ่นยนต์กับระบบอัตโนมัติ", "6.3 การออกแบบและทดสอบระบบหุ่นยนต์ในสายการผลิต", "6.4 การเขียนโปรแกรม Pick and Place ร่วมกับมือจับจำลอง"],
    labTitle: "ใบงานปฏิบัติหน่วยเรียนที่ 6.1 / ใบงานปฏิบัติหน่วยเรียนที่ 6.2",
    labCount: 2,
    reviewSheet: "review_sheet_06.html",
    icon: "Network",
    color: "purple",
  },
  {
    id: "07",
    week: "11–12",
    titleTh: "ความปลอดภัยและมาตรฐานการใช้หุ่นยนต์อุตสาหกรรม",
    titleEn: "Safety and Standards for Industrial Robots",
    description:
      "หุ่นยนต์อุตสาหกรรมเป็นเครื่องจักรที่มีพลังงานและความเร็วในการเคลื่อนที่สูง หากไม่มีการควบคุมความปลอดภัยที่เหมาะสมอาจก่อให้เกิดอันตราย ร้ายแรงต่อผู้ปฏิบัติงานได้ มาตรฐาน ISO 10218 จึงถูกกำหนดขึ้นเป็นสองส่วนหลัก ได้แก่ ส่วนที่ 1 …",
    clo: "CLO2, CLO3, CLO4",
    hoursT: 4,
    hoursP: 4,
    topics: ["7.1 มาตรฐานความปลอดภัยและเครื่องมือวัดตามมาตรฐาน ISO 10218", "7.2 การจำลองวงจรความปลอดภัยพื้นฐานของหุ่นยนต์", "7.3 การติดตั้งเซลล์หุ่นยนต์และการประเมินความเสี่ยง", "7.4 การประเมินความเสี่ยงและวางผังเซลล์หุ่นยนต์"],
    labTitle: "ใบงานปฏิบัติหน่วยเรียนที่ 7.1 / ใบงานปฏิบัติหน่วยเรียนที่ 7.2",
    labCount: 2,
    reviewSheet: "review_sheet_07.html",
    icon: "ShieldCheck",
    color: "teal",
  },
  {
    id: "08",
    week: "13–14",
    titleTh: "การบำรุงรักษาและการจัดการระบบหุ่นยนต์",
    titleEn: "Maintenance and Management of Robot Systems",
    description:
      "แม้หุ่นยนต์อุตสาหกรรมจะได้รับการออกแบบและติดตั้งอย่างถูกต้องตามมาตรฐานความปลอดภัยแล้ว การใช้งานจริงในสายการผลิตอย่างต่อเนื่องเป็นเวลานาน ย่อมทำให้ชิ้นส่วนต่าง ๆ เกิดการสึกหรอและอาจเกิดข้อขัดข้องได้เสมอ …",
    clo: "CLO2, CLO3, CLO4",
    hoursT: 4,
    hoursP: 4,
    topics: ["8.1 การหาข้อบกพร่องและการแก้ไขปัญหาระบบหุ่นยนต์", "8.2 การจำลองการวินิจฉัยข้อผิดพลาดและรหัส Alarm/Error", "8.3 การบำรุงรักษาและการจัดการระบบหุ่นยนต์", "8.4 การบำรุงรักษาเชิงป้องกันและการสำรองโปรแกรมควบคุม"],
    labTitle: "ใบงานปฏิบัติหน่วยเรียนที่ 8.1 / ใบงานปฏิบัติหน่วยเรียนที่ 8.2",
    labCount: 2,
    reviewSheet: "review_sheet_08.html",
    icon: "Wrench",
    color: "indigo",
  },
  {
    id: "09",
    week: "15–16",
    titleTh: "หุ่นยนต์อุตสาหกรรมในงานอุตสาหกรรมและการประยุกต์ใช้งานจริง",
    titleEn: "Industrial Robot Applications",
    description:
      "หน่วยเรียนสุดท้ายก่อนสอบปลายภาคนี้มุ่งผสานองค์ความรู้ทั้งหมดที่เรียนมาตลอดรายวิชา ตั้งแต่โครงสร้างและจลนศาสตร์ของหุ่นยนต์ การเขียนโปรแกรมควบคุม ระบบควบคุม PID การเชื่อมต่อกับระบบอัตโนมัติ ความปลอดภัย และการบำรุงรักษา …",
    clo: "CLO2, CLO3, CLO4",
    hoursT: 4,
    hoursP: 4,
    topics: ["9.1 กรณีศึกษาและการออกแบบโครงงานหุ่นยนต์อุตสาหกรรม", "9.2 การออกแบบโครงงานหุ่นยนต์อุตสาหกรรม", "9.3 การวิเคราะห์และพัฒนาโครงงานหุ่นยนต์", "9.4 มินิโครงงานหุ่นยนต์หยิบจับชิ้นงานควบคุมกระบวนการผลิต"],
    labTitle: "ใบงานปฏิบัติหน่วยเรียนที่ 9.1 / ใบงานปฏิบัติหน่วยเรียนที่ 9.2",
    labCount: 2,
    reviewSheet: "review_sheet_09.html",
    icon: "Factory",
    color: "orange",
  },
];

export function getModuleById(id: string): ModuleData | undefined {
  return modules.find((m) => m.id === id);
}

export const colorMap: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  slate: { bg: "bg-slate-100 dark:bg-slate-800/40", text: "text-slate-700 dark:text-slate-300", border: "border-slate-200 dark:border-slate-700", accent: "from-slate-500 to-gray-500" },
  blue: { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", accent: "from-blue-500 to-cyan-500" },
  green: { bg: "bg-green-50 dark:bg-green-900/20", text: "text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-800", accent: "from-green-500 to-emerald-500" },
  yellow: { bg: "bg-yellow-50 dark:bg-yellow-900/20", text: "text-yellow-700 dark:text-yellow-300", border: "border-yellow-200 dark:border-yellow-800", accent: "from-yellow-500 to-orange-500" },
  red: { bg: "bg-red-50 dark:bg-red-900/20", text: "text-red-700 dark:text-red-300", border: "border-red-200 dark:border-red-800", accent: "from-red-500 to-pink-500" },
  purple: { bg: "bg-purple-50 dark:bg-purple-900/20", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200 dark:border-purple-800", accent: "from-purple-500 to-violet-500" },
  teal: { bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", accent: "from-teal-500 to-cyan-500" },
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-900/20", text: "text-indigo-700 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800", accent: "from-indigo-500 to-blue-500" },
  orange: { bg: "bg-orange-50 dark:bg-orange-900/20", text: "text-orange-700 dark:text-orange-300", border: "border-orange-200 dark:border-orange-800", accent: "from-orange-500 to-amber-500" },
  rose: { bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", accent: "from-rose-500 to-pink-500" },
};
