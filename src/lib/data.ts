export const heroStats = [
  { value: "4.9", label: "380 Google reviews", stars: true },
  { value: "1,200+", label: "Active members" },
  { value: "60+", label: "Coached classes per week" },
  { value: "14", label: "Max people per class" },
]

export const marqueeItems = [
  "Strength",
  "Conditioning",
  "Boxing",
  "Mobility",
  "Recovery",
  "Open Gym",
]

export const principles = [
  {
    number: "01",
    title: "Capped at 14",
    description:
      "Small enough that your coach sees every rep and knows your name by week two.",
  },
  {
    number: "02",
    title: "Coached, always",
    description:
      "No class runs without a certified coach on the floor. Scaling options for every movement.",
  },
  {
    number: "03",
    title: "Measured progress",
    description:
      "Benchmark tests every 6 weeks, logged in the app, so progress is something you can see.",
  },
]

export const programs = [
  {
    id: "strength",
    label: "Strength",
    title: "Strength",
    duration: "60 min",
    level: "All",
    intensity: 4,
    description:
      "Barbell-based progressive overload. Squat, hinge, press and pull, programmed in 6-week blocks with a test week at the end.",
    features: [
      "Coached warm-up and movement prep",
      "Main lift with individual load targets",
      "Accessory superset and core finisher",
    ],
    cta: "Try a Strength class",
    image: {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      alt: "Members training with barbells and dumbbells",
    },
  },
  {
    id: "conditioning",
    label: "Conditioning",
    title: "Conditioning",
    duration: "45 min",
    level: "All",
    intensity: 5,
    description:
      "Intervals on rowers, bikes, sleds and kettlebells. Heart-rate zones on screen so you push hard on the right days.",
    features: [
      "Team and partner formats",
      "Live heart-rate display",
      "Scalable for every fitness level",
    ],
    cta: "Try a Conditioning class",
    image: {
      src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      alt: "High intensity conditioning workout",
    },
  },
  {
    id: "boxing",
    label: "Boxing",
    title: "Boxing",
    duration: "50 min",
    level: "All",
    intensity: 4,
    description:
      "Technique-first boxing. Footwork, combinations and partner pad work, finished with a bag round that empties the tank.",
    features: [
      "Gloves and wraps provided",
      "No sparring, no contact",
      "Technique ladder from beginner to advanced",
    ],
    cta: "Try a Boxing class",
    image: {
      src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80",
      alt: "Boxing pad work session",
    },
  },
  {
    id: "recovery",
    label: "Recovery",
    title: "Recovery",
    duration: "40 min",
    level: "All",
    intensity: 1,
    description:
      "Guided mobility followed by contrast therapy in our sauna and cold plunge suite. The session that keeps you training.",
    features: [
      "Mobility flow led by a coach",
      "Infrared sauna and cold plunge",
      "Included on Unlimited membership",
    ],
    cta: "Try a Recovery session",
    image: {
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      alt: "Mobility and stretching class",
    },
  },
]

export const facilities = [
  {
    title: "Strength floor",
    description: "12 racks, calibrated plates, platforms",
    number: "01",
    className: "t1",
    image: {
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400&q=80",
      alt: "Main strength floor with racks and lifting platforms",
    },
  },
  {
    title: "Turf lane",
    description: "25 m turf, sleds, prowlers",
    number: "02",
    className: "t2",
    image: {
      src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80",
      alt: "Indoor turf lane for sled training",
    },
  },
  {
    title: "Boxing room",
    description: "16 heavy bags",
    number: "03",
    className: "t3",
    image: {
      src: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&w=800&q=80",
      alt: "Boxing room with heavy bags",
    },
  },
  {
    title: "Recovery",
    description: "Sauna & cold plunge",
    number: "04",
    className: "t4",
    image: {
      src: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?auto=format&fit=crop&w=800&q=80",
      alt: "Infrared sauna in the recovery suite",
    },
  },
]

export const scheduleDays = [
  { short: "Mon", date: 20 },
  { short: "Tue", date: 21 },
  { short: "Wed", date: 22 },
  { short: "Thu", date: 23 },
  { short: "Fri", date: 24 },
  { short: "Sat", date: 25 },
  { short: "Sun", date: 26 },
]

export const weekdayClasses = [
  { time: "5:30", period: "AM", program: "Strength", name: "Squat Block, Week 3", coach: "Marcus Hale", duration: 60, spots: 3 },
  { time: "6:30", period: "AM", program: "Conditioning", name: "Engine Intervals", coach: "Dani Reyes", duration: 45, spots: 0 },
  { time: "7:30", period: "AM", program: "Boxing", name: "Fundamentals", coach: "Theo Grant", duration: 50, spots: 6 },
  { time: "12:00", period: "PM", program: "Strength", name: "Press & Pull", coach: "Marcus Hale", duration: 60, spots: 8 },
  { time: "5:30", period: "PM", program: "Conditioning", name: "Sled & Row", coach: "Dani Reyes", duration: 45, spots: 2 },
  { time: "6:30", period: "PM", program: "Boxing", name: "Combos & Bag Rounds", coach: "Theo Grant", duration: 50, spots: 4 },
  { time: "7:30", period: "PM", program: "Recovery", name: "Mobility + Contrast", coach: "Priya Nair", duration: 40, spots: 9 },
]

export const weekendClasses = [
  { time: "8:00", period: "AM", program: "Strength", name: "Weekend Lift", coach: "Marcus Hale", duration: 60, spots: 5 },
  { time: "9:15", period: "AM", program: "Conditioning", name: "Partner WOD", coach: "Dani Reyes", duration: 45, spots: 1 },
  { time: "10:30", period: "AM", program: "Recovery", name: "Mobility + Contrast", coach: "Priya Nair", duration: 40, spots: 10 },
]

export const programFilters = ["all", "Strength", "Conditioning", "Boxing", "Recovery"]

export const coaches = [
  {
    name: "Marcus Hale",
    role: "Head Coach, Strength",
    credentials: ["NSCA-CSCS", "12 yrs"],
    image: {
      src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=700&q=80",
      alt: "Portrait of coach Marcus Hale",
    },
  },
  {
    name: "Dani Reyes",
    role: "Conditioning Lead",
    credentials: ["NASM-CPT", "8 yrs"],
    image: {
      src: "https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?auto=format&fit=crop&w=700&q=80",
      alt: "Portrait of coach Dani Reyes",
    },
  },
  {
    name: "Theo Grant",
    role: "Boxing Coach",
    credentials: ["USA Boxing L2", "10 yrs"],
    image: {
      src: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&w=700&q=80",
      alt: "Portrait of coach Theo Grant",
    },
  },
  {
    name: "Priya Nair",
    role: "Mobility & Recovery",
    credentials: ["DPT", "FRC"],
    image: {
      src: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=700&q=80",
      alt: "Portrait of coach Priya Nair",
    },
  },
]

export const pricingPlans = [
  {
    name: "Drop-in",
    description: "For travelers and occasional training.",
    price: "$32",
    unit: "/ class",
    features: ["Any single class", "Towel and locker", "Valid for 30 days"],
    cta: "Buy drop-in",
    featured: false,
    btnStyle: "btn-line",
  },
  {
    name: "Unlimited",
    description: "For members training 3 or more times a week.",
    price: "$219",
    unit: "/ month",
    features: [
      "Unlimited classes",
      "Recovery suite access",
      "Benchmark testing every 6 weeks",
      "2 guest passes per month",
    ],
    cta: "Start free week",
    featured: true,
    badge: "Most popular",
    btnStyle: "btn-dark",
  },
  {
    name: "8 Classes",
    description: "For a steady twice-a-week routine.",
    price: "$169",
    unit: "/ month",
    features: [
      "8 classes per month",
      "Unused classes roll over once",
      "Benchmark testing every 6 weeks",
    ],
    cta: "Choose 8 classes",
    featured: false,
    btnStyle: "btn-line",
  },
]

export const bigQuote = {
  text: "“I tried four gyms in two years. FORMA is the first one where I never skip.”",
  author: "Jordan M., member since 2023",
}

export const resultCards = [
  {
    stat: "+45 KG",
    statLabel: "Deadlift in 6 months",
    quote:
      "The 6-week blocks changed everything. I finally stopped guessing what to do and started seeing numbers move.",
    name: "Alyssa T.",
    detail: "Strength, 4x a week",
  },
  {
    stat: "-12 KG",
    statLabel: "In 5 months",
    quote:
      "Small classes meant the coaches noticed when I was missing. That accountability is worth the membership alone.",
    name: "Ryan C.",
    detail: "Conditioning & Boxing",
  },
  {
    stat: "0",
    statLabel: "Back pain flare-ups this year",
    quote:
      "Recovery sessions with Priya fixed what physical therapy alone could not. I train harder now and feel better.",
    name: "Monica L.",
    detail: "Strength & Recovery",
  },
]

export const ratingRow = [
  { value: "4.9", label: "Google" },
  { value: "5.0", label: "ClassPass" },
  { value: "96%", label: "Member retention" },
]

export const faqItems = [
  {
    question: "I have never trained before. Is FORMA right for me?",
    answer:
      "Yes. Every class is coached and every movement has a scaled version. Your first visit includes a 20-minute onboarding with a coach, so you walk into class knowing the basics.",
    defaultOpen: true,
  },
  {
    question: "How does the free trial week work?",
    answer:
      "New members get 7 days of unlimited classes. No card is required to book, and there is no automatic renewal.",
  },
  {
    question: "How big are the classes?",
    answer:
      "Classes are capped at 14 people so a coach can see and correct every rep.",
  },
  {
    question: "Can I freeze or cancel my membership?",
    answer:
      "Yes. Freeze up to 2 months per year, or cancel anytime with 30 days notice. No cancellation fees.",
  },
  {
    question: "Is there parking?",
    answer:
      "Free member parking is available behind the building, plus secure bike racks at the entrance.",
  },
]

export const trialGoals = [
  "Get stronger",
  "Lose fat",
  "Improve fitness and endurance",
  "Learn boxing",
  "Move better, less pain",
]

export const footerLinks = {
  club: [
    { label: "Programs", href: "#programs" },
    { label: "Schedule", href: "#schedule" },
    { label: "Coaches", href: "#coaches" },
    { label: "Membership", href: "#membership" },
    { label: "FAQ", href: "#faq" },
  ],
  members: [
    { label: "Member login", href: "#" },
    { label: "Download app", href: "#" },
    { label: "Gift cards", href: "#" },
    { label: "Careers", href: "#" },
  ],
  visit: [
    { text: "1180 E 6th St, Austin, TX 78702" },
    { text: "(512) 555 0147", href: "tel:+15125550147" },
    { text: "hello@formaclub.co", href: "mailto:hello@formaclub.co" },
    { text: "Mon to Fri 5:30 AM to 10 PM" },
    { text: "Sat to Sun 7 AM to 6 PM" },
  ],
}

export const gymSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "FORMA Athletic Club",
  description:
    "Boutique strength and conditioning club with coached small-group classes.",
  telephone: "+1-512-555-0147",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1180 E 6th St",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78702",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:30",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}
