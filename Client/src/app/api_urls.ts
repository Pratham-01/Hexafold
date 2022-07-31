
import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrls {

    address = "http://localhost:8080/";

    // COMMUNITY APIS
    getCommunityPosts = this.address + 'communityPosts';

}