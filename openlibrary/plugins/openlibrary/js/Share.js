copy.onclick = () => {
    input.select(); //select input value
    if (document.execCommand('copy')) { //if the selected text copy
        field.classList.add('active');
        copy.innerText = 'Copied';
        setTimeout(() => {
            window.getSelection().removeAllRanges(); //remove selection from document
            field.classList.remove('active');
            copy.innerText = 'Copy';
        }, 3000);
    }
}