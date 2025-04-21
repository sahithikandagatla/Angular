import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloaderServiceService {

  constructor() { }
  DownloadFile():boolean{
    console.log("downloaded file")
    return true
  }
}
