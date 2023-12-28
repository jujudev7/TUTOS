# Faire interagir JavaScript avec une page web
## Récupérer un élément d’une page web
Appréhendez la structure d’une page web
Généralement, une page web est constituée de deux parties :  
    • head qui donne des informations générales sur la page ;  
    • un body qui contient ce qui est affiché dans la page. 
```
<body>
    <header>
        <h1>AzerType</h1>
    </header>

    <main>
        <div>
            <h2>Le jeu</h2>
            <p>Un petit texte</p>
        </div>
        <div>
            <h2>Une autre div</h2>
            <p>Un autre texte</p>
        </div>
    </main>

    <footer>
        @Copyright : OpenClassrooms.
    </footer>
</body>
```
Ce code HTML est simple. Il est constitué d’un header avec un titre, d’un corps (main) et d’un footer.

Ce code est un peu structuré comme un arbre, c’est pourquoi on appelle cette structure **l’arbre DOM (Document Object Model**, ou modèle objet du document, en français). 

En fait, JavaScript ne lit pas une page HTML comme du simple texte. Il la représente comme une structure organisée en **parents/enfants**, et composée de **nœuds** qui représentent des **balises**.

Dans la structure ci-dessus :  
    • le body en haut représente la racine de l’arbre DOM ;  
    • de cette racine se déploient des branches (en bleu sur l’image) ;  
    • ces branches mènent à des nœuds : header, main, footer, h1, h2, div, p… ;  
    • les branches se terminent généralement par une feuille : texte. 

En développement informatique, on dit que header, main et footer sont les nœuds enfants de body, et que body est le parent de ces nœuds.

Chaque nœud de cet arbre DOM (header, main, div…) est un objet HTMLElement. Pour le dire autrement, JavaScript a regroupé dans un même objet 2 choses :  
    • les informations sur cet objet (son nom, son id, sa position, etc.) : ce sont les propriétés de l’objet ;  
    • ce que cet objet est capable de faire (réagir au clic, par exemple) : ce sont les méthodes. 

Dans ce cours, nous explorons plusieurs propriétés et méthodes, mais il en existe d’autres. Si vous voulez en savoir plus, la documentation est à votre disposition.

## Récupérez un élément du DOM

Utilisez **defer** pour différer l’exécution du script

Pour manipuler le DOM, JavaScript doit ainsi construire une variable globale, document, qui est donc accessible depuis n’importe où dans notre code.   Cependant, pour construire cette variable, la page HTML doit être chargée en entier. Or, le script étant lancé dans la balise head, avant que le body ne s’affiche à l’écran, la page HTML n’existe pas encore. 

Nous devons donc attendre que la page ait fini de charger avant d’utiliser la variable document.
Pour résoudre ce problème, la méthode la plus efficace est d’ajouter le mot-clé defer dans la balise script. Concrètement, cela revient à demander au navigateur “Si tu rencontres la balise script, diffère sa prise en compte et attends que la page soit chargée.”
```
<script src="scripts/config.js" defer></script>
<script src="scripts/script.js" defer></script>
<script src="scripts/main.js" defer></script>
```
## Utiliser différentes syntaxes pour récupérer un élément
JavaScript propose tout un éventail de méthodes pour récupérer les éléments du DOM. Dans ce chapitre, nous en aborderons trois :
```
    • getElementById ;
    • querySelector ;
    • querySelectorAll.
```
Il existe bien sûr d’autres méthodes, et je vous invite d’ailleurs à les découvrir par vous-même. L’essentiel est de choisir la méthode la plus adaptée à la problématique suivante : cibler le ou les éléments qui nous intéressent au milieu d’une page HTML souvent très conséquente. 

## Récupérer un élément avec getElementById

La première méthode, et probablement la plus simple, est **getElementById**. Comme son nom l’indique, elle permet de récupérer un élément en fournissant son id en paramètre.

Dans notre application par exemple, nous affichions jusqu’à maintenant le mot à recopier dans le texte du prompt. Désormais, notre objectif est de l’afficher dans une zone de la page dédiée.
Pour cela, nous pouvons commencer par créer une div dans le HTML. Pour la distinguer des autres, nous lui fournissons un id :
```
<body>
    <div id="zoneProposition">Cachalot</div>
</body>
```
Pour accéder à cette balise, nous allons donc écrire :
```
let baliseZoneProposition = document.getElementById("zoneProposition");
console.log(baliseZoneProposition);
```
Ici, nous avons demandé à JavaScript, depuis document, donc toute la page : “Trouve-moi un élément HTML qui a pour id zoneProposition”. Puis nous avons mis le résultat dans la variable baliseZoneProposition. 

JavaScript propose beaucoup de **propriétés** et de **méthodes** sur les objets HTLMElement. Pour vous, ce sont autant d’opportunités d’aller les piocher en fonction de vos besoins !

Enfin, comme pour n’importe quel objet en JavaScript, vous pouvez accéder aux propriétés de votre nœud grâce au point “.” .
Par exemple, pour afficher la hauteur de l’élément dans votre console, vous pouvez écrire :
```
console.log(baliseZoneProposition.clientHeight);
```

## Récupérez un élément QuerySelector
Lorsqu’on a un id sur nos éléments, document.getElementById est une bonne option pour les récupérer. Malheureusement, il arrive régulièrement que ça ne soit pas le cas !
JavaScript a donné une réponse intuitive à ce problème : utiliser les sélecteurs CSS. 
```
<body>
    <div id="zoneProposition">
        Entrez le mot : <span>Cachalot</span>
    </div>
</body>
```
Pour mettre le mot Cachalot en gras en CSS, nous aurions écrit :
```
#zoneProposition span {
    font-weight: bold;
}
```
Ce code signifie : “Il faut mettre la police d’écriture en gras pour tous les span contenus dans un élément qui a l’id zoneProposition.”  
querySelector permet de trouver le premier élément qui correspond au sélecteur CSS proposé :
```
let baliseZonePropositionSpan = document.querySelector("#zoneProposition span");
console.log(baliseZonePropositionSpan);
```
Notez que  #  est présent devant l’id, comme on l’écrirait en CSS, alors que ce  #  n’était pas nécessaire avec getElementById.

Récupérez plusieurs éléments avec QuerySelectorAll
Ici, le principe est le même que pour tous les éléments dans une liste de type NodeList (ou liste de nœuds, en français) :
```
<body>
    <div class="zoneChoix">
        <input type="radio" name="optionSource" id="mots" value="1" checked>
        <label for="mots">Mots</label>
        <input type="radio" name="optionSource" id="phrases" value="2">
        <label for="phrases">Phrases</label>
    </div>
    <div class="zoneProposition">
        Entrez le mot : <span>Cachalot</span>
    </div>
</body>
```
Pour récupérer tous les inputs de type radio d’un seul coup, je peux donc écrire :
```
let listeInputRadio = document.querySelectorAll(".zoneChoix input");
console.log(listeInputRadio);
```
Notez qu'on'écrit .zoneChoix et pas #, car ici, on a mis une classe à la div et pas un id.

Nous allons devoir parcourir les différents éléments de cette liste un par un pour y accéder. Nous utiliserons donc une boucle :
```
for (let i = 0; i < listeInputRadio.length; i++) {
    console.log(listeInputRadio[i]);
}
```

## En résumé
    • Une page web est constituée de balises HTML, et repose sur une structure que l’on appelle DOM. Cette structure permet de relier les balises entre elles.
    
    • Pour récupérer un élément du DOM :
        ◦ utilisez defer dans l’inclusion de vos fichiers JS pour retarder leur prise en compte, afin que la variable document ait le temps d’être créée ; 
        ◦ partez du point d’entrée du DOM : la variable document ;
        ◦ utilisez les méthodes adaptées : getElementById, querySelector ou querySelectorAll.