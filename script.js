function showSection(idToShow) {
    const sections = ['mainPage', 'nextPage', 'cancelMessage'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (id === idToShow) {
        el.style.display = 'block';
        setTimeout(() => {
          el.classList.add('show');
        }, 10);
      } else {
        el.classList.remove('show');
        setTimeout(() => {
          el.style.display = 'none';
        }, 600);
      }
    });
  }
  
  function goToNextPage() {
    const sound = document.getElementById("confirmSound");
    if (sound) sound.play();
    showSection('nextPage');
  }
  
  function confirmChoice(choice) {
    if (choice === 'no') {
      showSection('cancelMessage');
    }
  }
  
  function goBack() {
    showSection('mainPage');
  }
  