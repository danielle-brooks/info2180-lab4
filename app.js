window.onload = () => {
    const button = document.getElementById('searchBtn');

    button.addEventListener('click', async () => {
        const query = document.getElementById('searchField').value.trim();
        const resultDiv = document.getElementById('result');

        try {
            let response;

            if (query !== "") {
                response = await fetch(`superheroes.php?query=${encodeURIComponent(query)}`);
            } else {
                response = await fetch('superheroes.php');
            }

            const text = await response.text();
            resultDiv.innerHTML = text;
        } catch (error) {
            resultDiv.innerHTML = `<p>Error fetching data.</p>`;
        }
    });
};
