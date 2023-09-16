class Education {
  constructor(school, degree, startDate, endDate, location, description = null) {
    this.school = school;
    this.degree = degree;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.description = description
  }
}

const codeupEducation = new Education(
  'Codeup',
  'Full Stack Software Developer',
  '02/2023',
  '07-2023',
  'San Antonio, TX'
)


export const education = [codeupEducation];