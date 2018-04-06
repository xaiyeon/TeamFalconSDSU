import { Component, OnInit } from '@angular/core';

// import ChatBot = require('chatbot');

// import * as ChatBot from '../../_thirdParty/chatbot.js';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  // // initialize the bot
  // const config = {
  //   // what inputs should the bot listen to? this selector should point to at least one input field 
  //   inputs: '#humanInput',
  //   // if you want to show the capabilities of the bot under the search input 
  //   inputCapabilityListing: true,
  //   // optionally, you can specify which conversation engines the bot should use, e.g. webknox, spoonacular, or duckduckgo 
  //   engines: [ChatBot.Engines.duckduckgo()],
  //   // you can specify what should happen to newly added messages 
  //   addChatEntryCallback: function(entryDiv, text, origin) {
  //       entryDiv.slideDown();
  //   }
  // };
  // ChatBot.setBotName("Captain Falcon");
  // ChatBot.init(config);

  }

}
