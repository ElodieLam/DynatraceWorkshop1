# DynatraceWorkshop1

## Description du projet
on NodeJS, Angular project

## Installation
(Windows seulement)

### Partie base de données

#### Etape 1
Télécharger XAMPP v. 5.6.40 / PHP 5.6.40 :
<a href="https://www.apachefriends.org/fr/download.html" target="_blank">`https://www.apachefriends.org/fr/download.html`</a>

#### Etape 2
Installer XAMPP.

#### Etape 3
Lancer les modules Apache et MySQL ("Start" dans XAMPP).<br>
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

#### Etape 4
Dans XAMPP, au niveau de MySql cliquer sur "config".<br>
Dans le fichier *my.ini*, décommenter la ligne:
```shell
#password = password     
```

#### Etape 5
Stop et Restart Apache et MySql.

### Partie back-end

#### Etape 1
Télécharger Node.js: 
<a href="https://nodejs.org/en/download/" target="_blank">`https://nodejs.org/en/download/`</a><br>
Installer Node.js
#### Etape 2
Installer npm
```shell
npm install -g npm@latest
```
#### Etape 3
Installer Angular
```shell
npm install -g @angular/cli@latest
npm i -g @angular-devkit/core typescript
```

## Mise en place 

### Création de la base de données

- Aller sur http://localhost:80/phpmyadmin/ <br>
ou http://localhost:8080/phpmyadmin/ (si vous avez changé le port d'écoute d'Apache)<br>
- Créer une nouvelle base de données avec comme nom : 'nara_database' (utf8mb4_bin)<br>
- Aller dans l'onglet "Import" et importer le fichier: Nara-master/Database/nara_database.sql<br>
- Exécuter.

### back-end

Ouvrir un terminal sur Nara-master/back-end/
```shell
$ node server.js 
```
Tous les ports doivent s'afficher.

### front-end

Ouvrir un terminal sur  Nara-master/front-end/
```shell
npm install i @angular-devkit/build-angular
ng serve -o
```
L'application web Nara doit se lancer automatiquement à l'adresse: http://localhost:4200
