// Constructor
function User(nombre, punt, color, pos) {
  // always initialize all instance properties
    this.nick = nombre;
    this.puntuacio = punt;
    this.color = color;
    this.posicio = pos;
}
// export the class
module.exports = User;
