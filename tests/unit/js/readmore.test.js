import { initClampers } from '../../../openlibrary/plugins/openlibrary/js/readmore';
import $ from 'jquery'
describe('initClampers', () => {
    test('clamp removed if not needed', () => {
        const clamper = document.createElement('div');
        clamper.classList.add('clamp');
        jest
            .spyOn(clamper, 'scrollHeight', 'get')
            .mockImplementation(() => 100);
        jest
            .spyOn(clamper, 'clientHeight', 'get')
            .mockImplementation(() => 100);
        initClampers([clamper]);
        expect(clamper.classList.contains('clamp')).toBe(false);

    });

    test('clamp not removed if  needed', () => {
        const clamper = document.createElement('div');
        clamper.classList.add('clamp');
        jest
            .spyOn(clamper, 'scrollHeight', 'get')
            .mockImplementation(() => 100);
        jest
            .spyOn(clamper, 'clientHeight', 'get')
            .mockImplementation(() => 10);
        initClampers([clamper]);
        expect(clamper.classList.contains('clamp')).toBe(true);

    });
    const DUMMY_HTML=`<span class="clamp" data-before="▸ " style="display: unset;">
    <h6>Subjects</h6>
      <a>Ghosts</a>
      <a>Monsters</a>
      <a>Vampires</a>
      <a>Witches</a>
      <a>Challenges and Overcoming Obstacles</a>
      <a>Magic and Supernatural</a>
      <a>Cleverness</a>
      <a>School Life</a>
      <a>school stories</a>
      <a>Wizards</a>
      <a>>Magic</a>
      <a>>MAGIA</a>
      <a>>MAGOS</a>
      <a>Juvenile fiction</a>
      <a>Fiction</a>
      <a>NOVELAS INGLESAS</a>
      <a>Schools</a>
      <a>orphans</a>
      <a>fantasy fiction</a>
      <a>England in fiction</a>
      </span>`;
    test('Clicking anchor tag does not expand',() =>{
        const $clamper =$(DUMMY_HTML);
        initClampers($clamper);
        $clamper.find('a').first().on();
        expect($clamper.css('display')).toBe('unset');
    });

    test('Clicking non-anchor tag does clamp',() => {
        const $clamper =$(DUMMY_HTML);
        initClampers($clamper);
        $clamper.find('h6').first().on();
        expect($clamper.css('display')).not.toBe('unset');

    });

});
