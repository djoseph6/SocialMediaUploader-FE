import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoUploadComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SocialMediaUploader';
}
