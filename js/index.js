import { util } from "./util.js";

const KEY = "tab";
const VALUE = "home";
util.register(KEY, VALUE);

const controllers = document.querySelectorAll("button");
const views = document.querySelectorAll("section");
util.attach(KEY, controllers, views);
