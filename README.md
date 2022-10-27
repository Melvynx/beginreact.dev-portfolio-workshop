# Portfolio - Final exercise

Workshop final pour crée son portfolio.

## Pré-requis

- [JavaScript à connaître pour commencer React](https://codelynx.dev/posts/javascript-known-to-start-react)
- Installer le React DevTools ([chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/))

## Systems

- [git](https://git-scm.com/downloads) - v2 ou plus
- [node](https://nodejs.org/en/) - v12 ou plus
- [npm](https://nodejs.org/en/) - v6 ou plus

## Setup du projet

```bash
git clone https://github.com/Melvynx/beginreact.dev-portfolio-workshop.git
cd beginreact.dev-portfolio-workshop
npm install
```

Pour lancer le projet :

```bash
npm run dev
```

## Setup token

Ensuite il va te falloir récupérer quelques Token !

1. Token Github

Rendez-vous sur [la page settings GitHub sur les tokens](https://github.com/settings/tokens),
ensuite clique sur "Generate new token" et choisis "read user" uniquement !

Copie ce token dans le fichier `.env` (qui n'est pas commit sur GitHub)

PS : Il y a un fichier `.env.template` que tu peux dupliquer et renommer `.env` avec
la clé `GITHUB_TOKEN`.

2. Token Notion

Pour afficher les commentaires l'application a besoin de tes tokens.

Rends toi dans [le portail developpeur de Notion](https://www.notion.so/my-integrations).

Crée toi un compte si ce n'est pas déjà fait puis clique sur `New Integration`.

Tu peux mettre comme nom : "Portfolio - BeginReact" puis cocher `Read content`,
`Update content` et `Create Content` et sélectionne `No User Information` dans
`User capabilities`.

Prend le token et ajoute le dans le fichier `.env` avec la clé `NOTION_API_TOKEN`.

Ensuite rends toi dans Notion et ajoute une Nouvelle page dans laquelle tu vas
créer une database en full page.

Tu vas ajouter les champs suivant :

- Username -> title
- Comment -> text
- Created -> Created Time

En haut à gauche tu peux cliquer sur le bouton partager et récupérer l'URL de notion.

Tu vas avoir un lien de ce style :

`https://www.notion.so/codelynx/444bb04fc2d145a19c1ce33385023841?v=5ed552fed1e55cb48c48de4740fa3107`

Il va falloir récupérer cette partie : `444bb04fc2d145a19c1ce33385023841` qui se situe après le `www.notion.so/<nom-de-ton-notion>/<databaseId>`.

Prend ce database ID et ajoute le dans le fichier `.env` avec la clé `NOTION_DATABASE_ID`.

Tu es prêt !

## Pourquoi un portfolio ?

Un portfolio est un outil incroyable pour montrer tes projets
et tes compétences. J'aime bien dire que ça peut remplacer un CV.

Donc si tu n'as pas encore de portfolio, ce sera le premier pas
pour avoir un portfolio.

Evidemment, juste faire un portfolio ne serait pas intéressant.

### 3 Categories

- Hero

C'est le Header. C'est le premier élément que les visiteurs vont voir.
Ils doivent savoir qui tu es, ce que tu fais et ton visage si tu le
souhaite.

- Projects

Ça devient un peu plus fun, on va récupérer les projets que tu as pinné
dans ton GitHub et les afficher.

On va afficher le titre, la description, le lien vers le projet, ainsi
que le lien vers le dépôt GitHub et le nombre de star.

- Memory

C'est le grand projet de ton portfolio. C'est un petit jeu de mémoire
qui va te permettre de mettre en application toutes tes compétences.
C'est la partie la plus compliquée de ce portfolio.

Il va falloir t'accrocher, mais ne t'en fais pas j'ai tout prévu pour
que tu passes un agréable moment de réfléxion.

- Comments

Le but est de pouvoir rajouter des commentaires sur ton portfolio. Alors
je ne te conseille pas de les laisser en prod, mais c'est un début.

- Footer

Juste un petit contact me.

## Comment ça va se passer ?

J'ai préparé une grande partie du projet, car je n'ai pas envie que tu
perdes du temps sur le style.

Mais sens-toi libre de modifier les couleurs, les composants etc...

C'est ton projet, tu peux le faire comme tu veux.

Pour la stack technique je te conseille d'aller voir [la vidéo d'intro]()
mais je vais te résumer tout ça ici :

- Tailwindcss

C'est la librarie pour faire le CSS.
J'ai choisi cette librairie car c'est la plus simple à appréhender.
Tu n'as pas besoin de savoir en faire pour faire cet exercice,
j'ai déjà setup toutes les choses compliquées !

Voici la documentation : [tailwindcss](https://tailwindcss.com/docs/installation)

Si tu as besoin de mettre un text en gras, tu peux chercher dans cette
documentation `bold` dans la bar de recherche et tu tomberas directement
sur les classes css à mettre.

Par exemple dans notre cas c'est :

```html
<p class="... font-bold">The quick brown fox ...</p>
```

- NextJS

NextJS c'est un des frameworks les plus populaires. Pourquoi je l'ai
choisi ? Car il permet de faire un site frontend ainsi que de rajouter
un backend. Pour ce projet on a besoin d'un petit backend pour gérer
les commentaires ainsi que les repository github.

⚠️ Ce n'est pas un tutoriel NextJS, mais React. Je n'utiliserai aucune
feature de NextJS spécifique, ce sera un autre sujet.

## Structure du projet

- `pages`: dossier Next.JS, pas besoin de le toucher
- `src`
  - `lib`: c'est tous ce qui n'est pas du react mais qui est utiles.
  - `hooks`: tous les hooks React
  - `styles`: tous les styles CSS, notamment le thème ainsi que les styles Tailwind.
  - `components` - `atoms`: tous les composants qui sont des éléments élémentaires ()

## Exercise !

Pour te guider dans ce projet, j'ai crée d'autre fichier dans [Exercise](./EXERCISES/)
pour que tu puisses suivre un plan pour apprendre et pas totalement être
perdu. On se retrouve là bas.

_@Copyright 2022-current - BeginReact_
