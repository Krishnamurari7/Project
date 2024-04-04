const cli = document.getElementById('count')

let count = 0;

    function updateCount() {
        cli.textContent = count;
    }

    function increment() {
        count++;
        updateCount();
    }

    function decrement() {
        count--;
        updateCount();
    }

    function reset(){
        count = 0;
        updateCount();
    }