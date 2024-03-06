const input = document.querySelector('#markdownInput');
const preview = document.querySelector(".preview");

input.addEventListener("input", (event)=>{
    preview.innerHTML = DOMPurify.sanitize(marked.parse(event.target.value));
});

  //Dark mode functionality
    (function(){

        /* get the elements */
        const darkModeCheckBox = document.getElementById('check');
        console.log(darkModeCheckBox);
        const root = document.documentElement;
        const label = document.querySelector('label');

        /* DarkMode function */
        const darkMode = () =>{
            if (darkModeCheckBox.checked) {
                root.classList.add('dark');
                label.textContent = 'Light Theme';

            /* Reset the local storage darkMode toggle */   
            localStorage.setItem("darkMode", "on");
            }else {
                root.classList.remove('dark');
                label.textContent = 'Dark Theme';

               /* Reset the local storage darkMode toggle */   
            localStorage.setItem("darkMode", "off"); 
            }
        }

        darkModeCheckBox.addEventListener("change", darkMode);

        /* Check the mode state from the local storage. */
        window.addEventListener('load', ()=>{
            darkModeCheckBox.checked = localStorage.getItem('darkMode') === "on";
            darkMode();
        });
        }());

