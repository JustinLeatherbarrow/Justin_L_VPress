const axios = require("axios");

class FeedAPI {
    constructor() {
        this.baseURL = "https://dummyapi.io/data/v1/";
        this.appID = "62e821efddcba0e178c37aef";
        this.defaultLimit = 10;
    }

    async getData(dataType, page) {
        return axios.get(`${this.baseURL}${dataType}?page=${page}&limit=${this.defaultLimit}`,
        {
            headers: {
                "app-id": this.appID,
            }
        })
        .then((response) => {
            console.log("GET DATA SUCCEEDED: ", JSON.stringify(response.data));
            return response.data;
        })
        .catch((error) => {
            console.log("GET DATA FAILED: ", error);
        });
    }
}

module.exports = FeedAPI;