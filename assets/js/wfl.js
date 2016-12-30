//
// Web Font Loader
//

  WebFontConfig = {
    google: { 
      families: [ 
      'Merriweather:300,900,300italic,900italic:latin',
      'Chivo:400,400italic,900,900italic:latin',
      'Lato:100,300,900,900italic,300italic:latin'
      ] 
    }
  };

  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
