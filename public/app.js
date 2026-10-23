// Chargement des données depuis l'API/JSON
let teamsData = [];
let matchesData = [];
let rankingData = {};
let newsData = [];

// Fonction pour charger les données
async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // Si les données scrappées existent, les utiliser
        if (data.matches && data.matches.length > 0) {
            matchesData = data.matches;
        } else {
            matchesData = getDefaultMatches();
        }

        if (data.rankings && Object.keys(data.rankings).length > 0) {
            rankingData = data.rankings;
        } else {
            rankingData = getDefaultRankings();
        }

        teamsData = getDefaultTeams();
        newsData = getDefaultNews();

    } catch (error) {
        console.log('Chargement des données par défaut...');
        matchesData = getDefaultMatches();
        rankingData = getDefaultRankings();
        teamsData = getDefaultTeams();
        newsData = getDefaultNews();
    }
}

function getDefaultTeams() {
    return [
        { name: "Seniors Masculins", category: "Séniors Hommes", training: "Lundi et Jeudi 20h-22h", championship: "Régionale 1" },
        { name: "Seniors Féminines", category: "Séniors Femmes", training: "Mardi et Vendredi 20h-22h", championship: "Régionale 2" },
        { name: "-18 Masculins", category: "U18 Garçons", training: "Mercredi 18h-20h, Vendredi 19h-20h30", championship: "Départementale" },
        { name: "-18 Féminines", category: "U18 Filles", training: "Mercredi 18h-20h, Vendredi 19h-20h30", championship: "Départementale" },
        { name: "-15 Masculins", category: "U15 Garçons", training: "Mercredi 17h-18h30, Vendredi 18h-19h30", championship: "Départementale" },
        { name: "-15 Féminines", category: "U15 Filles", training: "Mercredi 17h-18h30, Vendredi 18h-19h30", championship: "Départementale" },
        { name: "-13 Masculins", category: "U13 Garçons", training: "Mercredi 16h-17h30, Samedi 14h-15h30", championship: "Départementale" },
        { name: "-13 Féminines", category: "U13 Filles", training: "Mercredi 16h-17h30, Samedi 14h-15h30", championship: "Départementale" },
        { name: "-11 Masculins", category: "U11 Garçons", training: "Mercredi 14h-15h30, Samedi 10h-11h30", championship: "Plateau Départemental" },
        { name: "-11 Féminines", category: "U11 Filles", training: "Mercredi 14h-15h30, Samedi 10h-11h30", championship: "Plateau Départemental" },
        { name: "-9 Mixte", category: "U9 Mixte", training: "Mercredi 14h-15h, Samedi 9h-10h", championship: "Initiation" },
        { name: "Baby Hand", category: "U7 Mixte", training: "Samedi 9h-10h", championship: "Découverte" }
    ];
}

function getDefaultMatches() {
    return [
        { id: 1, category: "Seniors Masculins", date: "Samedi 12 Septembre 2026", time: "20h00", homeTeam: "HÉRIC HANDBALL", awayTeam: "HBC Blain", location: "Gymnase Municipal d'Héric", address: "Rue du Stade, 44810 Héric", mapsLink: "https://www.google.com/maps/search/?api=1&query=Gymnase+Municipal+Héric", championship: "Régionale 1 - Seniors Hommes" },
        { id: 2, category: "Seniors Masculins", date: "Samedi 19 Septembre 2026", time: "18h30", homeTeam: "Nantes Atlantique HB", awayTeam: "HÉRIC HANDBALL", location: "Salle Métropolitaine", address: "Boulevard de l'Estuaire, 44200 Nantes", mapsLink: "https://www.google.com/maps/search/?api=1&query=Salle+Métropolitaine+Nantes", championship: "Régionale 1 - Seniors Hommes" },
        { id: 3, category: "Seniors Féminines", date: "Samedi 12 Septembre 2026", time: "18h00", homeTeam: "HÉRIC HANDBALL", awayTeam: "Carquefou HB", location: "Gymnase Municipal d'Héric", address: "Rue du Stade, 44810 Héric", mapsLink: "https://www.google.com/maps/search/?api=1&query=Gymnase+Municipal+Héric", championship: "Régionale 2 - Seniors Femmes" },
        { id: 4, category: "Seniors Féminines", date: "Dimanche 20 Septembre 2026", time: "15h00", homeTeam: "Orvault Handball", awayTeam: "HÉRIC HANDBALL", location: "Complexe Sportif Orvault", address: "Rue des Sports, 44700 Orvault", mapsLink: "https://www.google.com/maps/search/?api=1&query=Complexe+Sportif+Orvault", championship: "Régionale 2 - Seniors Femmes" },
        { id: 5, category: "-18 Masculins", date: "Samedi 12 Septembre 2026", time: "16h00", homeTeam: "HÉRIC HANDBALL", awayTeam: "Rezé Handball", location: "Gymnase Municipal d'Héric", address: "Rue du Stade, 44810 Héric", mapsLink: "https://www.google.com/maps/search/?api=1&query=Gymnase+Municipal+Héric", championship: "Départementale - U18 Garçons" },
        { id: 6, category: "-18 Féminines", date: "Dimanche 13 Septembre 2026", time: "14h00", homeTeam: "Bouguenais HB", awayTeam: "HÉRIC HANDBALL", location: "Gymnase Bouguenais", address: "Avenue du Général de Gaulle, 44340 Bouguenais", mapsLink: "https://www.google.com/maps/search/?api=1&query=Gymnase+Bouguenais", championship: "Départementale - U18 Filles" },
        { id: 7, category: "-15 Masculins", date: "Samedi 12 Septembre 2026", time: "14h00", homeTeam: "HÉRIC HANDBALL", awayTeam: "Saint-Sébastien HB", location: "Gymnase Municipal d'Héric", address: "Rue du Stade, 44810 Héric", mapsLink: "https://www.google.com/maps/search/?api=1&query=Gymnase+Municipal+Héric", championship: "Départementale - U15 Garçons" },
        { id: 8, category: "-15 Féminines", date: "Samedi 12 Septembre 2026", time: "15h30", homeTeam: "Sainte-Luce HB", awayTeam: "HÉRIC HANDBALL", location: "Salle Omnisports Sainte-Luce", address: "Rue de la Loire, 44980 Sainte-Luce-sur-Loire", mapsLink: "https://www.google.com/maps/search/?api=1&query=Salle+Omnisports+Sainte+Luce", championship: "Départementale - U15 Filles" },
        { id: 9, category: "-13 Masculins", date: "Samedi 12 Septembre 2026", time: "10h00", homeTeam: "HÉRIC HANDBALL", awayTeam: "Couëron HB", location: "Gymnase Municipal d'Héric", address: "Rue du Stade, 44810 Héric", mapsLink: "https://www.google.com/maps/search/?api=1&query=Gymnase+Municipal+Héric", championship: "Départementale - U13 Garçons" },
        { id: 10, category: "-13 Féminines", date: "Samedi 12 Septembre 2026", time: "11h30", homeTeam: "HBC Blain", awayTeam: "HÉRIC HANDBALL", location: "Gymnase Blain", address: "Rue du Château, 44130 Blain", mapsLink: "https://www.google.com/maps/search/?api=1&query=Gymnase+Blain", championship: "Départementale - U13 Filles" }
    ];
}

function getDefaultRankings() {
    return {
        "Régionale 1 - Seniors Hommes": [
            { pos: 1, team: "Nantes Atlantique HB", played: 0, won: 0, draw: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, diff: 0, points: 0 },
            { pos: 2, team: "Saint-Sébastien HB", played: 0, won: 0, draw: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, diff: 0, points: 0 },
            { pos: 3, team: "HÉRIC HANDBALL", played: 0, won: 0, draw: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, diff: 0, points: 0 }
        ],
        "Régionale 2 - Seniors Femmes": [
            { pos: 1, team: "Carquefou HB", played: 0, won: 0, draw: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, diff: 0, points: 0 },
            { pos: 2, team: "HÉRIC HANDBALL", played: 0, won: 0, draw: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, diff: 0, points: 0 }
        ]
    };
}

function getDefaultNews() {
    return [
        { title: "Début de saison 2026/27", date: "Septembre 2026" },
        { title: "Inscriptions ouvertes", date: "Juin 2026" }
    ];
}

function initNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function displayTeams() {
    const teamsList = document.getElementById('teams-list');
    teamsData.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        teamCard.innerHTML = `
            <div class="team-card-header"><h3>${team.name}</h3><div class="category">${team.category}</div></div>
            <div class="team-card-body"><div class="team-info">
                <div class="team-info-item"><strong>🏆 Championnat:</strong><span>${team.championship}</span></div>
                <div class="team-info-item"><strong>🕐 Entraînement:</strong><span>${team.training}</span></div>
            </div></div>`;
        teamsList.appendChild(teamCard);
    });
}

function displayMatches() {
    const matchesList = document.getElementById('matches-list');
    matchesData.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.innerHTML = `
            <div class="match-category">${match.category}</div>
            <div class="match-date">${match.date} - ${match.time}</div>
            <div class="team home"><div class="team-name">${match.homeTeam}</div></div>
            <div class="match-vs">VS</div>
            <div class="team away"><div class="team-name">${match.awayTeam}</div></div>
            <div class="match-info">📍 ${match.location}<br>${match.address}<br>
            <a href="${match.mapsLink}" target="_blank" class="maps-link">🗺️ Voir sur Google Maps</a><br>
            <span style="color: #999; font-size: 0.85rem;">${match.championship}</span></div>`;
        matchesList.appendChild(matchCard);
    });
}

function displayRanking() {
    const rankingContainer = document.getElementById('ranking-body').parentElement.parentElement;
    rankingContainer.innerHTML = '';
    Object.keys(rankingData).forEach(championship => {
        const section = document.createElement('div');
        section.className = 'ranking-section';
        const title = document.createElement('h3');
        title.className = 'ranking-title';
        title.textContent = championship;
        section.appendChild(title);
        const tableContainer = document.createElement('div');
        tableContainer.className = 'table-container';
        const table = document.createElement('table');
        table.innerHTML = `<thead><tr><th>Pos.</th><th>Équipe</th><th>J</th><th>G</th><th>N</th><th>P</th><th>Buts +</th><th>Buts -</th><th>Diff</th><th>Pts</th></tr></thead><tbody></tbody>`;
        const tbody = table.querySelector('tbody');
        rankingData[championship].forEach(team => {
            const row = document.createElement('tr');
            if (team.team === "HÉRIC HANDBALL") row.classList.add('highlight');
            row.innerHTML = `<td>${team.pos}</td><td>${team.team}</td><td>${team.played}</td><td>${team.won}</td><td>${team.draw}</td><td>${team.lost}</td><td>${team.goalsFor}</td><td>${team.goalsAgainst}</td><td>${team.diff > 0 ? '+' : ''}${team.diff}</td><td><strong>${team.points}</strong></td>`;
            tbody.appendChild(row);
        });
        tableContainer.appendChild(table);
        section.appendChild(tableContainer);
        rankingContainer.appendChild(section);
    });
}

function displayNextMatchPreview() {
    const nextMatch = matchesData[0];
    document.getElementById('next-match-preview').innerHTML = `
        <div style="margin-bottom: 1rem;"><strong style="color: var(--secondary-color);">${nextMatch.date}</strong></div>
        <div style="font-size: 1.1rem; margin: 0.5rem 0;"><strong>${nextMatch.homeTeam}</strong> vs <strong>${nextMatch.awayTeam}</strong></div>
        <div style="color: #666; font-size: 0.9rem;">${nextMatch.time} - ${nextMatch.location}</div>
        <div style="margin-top: 0.5rem; font-size: 0.85rem; color: #999;">${nextMatch.category}</div>`;
}

function displayRankingPreview() {
    const firstChampionship = Object.keys(rankingData)[0];
    const hericRanking = rankingData[firstChampionship]?.find(team => team.team === "HÉRIC HANDBALL");
    if (hericRanking) {
        document.getElementById('ranking-preview').innerHTML = `
            <div style="font-size: 2rem; font-weight: bold; color: var(--primary-color); margin: 1rem 0;">${hericRanking.pos}<sup>e</sup></div>
            <div style="margin-top: 0.5rem;">${hericRanking.points} points • ${hericRanking.played} matchs</div>
            <div style="margin-top: 0.5rem; color: #666; font-size: 0.9rem;">${hericRanking.won}V - ${hericRanking.draw}N - ${hericRanking.lost}D</div>
            <div style="margin-top: 0.5rem; font-size: 0.85rem; color: #999;">${firstChampionship}</div>`;
    }
}

function displayNewsPreview() {
    document.getElementById('news-preview').innerHTML = newsData.map(news => `
        <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
            <div style="font-weight: 500; margin-bottom: 0.25rem;">${news.title}</div>
            <div style="font-size: 0.85rem; color: #666;">${news.date}</div>
        </div>`).join('');
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    initNavigation();
    displayTeams();
    displayMatches();
    displayRanking();
    displayNextMatchPreview();
    displayRankingPreview();
    displayNewsPreview();
});
