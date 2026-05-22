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

 moveCursor(event: MouseEvent) {

  const cursor =
    document.querySelector(
      '.custom-cursor'
    ) as HTMLElement;

  cursor.style.left =
    event.clientX + 'px';

  cursor.style.top =
    event.clientY + 'px';

}
}




