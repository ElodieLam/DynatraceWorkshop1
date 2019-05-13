# DynatraceWorkshop1

## 1. Description du projet
L'objectif de ce document est d'installer et de prendre en main une application utilisant Node.js et Angular avec une base de données MySql. 

### 1.a Présentation de l'application

L'application permet de gérer les demandes de congés et les notes de frais de collaborateurs. <br>

![Alt text](images/Nara_conge.PNG?raw=true "Title")

Le menu de l'application est composé de plusieurs onglets: 
- *Notifications* permet à l'utilisateur de visualiser ses notifications
- *Congés* permet de créer des demandes de congés
- *Notes de frais* permet de créer et d'éditer des notes de frais
- *Test Dynatrace* est une page additionnelle servant de page test qu'on pourra éditer

Selon le poste de l'utilisateur (Chef de service, RH ou Compta), il aura accès à des onglets de gestion en plus:
- *Notifications Service* permet de visualiser les notifications relatives à son service
- *Gestion congés* permet d'accepter ou de refuser les demandes de congés des autres collaborateurs
- *Gestion notes de frais* permet d'accepter ou de refuser les notes de frais des autres collaborateurs
- *Gestion missions* permet au chef de service de créer des nouvelles missions. Chaque note de frais est reliée à une mission.


### 1.b Exemple de cas d'utilisation - Cycle d'une demande de congé: <br>
Un simple collaborateur crée une demande de congé. Lorsqu'il la valide, elle est envoyée automatiquement à son chef de service qui recevra de son côté une notification informant de cette demande. Il pourra accepter ou refuser cette demande. Elle sera ensuite envoyée au RH qui pourra à son tour accepter ou refuser la demande. A la fin du cycle, le collaborateur recevra une notification lui informant de l'état final de sa demande. Si sa demande a été accepté, ses congés seront mis à jour dans son calendrier.


### 1.c Comptes utilisateurs par défaut:

Simple collaborateur du service Logistique:  <br>
- Identifiant: Travis, Mdp: password 
- Identifiant: ef, Mdp: password

Chef de service Logisique: <br>
- Identifiant: Duflo, Mdp: password

RH: <br>
- Identifiant: Michel, Mdp: password 
- Identifiant: Daouda, Mdp: password

Comptabilité: <br>
- Identifiant: Jean, Mdp: password <br>
- Identifiant: Martin, Mdp: password <br>


### 1.d Technologies utilisées
En suivant ce document, vous installerez tout d'abord XAMPP qui est un outil de distribution Apache qui permet de créer facilement un serveur web local à des fins de test. On activera les modules MySql pour la base de données et l'application web PhpMyAdmin pour pouvoir gérer plus facilement cette base de données. Vous installerez ensuite le module Node.js et Angular pour pouvoir faire fonctionner l'application.

#### Node.js
Node.js est une plateforme construite sur le moteur JavaScript V8 de Chrome qui permet de développer des applications en utilisant du JavaScript. Il se distingue des autres plateformes gràce à une approche non bloquante permettant d'effectuer des entrées/sorties (I/O) de manière asynchrone. Parmi les modules natifs de Node.js, on retrouve http qui permet le développement de serveur HTTP. Il est donc possible de se passer de serveurs web tels que Nginx ou Apache lors du déploiement.

#### Angular
Anular est un framework côté client open source basé sur le language de développement TypeScript (Google). Il permet de créer plus facilement des Single Page Applications.

## 2. Installation
(Windows seulement)

### 2.a Partie base de données

#### Etape 1
Télécharger la dernière version de XAMPP pour Windows:
<a href="https://www.apachefriends.org/fr/download.html" target="_blank">`https://www.apachefriends.org/fr/download.html`</a>

#### Etape 2
Lancer l'installation de XAMPP et sélectionner MySql et PhpMyAdmin lors de l'installation des composants logiciels.

#### Etape 3
Lorsque l'installation est terminée, lancer XAMPP puis les modules Apache et MySQL (en cliquant sur "Start").<br>
>:exclamation: Si Apache ne se lance pas, il faudra surement changer son port d'écoute. Pour cela: <br>
> Dans XAMPP, pour Apache cliquer sur "config", dans le fichier *httpd.conf* modifier la ligne 
```shell
Listen 80
```
> En
```shell
Listen 8080 
```
> par exemple. <br>

#### Etape 4
Dans XAMPP, au niveau d'Apache cliquer sur "config" et modifier dans le fichier *config.inc.php*:
```shell
$cfg['Servers'][$i]['auth_type'] = 'config';
```
En
```shell
$cfg['Servers'][$i]['auth_type'] = 'cookie';
```
Et :
```shell
$cfg['Servers'][$i]['password'] = '';
```
En
```shell
$cfg['Servers'][$i]['password'] = 'password';
```

#### Etape 5
Dans XAMPP, au niveau de MySql cliquer sur "config".<br>
Dans le fichier *my.ini*, décommenter la ligne:
```shell
#password = password     
```

#### Etape 6
"Stop" et "Restart" Apache et MySql.

### 2.b Partie back-end

#### Etape 1
Télécharger la dernière version de l'installer Node.js pour Windows: 
<a href="https://nodejs.org/en/download/" target="_blank">`https://nodejs.org/en/download/`</a><br>
Lancer l'installer Node.js
#### Etape 2
Installer npm
```shell
npm install -g npm@latest
```
### 2.c Partie front-end
Installer Angular
```shell
npm install -g @angular/cli@latest
npm i -g @angular-devkit/core typescript
```

## 3. Mise en place et exécution

### 3.a Création de la base de données
- Aller sur http://localhost:80/phpmyadmin/ <br>
ou http://localhost:8080/phpmyadmin/ (si vous avez changé le port d'écoute d'Apache)<br>
- Créer une nouvelle base de données avec comme nom : 'nara_database' (utf8mb4_bin)<br>
- Aller dans l'onglet "Import" et importer le fichier: Nara-master/Database/nara_database.sql<br>
- Exécuter.

### 3.b Vérification des droits utilisateurs
- Toujours sur phpMyAdmin, retourner au menu d'accueil, aller sur l'onglet "User accounts"
- Vérifier que la colonne mot de passe de l'utilisateur "root", "localhost" est bien à "yes". Sinon éditer les privilèges et changer le mot de passe à "password".  <br>
![Alt text](images/user_account.PNG?raw=true "Title")

### 3.c Exécution back-end
Ouvrir un terminal au niveau du dossier Nara-master/back-end/
```shell
 node server.js 
```

### 3.d Exécution front-end

Ouvrir un terminal au niveau du dossier Nara-master/front-end/
```shell
npm install i @angular-devkit/build-angular
ng serve -o
```
L'application web Nara doit se lancer automatiquement à l'adresse: http://localhost:4200 <br>
Connecter vous avec un des comptes décrits dans la partie 1.c (exemple - Identifiant: Travis, Mdp: password)

## 4. Outils de développement

Installer Visual Studio Code: 
<a href="https://code.visualstudio.com/download" target="_blank">`https://code.visualstudio.com/download`</a> <br>
Ouvrir le dossier du projet dans Visual Studio Code.


