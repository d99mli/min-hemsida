import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {

  darkMode = false;

  toggleDarkMode() {

    this.darkMode = !this.darkMode;

    if (this.darkMode) {

      document.body.classList.add('dark-mode');

    } else {

      document.body.classList.remove('dark-mode');

    }

  }

}
