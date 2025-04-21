import { Injectable } from '@angular/core';
import { DataProviderServiceService } from './data-provider-service.service';
import { DBConnectionService } from './dbconnection.service';

@Injectable({
  providedIn: 'root'
})
export class DBDataProviderService extends DataProviderServiceService{

  constructor(private remoteDbSrv:DBConnectionService) {
    super();
   }
   override GetData(): string {
    this.remoteDbSrv.ConnectToDatabase()
     return "from Database Data Provider Service"
   }
}
