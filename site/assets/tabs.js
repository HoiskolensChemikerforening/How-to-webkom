// JavaScript to handle active tab switching (if not using input radio buttons)
const tabLabels = document.querySelectorAll('.tab-labels label');
const tabBlocks = [...document.querySelectorAll('.tab-block')];
const tabEnds = [...document.querySelectorAll('.tab-end')];
const labelsLength = tabLabels.length;

const tabBlockSections = [];

for (let i = 0; i < tabBlocks.length; i += labelsLength) {
  tabBlockSections.push(tabBlocks.slice(i, i + 3));
}


function switchTab(label, index){
  tabBlockSections.forEach((tabBlock)=> {
    tabBlock.forEach((el,i) => {
      let sibling = el.nextElementSibling;
      while (sibling) {
        if (tabBlock.includes(sibling)){
          break
        } else if (tabEnds.includes(sibling)){
          break
        }
        else if (i==index){
          sibling.style.display = 'block';
          sibling = sibling.nextElementSibling;
        } else {
          sibling.style.display = 'none';
          sibling = sibling.nextElementSibling;
        }
      }
    })
  })
  // Update the active state of labels
  tabLabels.forEach(lbl => lbl.classList.remove('active'));
  label.classList.add('active');
}

tabLabels.forEach((label, index) => {
  label.addEventListener('click', () => {
    switchTab(label, index);
  });
});

if (tabLabels.length>0){
  switchTab(tabLabels[0], 0);
}