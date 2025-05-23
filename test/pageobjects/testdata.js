export const URLSandAUTH = {
    //URLS
    BaseURL:"https://uat-app.lineclearexpressonline.com/",

    CreateshipmentEndURL:"Accounts/CreateShipment",






    UATCreateSHipmentURL:"https://uat-app.lineclearexpressonline.com/Accounts/CreateShipment",
    UATJOGETAPIURL:"https://uat-app.lineclearexpressonline.com/UpdateWayBillManualMeasure",
    UATAWMAPI:"https://uat-app.lineclearexpressonline.com/UpdateWayBillVolumetric",
    UATLodge_in:"https://7voahk8cma.execute-api.ap-south-1.amazonaws.com/uat/1.0/multiplelodge",
    CreateDRS:"https://uat-app.lineclearexpressonline.com/ExternalCreateDRS",
    UpdateDRS_Delivered:"https://uat-app.lineclearexpressonline.com/ExternalUpdateDRS",
    UpdateDRS_Undelivered:"https://uat-app.lineclearexpressonline.com/ExternalUpdateDRS",
    Cancel_DRS:"https://uat-app.lineclearexpressonline.com/ExternalCancelDRS",
    TrackShipment:"https://uat-app.lineclearexpressonline.com/Shipment/TrackShipment",
    Cancel_Shipment:"https://uat-app.lineclearexpressonline.com/Accounts/CancelShipment",
    ViewAndTack_API:"https://7voahk8cma.execute-api.ap-south-1.amazonaws.com/uat/1.0/viewandtrack",
    DownloadWaybillAPI:"https://uat-app.lineclearexpressonline.com/DownloadWaybill",
    EditShipment:"https://uat-app.lineclearexpressonline.com/Accounts/UpdateShipment",
    BlockShipment_forDRS:"https://uat-app.lineclearexpressonline.com/BlockWaybillForDRS",
    UnblockShipment_forDRS:"https://uat-app.lineclearexpressonline.com/UnblockWaybillForDRS",

    Create_customer_URL:"https://uat-app.lineclearexpressonline.com/AddEditCustomer",
    GetCustomerData_URL:"https://dev-app.lineclearexpressonline.com/GetCustomerdata",
    Create_Station:"https://uat-app.lineclearexpressonline.com/AddOrUpdateStation",
    CreatAgent:"https://uat-app.lineclearexpressonline.com/AddEditAgent",
    fetchstation:"https://uat-app.lineclearexpressonline.com/FetchStationData",
    CreateDriver:"https://uat-app.lineclearexpressonline.com/AddEditDriver",
    FetchDriver:"https://uat-app.lineclearexpressonline.com/FetchDriverData",

    
    
    //CreateShipmentpayloadData
    valid_ST:"ST00000177",
    Invalid_ST:"ST00defeefefe",
    
    
    
    
    
    
    //Auth
    JogetAPI_Auth:'Basic c3VyYWoucGFyaWRhNzFAZ21haWwuY29tOiBUZXN0QDEyMzQ=',
    Lodge_inAuth:'Basic c3VwcG9ydEBlc3NwbC5jb206VGVzdEAxMjM=',
    CancelShipment_Auth:'c3VyYWoucGFyaWRhNzFAZ21haWwuY29tfFRlc3RAMTIzNHxJcDZ0QlBqUEpDeXhQWnk3ZGlyNEEkZDQycDV1bnkyeWtBSmUxWjJTcDk1UXVBYldNWVFta2FGUUtKekRsJFM2',
    TrackAndViewBearerToken:"eyJhbGciOiJIUzI1NiJ9.QkVTVF9MQ1VOSV9FU1NQTA.1FcVvOUwquYYuoyA5yBrPcOLNUDf8iJaAZCqNZgjVys",
    

    AdminOMSCRM_Auth:"Basic c3VwcG9ydEBlc3NwbC5jb206VGVzdEAxMjM=",



    //Token validity 1 year
    TrackShipmentBearerToken:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTdXBwb3J0IFVBVCIsImp0aSI6IjI2IiwiYXVkIjoie1wiVXNlclR5cGVcIjpcIkNSTVVcIixcIkNFVXNlcklkXCI6NzU2LFwiQ3VzdG9tZXJBY2NvdW50SWRcIjowLFwiQWdlbnRBY2NvdW50SWRcIjowfSIsImVtYWlsIjoic3VwcG9ydEBlc3NwbC5jb20iLCJpYXQiOjE3MzM3NDA0NjIsImV4cCI6MTc2OTc0MDQ2Mn0.lj3XuDs4-2HxB4jywybTQRHUXja-801sonTSTiv1hJI",

    DownloadWaybillToken:"c3VyYWoucGFyaWRhNzFAZ21haWwuY29tfFRlc3RAMTIzNHxTak9KbVdJMGN4OW1JbjJmVDFNcW9pNUxTNWVkRE9kS2thMk42THRkSnFObUhJdm4wdW9UdGljWiRWaWJRQkpo",

    EditshipmentToken:"c3VyYWoucGFyaWRhNzFAZ21haWwuY29tfFRlc3RAMTIzNHxEZDk2RFA5aXJkUkkwdFIwVjBxX1RYc1FDU1ZBamU0a2hqbk9vaktwTDRuTzA4ZFNQOUIkelVzcXViNHhmX3ok",
    
    
    
    
    OMS_Admin:"Basic c3VwcG9ydEBlc3NwbC5jb206VGVzdEAxMjM=",
    Suraj71:"Basic c3VyYWoucGFyaWRhNzFAZ21haWwuY29tOlRlc3RAMTIzNA==",
    Loadtest:"Basic bG9hZHRlc3RhY2NvdW50QHlvcG1haWwuY29tOlRlc3RAMTIz",
    
    Test1:"Basic c2hhaGl0QGdtYWlsLmNvbTpUZXN0QDEyMw==",
    Test2:"Basic dGVzdGNyZWRpdGxpbWl0MkBnbWFpbC5jb206VGVzdEAxMjM=",
    Test3:"Basic dGVzdGNyZWRpdGxpbWl0MkBnbWFpbC5jb206VGVzdEAxMj",
    Test4:"Basic ZGViYWJyYXRhbWlzaHJhNjJAZ21haWwuY29tOlRlc3RAMTIz",
    Test5:"Basic c2hhaGl0QGdtYWlsLmNvbTpUZXN0QDEyMw==",
    Test6:"Basic cmVzdG9yYW5uYW1jaGF1QGdtYWlsLmNvbTpDa0A5MzAxMDI=",
    Test7:"Basic cmVzdG9yYW5uYW1jaGF1QGdtYWlsLmNvbTpDa0A5MzAxMDI=",
    Test8:"Basic c2hhaGl0QGdtYWlsLmNvbTpUZXN0QDEyMw==",
    Test9:"Basic YmFsa2VlczczQHlhaG9vLmNvbTpBbGphdmVyaWE3ODYk",
    Test10:"Basic a3NwdXJlcGFydHNlbnRlcnByaXNlLjk2QGdtYWlsLmNvbTpMQ3RycDk2JA==",
    Test11:"Basic ZmFkaWx0dXJibzgyQGdtYWlsLmNvbTpTeWFzeWExMjM0QA==",
    Test12:"Basic dGVzdHByZXBhaWRkYXZpZC5idXNpbmVzc0BnbWFpbC5jb206VGVzdEAxMjM=",
    Test13:"Basic dGVzdGNyZWRpdGxpbWl0MkBnbWFpbC5jb206VGVzdEAxMjM=",
    Test14:"Basic dGVzdGNyZWRpdGxpbWl0NEBnbWFpbC5jb206VGVzdEAxMjM=",
    Test15:"Basic dGVzdGNyZWRpdGxpbWl0NEBnbWFpbC5jb206VGVzdEAxMjM=",
    Test16:"Basic dGVzdGNyZWRpdGxpbWl0NEBnbWFpbC5jb206VGVzdEAxMjM=",
    Test17:"Basic ZGViYWJyYXRhbWlzaHJhNjJAZ21haWwuY29tOlRlc3RAMTIz",
    Test18:"Basic ZGViYWJyYXRhbWlzaHJhNjJAZ21haWwuY29tOlRlc3RAMTIz",
    Test19:"Basic ZGViYWJyYXRhbWlzaHJhNjJAZ21haWwuY29tOlRlc3RAMTIz",
    Test20:"Basic c2hhaGl0QGdtYWlsLmNvbTpUZXN0QDEyMw==",
    
    
    
    
    
    
    
    
    
    
    imageBase64:"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"
    
    }
    