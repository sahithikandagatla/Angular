import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadManagerComponent } from './download-manager/download-manager.component';
import { DataProviderServiceService } from './data-provider-service.service';
import { DBDataProviderService } from './dbdata-provider.service';
import { CloudDataProviderService } from './cloud-data-provider.service';
import { DataServiceFactoryFunction } from './DataProvider';
import { RemoteAccessorService } from './remote-accessor.service';
import { DBConnectionService } from './dbconnection.service';
import { ConnectionInfo } from './connection-info';
import { CONNECTION_INFO_TOKEN, URL_INFO_TOKEN } from './connectionConfig';
import { UrlInfo } from './url-info';

const ConnectionData:ConnectionInfo=
{
    serverName:'localhost',
    portNumber:8080,
    loginName:'sa',
    password:'mypassword'
}
const UrlInfoData:UrlInfo=
{
  Url:'https://localhost/json',
  UserName:'sa',
  Password:'mypassword'
}
@NgModule({
  declarations: [
    AppComponent,
    DownloadManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {
    //   provide:DataProviderServiceService,useClass:DBDataProviderService
    // },
    // {
    //   provide:DataProviderServiceService,useClass:CloudDataProviderService//the most recenty service will get override
    // }
    // {
    //   provide:DataProviderServiceService,useFactory:DataServiceFactoryFunction(1)
    // }
    {provide:CONNECTION_INFO_TOKEN,useValue:ConnectionData},
    {provide:URL_INFO_TOKEN,useValue:UrlInfoData},
    {
      provide:DataProviderServiceService,useFactory:DataServiceFactoryFunction(1),deps:[RemoteAccessorService,DBConnectionService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
