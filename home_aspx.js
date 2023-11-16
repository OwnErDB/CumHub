let cards = document.getElementsByClassName('cards')[0];

        let json_url = "home_aspx.json";

        fetch(json_url).then(Response => Response.json())
            .then((data) => {
                data.forEach((ele, i) => {
                    let { name, sposter, url, alt_name } = ele;
                    let card = document.createElement('a');
                    card.classList.add('card');
                    card.href = url;
                    card.innerHTML = `
                    <a href="${url}" target="_blank"class="gia_derza_head flex-dir card">
                        <label for="Image" class="label">${name}</label>
                        <img src="${sposter}" name="image" alt="${name}" class="gia_derza_img blur">
                    </a>
                `
                    cards.appendChild(card);
                });
            });