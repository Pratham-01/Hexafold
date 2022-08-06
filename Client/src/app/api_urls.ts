
import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrls {

    address = "https://hexafold-api.herokuapp.com/";
    // address = "localhost:8080/";

    // USER / CLIENT
    getAllClients = this.address + 'allClients/{companyId}';   // pending
    getClientByEmail = this.address + "client/{email}";
    createClient = this.address + 'createClient';   // pending - post

    createUser = this.address + 'createUser'; // pending
    getAllUsers = this.address + 'allUsers/{companyId}';   // pending
    getUserByEmail = this.address + "user/{email}";


    // PROJECT
    addProject = this.address + 'createProject'; // pending
    getParticularProject = this.address + "project/{projectId}";
    getUserProjects = this.address + "project/user/{userId}";
    getClientProjects = this.address + "project/client/{clientId}";

    // updateStatus = this.address + 'updateStatus';     // pending - put
    addComment = this.address + 'addComment';       // pending - post

    // Tasks
    addTask = this.address + 'addTask';     // pending - post
    updateTask = this.address + 'updateTask';     // pending - put

    // Features
    addFeature = this.address + 'addFeature';       // pending - post
    updateFeatureStatus = this.address + 'updateFeatureStatus';       // pending - put
    removeFeature = this.address + 'removeFeature';

    // COMMUNITY APIS
    getCommunityPosts = this.address + 'communityPosts/{companyId}/{post_type}';
    addCommunityPosts = this.address + 'addCommunityPost';
    updateCPLikeComment = this.address + 'updateCPLikeComment';
    
    // Showcase
    getShowcasePosts = this.address + 'showcasePosts/{companyId}';
    addShowcasePost = this.address + 'addShowcasePost';
    updateSPLikeComment = this.address + 'updateSPLikeComment';

    

    // Training - pending
    getAllTrainings = this.address + "getAllTrainings/{companyId}";
    getParticularTraining = this.address + 'getTraining/{training_id}';
    addTraining = this.address + "addTraining";
    updateTrainingStatus = this.address + "updateTrainingStatus";   // put 
    getUserTrainings = this.address + "getUserTrainings/{email}";   //  
    assignTraining = this.address + "assignTraining"; // post

    // Rewards   - pending
    getRewards = this.address + 'rewards/{companyId}';  // done
    addReward = this.address + 'createReward';  // done
    redeemReward = this.address + 'redeemReward'; // pending : getUserDataCall
    updateRewardStatus = this.address + 'updateRewardStatus'; // not to be done

    // FACTS
    addFact = this.address + "addFact";
    getRandomFact = this.address + "getRandomFact/{companyId}";

}