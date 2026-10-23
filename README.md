# Application Héric Handball

Application web pour le club de handball d'Héric avec mise à jour automatique des données depuis la FFHB.

## 🚀 Déploiement sur Netlify

### Option 1 : Déploiement via l'interface Netlify

1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Pushez votre code sur GitHub
3. Sur Netlify, cliquez sur "Add new site" > "Import an existing project"
4. Connectez votre repository GitHub
5. Configuration du build :
   - **Build command**: `pip3 install -r api/requirements.txt && python3 api/scraper.py`
   - **Publish directory**: `public`
6. Cliquez sur "Deploy"

### Option 2 : Déploiement via CLI Netlify

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Déployer
netlify deploy --prod
```

## 📁 Structure du projet

```
heric-handball-app/
├── public/              # Fichiers de l'application web
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   └── data.json       # Données générées par le scraper
├── api/                # Backend de scraping
│   ├── scraper.py      # Script de scraping FFHB
│   └── requirements.txt
├── netlify.toml        # Configuration Netlify
├── package.json
└── README.md
```

## 🔄 Mise à jour des données

### Automatique
Le scraper s'exécute automatiquement à chaque déploiement Netlify.

### Manuelle
```bash
cd api
pip install -r requirements.txt
python scraper.py
```

## ⚙️ Configuration du scraper

Le fichier `api/scraper.py` doit être configuré avec :
- L'ID du club Héric Handball sur le site FFHB
- Les IDs des compétitions à suivre

**Note**: Le scraper est un template. Il faudra l'adapter selon la structure HTML réelle du site FFHB.

## 🛠️ Développement local

1. Ouvrez simplement `public/index.html` dans votre navigateur
2. Pour tester le scraper :
   ```bash
   cd api
   python scraper.py
   ```

## 🎨 Personnalisation

### Couleurs
Les couleurs du club sont définies dans `public/styles.css` :
```css
--primary-color: #D32F2F;    /* Rouge */
--secondary-color: #1a1a1a;  /* Noir */
```

### Données par défaut
Si le scraper échoue, l'application utilise les données par défaut dans `public/app.js`.

## 📝 TODO

- [ ] Trouver les vrais IDs du club et des compétitions sur le site FFHB
- [ ] Adapter le scraper à la structure HTML du site FFHB
- [ ] Configurer un cron job pour mettre à jour les données quotidiennement
- [ ] Ajouter un système de cache pour les données

## 🌐 Site en ligne

Une fois déployé, votre application sera accessible via une URL du type :
`https://heric-handball.netlify.app`

Vous pouvez personnaliser cette URL dans les paramètres Netlify.

## 📧 Support

Pour toute question sur le déploiement ou la configuration, consultez la [documentation Netlify](https://docs.netlify.com/).
