function scrollToAnchor(aid) {
  var aTag = $("a[name='" + aid + "']");
  $('html,body').animate({
    scrollTop: aTag.offset().top
  }, 'slow');
}

$("#projects-link").click(function() {
 scrollToAnchor('projects');
});

$("#skills-link").click(function() {
  scrollToAnchor('skills');
});

$("#testimonials-link").click(function() {
  scrollToAnchor('testimonials');
});

$("#about-link").click(function() {
  scrollToAnchor('about');
});