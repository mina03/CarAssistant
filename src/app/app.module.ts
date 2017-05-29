import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import { ChatBotComponent} from './chatbot.component';
import { ChatComponent} from './chat.component';
import { UserInputComponent} from './userinput.component';
import { ConversationResponse} from './conversationresponse';
import { HttpModule, JsonpModule } from '@angular/http';

const routes:Routes= [
  {
    path:'',
    component:ChatBotComponent
  }

];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, ChatBotComponent, ChatComponent, UserInputComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
