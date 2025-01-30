import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  private apiUrl = 'http://localhost:8080/api/videos/upload';

  constructor(private http: HttpClient)  { }

  uploadVideo(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    console.log('Uploading:', file.name);

    return this.http.post(this.apiUrl, formData);
  }
}
