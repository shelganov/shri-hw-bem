interface IJson {
    events: {
        type: string,
        size: string,
        icon?: string,
        title: string,
        source: string,
        time: string,
        description: string,
        data?: {
            temperature?: number,
            humidity?: number,
            artist?: string,
            track?: {
                name?: string,
                length?: string
            },
            volume?: string,
            albumcover?: string,
            buttons?: [string, string]
        },
    }[]
}

/**
 * Функция вывода шаблона карточки
 * @param playerStore
 * @param {IJson} events - json файл с элементами
 */
function renderCards(playerStore: any, events: IJson): void {
    const root = <HTMLElement>document.querySelector('.Cards');
    let templateBase: HTMLTemplateElement | null = <HTMLTemplateElement>document.getElementById('TplBase');
    let templatePlayer: HTMLTemplateElement | null = <HTMLTemplateElement>document.getElementById('TplPlayer');
    let clone: Node;
    let card: HTMLDivElement | null;
    let cardIcon: HTMLDivElement | null;
    let cardTitle: HTMLDivElement | null;
    let cardSource: HTMLDivElement | null;
    let cardTime: HTMLDivElement | null;
    let cardContent: HTMLDivElement | null;

    if (templateBase === null)
        return;

    for (let i = 0; i < events.events.length; i++) {
        clone = (<Node>templateBase.content).cloneNode(true);
        card = (<HTMLDivElement>clone).querySelector('.Card');

        if (card === null)
            return;

        cardIcon = card.querySelector('.Icon');

        if (cardIcon === null)
            return;

        cardTitle = card.querySelector('.Card-Title');

        if (cardTitle === null)
            return;

        cardSource = card.querySelector('.Card-Source');

        if (cardSource === null)
            return;

        cardTime = card.querySelector('.Card-Time');

        if (cardTime === null)
            return;

        card.classList.add(`Card_type_${events.events[i].type}`);
        card.classList.add(`Card_size_${events.events[i].size}`);
        cardIcon.classList.add(`Icon_thumb_${events.events[i].icon}`);
        cardTitle.innerHTML = events.events[i].title;
        cardSource.innerHTML = events.events[i].source;
        cardTime.innerHTML = events.events[i].time;

        let cardTopContent = document.createElement('div');
        cardTopContent.classList.add('Card-Wrap');

        let cardCross = document.createElement('div');
        cardCross.classList.add('Card-Cross');

        let cardNext = document.createElement('div');
        cardNext.classList.add('Card-Next');

        // Тип карточки - критический
        if (events.events[i].type == 'critical') {
            card.innerHTML += `<div class="Card-content"></div>`;
        }

        // Блок с описанием
        if (events.events[i].description) {
            let cloneText = document.createElement('div');
            cloneText.classList.add('Card-Text');
            cloneText.innerHTML = events.events[i].description;

            if (events.events[i].type == 'critical') {
                cardContent = card.querySelector('.Card-Content');

                if (cardContent === null)
                    return;

                cardContent.appendChild(cloneText);
                // cardContent.appendChild(cloneText);
            } else
                card.appendChild(cloneText);
        }

        // Блок с температурой и влажностью
        if (events.events[i].icon == 'thermal') {
            let cloneSpecial = document.createElement('div');
            cloneSpecial.classList.add('Card-Special');
            let cloneTemp = document.createElement('div');
            let cloneWet = document.createElement('div');
            cloneTemp.classList.add('Card-Temperature');
            cloneWet.classList.add('Card-Wet');

            cloneTemp.innerHTML = `
            Температура: 
            <span class="text-bold Card-temperature-val">${events.events[i].data!.temperature}</span>
            <span class="text-bold"> C</span>`;

            cloneWet.innerHTML = `
            Влажность:
            <span class="text-bold Card-wet-val">${events.events[i].data!.humidity}</span>
            <span class="text-bold"> %</span>`;

            cloneSpecial.appendChild(cloneTemp);
            cloneSpecial.appendChild(cloneWet);
            card.appendChild(cloneSpecial)
        }

        // Блок с плеером
        if (events.events[i].icon == 'music') {
            let clonePlayer = <HTMLElement>templatePlayer.content.cloneNode(true);

            if (!events.events[i].data || !events.events[i].data!.artist) {
                return;
            }

            const artist = clonePlayer.querySelector('.Player-Track-artist'),
                  trackName = clonePlayer.querySelector('.Player-Track-name'),
                  trackLength = clonePlayer.querySelector('.Player-Track-length'),
                  sliderValLength = clonePlayer.querySelector('.vol-slider-val__length'),
                  playerCover = clonePlayer.querySelector('.Player-Cover');


            if (artist == null ||
                trackName == null ||
                trackLength == null ||
                sliderValLength == null ||
                playerCover == null) {
                return;
            }

            artist.innerHTML = playerStore.data["artist"] ?
                <string>playerStore.data["artist"] : <string>events.events[i].data!.artist;
            trackName.innerHTML = playerStore.data["trackName"] ?
                <string>playerStore.data["trackName"] : <string>events.events[i].data!.track!.name;
            trackLength.innerHTML = playerStore.data["trackLength"] ?
                <string>playerStore.data["trackLength"] : <string>events.events[i].data!.track!.length;
            sliderValLength.innerHTML = <string>events.events[i].data!.volume;
            (<HTMLElement>playerCover).style.backgroundImage = playerStore.data["coverAlbum"] ?
                `url(${<string>playerStore.data["coverAlbum"]})` :
                `url(${events.events[i].data!.albumcover})`;

            card.appendChild(clonePlayer);
        }

        // Блок с кнопками
        if (events.events[i].icon == 'fridge') {
            let btnBlock = document.createElement('div');
            btnBlock.classList.add('Card-Buttons');
            btnBlock.innerHTML = `
                <button class="Btn btn_color_brand">${events.events[i].data!.buttons![0]}</button>
                <button class="Btn">${events.events[i].data!.buttons![1]}</button>
            `;

            card.appendChild(btnBlock);
        }

        // Картинка с графом
        if (events.events[i].icon == 'stats') {
            let imgBlock = document.createElement('div');
            imgBlock.classList.add('Card-img');
            imgBlock.innerHTML = `<img class="ImageGraph"
                                       src="dist/img/graph.png"
                                       srcset="dist/img/graph@2x.png 2x,
                                               dist/img/graph@3x.png 3x" alt="">`;

            if (events.events[i].type == 'critical') {
                (<Node>card.querySelector('.Card-Content')).appendChild(imgBlock);
            } else
                card.appendChild(imgBlock);
        }

        // Картинка с пылесосом
        if (events.events[i].icon == 'cam') {
            let imgBlock = document.createElement('div');
            imgBlock.classList.add('Card-Img','ImageHoover');
            imgBlock.style.backgroundImage = `url(dist/img/hoover.png)`;

            if (events.events[i].type == 'critical') {
                (<Node>card.querySelector('.Card-Content')).appendChild(imgBlock);
            } else
                card.appendChild(imgBlock);
        }

        // Добавляем дочерние элементы в обертку, кроме последнего
        let cardChildren = card.querySelectorAll(`.Card>*`);

        for (let q = 0; q < cardChildren.length - 1; q++) {
            cardTopContent.appendChild(cardChildren[q]);
        }

        card.insertBefore(cardCross,card.firstChild);
        card.insertBefore(cardNext,card.firstChild);
        card.insertBefore(cardTopContent, card.firstChild);
        root.appendChild(clone);
    }
}

export default renderCards;