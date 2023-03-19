import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  public darkMode : boolean = false;

  constructor() { }


  public toggleDarkMode() {
    // this.darkMode = !this.darkMode
    // const theme = this.darkMode ? 'dark-theme.css' : 'light-theme.css';
    // document.getElementById('theme')?.setAttribute('href', `assets/themes/${theme}`);

    const body = document.querySelector('body');
    body?.classList.toggle('dark-mode');
  }
}
