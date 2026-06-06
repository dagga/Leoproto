# Leoproto Application

Ce document décrit les étapes pour compiler et lancer les parties back-office et front-office de l'application Leoproto, ainsi que les URL d'accès.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre système :

*   **Java Development Kit (JDK) 21** : Nécessaire pour le back-office Spring Boot.
*   **Node.js et npm** : Nécessaire pour le front-office Next.js.


Le back-office est une application Spring Boot basée sur Gradle.

### Compilation / Construction

Pour compiler le back-office et générer le fichier JAR exécutable :

2.  Naviguez vers le répertoire du back-office :
    ```bash
    ```
3.  Exécutez la commande Gradle pour construire le projet :
    ```bash
    ./gradlew build
    ```



Pour lancer le back-office en mode développement :

2.  Naviguez vers le répertoire du back-office :
    ```bash
    ```
3.  Lancez l'application Spring Boot :
    ```bash
    ./gradlew bootRun
    ```

    L'application démarrera et écoutera généralement sur le port `8080`. Vous verrez des logs indiquant le démarrage de Spring Boot.

### URL d'accès au Back-office (API)

Une fois lancé, le back-office expose son API à l'adresse suivante :

*   **API Root:** `http://localhost:8080`

## 2. Front-office (Next.js)


### Installation des dépendances

Avant de compiler ou de lancer, vous devez installer les dépendances Node.js :

2.  Naviguez vers le répertoire du front-office :
    ```bash
    ```
3.  Installez les dépendances :
    ```bash
    npm install
    # Ou si vous utilisez Yarn :
    # yarn install
    ```

### Compilation / Construction

Pour compiler le front-office pour la production :

2.  Naviguez vers le répertoire du front-office :
    ```bash
    ```
3.  Exécutez la commande de construction :
    ```bash
    npm run build
    ```
    Cela générera les fichiers optimisés pour la production dans le répertoire `.next`.

### Lancement de l'application (mode développement)

Pour lancer le front-office en mode développement (avec rechargement à chaud) :

2.  Naviguez vers le répertoire du front-office :
    ```bash
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




    *   Ouvrez votre navigateur web et naviguez vers : `http://localhost:3000`

Vous devriez maintenant voir l'application front-office interagir avec le back-office.