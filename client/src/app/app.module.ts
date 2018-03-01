import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// TODO: these should be imported in their own module and then import that module here
import { MatCardModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DiscoverComponent } from './discover/discover.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { AuthComponent } from './auth/auth.component';
import { ArticleCardComponent } from './shared/article-card/article-card.component';
import { ArticleService } from './utils/article.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DiscoverComponent,
    NewsfeedComponent,
    AuthComponent,
    ArticleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
