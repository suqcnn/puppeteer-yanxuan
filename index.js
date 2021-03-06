const puppeteer = require('puppeteer')
const { connect, initSchemas } = require('./database/init')
const  mongoose = require('mongoose')
const config = require('./config/url')
const url = `http://you.163.com/item/list?categoryId=`
const allTypeUrl = config.allTypeUrl
const getAllGoods = require('./puppet/goods').getAllGoods;
const getSingleGoods = require('./puppet/single').getSingleGoods;

const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

;(async () => {
  // await getAllGoods()  // 获取网易严选分类页部分数据
  await getSingleGoods() // 获取单个商品详情信息

})()
