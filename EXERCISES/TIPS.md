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
    // Si il y en a un, tu peux le setter
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

  const isDark = window.matchMedia('(prefers-color-scheme: dark)');

  const handleChange = () => {
    // en fonction du prefers-color-scheme, tu peux setter le theme
    // 💡 isDark.matches ? ... : ...
  };

  mediaQuery.addEventListener('change', handleChange);
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
    const newTheme = prev === 'light' ? 'dark' : 'light';
    // soit tu l'ajoutes dans le local storage ici, c'est pas top mais ça fonctionne
    return newTheme;
  });
};

useEffect(() => {
  // soit tu l'ajoutes ici
}, [theme]);
```

</details>

## Projects

<details>
  <summary>Tips 1</summary>

Idle est la valeur par défaut, et voici le reducer :

```js
function fetchReducer(state, action) {
  switch (action.type) {
    case 'pending': {
      // data et error null
    }
    case 'resolved': {
      // data: action.data
    }
    case 'rejected': {
      // error: action.error
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
```

</details>

<details>
  <summary>Tips 2</summary>

Voici la fonction qui permet de fetch les données via
notre hook.

```js
const run = useCallback(() => {
  fetch(url, config)
    .then(async (res) => {
      const json = // await le json

      if (res.ok) {
        // utilise dispatch avec resolved
      } else {
        // utilise dispatch avec rejected
      }
    })
    .catch((error) => {
      // utilise dispatch avec rejected
    });
}, [config, url]);
```

</details>

<details>
  <summary>Tips 2</summary>

Le hook est ici : https://usehooks-ts.com/react-hook/use-is-mounted

```js
const run = useCallback(() => {
  fetch(url, config)
    .then(async (res) => {
      const json = await res.json();

      // Rajouter une condition ici !
      if (!isMounted()) {
        return;
      }

      // ...
    })
    .catch((error) => {
      // ICI Aussi !!

      dispatch({ type: 'rejected', error });
    });
}, [config, url]);
```

</details>

## Memory

<details>
<summary>Tips 1</summary>

Voici les states de notre context ainsi que la méthode pour savoir si c'est fini.

```js
const [cards, setCards] = useState(() => getInitialMemory()); // utiliser une fonction ici !
const [tryCount, setTryCount] = useState(0);

const isFinish = useMemo(() => isMemoryFinished(cards), [cards]); // on recherche que quand cards change
```

J'utilise useMemo pour éviter de recalculer la méthode `isMemoryFinished` chaque render.

</details>

<details>
  <summary>Tips 2</summary>

Dans la fonction `returnCard` qui est appelé lorsque qu'on clique sur
une carte, on set le state pour cette carte.

Ensuite, ce useEffect va être appelé. Je récupère toutes les cartes,
retourne et vérifie qu'il y en a 2 (car le check ne se produit que
avec deux cartes).

Et dans ce cas, je regarde si les cartes sont paires et j'ajoute
un setTimeout pour changer les states des cartes retournées en HIDE ou
FIND en fonction de `isPair`.

```js
useEffect(() => {
  const returnedCards = // récupère les cartes retournées

  // Si il y en a pas 2, on ne fait rien
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

Voici ce que j'avais mis dans le setTimeout d'avant.

```js
setCards((prev) =>
  prev.map((card) => {
    if (card.state === CARD_STATE.RETURNED && returnedCards.includes(card)) {
      // Si c'est pair je vais mettre le state en FIND
      card.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE;
    }
    return card;
  })
);

// incrémente aussi tryCount.
```

Et voici le début de la fonction `returnCard`

C'est quand on clique sur une carte.

```js
const returnCard = (returnedCard) => {
  // Vérifier que l'utilisateur clique sur une carte cachée

  // Récupérer toutes les cartes retournées avec .filter

  // Si il y en a plus de 2, on ne fait rien ou si la carte retournée faisait parti des cartes retournées avant (si on a recliqué dessus)
  if (/*...*/) {
    return;
  }

  // Modifie le state de la carte retournée en utilisant .map ou .find et en copiant le tableau
};
```

</details>

## Draw

<details>
  <summary>Tips 1</summary>

Voici la fonction draw :

```js
const draw = (event) => {
  if (!isDrawing.current) return;
  const context = canvas.current?.getContext('2d');
  const coordinate = getCoordinates(event, canvas.current);

  if (!context || !coordinate) return;

  if (lastCoordinate.current) {
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.beginPath();
    context.moveTo(lastCoordinate.current.x, lastCoordinate.current.y);
    context.lineTo(coordinate.x, coordinate.y);
    context.stroke();
  }

  lastCoordinate.current = coordinate;
};
```

</details>

<details>
  <summary>Tips 2</summary>

On ajoute un event mouseup sur notre useEffect !

```js
useEffect(() => {
  const handleMouseUp = () => {
    stopDrawing();
  };

  window.addEventListener('mouseup', handleMouseUp);
  return () => {
    window.removeEventListener('mouseup', handleMouseUp);
  };
}, []);
```

</details>

<details>
  <summary>Tips 3</summary>

Voici les props du draw control et un exemple de son utilisation !

```jsx
// Draw.tsx
<DrawControl
  defaultColor={DEFAULT_COLOR}
  defaultSize={DEFAULT_SIZE}
  onColorChange={(color) => {
    canvas.current.getContext('2d').strokeStyle = color;
  }}
  onSizeChange={(size) => {
    canvas.current.getContext('2d').lineWidth = size;
  }}
/>
// DrawControl.tsx
<input
  id="draw-color-picker"
  type="color"
  defaultValue={defaultColor} // <-- new props
  onChange={(e) => {
    onColorChange(e.target.value); // <-- new props
  }}
/>
```

</details>

<details>
  <summary>Tips 4</summary>

Le useEffect appelle toujours une fonction liée au useEffect pour éviter des problèmes.

```jsx
// Pour reset le canvas
// https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing
canvas.current
  .getContext('2d')
  .clearRect(0, 0, canvas.current.width, canvas.current.height);

// Pour le sauvegarder (oui c'est un peu tricky)
// https://stackoverflow.com/questions/10673122/how-to-save-canvas-as-an-image-with-canvas-todataurl
const data = canvas.current.toDataURL();
const link = document.createElement('a');
link.download = 'image.png';
link.href = data;
link.click();
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
```

</details>

<details>
  <summary>Tips 2</summary>

```jsx
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
  <summary>Tips 3</summary>

Tu as deux choix :

- soit tu mets toute la logique dans `ComponentForm` et tu ajoutes une props
  dans ce composant pour modifier, refresh les commentaires. Cette props sera
  appelée après avoir ajouté un commentaire sans erreur.
- (plus difficile) soit tu gères la logique dans le composant `ComponentSection` et tu vas
  passer une fonction en paramètre dans le composant `ComponentForm` qui ne gérera
  que la récupération des commentaires. En fonction de la réponse de l'api, cette
  props peut retourner une promise pour redonner l'information à l'enfant

J'ai choisis l'exemple 2 avec :

```jsx
const onAddComment = (comment) =>
  fetch(commentsUrl, {
    method: 'POST',
    body: JSON.stringify(comment),
  }).then(async (res) => {
    const json = await res.json();

    if (res.ok) {
      run(); // <-- refresh les commentaires
      return json;
    }

    return Promise.reject(json.error); // <-- renvoie une erreur dans .catch
  });
```

Et dans le composant `ComponentForm` je peux l'utiliser comme ceci :

```jsx
onSubmit({ username, comment })
  .then(() => {
    // enlever l'erreur et clear le formulaire
  })
  .catch((error) => {
    // afficher l'erreur
  });
```

</details>
