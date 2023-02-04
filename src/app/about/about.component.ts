import { Component } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills: Skill[] = [
    {
      value: 80,

      name: "HTML"
    },
    {
      value: 80,
      name: "CSS"
    },
    {
      value: 60,

      name: "JS"
    },
    {
      value: 70,

      name: "C#"
    },
    {
      value: 40,

      name: "Angular"
    },
    {
      value: 30,

      name: "TS"
    }
  ]
}
