let meuMap = new Map();
meuMap.set("nome", "Matheus");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"))

// meuMap.clear()

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

// nome => Matheus
// stack => html, css, js

const cpfs = new Set();

cpfs.add('01340167000');
cpfs.add('32087098034');
cpfs.add('59992901047');

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

// remover itens duplicados em uma array
const array = ['Matheus Vieira', 'Gian Souza', 'João Paulo', 'Pedro Henrique', 'Pedro Henrique', 'Matheus Vieira']

const arrayComoSet = new Set([...array]);

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);