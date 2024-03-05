DOCUMENTATION BASE DE DONNEE:
Créer une base de donnée nommé "projet_meuble" dans PHP-MYADMIN
Mettre son local host SQL sur 3306
Run le projet avec intelliJ afin d'initialiser les tables dans la base de donnée (NE PLUS RIEN CREER DANS PHPMYADMIN, puisque les tables se créent à partir du code JAVA!!)

DOCUMENTATION APPEL API:
Local host: http://localhost:8080/

Pour la table "users":
- Création d'un user:
POST http://localhost:8080/users/create
Tous les paramètres sont obligatoires pour créer un user (ne pas créer d'ID: auto-incrémentation, et pour l'admin: par défaut c'est false)
Les paramètres sont:
    nom
    email
    mdp
admin est en false par défaut
id est en auto incrémentation


- Accéder à la liste des users:
GET http://localhost:8080/users/read
TRIER par nom alphabétique la liste des users:
GET http://localhost:8080/users/read?nomTriAlphabetique=nomTriAlphabetique

Le tri n'est pas obligatoire pour accéder à la liste

- Modifier un user:
PUT http://localhost:8080/users/update/{id}

- Supprimer un user:
DELETE http://localhost:8080/users/delete/{id}







Pour la table "meubles:
- Création d'un meuble:
POST http://localhost:8080/meubles/create
Les paramètres sont:
    nom
    type
    prix
    description
    matieres
    couleurs
    dimension
id est en auto incrémentation

 ATTENTION, les couleurs, les matières et les types sont en enum (donc faire un menu déroulant - voir dossier bdd/Couleurs Matières Types)

- Accéder à la liste des meubles:
GET http://localhost:8080/meubles/read
TRIER par ordre croissant de prix:
GET http://localhost:8080/meubles/read?prixTri=prixTri&direction=croissant
TRIER par ordre décroissant de prix:
GET http://localhost:8080/meubles/read?prixTri=prixTri&direction=decroissant

Le tri n'est pas obligatoire pour accéder à la liste

- Modifier un meuble:
PUT http://localhost:8080/meubles/update/{id}

- Supprimer un meuble:
DELETE http://localhost:8080/meubles/delete/{id}
