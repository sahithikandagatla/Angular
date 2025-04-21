import { EmailService } from "./email.service"
import { SmsService } from "./sms.service"
import { SmtpSetupService } from "./smtp-setup.service"

export function NotificationFactory(Opt:number)
{
    return(remoteEmail:SmtpSetupService)=>{
        if(Opt==1)
        {
            return new SmsService()
        }
        else
        {
            return new EmailService(remoteEmail)
        }
    }
}