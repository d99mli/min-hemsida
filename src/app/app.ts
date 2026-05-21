import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('min-hemsida');

  @HostListener('document:mousemove', ['$event'])

  onMouseMove(event: MouseEvent) {

    document.body.style.setProperty(
      '--x',
      event.clientX + 'px'
    );

    document.body.style.setProperty(
      '--y',
      event.clientY + 'px'
    );

  }
}



