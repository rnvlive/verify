var allowedURLs = [
    "https://biographyhero.lovestoblog.com",
    "https://hdhub4u-wp-theme-dktzn.is-best.net",
    "https://dktech.000.pe",
    "https://www.ajaykumbhar.com",
    "https://vegamovies.com.co",
    "https://gp-discover.000.pe",
    "https://gp-afiliate.000.pe",
    "https://gp-lifehacker.000.pe",
    "https://gp-newspape.000.pe",
    "https://missionclone.000.pe",
    "https://jettheme-pro.blogspot.com",
    "https://mariyaui.blogspot.com",
    "https://1stepno.blogspot.com",
    "https://www.films4u.in",
    "https://taagsqywsg.blogspot.com",
    "https://hdhub4u-clone.blogspot.com",
    "https://exprothikhad.blogspot.com",
    "https://jet-moviev3.blogspot.com",
    "https://dkhek.blogspot.com",
    "https://draft.blogger.com",
    "https://www.blogger.com",
    "https://blogger.com",
    "https://www.ajaykumbhar.com",
    "https://fils5u.blogspot.com",
    "https://ssrtechpro.blogspot.com",
    "https://www.jawazbook.com",
    "https://codingrider.blogspot.com",
    "https://www.blogger.com/blog/post/edit/preview",
    "https://eduhub-demo.blogspot.com",
    "https://vega-clone.blogspot.com",
    "https://dkchek1.blogspot.com",
    "https://girgit-ui.blogspot.com",
    "https://www.filmyslap.xyz",
    "https://fletrothemes.blogspot.com",
    "https://faddalunga.blogspot.com",
    "https://mediunmovie.blogspot.com",
    "https://www.myanimehindi.in",
    "https://plusuiteme.blogspot.com",
    "https://jet-movie.blogspot.com",
    "https://www.timestoryaxom.in",
    "https://moviesmod4u.com",
    "http://tv4u.site",
    "https://testyyyyrr4.blogspot.com"
];

// Get the current URL
var currentURL = window.location.href;

// Check if the current URL is in the allowed list
var foundMatch = allowedURLs.some(function(url) {
    return currentURL.startsWith(url);
});

// If the URL is allowed, do nothing; otherwise, hide content
if (!foundMatch) {
    document.body.style.display = "none";
    document.querySelector('.entry-content').style.display = "none";
    alert("Your domain is not verified to use this theme.");
} else {
    console.log("Theme activated with your domain.");
}
