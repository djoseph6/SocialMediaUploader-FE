import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  private apiUrl = 'http://localhost:8080/api/videos/upload';
// Define the allowed video formats
private allowedFormats: string[] = ['.mp4', '.mov', '.avi', '.wmv', '.flv', '.mkv', '.webm'];

constructor(private http: HttpClient) { }


validateFileFormat(fileName: string): boolean {
  const fileExtension = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
  return this.allowedFormats.includes(fileExtension);
}

uploadVideo(file: File): Observable<any> {
  if (!this.validateFileFormat(file.name)) {
    console.error('Invalid file format:', file.name);
    return of({ error: 'Invalid file format' }); // Return an observable with an error response
  }

  const formData = new FormData();
  formData.append('file', file);
  console.log('Uploading:', file.name);

  return this.http.post(this.apiUrl, formData);
}
}

