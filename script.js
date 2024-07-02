const inputbtn = document.querySelector(".inputbtn");
const clickbtn = document.querySelector(".clickbtn");
const output = document.querySelector(".output");

clickbtn.addEventListener('click', () => {
    const text = inputbtn.value.trim()
    if (!text) {
        alert('Please put a palindrome value')
        return
    }

    const newtext = text.toLowerCase().replace("/{^a-z0-9}/", "");
    const reversetext = newtext.split('').reverse().join('');

    if (newtext === reversetext) {
        if (inputbtn.value.length === 1) {
            output.textContent = `${text} is a palindrome`;
        } else {
            output.textContent = `${text} is a palindrome`;
        }
    }
    else {
        output.textContent = `${text} is not a palindrome`;

    }

});
