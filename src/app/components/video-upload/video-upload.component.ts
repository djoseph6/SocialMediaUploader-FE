import { Component } from '@angular/core';
import { VideoUploadService } from '../../services/video-upload.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-upload.component.html',
  styleUrl: './video-upload.component.css'
})
export class VideoUploadComponent {
  selectedFile!: File;

  constructor(private videoUploadService: VideoUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadVideo() {
    if (!this.selectedFile) {
      alert('Please select a video file.');
      return;
    }

    this.videoUploadService.uploadVideo(this.selectedFile).subscribe(
      (response) => {
        console.log('Upload successful:', response);
        alert('Video uploaded successfully!');
      },
      (error) => {
        console.error('Upload failed:', error);
        alert('Failed to upload video.');
      }
    );
  }
}
