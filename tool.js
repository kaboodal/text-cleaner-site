
function cleanText(type) {
  let input = document.getElementById('input').value;
  let output = input;

  if (type === 'clean') {
    output = output.replace(/\s+/g, ' ').trim();
  } else if (type === 'linebreaks') {
    output = output.replace(/[\r\n]+/g, ' ');
  } else if (type === 'html') {
    let div = document.createElement('div');
    div.innerHTML = input;
    output = div.textContent || div.innerText || '';
  }

  document.getElementById('output').value = output;
}
