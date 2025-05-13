import axios from 'axios';
import { expect } from 'chai';
import { URLSandAUTH } from './testdata';



let createdStationData = null;
class LineclearExpressAPI {
  constructor() {
 
  }

  /*Create Shipment API
  =====================*/
  
  static async createShipment(User1, url,ST) {
    let waybillData=" " ; 
    const headers = {
      Authorization: User1, // Add authorization header 
    };
    const shipmentData = {
      "Shipment": [
          {
              "ShipmentServiceType": "Standard Delivery",
              "SenderName": "Hantu",
              "RecipientName": "azizi",
              "ConfigServiceCode": "ST00000177",
              "ShipmentMotherWaybillNumber": "",
              "ShipmentType": "Lodge In",
              "PickupAddressType": "Default",
              "WBSenderDisplayAddress": "Sender address",
              "ShipmentAddressFrom": {
                  "CompanyName": "Itik Sdn Bhd",
                  "UnitNumber": "No 42",
                  "Address": "Character and word limits are quite common these days on the Internetriebuhjbhjjcommon these days on theCharacter and word limits are quite common the",
                  "Address2": "Jalan Bahagia",
                  "PostalCode": "72000",
                  "City": "Jogja City",
                  "State": "Jogjakarta",
                  "Country": "Indonesia",
                  "Email": "",
                  "PhoneNumber": "+6017501155565230123",
                  "ICNumber": ""
              },
              "ShipmentAddressTo": {
                  "CompanyName": "",
                  "UnitNumber": "NO.1",
                  "Address": "JALAN kampung BElioNG HiLir",
                  "Address2": "Hamzah",
                  "PostalCode": "70000",
                  "City": "",
                  "State": "",
                  "Email": "",
                  "PhoneNumber": "+6017501155565230123",
                  "ICNumber": ""
              },
              "RecipientPhone": "+6017501155565230123",
              "ParcelType": "Package",
              "ShipmentRef": "",
              "ShipmentDescription": "",
              "WayBill": [
                  {
                      "ProductID": "P000",
                      "WayBillNo": "",
                      "Weight": "1",
                      "VolumeWidth": "",
                      "VolumeHeight": "",
                      "VolumeLength": ""
                  }
              ],
              "DONumber": ""
          }
      ]
  }
    

        const res = await axios.post(url, shipmentData, { headers });
        console.log(res.data);

        expect(res.data.Status).to.equal(true);
        expect(res.data.Message).to.equal("Shipment Creation Successful");
        expect(res.status).to.equal(200);
        
  if (res.data.Status === true && res.data.Message === "Shipment Creation Successful" && res.data.ResponseData && res.data.ResponseData.length > 0 && res.data.ResponseData[0].WayBill && res.data.ResponseData[0].WayBill.length > 0) {
        const waybillData = res.data.ResponseData[0].WayBill[0];
        console.log("Waybill Data:", waybillData);
        expect(waybillData).to.be.a('string');
        expect(waybillData).to.not.be.empty;
        return waybillData;
  } 
}

//Unsuccessful shipment creation using Invalid service type
static async createShipmentInValid_ST(User1, url,ST) {
  let waybillData=" " ; 
  const headers = {
    Authorization: User1, // Add authorization header 
  };
  const shipmentData = {
    "Shipment": [
              {
                  "ShipmentServiceType": "Standard Delivery",
                  "SenderName": "TESTING RPM",
                  "RecipientName": "TESTING AGENT",
                  "ConfigServiceCode": ST,
                  "ShipmentAddressFrom": {
                      "CompanyName": "TESTING RP BLD",
                      "UnitNumber": "NO 1 & 1A",
                      "Address": "jalan alam suria 11/11",
                      "Address2": "Add2",
                  "PostalCode": "42200",
                      "City": "Bandar Puncak Alam",
                      "State": "Selangor",
                      "Email": "rpmahata@yopmail.com",
                      "PhoneNumber": "123123123",
                  "ICNumber": "99999999"
                  },
                  " WBSenderDisplayAddress ": "Waybill Display Address",
                  "ShipmentAddressTo": {
                  "CompanyName": "",
                      "UnitNumber": "10",
                      "Address": "New Apartment 11",
                      "Address2": "",
                  "PostalCode": "68100",
                      "City": "Kangar",
                      "State": "Perlis",
                      "Email": "xyz@gmail.com",
                      "PhoneNumber": "012315566561",
                      "ICNumber": "9999999999"
                  },
                  "RecipientPhone": "012954515985",
                  "ParcelType": "Package",
                  "ShipmentRef": "",
                  "ShipmentDescription": null,
                  "ShipmentType": "Pickup",
                  "PickupAddressType": "Sender",
                  "CODAmount": "",
                  "InsurancePurchase": [
                      {
                          "ProductDescription": "INS1",
                          "Quantity": "1",
                          "UnitPrice": "100"
                      }
                  ],
                  "WayBill": [
                      {
                          "ProductID": "",
                          "WayBillNo": "",
                          "ShortCN": "",
                          "Weight": "1",
                          "VolumeWidth": "",
                          "VolumeHeight": "",
                          "VolumeLength": ""
                      }
                  // {
                  //     "ProductID": "",
                  //     "WayBillNo": "",
                  //     "ShortCN": "",
                  //     "Weight": "1",
                  //     "VolumeWidth": "",
                  //     "VolumeHeight": "",
                  //     "VolumeLength": ""
                  // }
                  // {
                  //     "ProductID": "",
                  //     "WayBillNo": "",
                  //     "ShortCN": "",
                  //     "Weight": "1",
                  //     "VolumeWidth": "",
                  //     "VolumeHeight": "",
                  //     "VolumeLength": ""
                  // }
                  ],
                  "DONumber": ""
              }
          ]
      }
  

      const Invalid_res = await axios.post(url, shipmentData, { headers });
      console.log(Invalid_res.data);

      expect(Invalid_res.data.Status).to.equal(false);
      expect(Invalid_res.data.Message).to.equal("Shipment Creation Failed");
      expect(Invalid_res.status).to.equal(200);
}

/*joget API
=======*/
static async joget(jogetURL,reuse){
  this.reuse=reuse; 
    const headers = {
      Authorization: URLSandAUTH.JogetAPI_Auth, // Add authorization header
    };
    const Jogetdata = {
      "Parcels": [
      {
        "WayBillNumber":reuse,
        "Weight": 24,
        "Height": 1,
        "Length": 8,
        "Width": 1,
        "Location": "ITTESTING",
        "NumberOfPersons": "2",
        "ScanDate": "2024-09-30 23:59:59.000",
        "PackageQR": "",
        "PackageID": "",
        "ServiceType": "",
        "Image": ""
      }
    ]
}
const res1 = await axios.post(jogetURL, Jogetdata, { headers });
    console.log(res1.data);

    const JogetUpdatedWaybillNo = res1.data.data?.WayBillNumber;
    console.log(JogetUpdatedWaybillNo);

    expect(res1.data.message).to.equal('Update Success!');
    expect(res1.data.status).to.be.true;
    expect(res1.status).to.equal(200);
}


/*AWM API Mode X
=================*/
static async AWM_X(AWMAPI,reuse){
  this.reuse=reuse; 
    const headers = {
      Authorization: URLSandAUTH.JogetAPI_Auth, // Add authorization header
    };
    const AWMDATA = {
      
        "Parcels": [
            {
                "WayBillNumber": reuse,
                "Weight": 15,
                "Height": 6,
                "Length": 2,
                "Width": 1,
                "Location": "ITTESTING",
                "Mode": "X",
                "Image":"",
                "ScanDate": "",
                "PackageQR": "",
                "PackageID": "",
                "NumberOfPersons": ""
                
            }
        ]
    }
  const res2 = await axios.post(AWMAPI, AWMDATA, { headers });
  console.log(res2.data);

  const AWMUpdatedWaybillNo = res2.data.data?.WayBillNumber; 
  console.log(AWMUpdatedWaybillNo);

  expect(res2.data.message).to.equal('Update Success!');
  expect(res2.status).to.equal(200);
  expect(res2.data.status).to.be.true; 
}


/*Lodge-in API
==============*/
static async lodge_in(lodgINAPI,reuse){
  this.reuse=reuse; 
    const headers = {
      Authorization: URLSandAUTH.Lodge_inAuth, // Add authorization header
    };
    const lodge_inData = {
      "Location": "DUSJ",
      "WayBillNumber": [
        reuse
      ]
  }

  const res3 = await axios.post(lodgINAPI, lodge_inData, { headers });
  console.log(res3.data);

  
  const Lodge_in = res3.data.data && res3.data.data.WayBillNumber ? res3.data.data.WayBillNumber : [];
  console.log(Lodge_in);

  expect(res3.data.message).to.equal('Success');
  expect(res3.data.insertCount).to.equal(1);
  expect(res3.status).to.equal(201);
  
}

/*AWM API Mode A
=================*/
static async AWM_A(AWMMODE_A,reuse){
  this.reuse=reuse;
    const headers = {
      Authorization: URLSandAUTH.JogetAPI_Auth, // Add authorization header
    };
    const AWMDATA = {
      
        "Parcels": [
            {
                "WayBillNumber": reuse,
                "Weight": 15,
                "Height": 6,
                "Length": 2,
                "Width": 1,
                "Location": "ITTESTING",
                "Mode": "A",
                "Image":"",
                "ScanDate": "",
                "PackageQR": "",
                "PackageID": "",
                "NumberOfPersons": ""
                
            }
        ]
    }

  const res4 = await axios.post(AWMMODE_A, AWMDATA, { headers });
  console.log(res4.data);

  
  const AWMUpdatedWaybillNo = res4.data.data?.WayBillNumber; 
  console.log(AWMUpdatedWaybillNo);
 
  expect(res4.data.message).to.equal('Update Success!');
  expect(res4.status).to.equal(200);
  expect(res4.data.status).to.be.true;
}

/*Create DRS API
=================*/
static async create_DRS(CreateDRS,reuse){
  this.reuse = reuse;
  const headers = {
    Authorization: URLSandAUTH.Lodge_inAuth,
  };
  const CREATE_DRSdata = {
    "VehicleNumber": "12345",
    "DriverId": "LC787878",
    "Remarks": "TEST",
    "CapacityUtilization": "56",
    "BranchCode": "XDGL",
    "ScannedWaybills": [
      reuse
    ]
  };

  let CreatedDRSNumber = null; // Initialize OUTSIDE the try block

    const res5 = await axios.post(CreateDRS, CREATE_DRSdata, { headers });
    console.log(res5.data);

    const data = res5.data.Data;

    if (data) {
      const match = data.match(/DRS\/[A-Z]{4}\/\d{4}\/\d{6}/);
      if (match) {
        CreatedDRSNumber = match[0];
      } else {
        console.error("DRS Number pattern not found in Data:", data);
      }
    } else {
      console.error("Data field is missing in the response:", res5.data);
    }

    console.log(CreatedDRSNumber);
    
    expect(res5.data.Message).to.equal('DRS Created.');
    expect(res5.status).to.equal(200);
    expect(res5.data.Status).to.be.true;
    expect(CreatedDRSNumber).to.not.be.null;

  return CreatedDRSNumber; 
}

/*Update DRS as delivered
=========================*/

static async updateDRS_Delivered(updateDRSDelivered,reuse,DRSnumberReuser){
  this.reuse=reuse;
  this.DRSnumberReuser=DRSnumberReuser 
    const headers = {
      Authorization: URLSandAUTH.Lodge_inAuth, // Add authorization header
    };
    const UpdateDRSDelivered_Data = {
      "attachment": [
          {
              "format": "jpg",
              "type": "SelectedPOD1",
              "base64": URLSandAUTH.imageBase64
          },
          {
              "format": "jpg",
              "type": "SelectedSign",
              "base64": URLSandAUTH.imageBase64
          }
      ],
      "Status": "WB021",
      "ReceiverName": "TEST",
      "ICNumber": "TB12354",
      "Reason": "",
      "Remarks": "Deliverer to Customer",
      "DRSNumber": DRSnumberReuser,
      "WayBillNumber": reuse,
      "BranchCode": "DPAB"
  }

  const res6 = await axios.post(updateDRSDelivered, UpdateDRSDelivered_Data, { headers });
  console.log(res6.data);


  const data = res6.data.data;
    let updatedDRSNumber = null;

    if (data) {
      const match = data.match(/DRS\/[A-Z]{4}\/\d{4}\/\d{6}/);
      if (match) {
        updatedDRSNumber = match[0];
      } else {
        console.error("DRS Number pattern not found in Data:", data);
      }
    } else {
      console.error("Data field is missing in the response:", res6.data);
    }

    console.log(updatedDRSNumber);

    expect(res6.status).to.equal(200);
    expect(res6.data.status).to.be.true;
    expect(res6.data.message).to.equal('DRS Updated successfully.');
    expect(updatedDRSNumber).to.not.be.null; // Check if extraction was successful
    expect(updatedDRSNumber).to.equal(DRSnumberReuser); // Compare with the DRS number sent
}

/*Update DRS as Undelivered
=========================*/

static async updateDRS_Undelivered(updateDRS_UNDelivered,reuse,DRSnumberReuser){
  this.reuse=reuse;
  this.DRSnumberReuser=DRSnumberReuser
   
    const headers = {
      Authorization: URLSandAUTH.Lodge_inAuth, // Add authorization header
    };
    const UpdateDRSUndelivered_Data = {
      "attachment": [
          {
              "format": "png",
              "type": "SelectedProof",
              "base64": URLSandAUTH.imageBase64
          }
      ],
      "Status": "WB020",
      "ReceiverName": "TUSHAR",
      "ICNumber": "TB12354",
      "Reason": "DD005V004",
      "Remarks": "UNABLE TO COMPLETE",
      "DRSNumber": DRSnumberReuser,
      "WayBillNumber": reuse,
      "BranchCode": "DUSJ"
      
  }
  const res7 = await axios.post(updateDRS_UNDelivered, UpdateDRSUndelivered_Data, { headers });
  console.log(res7.data);


  const data = res7.data.data;
    let updatedDRSNumber = null;

    if (data) {
      const match = data.match(/DRS\/[A-Z]{4}\/\d{4}\/\d{6}/);
      if (match) {
        updatedDRSNumber = match[0];
      } else {
        console.error("DRS Number pattern not found in Data:", data);
      }
    } else {
      console.error("Data field is missing in the response:", res7.data);
    }

    console.log(updatedDRSNumber);

    expect(res7.status).to.equal(200);
    expect(res7.data.status).to.be.true;
    expect(res7.data.message).to.equal('DRS Updated successfully.');
    expect(updatedDRSNumber).to.not.be.null; // Check if extraction was successful
    expect(updatedDRSNumber).to.equal(DRSnumberReuser); // Compare with the DRS number sent

}


/*Cancel DRS
==============*/
static async Cancel_DRS(CancelDRSAPI,DRSnumberReuser){

  this.DRSnumberReuser=DRSnumberReuser
    const headers = {
      Authorization: URLSandAUTH.Lodge_inAuth, // Add authorization header
    };
    const CancelDRS_Data = {
      "DRSData": [
          {
              "DRSNumber": DRSnumberReuser
          }
      ],
      "BranchCode": "DTGG"
  }
  const res8 = await axios.post(CancelDRSAPI, CancelDRS_Data, { headers });
  console.log(res8.data);


  expect(res8.status).to.equal(200);

    let success = false;
    let returnedDRSNumber = null;

    for (const item of res8.data) {  // Iterate through the array
      if (item.Status) {
        success = true;
        returnedDRSNumber = item.DRSNumber;
        expect(item.Message).to.equal('DRS Cancellation successful.'); 
        break; 
      } else {
          console.error("Cancellation Failure:", item.Message);
      }
    }

    expect(success).to.be.true; 
    expect(returnedDRSNumber).to.not.be.null;
    expect(returnedDRSNumber).to.equal(DRSnumberReuser);
}

/* Track Shipment
==================*/
static async TrackShipment(trackSHipmentAPI,reuse){
  this.reuse=reuse;
    const headers = {
      Authorization: URLSandAUTH.TrackShipmentBearerToken, // Add authorization header
    };
    const TrackShipment_Data = {
      "TrackingNumber": [
          reuse
      ],
      "Limit": "25",
      "StartIndex": "0"
  }


  const res9 = await axios.post(trackSHipmentAPI, TrackShipment_Data, { headers });
  console.log(res9.data);

  expect(res9.data.message).to.equal('Success');
  expect(res9.data.status).to.be.true; 
  expect(res9.status).to.equal(200);
 
 
}


/*Cancel shipment */
static async CancelShipment(CancelShipmentAPI,reuse){
  this.reuse=reuse; 
    const headers = {
      Authorization: URLSandAUTH.CancelShipment_Auth, // Add authorization header
    };
    const CancelShipment_DATA = {
      "WayBillList": [
          reuse
      ]
  }


  const res10 = await axios.post(CancelShipmentAPI, CancelShipment_DATA, { headers });
  console.log(res10.data);

        
        expect(res10.data).to.have.property('Data');  
        expect(res10.data.Data).to.be.an('array').that.is.not.empty;
        expect(res10.data.Data[0].Message).to.equal('Shipment cancellation is successful.');
        expect(res10.data.Data[0]).to.have.property('Status'); 
        expect(res10.data.Data[0].Status).to.be.true; 
        expect(res10.data.Data[0]).to.have.property('Message');
        
        

}

/* View and Track 
==================*/
static async ViewAndTrack(ViewANDTrackAPI,reuse){
  this.reuse=reuse;
    const headers = {
      Authorization: `Bearer ${URLSandAUTH.TrackAndViewBearerToken}` // Add authorization header
    };
    const ViewAndTrack_Data = {
      "SearchType":"WayBillNumber",
      "WayBillNumber": [
         reuse  
      ]
  }
  
    const res11 = await axios.post(ViewANDTrackAPI, ViewAndTrack_Data, { headers });
    console.log(res11.data);

  
    for (const outerItem of res11.data) {
        if (Array.isArray(outerItem) && outerItem.length > 0) { 
            for (const item of outerItem) {
                expect(item).to.have.property('Status');
                expect(item.Status).to.be.a('string').that.is.not.empty; 

                if (item.WayBillNumber === reuse) {
                    const statusLower = item.Status.toLowerCase();

                    if (statusLower === 'lodged in') {
                        expect(item.Description.toLowerCase()).to.include('lodged in');
                    } else if (statusLower === 'order placed') {
                        expect(item.Description.toLowerCase()).to.include('order placed');
                    } else {
                        console.warn(`Unexpected status: ${item.Status} for waybill ${reuse}`);
                    }
                }
            }
        } else {
            console.warn("Invalid data format received from API");
        }
    }
}

/* Download of waybill 
=======================*/

static async DownloadWaybill(DownloadwaybillURL, reuse) {
  const headers = {
      Authorization: URLSandAUTH.DownloadWaybillToken,
  };
  const Downloadwaybill_DATA = {
      "WayBillType": "Parent Waybills",
      "WayBills": reuse,
      "PrintOption": "LC WB"
  };

      const res12 = await axios.post(DownloadwaybillURL, Downloadwaybill_DATA, { headers });
      console.log(res12.data);

      
      // expect(res12.data).haveOwnProperty('Data');
      // expect(res12.data.Data[0]).haveOwnProperty('Status');
      expect(res12.status).to.equal(200);
      
}

/*Edit shipment
================*/
static async EditShipment(editwaybillURL,reuse){
  this.reuse=reuse; 
    const headers = {
      Authorization: URLSandAUTH.EditshipmentToken, // Add authorization header
    };
    const EditShipment_DATA ={
      "Shipment": [
          {
              "ShipmentServiceType": "Standard Delivery",
              "SenderName": "Ashlynn Tan",
              "RecipientName": "ADAM WONG",
              "ConfigServiceCode": "ST00000004",
              "ShipmentAddressFrom": {
                  "CompanyName": "EZY SHIPPING SDN BHD",
                  "UnitNumber": "LOT 558B,",
                  "Address": "JALAN SUBANG 3, OFF PERSIARAN SUBANG,",
                  "Address2": "Sungai Penaga Industrial Park,",
                  "PostalCode": "47610",
                  "City": "Subang Jaya",
                  "State": "Selangor",
                  "Email": "",
                  "PhoneNumber": "60123647104",
                  "ICNumber": ""
              },
              " WBSenderDisplayAddress ": "",
              "ShipmentAddressTo": {
                  "CompanyName": "ADAM WONG ",
                  "UnitNumber": "894",
                  "Address": "Jalan Amapang",
                  "Address2": "",
                  "PostalCode": "26500",
                  "City": "Bandar Pusat Jengka",
                  "State": "Pahang",
                  "Email": "xyz@gmail.com",
                  "PhoneNumber": "0123230637",
                  "ICNumber": ""
              },
              "RecipientPhone": "0123230637",
              "ParcelType": "Package",
              "ShipmentRef": "",
              "ShipmentDescription": null,
              "ShipmentType": "Pickup",
              "PickupAddressType": "Sender",
              "CODAmount": "",
              "WayBill": [
                  {
                      "WayBillNo": reuse,
                      "ProductID": "",
                      "Weight": "60.8",
                      "VolumeWidth": "2",
                      "VolumeHeight": "11",
                      "VolumeLength": "11"
                  }
                  
              ],
              "DONumber": "",
              "NoOfDeliveryPerson":2
          }
      ]
  }


        const res13 = await axios.post(editwaybillURL, EditShipment_DATA, { headers });
        console.log(res13.data);

        expect(res13.data.Message).contain('Shipment Updated Successfully');
        expect(res13.data.ResponseData).instanceOf(Array);
        const responseData = res13.data.ResponseData[0]; 
        expect(responseData.Data).instanceOf(Array);
        
        
}
static async createShipmentOnly(User1, url,ST) {
  let waybillData=" " ; 
  const headers = {
    Authorization: User1, // Add authorization header 
  };
  const shipmentData = {
    "Shipment": [
              {
                  "ShipmentServiceType": "Standard Delivery",
                  "SenderName": "TESTING RPM",
                  "RecipientName": "TESTING AGENT",
                  "ConfigServiceCode": ST,
                  "ShipmentAddressFrom": {
                      "CompanyName": "TESTING RP BLD",
                      "UnitNumber": "NO 1 & 1A",
                      "Address": "jalan alam suria 11/11",
                      "Address2": "Add2",
                  "PostalCode": "42200",
                      "City": "Bandar Puncak Alam",
                      "State": "Selangor",
                      "Email": "rpmahata@yopmail.com",
                      "PhoneNumber": "123123123",
                  "ICNumber": "99999999"
                  },
                  " WBSenderDisplayAddress ": "Waybill Display Address",
                  "ShipmentAddressTo": {
                  "CompanyName": "",
                      "UnitNumber": "10",
                      "Address": "New Apartment 11",
                      "Address2": "",
                  "PostalCode": "68100",
                      "City": "Kangar",
                      "State": "Perlis",
                      "Email": "xyz@gmail.com",
                      "PhoneNumber": "012315566561",
                      "ICNumber": "9999999999"
                  },
                  "RecipientPhone": "012954515985",
                  "ParcelType": "Package",
                  "ShipmentRef": "",
                  "ShipmentDescription": null,
                  "ShipmentType": "Pickup",
                  "PickupAddressType": "Sender",
                  "CODAmount": "",
                  "InsurancePurchase": [
                      {
                          "ProductDescription": "INS1",
                          "Quantity": "1",
                          "UnitPrice": "100"
                      }
                  ],
                  "WayBill": [
                      {
                          "ProductID": "",
                          "WayBillNo": "",
                          "ShortCN": "",
                          "Weight": "1",
                          "VolumeWidth": "",
                          "VolumeHeight": "",
                          "VolumeLength": ""
                      },
                      
                {
                    "ProductID": "",
                    "WayBillNo": "",
                    "ShortCN": "",
                    "Weight": "1",
                    "VolumeWidth": "",
                    "VolumeHeight": "",
                    "VolumeLength": ""
                }
                  
                  ],
                  "DONumber": ""
              }
          ]
      }
      const Only_res = await axios.post(url, shipmentData, { headers });
      console.log(Only_res.data);
      expect(Only_res.data.Status).to.equal(true);
        expect(Only_res.data.Message).to.equal("Shipment Creation Successful");
        expect(Only_res.status).to.equal(200);
        
        if (Only_res.data.Status === true &&
          Only_res.data.Message === "Shipment Creation Successful" &&
          Only_res.data.ResponseData &&
          Only_res.data.ResponseData.length > 0 &&
          Only_res.data.ResponseData[0].WayBill &&
          Only_res.data.ResponseData[0].WayBill.length > 0) {
      
          const waybillData = Only_res.data.ResponseData[0].WayBill[0];
          console.log("Waybill Data:", waybillData);
          expect(waybillData).to.be.a('string');
          expect(waybillData).to.not.be.empty;
          return waybillData;

    }
}

/*Block DRS API
================*/

static async BlockShipmentTOCreateDRS(BlockDRS_URL, reuse) {
  const headers = {
    Authorization: URLSandAUTH.DownloadWaybillToken,
  };
  const BlockWaybill_Data = [
    {
      "Reason": "DD012V002",
      "Remarks": "DD013V002",
      "WayBillNumbers": Array.isArray(reuse) ? reuse : [reuse]
    }
  ];

  const res13 = await axios.post(BlockDRS_URL, BlockWaybill_Data, { headers });
  console.log(res13.data);
  expect(res13.status).to.equal(200);
  expect(res13.data.InvalidWayBills).to.equal(null);
  expect(res13.data.UpdatedWayBills).to.not.be.empty;
  const expectedReuse = Array.isArray(reuse) ? reuse : [reuse];
  expect(res13.data.UpdatedWayBills).to.include.members(expectedReuse);

  return res13.data;
}

/*Unblock DRS API
================*/

static async UnblockShipmentTOCreateDRS(UnblockDRS_URL, reuse) {
  const headers = {
    Authorization: URLSandAUTH.DownloadWaybillToken,
  };
  const UnblockWaybill_Data = [
    {
      "UnblockAt": "",
      "Unblockby": "1037",
      "WayBillNumbers": Array.isArray(reuse) ? reuse : [reuse]
    }
  ];

  const res14 = await axios.post(UnblockDRS_URL, UnblockWaybill_Data, { headers });
  console.log(res14.data);
  expect(res14.status).to.equal(200);

  
  expect(res14.data.status).to.equal(true);
  expect(res14.data.message).to.equal("WayBills are unblocked successfully");
  expect(res14.data.data).to.equal(null);
  expect(res14.data.validationError).to.equal(null);
  return res14.data;
}


/*Create customer*/

static async Create_customer(Create_customer_URL) {
  const headers = {
    Authorization: URLSandAUTH.AdminOMSCRM_Auth,
  };
  const timestamp = Date.now();
  const uniqueEmail = `APIcustomer${timestamp}@yopmail.com`;

  const CreateCustomer_Data = {
    "AccountCode": "",
    "GroupOfCustomer": "wwwwwwwwwwwwwwwwwwwww",
    "ParentCustomerAccount": "24126",
    "AccountType": "Express Account",
    "CompanyLogo": "“iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC“",
    "AutocountDebtorCode": "vfghgfhjhfdhfhjfgdhfghfgfhgfg",
    "ContactPerson": "Contact Person1",
    "WebExpressAccountCode": "tttttttttt",
    "OfficialWorkingHour": "",
    "CompanyName": "AA Company",
    "ICNumber": "fcfoo",
    "CompanyRegisterationNumber": "nulllllll777",
    "EmailAddress": uniqueEmail, 
    "ContactNumber": "996547812187776",
    "Businessratechart": "B1",
    "Associatedratechart": "Special Rate Chart",
    "NatureofBusiness": "B002",
    "BusinessActivity": "34ff",
    "SalesPersonInCharge": "ISR000150 NOR AISHAH BINTI A RAHMAN",
    "CreditPersonInCharge": "LC02413 NOR AZFA AQILAH BINTI ABDUL MOIN",
    "ServiceBranch": "x",
    "BillingBranch": "y",
    "PickUpPersonIncharge": "pickup",
    "PicUpAddressMobileNumber": "4545454545454",
    "ApproveCreditLimit": "7788",
    "CreditTerm": "1",
    "BillingCycle": "3",
    "BillingDate": "2023-09-13",
    "KeyPersonnelName": "fvbfggfiiiiiiiiiiiiiijjjj",
    "KeyPersonnelContactNumber": "56222333333898989898",
    "Role": "444",
    "KeyPersonnelEmail": "sdfrrrrrrrt@wer.com",
    "PickUpArrangement": "888tt",
    "ApproveCreditLimitThreshold": 9,
    "MandatoryPickupDepotStation": "test123",
    "MandatoryDeliveryDepotStation": "TEST1244",
    "PaymentMethod": [
      "Online Payment",
      "Prepaid Payment"
    ],
    "CODApplicable": "true",
    "ParentInvoice": "true",
    "SNSSticker": "true",
    "BillingAddressDetails": {
      "BillingPostalCode": "42200",
      "BillingState": "",
      "BillingCity": "Kapar",
      "BillingBuildingUnit": "11",
      "BillingAddress1": "ABCD",
      "BillingAddress2": "QQQQ",
      "AttentionTo": "",
      "PhoneNumber": ""
    },
    "SameAsbillingAddress": "",
    "PickupAddressDetails": {
      "PickupPostCode": "50000",
      "PickupState": "Kual11r",
      "PickupCity": "Kuala Lumpur",
      "PickupBuildingUnit": "32",
      "PickupAddress": "AQWE",
      "PickupAddress2": "qasd",
      "AttentionTo": "",
      "PhoneNo": "",
      "CompanyName": ""
    },
    "WaybillAddressDetails": {
      "WaybillPostCode": "",
      "WaybillState": "",
      "WaybillCity": "",
      "WaybilllBuildingUnit": "",
      "WaybilllAddress": "",
      "WaybilllAddress2": "",
      "AttentionTo": "",
      "PhoneNo": "",
      "CompanyName": ""
    },
    "DisplayAsSenderInwaybill": "",
    "BankName": "Citibank Berhad",
    "BankAccountNumber": "3213456464656",
    "BeneficiaryName": "RRS",
    "NoteTitle": "Title",
    "NoteDesc": "Desc"
  };

  const res15 = await axios.post(Create_customer_URL, CreateCustomer_Data, { headers });
  console.log(res15.data);
  expect(res15.status).to.equal(200);
  expect(res15.data.status).to.equal(true);
  expect(res15.data.message).to.equal("Success");
  expect(res15.data.validationError).to.equal(null);
  const responseData = JSON.parse(res15.data.data);
  expect(responseData.UserName).to.equal("Contact Person1");


  return res15.data;
}

/*GetCustomerdata*/

static async GetCustomerdata(get_CustomerData_url) {
  const headers = {
    Authorization: URLSandAUTH.AdminOMSCRM_Auth,
  };
  const GetCustomer_DATA = {
    "AccountCode": "AGK4110001000"
  };

  const res16 = await axios.post(get_CustomerData_url, GetCustomer_DATA, { headers });
  console.log(res16.data);

  expect(res16.status).to.equal(200);
  expect(res16.data.status).to.equal(true);
  expect(res16.data.message).to.equal("Fetched Successfully");
  expect(res16.data.validationError).to.equal(null);

  
  expect(res16.data).to.have.property('data');
  expect(res16.data.data).to.have.property('AccountCode');
  expect(res16.data.data).to.have.property('Role');
  expect(res16.data.data.AccountCode).to.equal("AGK4110001000");

  return res16.data; 
}

/*Create Station*/
static async create_station(Create_Station_URL) {
  const headers = {
    Authorization: URLSandAUTH.AdminOMSCRM_Auth,
  };

  const dynamicNewStation_Code = `TEST${Date.now().toString().slice(-4)}`;
  const CreateStaion_DATA = {
    "ApiKey": "Add",
    "Address1": "Labuan",
    "Address2": "Ranca-Ranca",
    "AssociateGeofence": [
      "h",
      "k",
      "u",
      "a"
    ],
    "PostCode": "18300",
    "State": "",
    "City": "",
    "BuildingUnit": "55",
    "Code": dynamicNewStation_Code, 
    "BranchCode": "DSML",
    "Description": "DESC1",
    "LCOwned": true,
    "Lattitude": "19",
    "Longitude": "19",
    "PICURL": "TEST",
    "ServiceDelivery": true,
    "ServicePickup": true,
    "fromTime": "12.30AM",
    "toTime": "6.30PM",
    "Type": "ST"
  };

  const res17 = await axios.post(Create_Station_URL, CreateStaion_DATA, { headers });
  console.log(res17.data);

  createdStationData = dynamicNewStation_Code;
  expect(res17.status).to.equal(200);
  expect(res17.data.status).to.equal(true);
  expect(res17.data.message).to.equal("Data Added Successfully");
  expect(res17.data.validationError).to.equal(null);
  expect(res17.data).to.have.property('data');
  expect(res17.data.data).to.equal(null); 

  return res17.data;
}

/*Fetch Station API*/
static async Fetch_station(Fetch_Station_URL) {
  const headers = {
    Authorization: URLSandAUTH.AdminOMSCRM_Auth,
  };
  const fetchStation_DATA = {
    "StationCode": createdStationData 
  }

  const res18 = await axios.post(Fetch_Station_URL, fetchStation_DATA, { headers });
  console.log(res18.data);

  expect(res18.status).to.equal(200);
  expect(res18.data.status).to.equal(true);
  expect(res18.data.message).to.equal("Data Retrived Successfully");
  expect(res18.data.validationError).to.equal(null);

  expect(res18.data).to.have.property('data');
  expect(res18.data.data).to.have.property('Code');
  expect(res18.data.data.Code).to.equal(createdStationData); 

  return res18.data;
}

/*Create and Edit Driver*/
static async create_Edit_Driver(Create_Driver_URL) {
  const headers = {
    Authorization: URLSandAUTH.AdminOMSCRM_Auth,
  };
  function generatePhoneNumber() {
    let phoneNumber = '9';
    for (let i = 0; i < 9; i++) {
      phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber;
  }

  const dynamicContactNumber = generatePhoneNumber();

  
  const CreateEditDriver_DATA = {
    "BranchCode": "XW3007",
    "BranchName": "TEST11",
    "StaffId": "109012",
    "PostCode": 42200,
    "City": "",
    "State": "",
    "FromTime": "12:00 am",
    "ToTime": "12:00 pm",
    "ContactPerson": "AmTest",
    "Address": "Jalan Besar Address 1",
    "Email": "externalAPItestingJS@yopmail.com",
    "ContactNumber": dynamicContactNumber,
    "UserRoleTypeId": 1091,
    "OnlinePaymentFlag": true,
    "WalletFlag": true,
    "HardCashFlag": false
    }
    const res19 = await axios.post(Create_Driver_URL, CreateEditDriver_DATA, { headers });
    console.log(res19.data);
    expect(res19.status).to.equal(200);
    expect(res19.data.status).to.equal(true);
    expect(res19.data.message).to.equal("Success"); 
    expect(res19.data.validationError).to.equal(null);
    expect(res19.data).to.have.property('data');
    expect(res19.data.data).to.be.an('string'); 
    const responseData = JSON.parse(res19.data.data);
    expect(responseData).to.have.property('UserId');
    expect(responseData).to.have.property('UserType');
    expect(responseData).to.have.property('UserStatus');
    expect(responseData).to.have.property('UserName');
    expect(responseData).to.have.property('Email');
    expect(responseData).to.have.property('Phone');
  
  
    return res19.data;

  }
/*Fetch Driver*/
static async fetch_Driver(Fetch_Driver_URL) {
  const headers = {
    Authorization: URLSandAUTH.AdminOMSCRM_Auth,
  };
  const fetchDriver_DATA = {
    "UserId": "109012"
}

const res20 = await axios.post(Fetch_Driver_URL, fetchDriver_DATA, { headers });
console.log(res20.data);

expect(res20.status).to.equal(200);
expect(res20.data.status).to.equal(true);
expect(res20.data.message).to.equal("Fetched Successfully"); 
expect(res20.data.validationError).to.equal(null);

expect(res20.data).to.have.property('data');
expect(res20.data.data).to.have.property('BranchCode'); 
expect(res20.data.data.BranchCode).to.equal("XW3007"); 

return res20.data;
}






}

export default LineclearExpressAPI;