document.addEventListener('DOMContentLoaded', function() {

    // Use buttons to toggle between views
    document.querySelector('#about-me-link').addEventListener('click', () => load_detail('aboutme'));
    document.querySelector('#experiences-link').addEventListener('click', () => load_detail('experiences'));

  
    // By default, load the aboutme
    load_detail('aboutme');
  });
  
  function load_detail(tab) {

    if (tab === 'aboutme') {
        document.querySelector('#about-me').style.display = 'block';
        document.querySelector('#experiences').style.display = 'none';
    }
  
    if (tab === 'experiences') {
        document.querySelector('#about-me').style.display = 'none';
        document.querySelector('#experiences').style.display = 'block';
    }
  
  }  