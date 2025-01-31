import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';

export const routes: Routes = [
    {path: '', component: VideoUploadComponent}
];
