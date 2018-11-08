import './scss/main.scss';
import './img/graph.png';
import './img/graph@2x.png';
import './img/hoover.png';

import renderCards from './js/template';
import initMenu from './js/menu';
import ellipsizeText from './js/ellipsizeText';
import dataEvents from './events.json';
import Framework from './framework/Framework';

/**
 * Рендер главной страницы
 */
function renderMainPage(): void {
    const root = document.querySelector<HTMLElement>('.cards');

    if (!root)
        return;

    root.innerHTML = '';
    renderCards(playerStore, dataEvents);
}

/**
 * Action - смена трека
 * Подставляем данные в виде заглушки
 * @type {{type: string; payload: {artist: string; trackName: string; trackLength: string}}}
 */
const actions = {
    nextTrack: (artist: string, trackName: string, trackLength: string, coverAlbum: string): void => {
        const action = {
            type: 'CHANGE_TRACK',
            payload: {
                artist: artist,
                trackName: trackName,
                trackLength: trackLength,
                coverAlbum: coverAlbum

            }
        };
        framework.dispatch(action);
    }
};

/**
 * Инициализируем начальные данные
 */
interface ICurrentTrack {
    artist: string,
    trackName: string
    trackLength: string
}

const currentTrack = <ICurrentTrack> {
    artist: 'Florence & The Machine',
    trackName: 'Big God',
    trackLength: '4:31',
    coverAlbum: 'https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m200x200'
};

/**
 * Инициализируем библиотку
 * @type {Framework}
 */
const framework = new Framework();

/**
 * Инициализируем начальное состояние
 */
const state = localStorage.getItem('TrackInfo') ?
    JSON.parse(<string>localStorage.getItem('TrackInfo')) :
    currentTrack;

/**
 * Создаем store
 */
const playerStore: {data: {}} = framework.createStore(state);
localStorage.setItem('TrackInfo', JSON.stringify(playerStore.data));

/**
 * Регистрируем коллбеки
 */
framework.register("CHANGE_TRACK", (payload: {}): void => {
    playerStore.data = payload;
    localStorage.setItem('TrackInfo', JSON.stringify(payload));
    renderMainPage();
});

document.addEventListener('DOMContentLoaded', (): void => {
    initMenu();
    renderMainPage();
    let cardTitles: NodeListOf<HTMLElement> = document.querySelectorAll('.card__title');
    ellipsizeText(cardTitles);

    const btnNextTrack = document.querySelector<HTMLElement>('.player__ctrl_type_next');

    if (!btnNextTrack)
        return;

    btnNextTrack.addEventListener('click', () => {
        actions.nextTrack("Beyonce", "single ladies", "3:20", "//avatars.yandex.net/get-music-content/49876/c800fb3b.p.27995/200x200");
    });
});