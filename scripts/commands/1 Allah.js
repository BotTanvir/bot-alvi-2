{
  "name": "🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍",
  "description": "ICY COLD W.A BOT BY CYBER RAJIB",
  "logo": "https://i.postimg.cc/rwXsg7Yt/ultra.jpg",
  "keywords": ["bot"],
  "success_url": "https://github.com/cyberrajib999/working",
 
    "stack": "container",
  "env": {
    "SESSION_ID": {
      "description": "Put the session-id here.",
      "required": true,
      "value": ""
    },  
    
    "ALIVE_IMG": {
      "description": "paste your image url if you don't have you can use this public url.",
      "required": true,
      "value": "https://i.postimg.cc/rwXsg7Yt/ultra.jpg"
    }, 
    
    "ALIVE_MSG": {
      "description": "paste your alive message hear.",
      "required": true,
      "value": "🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍\nɪs ᴀʟɪᴠᴇ "
    },
    
    "PREFIX": {
      "description": "paste your bot prefix note! Don't apply null prefix.",
      "required": true,
      "value": "."
    },
    
    "MODE": {
      "description": "select your bot work type public-private-inbox-group.",
      "required": true,
      "value": "public"
    }, 
 
    "AUTO_VOICE": {
      "description": "Make it true if you want bot auto voice.",
      "required": true,
      "value": "true"
    }, 
 
    "AUTO_REPLY": {
      "description": "Make it true if you want bot auto reply.",
      "required": true,
      "value": "true"
    }, 
 
    "AUTO_TYPING": {
      "description": "Make it true if you want auto typing.",
      "required": false,
      "value": "true"
    },
 
    "AUTO_STICKER": {
      "description": "Make it true if you want bot auto sticker.",
      "required": true,
      "value": "true"
    }, 
 
    "AUTO_READ_STATUS": {
      "description": "Make it true if you want bot auto auto_read_status.",
      "required": true,
      "value": "true"
    }, 
 
    "ANTI_LINK": {
      "description": "Make it true if you want bot auto remove group link.",
      "required": true,
      "value": "true"
    },
 
    "ANTI_BAD": {
      "description": "Make it true if you want bot auto delete bad words from group example xxx porn etc.",
      "required": true,
      "value": "true"
    }, 
 
   "CURRENT_STATUS": {
      "description": "Make it true if want automatic voice reply .",
      "required": false,
      "value": "false"
    }, 
 
    "FAKE_RECORDING": {
      "description": "Make it true if you want bot fake record.",
      "required": true,
      "value": "false"
    },
 
    "AUTO_REACT": {
      "description": "Make it true if you want bot AutoReact.",
      "required": true,
      "value": "true"
    },
 
    "OWNER_REACT": {
      "description": "Make it true if you want bot OwnerReact.",
      "required": true,
      "value": "true"
    
    }, 
 
   "ALWAYS_ONLINE": {
      "description": "Make it true if want automatic voice reply .",
      "required": false,
      "value": "true"
    }, 
 
  "AUTO_STATUS_REPLY": {
      "description": "Make it true if want automatic status reply .",
      "required": false,
      "value": "true"
    },    
 
    "BOT_NAME": {
      "description": "write bot your name.",
      "required": true,
      "value":"🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍"
    }, 
 
    "HEART_REACT": {
      "description": "Make it true if you want bot only heart ♥️ emjois reaction .",
      "required": true,
      "value": "false"
    }, 
 
    "READ_MESSAGE": {
      "description": "Make it true if you want bot read your all sms just now.",
      "required": true,
      "value": "false"
    }, 
    "CAPTION": {
      "description": "enter your caption if you want to show on menu.",
      "required": true,
      "value": "*🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍*"
    }, 
    "AUTO_STATUS__MSG": {
      "description": "enter your caption if you want to show on status reply.",
      "required": true,
      "value": "Status Seen By CYBER-RAJIB"
    }
 
 
},
 
     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
}
 
