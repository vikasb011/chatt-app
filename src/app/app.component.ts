import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-app';
   chatmessage:any;
  buttonState = true;
  chatboxState= false;
  data:any=[];

  sendMessage(event,message){

    event.preventDefault();
    if(this.chatmessage.trim() == ''){
      return false;
    }
    this.data.push({message:this.chatmessage})
    console.log("message",this.chatmessage);
    this.chatmessage = "";
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000); 
  }


   generate_message(msg, type) {
     
  
    // $("#cm-msg-"+INDEX).hide().fadeIn(300);
    // if(type == 'self'){
    //  $("#chat-input").val(''); 
    // }    
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
  }

}
