# React Job Board

## Todo :

- Accéder à la page `New Offer` pour créer une nouvelle offre
- Créer une page `NewOffer` qui permettra de créer une nouvelle offre
- Créer un formulaire et envoyer les données au serveur
- Si le serveur renvoi une réponse 201, alors faire une redirection sur la page de l'offre créée

## Bonus :

- Ajouter de la validation de données sur le formulaire
- Modifier la couleur du type d'offre (`Full-time` / `Part-time`) selon la valeur (vert pour l'un et violet pour l'autre)

## API :

- GET -> "/api/offers" : Get all offers
- GET -> "/api/offers/:id" : Get an offer (`:id` => "3")
- POST -> "/api/offers" : Create a new offer

## Resources :

- React Router : https://reactrouter.com/docs/en/v6/examples/basic
- Axios : https://github.com/axios/axios
