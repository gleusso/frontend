import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private herderService: HeaderService) { }

  ngOnInit(): void {
  }
   get title (): string  {
     return this.herderService.herderData.title;
   }
   get icon (): string  {
    return this.herderService.herderData.icon;
  }
  get routeUrl (): string  {
    return this.herderService.herderData.routeUrl;
  }

}
