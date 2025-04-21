import { Inject, Injectable } from '@angular/core';
import { SmtpInfo } from './smtp-info';
import { EMAIL_INFO } from './EmailConfig';

@Injectable({
  providedIn: 'root'
})
export class SmtpSetupService {
  private SmtpInfoData:SmtpInfo
  constructor(@Inject(EMAIL_INFO) emailData:SmtpInfo) {
    this.SmtpInfoData=emailData
  }
  ConnectEmailServer()
  {
    console.log(`from SmtpSetupService...
      URL:${this.SmtpInfoData.Url}
      username:${this.SmtpInfoData.Username}
      password:${this.SmtpInfoData.password}`)
  }
}
