let people = [
    {
      name: "Carlos",
      traits: ["Cree que esperar al matrimonio es tonto", "No le interesa Dios", "Se burla de tus creencias"],
      image: "https://unsplash.it/200/200?random=1",
      verse: "2 Corintios 6:14 – No se unan en yugo desigual con los incrédulos."
    },
    {
      name: "Ana",
      traits: ["Te pide esconder cosas a tus padres para que no ´piensen mal´", "Dice que quiere servir a Dios, pero nunca se compromete a nada", "Quiere una relación contigo pero no con Dios"],
      image: "https://unsplash.it/200/200?random=2",
      verse: "Proverbios 4:23 – Sobre todas las cosas cuida tu corazón, porque este determina el rumbo de tu vida."
    },
    {
      name: "Luis",
      traits: ["Ora contigo y por ti", "Te inspira a servir", "Busca una relación con propósito"],
      image: "https://unsplash.it/200/200?random=3",
      verse: "Eclésiastes 4:9– Es mejor ser dos que uno, porque ambos pueden ayudarse mutuamente a lograr el éxito."
    },
    {
        name: "Isabel",
        traits: ["Se burla de ti frente a los demás", "No quiere que tengas más amigos", "Solo está contigo cuando está sola"],
        image: "https://unsplash.it/200/200?random=4",
        verse: "Proverbios 26:18-19 – Tanto daña un loco que dispara un arma mortal, como el que miente a un amigo y luego le dice: «Solo estaba bromeando."
      },
      {
        name: "Araceli",
        traits: ["Se queda hablando hasta muy noche contigo, pero a veces te manda versículos ", "Dice que no necesitas tanto a Dios, que la tienes a ella", "Te dice: Si no haces esto conmigo, buscaré a alguien que sí lo haga"],
        image: "https://unsplash.it/200/200?random=8",
        verse: "2 Timoteo 3:5 – Actuarán como religiosos pero rechazarán el único poder capaz de hacerlos obedientes a Dios. ¡Aléjate de esa clase de individuos!"
      },
      {
        name: "Federico",
        traits: ["Dice que te ama, pero no respeta tus límites ", "Dice que tú lo puedes cambiar", "Sabe mucho de la Biblia, pero no tiene frutos "],
        image: "https://unsplash.it/200/200?random=5",
        verse: "Santiago 1:22-24 – ¡Obedezcan el mensaje de Dios! Si lo escuchan, pero no lo obedecen, se engañan a ustedes mismos y les pasará lo mismo que a quien se mira en un espejo: tan pronto como se va, se olvida de cómo era."
      },
      {
        name: "Lucía",
        traits: ["Busca crecer espiritualmente junto contigo", "Tiene un compromiso con Dios antes que contigo", "Te ama con hechos, no solo palabras"],
        image: "https://unsplash.it/200/200?random=6",
        verse: "1 Juan 3:18 – Hijitos míos, no amemos de palabra ni de lengua, sino de hecho y en verdad."
      },
      {
        name: "Pepe",
        traits: ["Se alegra de tus logros", "Te confronta con la verdad, no con chismes", "Te empuja a acercarte más a Dios"],
        image: "https://unsplash.it/200/200?random=7",
        verse: "Proverbios 13:20 – Quien se junta con sabios, sabio se vuelve; quien se junta con necios, acaba mal."
      }
  ];
  
  let currentIndex = 0;
  
  function startCards() {
    document.getElementById("main-card").style.display = "none";
    document.getElementById("real-card").style.display = "block";
    showCard();
  }
  
  function showCard() {
    const card = document.getElementById("real-card");
    const person = people[currentIndex];
    const avatar = card.querySelector(".avatar");
    const name = card.querySelector("h2");
    const ul = card.querySelector("ul");
    const verseDiv = document.getElementById("bible-verse");
  
    avatar.src = person.image;
    avatar.alt = person.name;
    name.textContent = person.name;
    ul.innerHTML = person.traits.map(trait => `<li>${trait}</li>`).join("");
  
    verseDiv.textContent = person.verse;
    verseDiv.classList.remove("verse-visible");
    verseDiv.classList.add("hidden-verse");
  }
  
  function vote(isGood) {
    const card = document.getElementById("real-card");
    card.classList.add(isGood ? "vote-yes" : "vote-no");
  
    setTimeout(() => {
      currentIndex++;
      if (currentIndex >= people.length) currentIndex = 0;
      card.classList.remove("vote-yes", "vote-no");
      showCard();
    }, 600);
  }
  
  function toggleVerse() {
    const verse = document.getElementById("bible-verse");
    verse.classList.toggle("hidden-verse");
    verse.classList.toggle("verse-visible");
  }
  