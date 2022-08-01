
import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrls {

    address = "https://hexafold-api.herokuapp.com/";

    // COMMUNITY APIS
    getCommunityPosts = this.address + 'communityPosts';

}