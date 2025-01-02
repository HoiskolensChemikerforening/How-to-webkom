// JavaScript to handle active tab switching (if not using input radio buttons)
const tabLabels = document.querySelectorAll('.tab-labels label');
const tabBlocks = document.querySelectorAll('.tab-block');

tabLabels.forEach((label, index) => {
  label.addEventListener('click', () => {
    // Remove active state from all tab blocks
    tabBlocks.forEach(block => block.style.display = 'none');
    
    // Show the selected tab block
    tabBlocks[index].style.display = 'block';
    
    // Update the active state of labels
    tabLabels.forEach(lbl => lbl.classList.remove('active'));
    label.classList.add('active');
  });
});