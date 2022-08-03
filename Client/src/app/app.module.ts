import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FeatureCostPopupComponent } from './components/popups/feature-cost-popup/feature-cost-popup.component';
import { TrainingHomeComponent } from './components/training-home/training-home.component';
import { TrainingCourseComponent } from './components/training-course/training-course.component';

import { NgxCollapseModule } from 'ngx-collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { CommunityComponent } from './components/community/community.component';
import { RewardComponent } from './components/reward/reward.component';
import { DatePipe } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { LoginComponent } from './components/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { ChatComponent } from './components/chat/chat.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'

// --------------------------------------------------------------------------------

import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatMenuModule } from '@angular/material/menu';

import { MatListModule } from '@angular/material/list';
import {} from '@angular/material/form-field';
import {} from '@angular/material/input';

import { DateDisplayPipe } from './pipes/date-display.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';
import { MatDividerModule } from '@angular/material/divider';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    HomeComponent,
    ProjectPageComponent,
    FeatureCostPopupComponent,
    TrainingHomeComponent,
    TrainingCourseComponent,
    ToastComponent,
    CommunityComponent,
    RewardComponent,
    SafePipe,
    LoginComponent,
    DateDisplayPipe,
    ChatComponent,
    ProfileComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule,
    NgxCollapseModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    HotToastModule.forRoot(),
    MatAutocompleteModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDividerModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
