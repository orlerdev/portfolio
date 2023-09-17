import dndb from '../assets/DNDB.png';

class Project {
  constructor(title, body, skills, tools, apis, link = null, image = null) {
    this.title = title;
    this.body = body;
    this.skills = skills;
    this.tools = tools;
    this.apis = apis;
    this.link = link;
    this.image = image;
  }
}

const dndbProject = new Project(
  'Dungeons and Dust Bunnies',
  'Collaborated with a group of developers to design, plan, build, and deploy a mobile-responsive full-stack web application. After finalizing a project proposal, our team created user stories and developed feature lists, wireframes, storyboards, database diagrams, and a project management board. Through morning stand-ups and afternoon demos, we leveraged an Agile workflow to execute the full development lifecycle. This web application supports multiple unique users and assets utilizing relational databases. My primary responsibilities were the UI/UX and communication between the front-end and back-end of the application. I also assisted with the creation of the MySQL database and tables.',
  ['Agile Methodologies', 'Debugging', 'KanBan for Workflow', 'Object-Oriented-Programming', 'Paired Programming', 'Project Management Tools', 'Scrum'],
  ['CSS', 'Git', 'GitHub', 'Hibernate', 'HTML', 'Java', 'JavaScript', 'JDBC', 'Maven', 'MySQL', 'Spring Boot', 'Spring Data', 'Spring MVC', 'Spring Security', 'Thymeleaf'],
  ['Bevo', 'Filestack', 'OpenAI'],
  'https://www.dndb.me',
  `${dndb}`
);

export const projects = [dndbProject]