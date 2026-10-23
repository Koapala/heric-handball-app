import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
import re

class FFHBScraper:
    def __init__(self):
        self.base_url = "https://www.ff-handball.org"
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })

    def scrape_matches(self, club_id):
        """Scrape les prochains matchs d'un club"""
        try:
            # URL à adapter selon la structure du site FFHB
            url = f"{self.base_url}/competitions/calendrier/{club_id}"
            response = self.session.get(url)
            soup = BeautifulSoup(response.content, 'html.parser')

            matches = []
            # À adapter selon la structure HTML réelle du site
            match_elements = soup.find_all('div', class_='match-item')

            for match in match_elements:
                match_data = {
                    'id': len(matches) + 1,
                    'category': self.extract_text(match, 'category'),
                    'date': self.extract_text(match, 'date'),
                    'time': self.extract_text(match, 'time'),
                    'homeTeam': self.extract_text(match, 'home-team'),
                    'awayTeam': self.extract_text(match, 'away-team'),
                    'location': self.extract_text(match, 'location'),
                    'address': self.extract_text(match, 'address'),
                    'championship': self.extract_text(match, 'championship')
                }
                matches.append(match_data)

            return matches
        except Exception as e:
            print(f"Erreur lors du scraping des matchs: {e}")
            return []

    def scrape_rankings(self, competition_ids):
        """Scrape les classements de plusieurs compétitions"""
        try:
            rankings = {}

            for comp_id, comp_name in competition_ids.items():
                url = f"{self.base_url}/competitions/classement/{comp_id}"
                response = self.session.get(url)
                soup = BeautifulSoup(response.content, 'html.parser')

                ranking_data = []
                # À adapter selon la structure HTML réelle
                rows = soup.find_all('tr', class_='team-row')

                for row in rows:
                    team_data = {
                        'pos': self.extract_number(row, 'position'),
                        'team': self.extract_text(row, 'team-name'),
                        'played': self.extract_number(row, 'played'),
                        'won': self.extract_number(row, 'won'),
                        'draw': self.extract_number(row, 'draw'),
                        'lost': self.extract_number(row, 'lost'),
                        'goalsFor': self.extract_number(row, 'goals-for'),
                        'goalsAgainst': self.extract_number(row, 'goals-against'),
                        'diff': self.extract_number(row, 'diff'),
                        'points': self.extract_number(row, 'points')
                    }
                    ranking_data.append(team_data)

                rankings[comp_name] = ranking_data

            return rankings
        except Exception as e:
            print(f"Erreur lors du scraping des classements: {e}")
            return {}

    def extract_text(self, element, class_name):
        """Extrait le texte d'un élément"""
        try:
            found = element.find(class_=class_name)
            return found.text.strip() if found else ""
        except:
            return ""

    def extract_number(self, element, class_name):
        """Extrait un nombre d'un élément"""
        try:
            text = self.extract_text(element, class_name)
            return int(re.sub(r'[^\d-]', '', text)) if text else 0
        except:
            return 0

    def generate_maps_link(self, location):
        """Génère un lien Google Maps"""
        encoded = location.replace(' ', '+')
        return f"https://www.google.com/maps/search/?api=1&query={encoded}"

    def save_data(self, matches, rankings, filename='data.json'):
        """Sauvegarde les données dans un fichier JSON"""
        data = {
            'lastUpdate': datetime.now().isoformat(),
            'matches': matches,
            'rankings': rankings
        }

        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        print(f"Données sauvegardées dans {filename}")

def main():
    scraper = FFHBScraper()

    # ID du club Héric Handball (à trouver sur le site FFHB)
    club_id = "heric-handball"

    # IDs des compétitions (à adapter)
    competition_ids = {
        'regionale-1-hommes': 'Régionale 1 - Seniors Hommes',
        'regionale-2-femmes': 'Régionale 2 - Seniors Femmes',
        'u18-garcons': 'Départementale - U18 Garçons',
        'u18-filles': 'Départementale - U18 Filles',
        'u15-garcons': 'Départementale - U15 Garçons',
        'u15-filles': 'Départementale - U15 Filles',
        'u13-garcons': 'Départementale - U13 Garçons',
        'u13-filles': 'Départementale - U13 Filles'
    }

    print("Récupération des matchs...")
    matches = scraper.scrape_matches(club_id)

    print("Récupération des classements...")
    rankings = scraper.scrape_rankings(competition_ids)

    print("Sauvegarde des données...")
    scraper.save_data(matches, rankings, '../public/data.json')

    print("Terminé!")

if __name__ == "__main__":
    main()
