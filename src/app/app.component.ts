import { Component, NgModule } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';
import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [
//     VideoUploadComponent
//   ],
//   imports: [
//     CommonModule
//   ],
// })
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [VideoUploadComponent],
  imports: [CommonModule, VideoUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SocialMediaUploader';
}
