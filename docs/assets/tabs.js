// JavaScript to handle active tab switching (if not using input radio buttons)
const tabLabels = document.querySelectorAll('.tab-labels label');
const tabBlocks = [...document.querySelectorAll('.tab-block')];
//const Windows = document.getElementById("tab-block");
//const MacOS = document.getElementById("tab-block");
//const Linux = document.getElementById("tab-block");
//const tabBlocks= [Windows,MacOS,Linux]

tabLabels.forEach((label, index) => {
  label.addEventListener('click', () => {
    // Remove active state from all tab blocks
    //tabBlocks.forEach(block => block.style.display = 'none');
    
    // Show the selected tab block
    //tabBlocks[index].style.display = 'block';
    // Get all siblings after the target div
    tabBlocks.forEach((el,i) => {
      let sibling = el.nextElementSibling;
      while (sibling) {
        if (tabBlocks.includes(sibling)){
          break
        } else if (i==index){
          sibling.style.display = 'block';
          sibling = sibling.nextElementSibling;
        } else {
          sibling.style.display = 'none';
          sibling = sibling.nextElementSibling;
        }
      }
    })

  
    
    // Update the active state of labels
    tabLabels.forEach(lbl => lbl.classList.remove('active'));
    label.classList.add('active');
  });
});