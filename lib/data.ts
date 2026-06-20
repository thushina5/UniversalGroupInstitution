import {
  Atom,
  Briefcase,
  BookOpen,
  LineChart,
  Building2,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#courses" },
  { label: "UPSC/IAS", href: "#placements" },
  { label: "Campus", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export type Course = {
  icon: LucideIcon;
  title: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  highlights: string[];
  seats: number;
};

// Real programs offered by Universal Group of Institutions (original descriptions).
export const courses: Course[] = [
  {
    icon: Atom,
    title: "Pre-University — Science",
    category: "PU College",
    duration: "2 Years",
    level: "Class 11 & 12",
    description:
      "PCMB and PCMC combinations with built-in civil-services foundation, so students build board, competitive and UPSC fundamentals together.",
    highlights: ["PCMB / PCMC", "CET & NEET prep", "UPSC foundation"],
    seats: 120,
  },
  {
    icon: LineChart,
    title: "Pre-University — Commerce",
    category: "PU College",
    duration: "2 Years",
    level: "Class 11 & 12",
    description:
      "A commerce stream that pairs accountancy, business studies and economics with integrated aptitude and general-studies training.",
    highlights: ["Accountancy", "Economics", "UPSC foundation"],
    seats: 120,
  },
  {
    icon: BookOpen,
    title: "Pre-University — Arts",
    category: "PU College",
    duration: "2 Years",
    level: "Class 11 & 12",
    description:
      "History, political science and economics taught with a civil-services lens — ideal for students aiming at IAS, IPS and KAS careers early.",
    highlights: ["Polity & History", "Answer writing", "Current affairs"],
    seats: 90,
  },
  {
    icon: Briefcase,
    title: "B.Com — Bachelor of Commerce",
    category: "Degree",
    duration: "3 Years",
    level: "Undergraduate",
    description:
      "A Bangalore University affiliated degree blending core commerce with continuous UPSC/KPSC mentoring across all three years.",
    highlights: ["BU affiliated", "Finance & taxation", "Integrated UPSC"],
    seats: 80,
  },
  {
    icon: Building2,
    title: "BBA — Business Administration",
    category: "Degree",
    duration: "3 Years",
    level: "Undergraduate",
    description:
      "Management foundations in marketing, HR and operations, combined with leadership and civil-services preparation for versatile careers.",
    highlights: ["Management core", "Leadership labs", "Integrated UPSC"],
    seats: 60,
  },
  {
    icon: Landmark,
    title: "Integrated IAS / IPS Programme",
    category: "Civil Services",
    duration: "Across Degree",
    level: "UPSC / KPSC",
    description:
      "Our flagship integrated track — degree education plus structured UPSC, KAS and PSC coaching from day one through prelims, mains and interview.",
    highlights: ["Prelims to interview", "Daily answer writing", "Mentor panel"],
    seats: 100,
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

// NOTE: "25+ years" is from the site; the other figures are illustrative —
// please replace with your verified numbers.
export const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 5000, suffix: "+", label: "Students Mentored" },
  { value: 50, suffix: "+", label: "University Rank Holders" },
  { value: 100, suffix: "%", label: "Integrated UPSC Approach" },
];

export type Recruiter = string;

// Repurposed as the careers / exams we prepare students for.
export const recruiters: Recruiter[] = [
  "UPSC",
  "IAS",
  "IPS",
  "KAS",
  "KPSC",
  "Bangalore University",
  "PU Board",
  "CET",
  "NEET Foundation",
  "Civil Services",
];

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
};

// Illustrative achiever stories (representative personas, not real individuals).
export const testimonials: Testimonial[] = [
  {
    name: "Keerthana R.",
    role: "Civil Services Aspirant · USA Batch",
    avatar: "https://i.pravatar.cc/160?img=45",
    quote:
      "Starting UPSC preparation alongside my PU classes meant I never lost two precious years. By the time I finished my degree, prelims felt familiar rather than frightening.",
    rating: 5,
  },
  {
    name: "Arjun Gowda",
    role: "B.Com Graduate & University Rank Holder",
    avatar: "https://i.pravatar.cc/160?img=12",
    quote:
      "The integrated model kept me disciplined — degree lectures in the morning, answer-writing practice in the evening. The mentors treated every doubt as important.",
    rating: 5,
  },
  {
    name: "Sahana M.",
    role: "PU Science · KAS Foundation Track",
    avatar: "https://i.pravatar.cc/160?img=47",
    quote:
      "The current-affairs sessions and mind maps made polity and history genuinely enjoyable. I walked into my degree already comfortable with the UPSC syllabus.",
    rating: 5,
  },
  {
    name: "Imran Pasha",
    role: "BBA Alumnus · UCC Coaching",
    avatar: "https://i.pravatar.cc/160?img=33",
    quote:
      "Universal feels like a community, not a coaching factory. The faculty know you by name and push you toward both your degree results and your service dream.",
    rating: 5,
  },
];

export type Faculty = {
  name: string;
  title: string;
  department: string;
  avatar: string;
};

export const faculty: Faculty[] = [
  {
    name: "Dr. Ramesh Prasad",
    title: "Director, Universal School of Administration",
    department: "Civil Services Mentorship",
    avatar: "https://i.pravatar.cc/240?img=15",
  },
  {
    name: "Smt. Anitha Kulkarni",
    title: "Senior UPSC Mentor — Polity & Governance",
    department: "Universal Coaching Centre",
    avatar: "https://i.pravatar.cc/240?img=49",
  },
  {
    name: "Prof. Venkatesh Rao",
    title: "Head, Pre-University Science",
    department: "PCMB / PCMC Faculty",
    avatar: "https://i.pravatar.cc/240?img=51",
  },
  {
    name: "Dr. Lakshmi Narayan",
    title: "Faculty, Commerce & Economics",
    department: "Degree College",
    avatar: "https://i.pravatar.cc/240?img=20",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  span: string;
};

export const gallery: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    alt: "Library and reading hall",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80",
    alt: "Students in a UPSC discussion circle",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=700&q=80",
    alt: "Felicitation of rank holders",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=700&q=80",
    alt: "Science laboratory session",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=700&q=80",
    alt: "Campus seminar hall",
    span: "md:col-span-2",
  },
];

// Shared institution facts (real, from the public site).
export const institution = {
  name: "Universal Group of Institutions",
  shortName: "Universal Institutions",
  tagline:
    "PU & Degree education with integrated IAS / IPS (UPSC & PSC) training",
  since: 1999,
  address:
    "Gururayanapura, Ramohalli Post, Tavarekere Hobli, Bangalore South, Bengaluru – 560074",
  phones: ["+91 63668 16611", "+91 96866 64985", "080-2339 6403"],
  email: "info@universalinstitutions.com",
  subBrands: [
    {
      abbr: "USA",
      name: "Universal School of Administration",
      note: "Integrated degree + civil-services programme",
    },
    {
      abbr: "UCC",
      name: "Universal Coaching Centre",
      note: "Post-degree UPSC / IAS / IPS coaching",
    },
  ],
};
