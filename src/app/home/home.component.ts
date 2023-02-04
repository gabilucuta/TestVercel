import { Component } from '@angular/core';
import { faGithub , faFacebook , faLinkedin , faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faGithub = faGithub;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;

}
