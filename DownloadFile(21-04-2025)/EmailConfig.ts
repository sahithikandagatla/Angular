import { InjectionToken } from "@angular/core";
import { SmtpInfo } from "./smtp-info";

export const EMAIL_INFO=new InjectionToken<SmtpInfo>('email info')