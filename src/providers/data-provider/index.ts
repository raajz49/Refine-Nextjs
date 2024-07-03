"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";

//const API_URL = "http://localhost:8000/api/v1";


const API_URL = "https://erp.pioneerassociate1234.com.np/api/v1";

export const dataProvider = dataProviderSimpleRest(API_URL);
