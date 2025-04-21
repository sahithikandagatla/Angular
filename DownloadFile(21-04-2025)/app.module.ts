import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationService } from './notification.service';
import { SmsService } from './sms.service';
import { EmailService } from './email.service';
import { NotificationFactory } from './NotificationFactory';
import { SmtpSetupService } from './smtp-setup.service';
import { SmtpInfo } from './smtp-info';
import { EMAIL_INFO } from './EmailConfig';

const SmtpInfoData:SmtpInfo={
  Url:"https://localhost/email",
  Username:"swetha",
  password:"spassword"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {
    //   provide:NotificationService,useClass:SmsService
    // },
    // {
    //   provide:NotificationService,useClass:EmailService
    // },
    {provide:EMAIL_INFO,useValue:SmtpInfoData},
    {
      provide:NotificationService,useFactory:NotificationFactory(1),deps:[SmtpSetupService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
