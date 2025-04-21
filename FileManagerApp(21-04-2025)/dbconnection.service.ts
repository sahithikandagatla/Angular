import { Inject, Injectable } from '@angular/core';
import { CONNECTION_INFO_TOKEN } from './connectionConfig';
import { ConnectionInfo } from './connection-info';

@Injectable({
  providedIn: 'root'
})
export class DBConnectionService {
  private connectionData:ConnectionInfo
  constructor(@Inject(CONNECTION_INFO_TOKEN) conData:ConnectionInfo){
    this.connectionData=conData
  }
  ConnectToDatabase()
  {
    console.log(`connecting to database..
      serverName:${this.connectionData.serverName} 
      port number:${this.connectionData.portNumber}
      loginName:${this.connectionData.loginName}
      password:${this.connectionData.password}`)
  }
}
