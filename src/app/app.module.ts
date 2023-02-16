import { NgModule, isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TopBarModule } from './shared/types/modules/topBar/topBar.module';
import { PersistanceService } from './shared/types/services/persistance.service';
import { AuthInterceptor } from './shared/types/services/authinterceptor';
import { GlobalFeedComponent } from './globalFeed/components/global-feed/global-feed.component';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { FeedModule } from './shared/types/modules/feed/feed.module';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { YourFeedModule } from './yourFeed/yourFeed.module';
import { TagFeedModule } from './tagFeed/tagFeed.module';
import { ArticleModule } from './article/article.module';
import { CreateArticleModule } from './createArticle/createArticle.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: !isDevMode(), 
      autoPause: true, 
      trace: false, 
      traceLimit: 75,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
    FeedModule,
    StoreModule.forRoot({router:routerReducer}),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({}, {}),
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule,
    SettingsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
