const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923118440951";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_24_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDk3LFxuICAgICAgICA5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI5LFxuICAgICAgICAzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDI4LFxuICAgICAgICA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid1k1M3NmNzB4VXVETktWYjY0bnRmSmYwWjFTZk51OTM0WWJpaE9BUitrRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxMTg0NDA5NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU2N0QzQjZEQUQxRUNFRDkxQUZGNTY3OEFBREZGNkNFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjgxODI0MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5NWNDV0xwUVJFcWNLUFc3N2FaSTZnXCIsXG4gIFwicGhvbmVJZFwiOiBcImY3Njc4YmZkLTVlODktNGM3MC04M2Y1LTViNDY2OGJkNDAwZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDE5NCxcbiAgICAgIDEzMixcbiAgICAgIDEwMixcbiAgICAgIDEzLFxuICAgICAgMjQ2LFxuICAgICAgMTkyLFxuICAgICAgNzAsXG4gICAgICAxMzQsXG4gICAgICA1NSxcbiAgICAgIDE4MyxcbiAgICAgIDE1NyxcbiAgICAgIDE5MixcbiAgICAgIDM2LFxuICAgICAgMTY0LFxuICAgICAgNjgsXG4gICAgICAyNCxcbiAgICAgIDI0OCxcbiAgICAgIDMxLFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDE4NSxcbiAgICAgIDE1NCxcbiAgICAgIDE2MSxcbiAgICAgIDk1LFxuICAgICAgNjgsXG4gICAgICAyMTAsXG4gICAgICAzLFxuICAgICAgMTgxLFxuICAgICAgMjEsXG4gICAgICAxNzIsXG4gICAgICAxMDMsXG4gICAgICA1OSxcbiAgICAgIDEzOSxcbiAgICAgIDE5NCxcbiAgICAgIDE5OCxcbiAgICAgIDIxNyxcbiAgICAgIDg2LFxuICAgICAgMTY4LFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjhWVkVWOUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzExODQ0MDk1MTo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIzOTQ4NDE5NjQ5NzgzOjczQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pbHArc0hFTGpxb3JvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidWplN0gxb1NHQWFKUzlVOUJLRm9PeEIrTHcwcXU3NTkzY0pIVVN5NXJ4ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2U2VXSzFVemVwTjU3aUZlNWFNVDQrMUJpQ2l2L29JdXlOZ29vdUlRSzZMdi9vbUdWVENqVUg1VlhCK1VqZy91QXo5NmNVZ0FzajVaY2EwQVlzVkpCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrWnY3dm4wQmVoSHp4OWNnWEM1TjV4ZUNMYVlMUTdzUlhEbUQ4OWo2TGt6UGx4aGZ5UVQyS1dHOHhPeUwxbWpmT0dmVmd4TCtqMUNhM0hRVGhPZWRqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxMTg0NDA5NTE6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyODE4MjM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTlB0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDbjU2VlN3QmREK0llMHVYYjIrNFB0UWt2c0k2SXVtdXhnNWNFYVZkbUt3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMDQwODcyNTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjgxODIzODUwM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
