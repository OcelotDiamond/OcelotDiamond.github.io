const url = window.prompt('Input the url of the site you want to visit', 'www.google.com');
const iframe = document.getElementsByTagName('iframe')[0]
iframe.src = url
