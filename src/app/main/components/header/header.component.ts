import { Component, HostListener, OnInit } from '@angular/core';
import { DarkModeService } from 'src/services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isScrolled = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > 64) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  constructor(private darkModeService : DarkModeService) { }



  ngOnInit(): void {
  }


  public toggleTheme() {
    this.darkModeService.toggleDarkMode()
  }
}
