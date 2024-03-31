import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VacanciesService {
  private vacancies: Vacancy[] =
    [
      {
        key: '1',
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
}
