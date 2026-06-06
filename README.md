# Leoproto Application

Ce document décrit les étapes pour compiler et lancer les parties back-office et front-office de l'application Leoproto, ainsi que les URL d'accès.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre système :

*   **Java Development Kit (JDK) 21** : Nécessaire pour le back-office Spring Boot.
*   **Node.js et npm** : Nécessaire pour le front-office Next.js.

## 1. Back-office (Spring Boot)

Le back-office est une application Spring Boot basée sur Gradle.

### Compilation / Construction

Pour compiler le back-office et générer le fichier JAR exécutable :

1.  Ouvrez un terminal à la racine du projet.
2.  Naviguez vers le répertoire du back-office :
    ```bash
    cd backend
    ```
3.  Exécutez la commande Gradle pour construire le projet :
    ```bash
    ./gradlew build
    ```
    (Sur Windows, utilisez `gradlew build`)

    Cela compilera le code, exécutera les tests et créera un fichier JAR dans le répertoire `backend/build/libs`.

### Lancement de l'application (mode développement)

Pour lancer le back-office en mode développement :

1.  Ouvrez un terminal à la racine du projet.
2.  Naviguez vers le répertoire du back-office :
    ```bash
    cd backend
    ```
3.  Lancez l'application Spring Boot :
    ```bash
    ./gradlew bootRun
    ```
    (Sur Windows, utilisez `gradlew bootRun`)

    L'application démarrera et écoutera généralement sur le port `8080`. Vous verrez des logs indiquant le démarrage de Spring Boot.

### URL d'accès au Back-office (API)

Une fois lancé, le back-office expose son API à l'adresse suivante :

*   **API Root:** `http://localhost:8080`

## 2. Front-office (Next.js)

Le front-office est une application Next.js basée sur Node.js et npm.

### Installation des dépendances

Avant de compiler ou de lancer, vous devez installer les dépendances Node.js :

1.  Ouvrez un terminal à la racine du projet.
2.  Naviguez vers le répertoire du front-office :
    ```bash
    cd frontend
    ```
3.  Installez les dépendances :
    ```bash
    npm install
    # Ou si vous utilisez Yarn :
    # yarn install
    ```

### Compilation / Construction

Pour compiler le front-office pour la production :

1.  Ouvrez un terminal à la racine du projet.
2.  Naviguez vers le répertoire du front-office :
    ```bash
    cd frontend
    ```
3.  Exécutez la commande de construction :
    ```bash
    npm run build
    # Ou si vous utilisez Yarn :
    # yarn build
    ```
    Cela générera les fichiers optimisés pour la production dans le répertoire `.next`.

### Lancement de l'application (mode développement)

Pour lancer le front-office en mode développement (avec rechargement à chaud) :

1.  Ouvrez un terminal à la racine du projet.
2.  Naviguez vers le répertoire du front-office :
    ```bash
    cd frontend
    ```
3.  Lancez l'application Next.js :
    ```bash
    npm run dev
    # Ou si vous utilisez Yarn :
    # yarn dev
    ```
    L'application démarrera et sera accessible sur le port `3000`.

### URL d'accès à l'application (Front-office)

Une fois lancé, le front-office est accessible via votre navigateur à l'adresse suivante :

*   **Application Web:** `http://localhost:3000`

---

## Lancement combiné (Back-office et Front-office)

Vous pouvez lancer les deux applications (back-office et front-office) en mode développement avec une seule commande Gradle depuis la racine du projet.

### Procédure complète pour lancer l'application :

1.  **Ouvrez un terminal** à la racine de votre projet (`/home/nicolas/IdeaProjects/Leoproto`).
2.  **Lancez les deux applications :**
    ```bash
    ./gradlew runAll
    ```
    (Sur Windows, utilisez `gradlew runAll`)

    Cette commande va :
    *   Lancer le back-office (Spring Boot) en arrière-plan. Les logs seront redirigés vers `backend/nohup.out`.
    *   Installer les dépendances du front-office (Next.js) si nécessaire.
    *   Lancer le front-office (Next.js) en arrière-plan. Les logs seront redirigés vers `frontend/nohup.out`.

3.  **Attendez** quelques instants que les deux applications soient complètement démarrées.

4.  **Accédez à l'application :**
    *   Ouvrez votre navigateur web et naviguez vers : `http://localhost:3000`

Vous devriez maintenant voir l'application front-office interagir avec le back-office.

### Arrêt des applications lancées par `runAll`

Étant donné que `runAll` lance les processus en arrière-plan, vous devrez les arrêter manuellement :

1.  Identifiez les processus Java (pour le back-office) et Node.js (pour le front-office) :
    ```bash
    ps aux | grep java
    ps aux | grep node
    ```
2.  Notez les identifiants de processus (PID) des applications Leoproto.
3.  Arrêtez-les en utilisant la commande `kill` :
    ```bash
    kill <PID_du_backoffice>
    kill <PID_du_frontoffice>
    ```
    Vous pouvez également supprimer les fichiers `nohup.out` dans les répertoires `backend` et `frontend` si vous le souhaitez.