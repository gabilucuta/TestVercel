import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PersonalWebsite';

  
  home = "background-main-page.jpg";
  background = "";
  projects = "projects-background.jpg";
  
  ngOnInit(): void{ 
    this.background = "./background-main-page.jpg"
}
  setBackground(s:string) {     
   this.background = s;
}
}
