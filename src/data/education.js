class Education {
  constructor(school, degree, startDate, endDate, location, description = null) {
    this.school = school;
    this.degree = degree;
    this.dates = `${startDate} - ${endDate}`
    this.location = location;
    this.description = description
  }
}

const codeupEducation = new Education(
  'Codeup',
  'Full Stack Software Developer',
  '02/2023',
  '07-2023',
  'San Antonio, TX',
  'This 5-month coding boot camp teaches full-stack software development through 670 contact hours of hands-on technical training (20% more time than 4-year degree majors require). Students hone skills in modern web technologies, computer science, software engineering, and application architecture while gaining project experience with paired programming, debugging, troubleshooting, agile project management, user stories, feature lists, UI/UX, wire framing, and relational database design.'
)


export const education = [codeupEducation];