
import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrls {

    address = "https://hexafold-api.herokuapp.com/";

    // USER / CLIENT
    createClient = this.address + 'createClient';   // pending - post
    getAllClients = this.address + 'client';   // pending
    getClientByEmail = this.address + "client/{email}";

    createUser = this.address + 'createUser'; // pending
    getAllUsers = this.address + 'user';   // pending
    getUserByEmail = this.address + "user/{email}";


    // PROJECT
    addProject = this.address + 'createProject'; // pending
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
    updateTask = this.address + 'updateTask';     // pending - post

    // Features
    addFeature = this.address + 'addFeature';       // pending - post

    // Training - pending
    getParticularTraining = this.address + 'getTraining/{training_id}';
    addTraining = this.address + "addTraining";
    updateTrainingStatus = this.address + "updateTrainingStatus";

    // Rewards   - pending
    getRewards = this.address + 'rewards';
    addReward = this.address + 'createReward';
    redeemReward = this.address + 'redeemReward';
    updateRewardStatus = this.address + 'updateRewardStatus';


}