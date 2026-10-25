// Single place to edit personal details shown across the site.

export const SITE_TITLE = 'Piragenth Satkunananthan';
export const SITE_DESCRIPTION =
  'ICT undergraduate at South Eastern University of Sri Lanka building embedded systems, full-stack platforms and developer tools.';

export const PROFILE = {
  name: 'Piragenth Satkunananthan',
  headline: 'Embedded systems & full‑stack developer',
  location: 'Jaffna, Sri Lanka',
  openToWork: true,
  avatar: '/avatar.jpg',
  bio: [
    "I'm a Bachelor of ICT undergraduate at South Eastern University of Sri Lanka who likes building things end to end: from ESP32 firmware and sensor fusion on a motorcycle helmet, to production-style MERN platforms and Python automation tools.",
    'I care about systems that keep working when parts of them fail, and about using maths — especially linear algebra — to make ideas visible.',
  ],
};

// Longer story shown on the About page.
export const ABOUT = [
  "I'm Piragenth, a Bachelor of ICT undergraduate at South Eastern University of Sri Lanka, based in Jaffna.",
  'I like working across the whole stack — from hardware up. On RideShield, a smart motorcycle helmet that reached the finals of IoTrix 2.0, that meant ESP32 firmware, a crash state machine driven by IMU and GPS data, camera nodes and a Kotlin Android app. On FoodBridge, it meant a MERN platform with five role-based portals, JWT authentication, Docker and CI.',
  'Maths is the other thread. I built a Java tool that animates 2×2 matrix transformations so eigenvectors become something you can see, and completed Imperial College London’s Mathematics for Machine Learning: Linear Algebra course.',
  'Away from the keyboard I turn photos into laser-engraved portraits and pen-plotter art with G-code.',
  "I'm open to work, internships and collaborations — email is the best way to reach me.",
];

export const FOCUS_AREAS = [
  {
    title: 'Embedded & IoT',
    description: 'ESP32 firmware, sensor fusion, state machines and fail-safe design for real hardware.',
    project: { label: 'RideShield', href: 'https://github.com/piragenth-satkunananthan/RideShield' },
  },
  {
    title: 'Full-stack web',
    description: 'React front ends, Node/Express APIs, MongoDB, auth and role-based access, shipped with Docker and CI.',
    project: { label: 'FoodBridge', href: 'https://github.com/piragenth-satkunananthan/foodbridge' },
  },
  {
    title: 'Automation & data',
    description: 'Scrapers, background workers and dashboards in Python with Playwright, SQLite and Streamlit.',
    project: { label: 'eBay Price Monitor', href: 'https://github.com/piragenth-satkunananthan/Ebay-price-monitor-scraper' },
  },
];

export const SOCIALS = {
  github: 'https://github.com/piragenth-satkunananthan',
  linkedin: 'https://www.linkedin.com/in/satkunananthan-piragenth/',
  email: 'piragenthsatkunananthan@gmail.com',
};

export const EDUCATION = [
  {
    school: 'South Eastern University of Sri Lanka',
    degree: "Bachelor's degree, Information and Communication Technology",
    period: '2024 – 2028',
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript', 'Kotlin', 'Java'] },
  { group: 'Web', items: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML & CSS'] },
  { group: 'Embedded', items: ['ESP32', 'ESP32-CAM', 'IMU / GPS sensors', 'LTE / SMS modules'] },
  { group: 'Tools', items: ['Docker', 'GitHub Actions', 'Git', 'Playwright', 'Streamlit', 'SQLite', 'MySQL', 'CNC / G-code'] },
];

const coursera = (id: string) => `https://www.coursera.org/account/accomplishments/verify/${id}`;

export const CERTIFICATIONS = [
  { title: "CS50's Introduction to Programming with Python", issuer: 'Harvard University', date: 'Jun 2026' },
  { title: 'HTML and CSS in depth', issuer: 'Meta', date: 'Jan 2026', url: coursera('YBQB57315ZVS') },
  { title: 'Mathematics for Machine Learning: Linear Algebra', issuer: 'Imperial College London', date: 'Nov 2025', url: coursera('VNJHXGB8RLJU') },
  { title: 'Version Control', issuer: 'Meta', date: 'Nov 2025', url: coursera('B3AT9BMGGFAH') },
  { title: 'Programming with JavaScript', issuer: 'Meta', date: 'Nov 2025', url: coursera('ULS0SGOGOM79') },
  { title: 'Foundations of Cybersecurity', issuer: 'Google', date: 'Nov 2025', url: coursera('UWPCXFUQAEVE') },
  { title: 'Introduction to Front-End Development', issuer: 'Meta', date: 'Oct 2025', url: coursera('DOTF8D6YZE5F') },
];
