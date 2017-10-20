var express = require('express');
var router = express.Router();
var BSON = require('bson');
var dbHandler = require('../lib/dbHandler');

const language = require('../lib/resource')

router.get("/", function (req, res, next) {
	let translate = {
		home: language.cn.home,
		common: language.cn.common
	}
	// dbHandler.getAllNews(req, res, 'CHN', translate);
	res.render("index", { language: translate, route: '' });
});

router.get("/server", function (req, res, next) {
	let translate = {
		home: language.cn.home,
		common: language.cn.common
	}
	// dbHandler.getAllNews(req, res, 'CHN', translate);
	res.render("server", { language: translate, route: '' });
});

router.get("/zh-CN", function (req, res, next) {
	let translate = {
		home: language.cn.home,
		common: language.cn.common
	}
	dbHandler.getAllNews(req, res, 'CHN', translate);
	// res.render("homepage", { language: translate, route: '' });
});

router.get("/en-US", function (req, res, next) {
	let translate = {
		home: language.en.home,
		common: language.en.common
	}
	dbHandler.getAllNews(req, res, 'USA', translate);
	// res.render("homepage", { language: translate, route: '' });
});

router.get("/zh-CN/product", function (req, res, next) {
	let translate = {
		product: language.cn.product,
		home: language.cn.home,
		common: language.cn.common
	}
	if (req.query.sid) {
		dbHandler.getProductlist(req, res, 'CHN', translate);
		// res.render("product", { language: translate, route: '/product' });
	}
	else {
		res.redirect("/");
	}
});

router.get("/en-US/product", function (req, res, next) {
	let translate = {
		product: language.en.product,
		home: language.en.home,
		common: language.en.common
	}
	if (req.query.sid) {
		dbHandler.getProductlist(req, res, 'USA', translate);
		// res.render("product", { language: translate, route: '/product' });
	}
	else {
		res.redirect("/");
	}
});

router.get("/zh-CN/productdetail", function (req, res, next) {
	let translate = {
		product: language.cn.product,
		home: language.cn.home,
		common: language.cn.common
	}
	if (req.query.pid) {
		dbHandler.getProductDetail(req, res, 'CHN', translate);
		// res.render("product", { language: translate, route: '/product' });
	}
	else {
		res.redirect("/");
	}
});

router.get("/en-US/productdetail", function (req, res, next) {
	let translate = {
		product: language.en.product,
		home: language.en.home,
		common: language.en.common
	}
	if (req.query.pid) {
		dbHandler.getProductDetail(req, res, 'USA', translate);
		// res.render("product", { language: translate, route: '/product' });
	}
	else {
		res.redirect("/");
	}
});

router.get("/zh-CN/news", function (req, res, next) {
	let translate = {
		product: language.cn.product,
		home: language.cn.home,
		common: language.cn.common
	}
	if (req.query.nid) {
		dbHandler.getNews(req, res, 'CHN', translate);
		// res.render("product", { language: translate, route: '/product' });
	}
	else {
		res.redirect("/");
	}
});

router.get("/en-US/news", function (req, res, next) {
	let translate = {
		product: language.en.product,
		home: language.en.home,
		common: language.en.common
	}
	if (req.query.nid) {
		dbHandler.getNews(req, res, 'USA', translate);
		// res.render("product", { language: translate, route: '/product' });
	}
	else {
		res.redirect("/");
	}
});
module.exports = router;
