
import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrls {

    address = "https://hexafold-api.herokuapp.com/";

    // USER / CLIENT
    createClient = this.address + 'createClient';   // pending - post
    getAllClients = this.address + 'client';   // pending
    getAllUsers = this.address + 'user';   // pending
    getUserByEmail = this.address + "user/{email}";
    getClientByEmail = this.address + "client/{email}";


    // PROJECT
    getParticularProject = this.address + "project/{projectId}";
    getUserProjects = this.address + "project/user/{userId}";
    getClientProjects = this.address + "project/client/{clientId}";

    updateStatus = this.address + 'updateStatus';     // pending - put


    // COMMUNITY APIS
    getCommunityPosts = this.address + 'communityPosts';
    addCommunityPosts = this.address + 'addCommunityPost';
    updateCPLikeComment = this.address + 'updateCPLikeComment';
    
    // Showcase
    getShowcasePosts = this.address + 'showcasePosts';
    addShowcasePost = this.address + 'addShowcasePost';
    updateSPLikeComment = this.address + 'updateSPLikeComment';

    // Tasks
    addTask = this.address + 'addTask';     // pending - post

    // Features
    addFeature = this.address + 'addFeature';       // pending - post



}