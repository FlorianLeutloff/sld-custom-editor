import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainEditor } from './main-editor/main-editor';

@Component({
  imports: [RouterOutlet, MainEditor],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app');
}
