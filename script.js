


let currentPage = 1;

function changePage() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    if (currentPage === 1) {
      page1.classList.remove('active');
      page1.classList.add('unactive');
      page2.classList.remove('unactive')
      page2.classList.add('active');
      currentPage = 2;
    } else {
      page2.classList.remove('active');
      page2.classList.add('unactive')
      page1.classList.remove('unactive');
      page1.classList.add('active');
      currentPage = 1;
    }
  }
  
  document.querySelector('nav').addEventListener('mouseover', function() {
    document.getElementById('side-nav').classList.add('open');
    console.log('Mouse over nav!');
  });
  
  document.querySelector('nav').addEventListener('mouseout', function(event) {
    if (!event.relatedTarget || !event.relatedTarget.closest('nav')) {
      document.getElementById('side-nav').classList.remove('open');
      console.log('Mouse out of nav!');
    }
  });
  