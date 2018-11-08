
/**
 * Обрезает заголовок по высоте и добавляет `...` если больше 2 строк
 *
 * @param {NodeListOf<HTMLElement>} el
 */
function ellipsizeText(el: NodeListOf<HTMLElement>): void {
    for (let i = 0; i < el.length; i++) {
        let wordArray = el[i].innerHTML.split(' ');

        while (el[i].scrollHeight > (<HTMLElement>el[i]).offsetHeight) {
            wordArray.pop();
            el[i].innerHTML = wordArray.join(' ') + '...';

        }
    }
}

export default ellipsizeText;