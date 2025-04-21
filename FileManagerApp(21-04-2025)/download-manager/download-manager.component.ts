import { Component } from '@angular/core';
import { FileDownloader } from '../file-downloader';
import { FileDownloaderServiceService } from '../file-downloader-service.service';
import { DataProviderServiceService } from '../data-provider-service.service';

@Component({
  selector: 'app-download-manager',
  templateUrl: './download-manager.component.html',
  styleUrls: ['./download-manager.component.css']
})
export class DownloadManagerComponent {
  // constructor(private dmSrv:FileDownloaderServiceService)
  // {
    
  // }
  constructor(private dpSrv:DataProviderServiceService) 
  {
    
  }
  DownloadFile()
  {
    var strMsg=this.dpSrv.GetData()
    console.log(strMsg)
    // this.dmSrv.DownloadFile()
    // var fileDownloader=new FileDownloader()
    // fileDownloader.DownloadFile()
    //file download
    // console.log("download file")
    //notify client
    // console.log('client notified..')
  }
}
