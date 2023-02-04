import { Component } from '@angular/core';
import { Card } from './cards';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  cards:Card[] = [
    {
      name:"Interactive rating component",
      url:"https://gabilucuta.github.io/Interactive-rating-component/",
      image:"https://raw.githubusercontent.com/gabilucuta/Interactive-rating-component/main/design/desktop-preview.jpg"
    },
    {
      name:"QR code component",
      url:"https://gabilucuta.github.io/QR-code-component/",
      image:"https://raw.githubusercontent.com/gabilucuta/QR-code-component/main/design/desktop-preview.jpg"
    },
    {
      name:"NFT preview card component",
      url:"https://gabilucuta.github.io/NFT-preview-card-component/",
      image:"https://raw.githubusercontent.com/gabilucuta/NFT-preview-card-component/main/design/desktop-preview.jpg"
    },
    {
      name:"FAQ accordion card",
      url:"https://gabilucuta.github.io/FAQ-accordion-card/",
      image:"https://raw.githubusercontent.com/gabilucuta/FAQ-accordion-card/main/design/desktop-preview.jpg",
    },
    {
      name:"Article preview component",
      url:"https://gabilucuta.github.io/Article-preview-component/",
      image:"https://raw.githubusercontent.com/gabilucuta/Article-preview-component/main/design/desktop-preview.jpg"
    },
    {
      name:"Intro component with sign up form",
      url:"https://gabilucuta.github.io/Intro-component-with-sign-up-form/",
      image:"https://raw.githubusercontent.com/gabilucuta/Intro-component-with-sign-up-form/main/design/desktop-preview.jpg"
    },
    {
      name:"Ping coming soon page",
      url:"https://gabilucuta.github.io/Ping-single-column-coming-soon-page/?#",
      image:"https://raw.githubusercontent.com/gabilucuta/Ping-single-column-coming-soon-page/main/design/desktop-preview.jpg"
    },
    {
      name:"Interactive card details form",
      url:"https://gabilucuta.github.io/Interactive-card-details-form/",
      image:"https://raw.githubusercontent.com/gabilucuta/Interactive-card-details-form/main/design/desktop-preview.jpg"
    },
    {
      name:"Tip calculator app",
      url:"https://gabilucuta.github.io/Tip-calculator-app-/",
      image:"https://raw.githubusercontent.com/gabilucuta/Tip-calculator-app-/main/design/desktop-preview.jpg"
    },
    {
      name:"Sunnyside agency landing page",
      url:"https://gabilucuta.github.io/Sunnyside-agency-landing-page/",
      image:"https://raw.githubusercontent.com/gabilucuta/Sunnyside-agency-landing-page/main/design/desktop-preview.jpg"
    },
    {
      name:"Intro section with dropdown navigation",
      url:"https://gabilucuta.github.io/Intro-section-with-dropdown-navigation/#",
      image:"https://raw.githubusercontent.com/gabilucuta/Intro-section-with-dropdown-navigation/main/design/desktop-preview.jpg"
    },
    {
      name:"Base Apparel coming soon page",
      url:"https://gabilucuta.github.io/Base-Apparel-coming-soon-page/",
      image:"https://raw.githubusercontent.com/gabilucuta/Base-Apparel-coming-soon-page/main/design/desktop-preview.jpg"
    },
    {
      name:"Calculator app",
      url:"https://gabilucuta.github.io/Calculator-app/",
      image:"https://raw.githubusercontent.com/gabilucuta/Calculator-app/main/design/desktop-preview.jpg"
    },
    {
      name:"Notifications page",
      url:"https://gabilucuta.github.io/Notifications-page/",
      image:"https://raw.githubusercontent.com/gabilucuta/Notifications-page/main/design/desktop-preview.jpg"
    },
    {
      name:"Graphic Design Projects",
      url:"https://www.instagram.com/designero_official/",
      image:"https://thumbs.dreamstime.com/b/graphic-designer-workspace-concept-graphic-design-isometric-conceptual-composition-workplace-designer-little-people-106236230.jpg"
    }
  ]
}
