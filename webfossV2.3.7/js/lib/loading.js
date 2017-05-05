var urlStr = location.href;
var patts = [/index\.html/,/home\.html/,/about\.html/,/service\.html/,/cases\.html/,/customer\.html/,/contact\.html/];
var curPage = "";
for(var i in patts){
    if(patts[i].exec(urlStr)){
        curPage = patts[i].exec(urlStr)[0];
        break;
    }else{curPage = "index.html"}
}
var loadingBg = document.getElementsByClassName("loadingBg")[0];
switch (curPage){
    case "home.html":
        loadingBg.style.backgroundColor = "#A6A39E";
        break;
    case "about.html":
        loadingBg.style.backgroundColor ="#383838";
        break;
    case "service.html":
        loadingBg.style.backgroundColor ="#664A22";
        break;
    case "cases.html":
        loadingBg.style.backgroundColor ="#D6DFEB";
        break;
    case "customer.html":
        loadingBg.style.backgroundColor ="#E4E9F1";
        break;
    case "contact.html":
        loadingBg.style.backgroundColor ="#696969";
        break;
    default:
        loadingBg.style.backgroundColor ="#DCDAD4";
        break;
}