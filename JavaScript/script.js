let descricaoTipo = {
  fire: "Com as suas Rajadas de Fogo, esse tipo de Pokémon, apesar de não ser um dos melhores e o mais preferidos dentre os treinadores. Eles, quando usam um ataque, deixam queimaduras no corpo do adversário, fazendo-o ficar mais fraco muito rápido. ",
  electric:
    "Focado em dano elétrico, os Pokémon desse tipo possuem alta velocidade, mas são vulneráveis a ataques de terra. Seus ataques são fortes contra água e voador, o que os torna úteis em batalhas contra esses tipos.",

  water:
    "Cerca de ¼ dos Pokémons são aquáticos. Os Pokémons do tipo água nadam muito bem e muito rápido e os principais ataques desse tipo são a Bomba Hidráulica (Hidro Pump) e a Dança da Chuva (Rain Dance).",

  grass:
    "Eles são geralmente vistos em jardins e campos. Eles tem como principais características, o poder de alterar os Status dos seus adversários, deixando-o dormindo, paralisado ou envenenado.",

  flying:
    "Os Pokémons que tem como o primeiro tipo voador, geralmente tem como segundo tipo o Normal. Umas das principais tecnicas deste tipo é o Ataque-Aereo(Sky Atack) e Wing-Atack(Ataque de Asas).",
  fighting:
    "Possuem ótimos golpes, porém quaisquer Pokémons psíquicos podem derrubar a maioria deles sem esforço algum. A principal tecnica desse tipo é o Soco Focalizado(Focus Punch)",
  poison:
    "Sua característica é deixar os adversários envenenados, porém, no geral eles tem pouca velocidade. Geralmente possuem um segundo tipo, ajudando muito nas batalhas.",
  ground:
    "Os pokémon do tipo Terra são freqüentemente usados e possuem um dos melhores ataques do jogo: Terremoto. Além disso eles são imunes a ataques do tipo Elétrico.",
  rock: "Com a defesa surpreendentemente boas, podem ser quase indestrutíveis a ataque normais.",
  psychic:
    "A maioria dos pokémon do tipo Psíquico possuem um Ataque Especial absurdo, porém, esses Pokémon não são muito resistentes.",
  ice: "Os ataques desse tipo podem deixar Pokémons congelados, ganhando tempo para conseguir derrotar os Pokémons que tenham vantagens contra esse tipo.",
  bug: "Os pokémon do tipo Inseto, apesar da aparência 'frágil' são uns dos mais fortes do jogo, e possuem ataques poderosos.",
  ghost:
    "São poucos os Pokémons desse tipo. Eles tem como característica aprender uma grande variedade de ataques de todos os tipos, assim como os Normais e Dragões.",
  steel:
    "Com o corpo blindado, a defesa desses Pokémon é extremamente boa. Este tipo é o que possui o maior número de resistências, e apenas duas fraquezas.",
  dragon:
    "A quantidade de pokémon do tipo Dragão é pequena, porém os que existem, são realmente fortes. Eles tem como característica terem stats altos e uma boa variedade de ataques.",
  dark: "Geralmente aparecem a noite e tem uma ótima visão, podendo então detectar fantasmas, além de serem imunes a golpes Psíquicos.",
  fairy:
    "Um ponto interessante sobre os Pokémon tipo Fada é que a vantagem contra o tipo Dragão os torna Pokémon bastante desejáveis.",

  normal:
    "Pokémons do tipo normal tem como principais características ataques corporais. Mas além desses, esses tipos de Pokémon podem aprender ataques fortes. Possuem uma grande variedade de ataques e são fracos apenas contra um tipo de ataque: Lutador (Fighting).",
};

const sugestao = document.querySelector(".sugestao");
const mostrarDicas = document.querySelector(".boxSugestoes");

function mostrarSugestao() {
  mostrarDicas.classList.toggle("ativo");
}

sugestao.addEventListener("mouseover", mostrarSugestao);
sugestao.addEventListener("mouseout", mostrarSugestao);

const pokemon = document.getElementById("pokemon");
let divPrincipal = document.querySelector(".boxPoke");

function consultar() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}`)
    .then((i) => {
      return i.json();
    })
    .then((resultado) => {
      processarInput(resultado);
    })
    .catch((error) => {
      // alert('Nome ou ID inexistente!!')
      console.log("Deu Erro");
    });
}

pokemon.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    consultar();
  }
});
let pokemonImagem = document.querySelector(".pokefront");
let pokeName = document.querySelector(".pokeName");
let pokeId = document.querySelector(".poke-id");
let pokeTipo = document.querySelector(".poke-tipo");
let pokeWeight = document.querySelector(".poke-peso");
let pokeHeight = document.querySelector(".poke-altura");
let informacoesTipo = document.querySelector(".caracteristicas");

let pokeHeart = document.querySelector(".pokeHealts");
// console.log(pokeHeart);

function processarInput(dados) {
  let tipo = dados.types[0].type.name;
  pokemonImagem.setAttribute(
    "src",
    dados.sprites.other["official-artwork"].front_default
  );
  pokeName.innerHTML = dados.name;
  pokeTipo.innerHTML = tipo;
  informacoesTipo.innerHTML = descricaoTipo[tipo]
  pokeTipo.setAttribute("class", `poke-tipo ${tipo}`)

  function adicionarDivAposPrimeiroFilho() {
    let pokeHeart = document.querySelector(".pokeHealts");
    var divExistente = pokeHeart.querySelector("div");
    if (!divExistente) {
      pokeHeart.firstElementChild.insertAdjacentHTML(
        "afterend",
        "<div class='healts'></div"
      );
    }
  }
  adicionarDivAposPrimeiroFilho();

  // Para dia 31/12 fazer a logica para adicionar os coraçoes de acordo com a quanditade de HP

  let heart = document.querySelector(".healts");
  if (dados.stats[0].base_stat < 20) {
    heart.innerHTML = `
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Heart-SVG-Icon-s9fd.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Heart-SVG-Icon-s9fd.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Heart-SVG-Icon-s9fd.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Heart-SVG-Icon-s9fd.svg" alt="" width="24px" height="24px">`;
  } else if (dados.stats[0].base_stat < 40) {
    heart.innerHTML = `
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Heart-SVG-Icon-s9fd.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Heart-SVG-Icon-s9fd.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Heart-SVG-Icon-s9fd.svg" alt="" width="24px" height="24px">`;
  } else if (dados.stats[0].base_stat < 60) {
    heart.innerHTML = `
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Heart-SVG-Icon-s9fd.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Heart-SVG-Icon-s9fd.svg" alt="" width="24px" height="24px">`;
  } else if (dados.stats[0].base_stat < 80) {
    heart.innerHTML = `
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Heart-SVG-Icon-s9fd.svg" alt="" width="24px" height="24px">`;
  } else if (dados.stats[0].base_stat <= 100) {
    heart.innerHTML = `
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">
    <img src="./Img/svgs/Red-Like-Icon-09uh.svg" alt="" width="24px" height="24px">`;
  }
  pokeId.innerHTML = `ID: ${dados.id}`;
  pokeWeight.innerHTML = `${dados.weight / 10} kg`;
  pokeHeight.innerHTML =
    dados.height < 10 ? `0.${dados.height} m` : `${dados.height} m`;

  // if(pokeHeight < 10){
  //   pokeHeight.innerHTML =  `0.${dados.weight} kg`
  // }

  console.log(dados);
}
