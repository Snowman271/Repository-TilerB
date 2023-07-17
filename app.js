let activeButton = null;
  
function toggleCircle(event) {
  event.preventDefault();
  const link = event.currentTarget;
  const circle = link.querySelector('.absolute');
  const text = link.querySelector('.link-text');

  if (activeButton) {
    const activeCircle = activeButton.querySelector('.absolute');
    const activeText = activeButton.querySelector('.link-text');
    activeCircle.classList.add('hidden');
    activeText.classList.remove('hidden');
    activeButton.classList.remove('active');
    activeButton.classList.add('hover:bg-purple');
  }

  circle.classList.toggle('hidden');
  text.classList.toggle('hidden');

  if (circle.classList.contains('hidden')) {
    activeButton = null;
  } else {
    activeButton = link;
    link.classList.add('active');
    link.classList.remove('hover:bg-purple');
  }
}