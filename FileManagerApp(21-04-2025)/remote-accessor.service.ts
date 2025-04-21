import { Inject, Injectable } from '@angular/core';
import { URL_INFO_TOKEN } from './connectionConfig';
import { UrlInfo } from './url-info';

@Injectable({
  providedIn: 'root'
})
export class RemoteAccessorService {
  UrlInfoData:UrlInfo
  constructor(@Inject(URL_INFO_TOKEN) urlData:UrlInfo) {
    this.UrlInfoData=urlData
  }
  ConnectRemoteServer()
  {
    console.log(`connecting to remote server...
      URL: ${this.UrlInfoData.Url}
      UserName: ${this.UrlInfoData.UserName}
      Password:${this.UrlInfoData.Password}`)
  }
}
