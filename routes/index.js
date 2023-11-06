var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  console.log("Inside home 33")
  res.render('home3', { layout: "main"});

});

router.get('/technologies', function(req, res, next) {
  res.render("technologies",{layout :"contact_main",data : {
    title : "Our technologies",
    subTitle : "React Js,Node Js,Java , Spring,Data Science, Machine learning "
  }})
});

router.get('/contact', function(req, res, next) {
  res.render("contact",{layout :"contact_main",data : {
    title : "Contact us",
    subTitle : "One stop solution"
  }})
});

router.get('/industries', function(req, res, next) {
  res.render("industries",{layout :"contact_main",data : {
    title : "Industries",
    subTitle : "We support many industries. : Healthcare , retail , Multimedia etc"
  }})
});

router.get('/services', function(req, res, next) {
  res.render("services",{layout :"contact_main",data : {
    title : "Our services",
    subTitle : "We provide software development , ERP solutions"
  }})
});
router.get('/portfolio', function(req, res, next) {
  res.render("portfolio",{layout :"contact_main",data : {
    title : "Portfolio",
    subTitle : "We support many industries. : Healthcare , retail , Multimedia etc"
  }})
});
router.get('/culture', function(req, res, next) {
  console.log('Inside culture *** ');
  res.render("culture",{layout :"contact_main",data : {
    title : "Our Culture",
    subTitle : "We work as a family"
  }})
});

module.exports = router;
