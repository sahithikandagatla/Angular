import { Injectable } from '@angular/core';
import { DataProviderServiceService } from './data-provider-service.service';
import { RemoteAccessorService } from './remote-accessor.service';

@Injectable({
  providedIn: 'root'
})
export class CloudDataProviderService extends DataProviderServiceService{
  constructor(private remoteSrv:RemoteAccessorService) {
    super();
    // this.remoteSrv=new RemoteAccessorService()
   }
   override GetData(): string {
    //access the rempote server using RemoteAccessorService() class object
    this.remoteSrv.ConnectRemoteServer()
     return "from CloudDataProviderService...success"
   }
}
