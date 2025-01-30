import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoUploadComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SocialMediaUploader';
}
