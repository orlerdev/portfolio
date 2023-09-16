class Experience {
  constructor(title, startDate, endDate, workPlace, location, body) {
    this.title = title;
    this.dates = `${startDate} - ${endDate}`;
    this.workPlace = workPlace;
    this.location = location;
    this.body = body;
  }
}

const hsm41Experience = new Experience(
  'Leading Petty Officer',
  '07/2020',
  '10/2022',
  'United States Navy - (HSM-41)',
  'San Diego, CA',
  [
    'Supervised and directed a team of 120 personnel, ensuring the detailed maintenance and upkeep of all working spaces, establishing a secure and structured work environment.',
    'Successfully managed the seamless onboarding process for 72 inbound personnel, executing the command to command transfer with zero discrepancies.',
    'Completed over 100 personnel performance evaluations, providing valuable feedback and facilitating professional development for the team.',
    'Implemented a comprehensive overhaul of unreliable standards and procedures, leading to an 80% reduction in administrative delinquencies during personnel in/out processing.'
  ]
);

const ddg1001Experience = new Experience(
  'Warfare Manager',
  '07/2015',
  '07/2020',
  'United States Navy - USS Michael Monsoor (DDG1001)',
  'San Diego, CA - Bath, ME',
  [
    'Pivotal in spearheading the development of a pioneering training program for the newly commissioned ZUMWALT class of US Navy Ships, addressing the critical need for comprehensive damage control capabilities. The program’s successful implementation enabled the crew to effectively handle damage control efforts, ensuring optimal readiness and safety for the entire fleet.',
    'Demonstrated exceptional leadership as the Damage Control Warfare Manager and Training Team Coordinator, delivering 300+ hours of dynamic damage control training and skillfully assessing over 100 casualty scenarios, ensuring a fully qualified and capable crew.',
    'Maximized operational efficiency by authoring 300 Material Check Procedures across engineering systems, resulting in the successful completion of three crucial, shipwide assessments, and ensuring optimal ship readiness.'
  ]
);

const rtcExperience = new Experience(
  'Instructor',
  '06/2012',
  '07/2015',
  'United States Navy - Recruit Training Command (RTC)',
  'Great Lakes, IL',
  [
    'Facilitated high-risk training evolutions for 78,000+ Naval Recruits, achieving a passing rate of 99.9%.',
    'Exemplified commitment to excellence by meticulously reviewing, cataloging, and rectifying deficiencies in 50 Damage Control curriculum topics during a Formal Course Review. This proactive approach ensured that the most up-to-date training protocols were followed, resulting in an impeccable safety record with zero mishaps.',
    'Served as the Officer of the Deck for the Navy’s Quarterdeck, overseeing the meticulous accounting, safety, and security of over 38,800 military and civilian personnel. Exceptionally executed these responsibilities with remarkable competence and precision.'
  ]
);

const cvn70Experience = new Experience(
  'Damage Control Watch Station Supervisor',
  '10/2007',
  '06/2012',
  'United States Navy - USS Carl Vinson (CVN70)',
  'Norfolk, VA - San Diego, CA',
  [
    'Proactively conducted 100 repairs on 8 breathing air recharging systems, ensuring a continuous supply of breathable air for firefighting personnel onboard. This instrumental effort significantly bolstered onboard safety and emergency response capabilities.',
    'Demonstrated exceptional technical expertise by conducting critical valve repairs and system overhauls, resulting in substantial cost savings of over $30,000.00 for the Navy.'
  ]
);

export const experiences = [hsm41Experience, ddg1001Experience, rtcExperience, cvn70Experience];