import axios from "axios";
import { useState, useEffect } from "react";



    const api = async (method, url) => {
    try {
     const response = await axios({
      method: method,
      url: url,
     });
     return response.data;
    } catch (error) {
     throw error;
    }
   };

   export default api;



