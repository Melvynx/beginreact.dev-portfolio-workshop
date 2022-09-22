# TIPS ZONE !

À utiliser si tu es bloqué sans hésiter !

## Dark Mode

<details>
   <summary>Tips 1</summary>

Dans un useEffect `onMount`, récupère le thème du localStorage.

```js
useEffect(() => {
  const savedColorScheme = localStorage.getItem(localStorageThemeKey);

  if (savedColorScheme) {
    setTheme(savedColorScheme);
    return;
  }
  // ... récupère maintenant le prefers-color-scheme
}, []);
```
</details>

<details>
   <summary>Tips 2</summary>

Dans un useEffect `onMount`, si il n'y a pas de localStorage on utilise
la mediaQuery et on ajoute un event listener pour écouter les changement.

```js
useEffect(() => {
  // ... localStorage

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = () => {
    setTheme(mediaQuery.matches ? "dark" : "light");
  };

  mediaQuery.addEventListener("change", handleChange);
  handleChange();
}, []);
```
</details>

<details>
   <summary>Tips 3</summary>

Lorsqu'on change de thème, il faut sauvegarder le nouveau thème
dans le localStorage.

```js
const toggleTheme = () => {
  setTheme((prev) => {
    const newTheme = prev === "light" ? "dark" : "light";
    localStorage.setItem(localStorageThemeKey, newTheme);
    return newTheme;
  });
};
```
</details>

## Memory


<details>
<summary>Tips 1</summary>

Voici les states de notre context ainsi que la méthode pour savoir si c'est finit.

```js
const [cards, setCards] = useState(() => getInitialMemory());
const [tryCount, setTryCount] = useState(0);

const isFinish = useMemo(() => isMemoryFinished(cards), [cards]);
```

J'utilise useMemo pour éviter de recalculer la méthode `isMemoryFinished` chaque render.

</details>

<details>
  <summary>Tips 2</summary>

Dans la fonction `returnCard` qui est appelé lorsque qu'on clique sur
une carte, on set le state pour cette carte.

Ensuite ce useEffect va être appelé. Je récupère toutes les cartes
retourne et vérifie qu'il y en a 2 (car le check ne se produit que
avec deux cartes).

Et dans ce cas, je regarde si les cartes sont pair et j'ajoute
un setTimeout pour changer les state des cartes retourné en HIDE ou
FIND en fonction de `isPair`.

```js
useEffect(() => {
  const returnedCards = cards.filter((c) => c.state === CARD_STATE.RETURNED);

  if (returnedCards.length !== 2) {
    return;
  }
  
  const isPair = isPairCards(returnedCards[0], returnedCards[1]);
  
  setTimeout(
    () => {
     // update les states en fonction de tryCount
    },
    isPair ? 400 : 1000
  );
}, [cards]);
```
</details>


<details>
  <summary>Tips 3</summary>

Voici ce que j'avais mis dans le useEffect avant.

En fonction tu state de la card et si elle est inclus
dans la liste des cartes qui sont retournée (double check)
je change le state de la card et je retourne.

J'incrémente aussi tryCount.

```js
setCards((prev) =>
  prev.map((card) => {
    if (
      card.state === CARD_STATE.RETURNED &&
      returnedCards.includes(card)
    ) {
      card.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE;
    }
    return card;
  })
);

setTryCount((prev) => prev + 1);
```

Et voici le début de la fonction `returnedCard`

Je check si la card est bien caché.

Ensuite je récupère les cartes déjà retourné.

Si il y en a déjà deux ou que l'utilisateur à cliqué sur une carte
déjé retourné, je return.

```js
const returnCard = (returnedCard) => {
  if (returnedCard.state !== CARD_STATE.HIDE) {
    return;
  }

  const returnedCards = cards.filter((c) => c.state === CARD_STATE.RETURNED);

  if (
    returnedCards.length === 2 ||
    returnedCards.includes(returnedCard.id)
  ) {
    return;
  }
```
</details>

## Commentaire


<details>
  <summary>Tips 1</summary>

```jsx
const {
  data: comments,
  error,
  isLoading,
  isRejected,
  isResolved,
  run,
} = useFetch(commentsUrl);

// ...

return (
  // ...
  {isResolved
    ? comments.map((comment) => (
      <Comment key={comment.id} {...comment} />
    ))
    : null
}
{
  isLoading ? <Loader/> : null
}
{
  isRejected ? (
    <Typography variant="body1">
      Sorry, there is an error : {error}
    </Typography>
  ) : null
}
// ...
)
  ```
</details>

<details>
  <summary>Tips 2</summary>

Tu as deux chois :
* soit tu met toute la logique dans `ComponentForm` et tu ajoute une props
  dans ce composant pour modifier refresh les commentaires. Cette props sera
  appelé après avoir ajouté un commentaire sans erreur.
* (plus dure) soit tu gère la logique dans le component `ComponentSection` et tu vas
  passer une fonction en paramètre dans le composant `ComponentForm` qui ne gérera
  que la récupération des commentaires. En fonction de la réponse de l'api, cette
  props peut retourné une promise pour redonner l'information à l'enfant
</details>

