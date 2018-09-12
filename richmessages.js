module.exports = function richmessages(controller) {
  
    // test 1
    controller.hears(['text button with url'], 'direct_message,live_chat,channel,private_channel', function(bot, message) {
        bot.reply(message, {
            "attachments": [{
                "title": "text button with url",
                "actions": [{
                    "type": "button",
                    "text": "Book flights",
                    "url": "http://www.kayak.com",
                    "is_webview": false
                }]
            }]
        });
    });

    // test 2
    controller.hears(['text button with msg in chat window'], 'direct_message,live_chat,channel,private_channel', function(bot, message) {
        bot.reply(message, {
            "attachments": [{
                "title": "text button with msg in chat window",
                "actions": [{
                    "type": "button",
                    "text": "Say hello in chat window?",
                    "msg": "hello in chat window",
                    "msg_in_chat_window": true
                }]
            }]
        });
    });
  
  	controller.hears(['hello in chat window'], 'direct_message,live_chat,channel,private_channel', function(bot, message) {
    	bot.reply(message,"received your 'hello in chat window'");
    });

    // test 3
    controller.hears(['image button with url'], 'direct_message,live_chat,channel,private_channel', function(bot, message) {
        // bot.reply(message, 'image button with url');
        bot.reply(message, {
            "attachments": [{
                "title": "image button with url",
                "actions": [{
                    "type": "button",
                    "url": "http://www.kayak.com",
                    "image_url": "http://www.emoji.co.uk/files/phantom-open-emojis/travel-places-phantom/12698-airplane.png",
                    "is_webview": false
                }]
            }]
        });
    });

    // test 4
    controller.hears(['image button with msg in chat window'], 'direct_message,live_chat,channel,private_channel', function(bot, message) {
        // bot.reply(message, 'image button with msg in chat window');
        bot.reply(message, {
            "attachments": [{
                "title": "image button with msg in chat window",
                "actions": [{
                    "type": "button",
                    "image_url": "http://www.emoji.co.uk/files/phantom-open-emojis/travel-places-phantom/12698-airplane.png",
                    "msg": "I clicked the airplane",
                    "msg_in_chat_window": true
                }]
            }]
        });
    });
    controller.hears(['I clicked the airplane'], 'direct_message,live_chat,channel,private_channel', function(bot, message) {
    	bot.reply(message,"received your response about clicking the airplane");
    });

    // test 5
    controller.hears(['multiple text buttons'], 'direct_message,live_chat,channel,private_channel', function(bot, message) {
        bot.reply(message, {
            "attachments": [{
                "title": "multiple text buttons with url",
                "actions": [{
                    "type": "button",
                    "text": "Book flights",
                    "url": "http://www.kayak.com",
                    "is_webview": false
                }, {
                    "type": "button",
                    "text": "Cancel travel request",
                    "url": "https://requests.example.com/cancel/r123456",
                    "is_webview": false
                }]
            }]
        });
    });

    // test 6
    controller.hears(['horizontal text buttons'], 'direct_message,live_chat,channel,private_channel', function(bot, message) {
        bot.reply(message, {
            "attachments": [{
                "title": "horizontal text buttons with url",
                "button_alignment": "horizontal",
                "actions": [{
                        "type": "button",
                        "text": "Book flights",
                        "url": "http://www.kayak.com",
                        "is_webview": false
                    },
                    {
                        "type": "button",
                        "text": "Cancel travel request",
                        "url": "https://requests.example.com/cancel/r123456",
                        "is_webview": false
                    }
                ]
            }]
        });
    });


    // test 12
    controller.hears(['attachment with buttons'], 'direct_message,live_chat,channel,private_channel', function(bot, message) {
        bot.reply(message, {
            "attachments": [{
                "title": "Lauri M(title field)",
                "title_link": "https://www.basketball-reference.com/players/m/markkla01.html",
                "text": "Should have been rookie of the year (text field)",
                "description": "What a great player! (description field)",
                "image_url": "http://www.trbimg.com/img-5b04c449/turbine/ct-spt-bulls-lauri-markkanen-all-rookie-team-20180522",
                "actions": [{
                        "type": "button",
                        "text": "Book flights",
                        "url": "https://www.kayak.com",
                        "is_webview": false
                    },
                    {
                        "type": "button",
                        "text": "Cancel travel request",
                        "url": "https://www.kayak.com",
                        "is_webview": false
                    }
                ]
            }]

        });
    });
}