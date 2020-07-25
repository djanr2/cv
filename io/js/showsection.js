function showAbout(){
    var show_="display: block; position: static; visibility: visible;"
    var hide_="display: none; position: static; visibility: visible;"
    var aboutSection=document.getElementById("about");
    var resumeSection=document.getElementById("resume");
    var portfolioSection=document.getElementById("portfolio");
    var blogSection=document.getElementById("blog");
    var contactSection=document.getElementById("contact");
    aboutSection.style=show_;
    resumeSection.style=hide_;
    portfolioSection.style=hide_;
    blogSection.style=hide_;
    contactSection.style=hide_;
}
function showResume(){
    var show_="display: block; position: static; visibility: visible;"
    var hide_="display: none; position: static; visibility: visible;"
    var aboutSection=document.getElementById("about");
    var resumeSection=document.getElementById("resume");
    var portfolioSection=document.getElementById("portfolio");
    var blogSection=document.getElementById("blog");
    var contactSection=document.getElementById("contact");
    aboutSection.style=hide_;
    resumeSection.style=show_;
    portfolioSection.style=hide_;
    blogSection.style=hide_;
    contactSection.style=hide_;
}
function showPortfolio(){
    var show_="display: block; position: static; visibility: visible;"
    var hide_="display: none; position: static; visibility: visible;"
    var aboutSection=document.getElementById("about");
    var resumeSection=document.getElementById("resume");
    var portfolioSection=document.getElementById("portfolio");
    var blogSection=document.getElementById("blog");
    var contactSection=document.getElementById("contact");
    aboutSection.style=hide_;
    resumeSection.style=hide_;
    portfolioSection.style=show_;
    blogSection.style=hide_;
    contactSection.style=hide_;
}
function showBlog(){
    var show_="display: block; position: static; visibility: visible;"
    var hide_="display: none; position: static; visibility: visible;"
    var aboutSection=document.getElementById("about");
    var resumeSection=document.getElementById("resume");
    var portfolioSection=document.getElementById("portfolio");
    var blogSection=document.getElementById("blog");
    var contactSection=document.getElementById("contact");
    aboutSection.style=hide_;
    resumeSection.style=hide_;
    portfolioSection.style=hide_;
    blogSection.style=show_;
    contactSection.style=hide_;
}

function showContact(){
    var show_="display: block; position: static; visibility: visible;"
    var hide_="display: none; position: static; visibility: visible;"
    var aboutSection=document.getElementById("about");
    var resumeSection=document.getElementById("resume");
    var portfolioSection=document.getElementById("portfolio");
    var blogSection=document.getElementById("blog");
    var contactSection=document.getElementById("contact");
    aboutSection.style=hide_;
    resumeSection.style=hide_;
    portfolioSection.style=hide_;
    blogSection.style=hide_;
    contactSection.style=show_;
}
