var schedule = require('node-schedule');
var rule=new schedule.RecurrenceRule();
rule.dayOfWeek=[1];//0=일요일 1=월요일~~~
rule.hour=11;//오전 11시
rule.minute=00;//00분

//주소
var address='http://readtrend.com/archive/';
var addNum=126

//rtm api
var RtmClient = require('slack-client').RtmClient;
var token = 'your slack bot token';
var rtm = new RtmClient(token, {logLevel: 'error'});

rtm.start();

var scheduleJob = schedule.scheduleJob(rule, function(){
    rtm.sendMessage(address+addNum, 'your channel id');
    addNum++;//주 마다 1씩 증가하게
});