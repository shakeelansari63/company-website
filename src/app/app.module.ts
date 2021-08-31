import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeShowcaseComponent } from './components/home-showcase/home-showcase.component';
import { HomeNewsletterComponent } from './components/home-newsletter/home-newsletter.component';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
import { HomeHighlightsComponent } from './components/home-highlights/home-highlights.component';
import { HomeFaqsComponent } from './components/home-faqs/home-faqs.component';
import { HomePeopleComponent } from './components/home-people/home-people.component';
import { HomeLocationComponent } from './components/home-location/home-location.component';
import { ProjectShowcaseComponent } from './components/project-showcase/project-showcase.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ContactMainComponent } from './components/contact-main/contact-main.component';
import { ContactShowcaseComponent } from './components/contact-showcase/contact-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProjectsComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    HomeShowcaseComponent,
    HomeNewsletterComponent,
    HomeFeaturesComponent,
    HomeHighlightsComponent,
    HomeFaqsComponent,
    HomePeopleComponent,
    HomeLocationComponent,
    ProjectShowcaseComponent,
    ProjectListComponent,
    ContactMainComponent,
    ContactShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
