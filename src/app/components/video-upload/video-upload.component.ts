import { Component } from '@angular/core';
import { VideoUploadService } from '../../services/video-upload.service';
import { CommonModule } from '@angular/common';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-upload.component.html',
  styleUrl: './video-upload.component.css'
})
export class VideoUploadComponent {
  selectedFile!: File | null;
  uploadButtonEnabled: boolean = false; // Button state

  // Define the accepted video formats
  acceptedFormats: string[] = ['mp4', 'avi', 'mov', 'wmv', 'mkv'];

  constructor(private videoUploadService: VideoUploadService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;

    // Check if the selected file is of an accepted format
    if (file) {
      this.uploadButtonEnabled = this.isValidFileFormat(file.name);
    } else {
      this.uploadButtonEnabled = false; // Disable the button if no file is selected
    }
  }

  // Method to check if the file format is valid
  private isValidFileFormat(fileName: string): boolean {
    const fileExtension = fileName.split('.').pop()?.toLowerCase();
    return this.acceptedFormats.includes(fileExtension!);
  }

  uploadVideo() {
    if (!this.selectedFile) {
      alert('Please select a video file.');
      return;
    }

    // Call the service to upload the video if the button is enabled
    this.videoUploadService.uploadVideo(this.selectedFile).subscribe(
      (response) => {
        console.log('Upload successful:', response);
        alert('Video uploaded successfully!');
        this.resetForm(); // Reset the form after successful upload
      },
      (error) => {
        console.error('Upload failed:', error);
        alert('Failed to upload video.');
      }
    );
  }

  // Optional: Reset the form
  private resetForm() {
    this.selectedFile = null;
    this.uploadButtonEnabled = false;
    (document.getElementById('fileInput') as HTMLInputElement).value = ''; // Clear the input
  }
}
