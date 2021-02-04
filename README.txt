Pour lancer l'app, vous pouvez passer par docker en buildant et le bot se lancera tout seul.
Soit en testant directement, soit en lançant node index.js le seul problème lorsque vous utiliserez la commande prefix il faudra relancer l'app.
C'est pour cela que dans mon docker je lance avec la commande npx nodemon, comme ça dès qu'il y a un changement dans un des fichiers de mon projet, il rebuild l'app.


Liste des commandes du bot : 
Le préfixe de base est %

%help             (= affiche toutes les commandes qu'on peut utiliser)
%ping             (= affiche une reponse du bot avec la latence)
%clearAll         (= supprime tous les messages du channel)
%joke             (= renvoie une blague random)
%joke 5           (= renvoie la blague avec l'id 5)
%joke nerdy       (= renvoie une blague random d'une catégorie proposée)
%joke banana      (= renvoie erreur)
%jokeCategories   (= affiche les catégories des blagues qu'on peut choisir)
%jokeCount        (= affiche le nombre de blagues proposées par l'API)


Les commandes jokes peuvent mettre un peu de temps à s'éxécuter
