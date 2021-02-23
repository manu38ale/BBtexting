/*CMD
  command: /clear
  help: clear Referal List
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

// Automatic fix
var propName;

// Automatic fix
var propName;

// Automatic fix
var propName;

if(Libs.ReferralLib.currentUser.refList.clear()){
  Bot.sendMessage("Yours referral List cleared")
}
