document.addEventListener('DOMContentLoaded', function(){
    let contestLink = "https://www.hackerrank.com/hmhscontest10-22";
    const passwordBox = document.querySelector('#ipasswordBox');
    const submit = document.querySelector('#submit');

    submit.disabled = true;

    passwordBox.onkeyup = () => {
        if (passwordBox.value.length > 0){
            if(passwordBox.value ==="coding"){
                submit.disabled = false;
            }

        }
        else {
            submit.disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
        const info = "Monthly Contest Link";
        const a = document.createElement('a');
        a.innerHTML = info;
        a.href = contestLink;
        document.querySelector('#hidden-link').appendChild(a);
        const b = document.createElement('a');
        b.innerHTML = "CyberStart America Link - type in join code: freedom-legal-selected";
        b.href = "https://www.cyberstartamerica.org/";
        document.querySelector('#hidden-link2').appendChild(b);
        submit.disabled = true;
        return false;

    }





});
