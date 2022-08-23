# Exercise

Je t'ai présenté 4 sections, il y aura plusieurs exercise par section.
Chaque fois une vidéo solution ainsi que des petits hints caché dans le
fichier `TIPS.md`. Ouvre-les uniquement si tu en as besoin !

Je ne veux pas que tu restes bloqué 4 heures. N'oublie pas les communautés
Discord et Twitter à utiliser !

## Dark Mode

Tout site web qui se respecte à un dark mode.

J'ai simplifié la tache pour toi.

Dans le fichier `/pages/_app.js` tu as une div avec l'id "app". Elle possède
la classe "dark". Si tu lui enlèves cette classe : boom ! Tout devient light.

Donc c'est dans ce fichier qu'on va gérer le dark-mode.

Mais comment ?

Tu vas devoir créer un context dans `src/context/ThemeProvider.jsx`. Celui-ci
aura un staté `theme` qui devra pour être récupéré partout dans l'app et aussi
"toggle" partout dans l'application.

Il y a un button, qui est déjà fait, pour changer le Theme qui se nomme :
`ToggleDarkThemeButton.jsx`.

Quelques conditions : 
* Si l'utilisateur change le theme, il doit être enregistré dans le localStorage.
* Par défaut, c'est le thème de l'ordinateur qui doit être utilisé, utilise [prefers color scheme](https://developer.mozilla.org/fr/docs/Web/CSS/@media/prefers-color-scheme)
* Si le thème par défaut de l'utilisateur change, il faut que le thème de l'application aussi
sauf si l'utilisateur à définir le thème à la main, dans ce cas aucune modification n'est faite.

Pas claire ? Regarde la vidéo Intro et test la démo.

⚠️ Avec NextJS aucun appel de localStorage doit être fait autre part quand
dans un useEffect !

## Hero

Pour que tu apprennes à utiliser Tailwind, je te propose de faire
le seul exercise CSS de ce projet.

Je n'ai pas mis de layout (flex) dans le Hero, tu n'as qu'à recopier
la maquette Figma et gérer le responsive.

Pour ça tu peux lire [la doc de Tailwind sur le responsive](https://tailwindcss.com/docs/responsive-design).

Mais voici un petit exemple (je te conseille de ne gérer que le breakpoint `md`
dans le cadre de cette exercise).

```jsx
<div className="text-red md:text-blue">Hello</div>
```

(Si tu veux tester en live, voici [un lien pour tester tailwind](https://play.tailwindcss.com/LJrFJLhbhl))

Ici le seul but est la mise en forme !

## GitHub Repository

Maintenant on va récupérer tous tes GitHub repository que tu as mis en Pinned et
les afficher sur ton portfolio.

<details>
<summary><b>Si tu n'as pas de Github Repository Pined</b></summary>

Tu n'as qu'à en créer un nouveau
et push le projet que tu vois ici sur GitHub.

Pour ça tu peux aller dans [repo.new](https://repo.new) et crée un repository.

Prend l'URL git qui est associé à ton repository puis fais ses commandes dans ton terminal bash :

```bash
git remote remove origin
git remote add origin <url que tu as copié de ton repository>
git push --set-upstream origin master
```

Et maintenant tu peux te rendre ton profile Github, tu verras
une section vide "Pinned Repositories" avec un bouton "Customize your pin"
ou tu pourras rajouter ton repository.

</details>

Le but est de récupérer la liste de tes repository en utilisation [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API),
tu n'as pas besoin de te soucier de l'url car j'ai créé une fonction pour toi
dans le fichier `src/lib/api-url.js`.

Tu auras besoin de gérer un states pour fetch les repository.

J'ai envie que tu affiches un Loader le temps que ça charge, tu trouveras
un composant Loader dans le dossier `src/components/Loader`.

Si il y a une erreur, tu dois aussi l'afficher.

Le fichier de travail est dans `ProjectSection.jsx`.

### Petit exercise : refactor

Utilise qu'un seul state pour gérer les données et le state.

Il te faut utiliser `useReducer` qui a ses états : 
* `idle`: avant le premier fetch
* `pending`: pendant le fetch
* `rejected`: en cas d'erreur
* `resolved`: en cas de succès

Si tu as galère, regarde le hint dans le fichier. 

### Petit exercise : sépare le code

Crée un hooks custom qui permet de fetch des données. Il prend en paramètre
`url` et `config` pour faire comme un fetch, mais il gère toutes les données
ainsi que les erreurs.

Il retourne une fonction qui permet de refresh les données.

Le fichier pour ajouter ton hooks existe déjà dans `src/hooks/useFetch.js`

## Bonus : Gérer le unmount

Quand ton composant est unmount, si ton fetch en `resolved` tu vas avoir 
une erreur React.
Pour fixer ça il va falloir que tu utilises un hooks pour voir si ton composant
est unmount, est dans ce cas ne pas set le state.

(Essai de faire sans) [Tips 💡](https://usehooks-ts.com/react-hook/use-is-mounted)

## Memory Game

L'exercice le plus compliqué de notre projet.

Le but est de recréer le memory, comme tu peux le voir sur [le site final](TODO).

J'ai envie de te laisser seul réfléchir à cette exercise. Pour t'aider
il y a 3 tips, **que tu peux ou non regarder**, essaie sans et si besoin
ouvre les tips.

Je t'ai déjà préparé toute l'interface avec le Board et les Card.
Mais je n'ai fait aucune logique.

Mais voici les règles à respecter :
* Tu dois utiliser un Context
* On doit pouvoir réinitialiser le jeu
* Le nombre d'essais est compté
* Le memory doit être créé en utilisant la méthode `getInitialMemory` de `memory.js`

Si tu galères, regarde la vidéo solution jusqu'à être débloqué puis
reprends l'exercise.

💰 Petit bonus : L'émoji ❔ doit changer en ❓pour le light thème.

## Les commentaires

Les commentaires utilisent Notion. Vérifie que tu as bien setup
tous les Tokens dans le fichier `.env`.

J'ai déjà créé le composant Commentaire ainsi que le formulaire,
sans aucune logique.

Dans cette exercise tu vas devoir :
1. Récupérer les commentaires.
   1. tu peux utiliser le hooks `useAsync` de l'exercise concernant les repository GitHub. 
   2. L'url pour récupérer les commentaire se trouve dans le fichier `api-url.js` et se nomme `commentsUrl`.
2. Afficher les commentaires !
3. Ajouter un commentaire ! 
   1. Tu vas devoir faire une fetch en utilisant `post` avec l'url `commentsUrl`.
   2. Avant de faire le post, le username doit faire entre 4 et 20 caractères et le commentaire entre 10 et 100.
   2. Je précise le body qu'il faut avoir dans le fichier `api-url.js`. 
   3. Attention l'api renvoie des erreurs sous cette forme : `{error: "message"}`. 
   4. Il faut afficher cette erreur
   dans le formulaire. De plus il ne faut pas utiliser de state 
   5. Quand tu ajoutes un commentaire, il faut refresh la page des commentaires.

Comme dans l'exercise précédent, je ne t'offre que des tips en plus.
