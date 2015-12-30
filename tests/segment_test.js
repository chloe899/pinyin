var pinyin = require("../index");

console.log(pinyin("重庆大学", {segment:true, segmentArgs:["MP", 3]}))
console.log(pinyin("重庆大学", {
    heteronym: true,              // 启用多音字模式
    segment: true                 // 启用分词，以解决多音字问题。
}));