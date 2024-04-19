import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VacanciesService {
  private vacancies: Vacancy[] =
    [
      {
        key: '1',
        show: true,
        location: 'Toronto',
        workday: 'Part time working day',
        title: 'Lead AI & Machine Learning Engineer',
        description: 'We are looking for a Lead AI & Machine Learning Engineer to join our AI Engineering and Tools Department (from March to June, a part-time position, with a transition to full-time afterward). In this role, we see someone who thrives in a high-paced environment, embraces challenges with enthusiasm, and enjoys a gamified approach to work.',
        responsibilities: ' <ul>\n' +
          '          <li>Shape and refine a strategic vision for the AI Engineering and Tools Department.</li>\n' +
          '\n' +
          '          <li>Leading and mentoring teams in the development of machine learning solutions for our customers.</li>\n' +
          '\n' +
          '          <li>Developing and delivering visualizations, demonstrations, and presentations for the management team and customers.</li>\n' +
          '\n' +
          '          <li>Travel to technical conferences in Canada and the United States.</li>\n' +
          '        </ul>',
        requirements: '<ul>\n' +
          '          <li>Deep knowledge and experience in mobile machine learning and pipelining.</li>\n' +
          '\n' +
          '          <li>Deep knowledge and experience with building and improving recommender systems.</li>\n' +
          '\n' +
          '          <li>Strong communication skills across technical and non-technical audiences and topics.</li>\n' +
          '\n' +
          '          <li>Excellent problem solving and analytical thinking skills.</li>\n' +
          '\n' +
          '          <li>Passion for making a difference in the lives of our customers.</li>\n' +
          '        </ul>',
        additional: 'Following a successful probationary period and transition to a full-time position, relocation to Toronto, Canada will be necessary for this role.'
      },
      {
        key: '2',
        show: true,
        title: ' ML Engineer',
        location: 'Toronto',
        workday: 'Part time working day',
        description: 'We are looking for a Machine Learning Engineer to join our AI Engineering and Tools Department (from March to June, a part-time position, with a transition to full-time afterward). In this role, we see someone who thrives in a high-paced environment, embraces challenges with enthusiasm, and enjoys a gamified approach to work.',
        responsibilities: '<ul>\n' +
          '          <li>Design, building, testing, deployment, and support of ML models and components that solve real-world business problems.</li>\n' +
          '\n' +
          '          <li>Work in close collaboration with R&D and Business Development Departments.</li>\n' +
          '\n' +
          '          <li>Anticipate and consider risks when building machine learning solutions.</li>\n' +
          '\n' +
          '          <li>Maintain and promote best practices for software development, including deployment process, documentation, and coding standards.</li>\n' +
          '        </ul>',
        requirements: '<ul>\n' +
          '          <li>Bachelor’s degree in Computer Science, Information Systems, Software, Electrical or Electronic.</li>\n' +
          '\n' +
          '          <li>Deep knowledge and experience in mobile machine learning.</li>\n' +
          '\n' +
          '          <li>Good communication and teamwork skills.</li>\n' +
          '\n' +
          '          <li>Passion for making a difference in the lives of our customers.</li>\n' +
          '        </ul>',
        additional: 'Following a successful probationary period and transition to a full-time position, relocation to Toronto, Canada will be necessary for this role.'
      },
      {
        key: '3',
        show: true,
        title: ' HR Specialist',
        location: 'Toronto',
        workday: 'Part time working day',
        description: 'We are looking for an HR Specialist to join our Organizational Department (from March to June, a part-time position, with a transition to full-time afterward). In this role, we see someone who thrives in a high-paced environment, embraces challenges with enthusiasm, and enjoys a gamified approach to work.',
        responsibilities: '<ul>\n' +
          '          <li>Coordinate hiring and onboarding processes.</li>\n' +
          '\n' +
          '          <li>Respond to HR inquiries including, but not limited to: health, benefits, company policy, payroll/pay, etc.</li>\n' +
          '\n' +
          '          <li>Maintain HRIS data ensuring accurate information.</li>\n' +
          '\n' +
          '          <li>Maintain and improve organizational culture.</li>\n' +
          '          <li>Collaborate with multiple departments.</li>\n' +
          '          <li>Support immigration and relocation services, coordinating with our providers and employees.</li>\n' +
          '        </ul>',
        requirements: '<ul>\n' +
          '          <li>Deep knowledge of Human Resources principles.</li>\n' +
          '\n' +
          '          <li>Excellent ability to network, collaborate, and bring people together.</li>\n' +
          '\n' +
          '          <li>Proficiency with Microsoft Office and other office related software.</li>\n' +
          '\n' +
          '          <li>Passion for making a difference in the lives of our customers.</li>\n' +
          '        </ul>',
        additional: 'Only candidates residing in Canada with valid work authorization will be considered for this position.'
      },
      {
        key: '4',
        show: false,
        title: ' Office Manager',
        location: 'Toronto',
        workday: 'Part time working day',
        description: 'We are looking for an Office Administrator to join our Organizational Department (from March to June, a part-time position, with a transition to full-time afterward). In this role, we see someone who thrives in a high-paced environment, embraces challenges with enthusiasm, and enjoys a gamified approach to work.',
        responsibilities: '<ul>\n' +
          '          <li>Assist in troubleshooting and resolving safety, service, and operational issues.</li>\n' +
          '\n' +
          '          <li>Provide the office with all the necessary supplies/equipment.</li>\n' +
          '\n' +
          '          <li>Track budget and spend for office operations.</li>\n' +
          '\n' +
          '          <li>Complete and maintain a variety of reports as directed by the managers.</li>\n' +
          '          <li>Communicate with employees about tasks as needed.</li>\n' +
          '          <li>Support various internal activities/events and meetings (for instance, large meetings, team-building, happy hours, etc.).</li>\n' +
          '          <li>Perform other duties as assigned.</li>\n' +
          '        </ul>',
        requirements: '<ul>\n' +
          '          <li>Excellent verbal and written communication skills.</li>\n' +
          '\n' +
          '          <li>Strong organization skills as well as the ability to multi-task.</li>\n' +
          '\n' +
          '          <li>Excellent ability to network, collaborate, and bring people together.</li>\n' +
          '\n' +
          '          <li>Proficiency with Microsoft Office and other office related software.</li>\n' +
          '          <li>Ability to think critically and make decisions on your own.</li>\n' +
          '          <li>Passion for making a difference in the lives of our customers.</li>\n' +
          '        </ul>',
        additional: 'Only candidates residing in Canada with valid work authorization will be considered for this position.'
      },
      {
        key: '5',
        show: true,
        title: ' Senior Learning and Development Specialist',
        location: 'Toronto',
        workday: 'Part time working day',
        description: 'We are looking for a Senior Learning and Development Specialist to join our Learning and Development Department (from March to June, a part-time position, with a transition to full-time afterward). In this role, we see someone who thrives in a high-paced environment, embraces challenges with enthusiasm, and enjoys a gamified approach to work.',
        responsibilities: '<ul>\n' +
          '          <li>Lead and manage the team of Learning and Development Department.</li>\n' +
          '\n' +
          '          <li>Develop, evaluate, and continually improve current educational solutions and programs.</li>\n' +
          '\n' +
          '          <li>Creates and maintains relevant content for our system.</li>\n' +
          '\n' +
          '          <li>Analyze post training reports and develop actions based on the analysis.</li>\n' +
          '          <li>Other duties as assigned.</li>\n' +
          '        </ul>',
        requirements: '<ul>\n' +
          '          <li>Strong experience in Education industry.</li>\n' +
          '\n' +
          '          <li>Deep knowledge of training, organization development and learning practices.</li>\n' +
          '\n' +
          '          <li>Exceptional written and verbal communication skills.</li>\n' +
          '\n' +
          '          <li>Exceptional presentation skills.</li>\n' +
          '          <li>Strong ability to collaborate and work as a member of the team.</li>\n' +
          '          <li>Passion for making a difference in the lives of our customers.</li>\n' +
          '        </ul>',
        additional: 'Only candidates residing in Canada with valid work authorization will be considered for this position.'
      },
    ]

  List: Vacancy[];
  constructor() {
    this.List = this.vacancies;

  }

}

export interface Vacancy {
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  additional: string;
  key: string;
  location: string;
  workday: string;
  show: boolean;
}
