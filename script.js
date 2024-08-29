document.getElementById('toggleButton').addEventListener('click', function() {
    const allPlayers = document.getElementById('allPlayers');
    const button = this;

    if (allPlayers.style.display === 'none') {
        allPlayers.style.display = 'block';
        button.textContent = 'Hide Full Leaderboard';
    } else {
        allPlayers.style.display = 'none';
        button.textContent = 'View Full Leaderboard';
    }
});
