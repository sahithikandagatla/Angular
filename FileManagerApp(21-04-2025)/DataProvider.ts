import { CloudDataProviderService } from "./cloud-data-provider.service"
import { DBConnectionService } from "./dbconnection.service"
import { DBDataProviderService } from "./dbdata-provider.service"
import { RemoteAccessorService } from "./remote-accessor.service"

export function DataServiceFactoryFunction(Opt:number)
{
    return(remoteSrv:RemoteAccessorService,remoteDbSrv:DBConnectionService)=>{
        if(Opt==1)
        {
            return new DBDataProviderService(remoteDbSrv)
        }
        else
        {
            return new CloudDataProviderService(remoteSrv)
        }
    }
}