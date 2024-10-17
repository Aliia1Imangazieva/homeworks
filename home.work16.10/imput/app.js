document.getElementById('username').addEventListener('keypress', function(event){

    if (event.key === 'Enter') {

        const name = this.value;
        const greeting = 'Привет, ${name}!';
        document.getElementById('greeting').textContent = greeting;
        this.value = ''; 
    }

});