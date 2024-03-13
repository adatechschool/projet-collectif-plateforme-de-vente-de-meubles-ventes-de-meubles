DOCUMENTATION BASE DE DONNEE:
- Créer une base de donnée nommé "projet_meuble" dans PHP-MYADMIN
- Run le projet avec intelliJ afin d'initialiser les tables dans la base de donnée (NE PLUS RIEN CREER DANS PHPMYADMIN, puisque les tables se créent à partir du code JAVA!!)
- Mettre son local host SQL sur 3306
- Importer le projet_meuble.sql dans mySQL (ce sont les données de 5 utilisateurs et 5 meubles pour exemple)




DOCUMENTATION APPEL API:
- Local host: http://localhost:8080/

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
GET http://localhost:8080/users/list
TRIER par nom alphabétique la liste des users:
GET http://localhost:8080/users/read?nomTriAlphabetique=nomTriAlphabetique

Le tri n'est pas obligatoire pour accéder à la liste

-Login  côté client à la liste des users

il faut fecther les données à http://localhost:8080/users/login pour pouvoir bypasser les problèmes liés a cors

- Modifier un user:
PUT http://localhost:8080/users/update/{id}

- Supprimer un user:
DELETE http://localhost:8080/users/delete/{id}







Pour la table "meubles":
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



Pour la table images:
Les paramètres sont:
- name
- type
- image
id est en auto incrémentation


- Pour la création d'une "image":
POST http://localhost:8080/image/create
Pour la méthode post, il faut passer par body/form-data et mettre en key images et une value de type file
- Pour afficher l'image:
GET http://localhost:8080/image/{name}
- Pour afficher les infos de l'image
GET http://localhost:8080/image/info/{name}
- Pour supprimer une image
DELETE http://localhost:8080/image/delete/{id}




OBJECTIFS :
- Relier la table image aux deux autres tables pour qu'un user ai une photo de profil et un meuble puissent avoir plusieurs images 
Tuto qui peut aider: https://www.youtube.com/watch?v=9uCAGlrpBbw