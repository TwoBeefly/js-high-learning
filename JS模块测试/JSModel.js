function myModle() {
    var msg = "my name"
    function up() {
        console.log('up()'+ msg.toUpperCase());
    }
    function low() {
        console.log('low()'+ msg.toLowerCase());
    }
    return {
        up: up,
        low: low
    }
}