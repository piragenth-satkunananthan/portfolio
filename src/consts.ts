// Single place to edit personal details shown across the site.

export const SITE_TITLE = 'Piragenth Satkunananthan';
export const SITE_DESCRIPTION =
  'ICT undergraduate at South Eastern University of Sri Lanka building embedded systems, full-stack platforms and developer tools.';

export const PROFILE = {
  name: 'Piragenth Satkunananthan',
  headline: 'Embedded systems & full-stack developer',
  location: 'Jaffna, Sri Lanka',
  openToWork: true,
  avatar: '/avatar.png',
  bio: [
    "I'm a Bachelor of ICT undergraduate at South Eastern University of Sri Lanka who likes building things end to end: from ESP32 firmware and sensor fusion on a motorcycle helmet, to production-style MERN platforms and Python automation tools.",
    'I care about systems that keep working when parts of them fail, and about using maths — especially linear algebra — to make ideas visible.',
  ],
};

export const SOCIALS = {
  github: 'https://github.com/piragenth-satkunananthan',
  linkedin: 'https://www.linkedin.com/in/satkunananthan-piragenth/',
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
