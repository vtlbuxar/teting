
import LineclearExpressAPI from '../pageobjects/API.page';
import { URLSandAUTH } from '../pageobjects/testdata';
import axios from 'axios';


describe("LineClearAPI", async () => {
     for (let i = 0; i < 1; i++) {

        it("[01] Successfull creation of shipment", async () => {
            const url = URLSandAUTH.UATCreateSHipmentURL; // Get the URL
            await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url, URLSandAUTH.valid_ST);     
        })
it("[02] Verify the API response for unsuccessfull shipment creation with the service type is invalid", async ()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL; 
   await LineclearExpressAPI.createShipmentInValid_ST(URLSandAUTH.Suraj71, url, URLSandAUTH.Invalid_ST);
})

it("[03] Verify the API response for Successful MPS Shipment creation", async ()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL; 
   await LineclearExpressAPI.createShipmentOnly(URLSandAUTH.Suraj71, url, URLSandAUTH.valid_ST); 
   browser.getLogs('network')
})

it("[04]JOGET API",async ()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
  const jogetURL= URLSandAUTH.UATJOGETAPIURL;
   await LineclearExpressAPI.joget(jogetURL,reuse)
})

it("[05]AWM API with mode X",async ()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const AWMAPI= URLSandAUTH.UATAWMAPI;
   await LineclearExpressAPI.AWM_X(AWMAPI,reuse)
 })

 it("[06]Lodge-in API",async ()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const lodgINAPI=URLSandAUTH.UATLodge_in
   await LineclearExpressAPI.lodge_in(lodgINAPI,reuse)
 })

 it("[07]AWM API with mode A",async ()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const lodgINAPI=URLSandAUTH.UATLodge_in
   await LineclearExpressAPI.lodge_in(lodgINAPI,reuse)
   const AWMMODE_A=URLSandAUTH.UATAWMAPI
   await LineclearExpressAPI.AWM_A(AWMMODE_A,reuse)
 })

 it("[08]Create DRS API", async()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const lodgINAPI=URLSandAUTH.UATLodge_in
   await LineclearExpressAPI.lodge_in(lodgINAPI,reuse)
   const CreateDRS= URLSandAUTH.CreateDRS
   let DRSnumberReuser=await LineclearExpressAPI.create_DRS(CreateDRS,reuse)
   const updateDRSDelivered=URLSandAUTH.UpdateDRS_Delivered
   await LineclearExpressAPI.updateDRS_Delivered(updateDRSDelivered,reuse,DRSnumberReuser)

 })

 it("[09]Update DRS as delivered", async()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const lodgINAPI=URLSandAUTH.UATLodge_in
   await LineclearExpressAPI.lodge_in(lodgINAPI,reuse)
   const CreateDRS= URLSandAUTH.CreateDRS
   let DRSnumberReuser=await LineclearExpressAPI.create_DRS(CreateDRS,reuse)
   const updateDRSDelivered=URLSandAUTH.UpdateDRS_Delivered
   await LineclearExpressAPI.updateDRS_Delivered(updateDRSDelivered,reuse,DRSnumberReuser)
 })

 it("[10]Update DRS as Undelivered", async()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const lodgINAPI=URLSandAUTH.UATLodge_in
   await LineclearExpressAPI.lodge_in(lodgINAPI,reuse)
   const CreateDRS= URLSandAUTH.CreateDRS
   let DRSnumberReuser=await LineclearExpressAPI.create_DRS(CreateDRS,reuse)
   const updateDRS_UNDelivered=URLSandAUTH.UpdateDRS_Undelivered
    await LineclearExpressAPI.updateDRS_Undelivered(updateDRS_UNDelivered,reuse,DRSnumberReuser)

 })
 
 it("[11] Cancel DRS successfully", async()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const lodgINAPI=URLSandAUTH.UATLodge_in
   await LineclearExpressAPI.lodge_in(lodgINAPI,reuse)
   const CreateDRS= URLSandAUTH.CreateDRS
   let DRSnumberReuser=await LineclearExpressAPI.create_DRS(CreateDRS,reuse)
   const CancelDRSAPI= URLSandAUTH.Cancel_DRS
   await LineclearExpressAPI.Cancel_DRS(CancelDRSAPI,DRSnumberReuser)

})

it("[12] Track shipment successfully",async()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const trackSHipmentAPI=URLSandAUTH.TrackShipment
   await LineclearExpressAPI.TrackShipment(trackSHipmentAPI,reuse)
})

it("[13] Cancel shipment successfully",async()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const CancelShipmentAPI=URLSandAUTH.Cancel_Shipment
   await LineclearExpressAPI.CancelShipment(CancelShipmentAPI,reuse)
})

it("[14] View and Track the shipment successfully",async()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const lodgINAPI=URLSandAUTH.UATLodge_in
   await LineclearExpressAPI.lodge_in(lodgINAPI,reuse)
   const ViewANDTrackAPI=URLSandAUTH.ViewAndTack_API
   await LineclearExpressAPI.ViewAndTrack(ViewANDTrackAPI,reuse)
})

it("[15] Successfull download of waybill", async()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const DownloadwaybillURL= URLSandAUTH.DownloadWaybillAPI
   await LineclearExpressAPI.DownloadWaybill(DownloadwaybillURL,reuse)

})

it("[16] Successfully edit of the shipment", async()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const editwaybillURL=URLSandAUTH.EditShipment
   await LineclearExpressAPI.EditShipment(editwaybillURL,reuse)


})


it("[17] Successfully Block Shipment to create DRS", async()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const BlockDRS_URL=URLSandAUTH.BlockShipment_forDRS
   await LineclearExpressAPI.BlockShipmentTOCreateDRS(BlockDRS_URL,reuse)
})

it("[18] Successfully Unblock Shipment to create DRS", async()=>{
   const url = URLSandAUTH.UATCreateSHipmentURL;
   let reuse =await LineclearExpressAPI.createShipment(URLSandAUTH.Suraj71, url);
   const BlockDRS_URL=URLSandAUTH.BlockShipment_forDRS
   await LineclearExpressAPI.BlockShipmentTOCreateDRS(BlockDRS_URL,reuse)
   const UnblockDRS_URL=URLSandAUTH.UnblockShipment_forDRS
   await LineclearExpressAPI.UnblockShipmentTOCreateDRS(UnblockDRS_URL,reuse)
})

/**MDM**/


it("[19] Successfully creation of customer using AddEditCustomer API", async()=>{
   const AddEdit_Customer_url = URLSandAUTH.Create_customer_URL;
   await LineclearExpressAPI.Create_customer(AddEdit_Customer_url)
})

it("[20] Successfully fetch customer data", async()=>{
   const get_CustomerData_url = URLSandAUTH.GetCustomerData_URL;
   await LineclearExpressAPI.GetCustomerdata(get_CustomerData_url)
})

it("[21] Successfully Create station", async()=>{
   const Create_Station_URL = URLSandAUTH.Create_Station;
   await LineclearExpressAPI.create_station(Create_Station_URL)
})

it("[22] Successfully fetch station", async()=>{
   const Create_Station_URL = URLSandAUTH.Create_Station;
   await LineclearExpressAPI.create_station(Create_Station_URL)
   const Fetch_Station_URL = URLSandAUTH.fetchstation;
   await LineclearExpressAPI.Fetch_station(Fetch_Station_URL)
})

it("[23] Successfully Add and edit driver", async()=>{
   const Create_Driver_URL = URLSandAUTH.CreateDriver;
   await LineclearExpressAPI.create_Edit_Driver(Create_Driver_URL)
})
it("[24] Successfully fetch drive data", async()=>{
   const Fetch_Driver_URL = URLSandAUTH.FetchDriver;
   await LineclearExpressAPI.fetch_Driver(Fetch_Driver_URL)
})















}
});

