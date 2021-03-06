import React from 'react';
import fry from '../img/fry.gif';
import { TodoItem } from './TodoItem';

const SELECTED_COMPANY_KEY = 'selectedCompany';

const ststicContent = () => {
  const companyKey = localStorage.getItem(SELECTED_COMPANY_KEY);
  const isAmende = companyKey === 'Amende';

  return (
    <>
      {!isAmende && (
        <div>
          <a href="/game/index.html" className="game-button">
            KnowIts navnespill
          </a>
        </div>
      )}
      <h2>Nooblisten</h2>
      <div id="fry">
        Good news everyone! You have completed all the tasks. A+. Well done!
        <br />
        Nå gjenstår bare to små ting:
        <br />
        <ul>
          <li>
            <b>Si ifra til</b> Christer Kjellesvig eller Michael Johansen at du
            har kommet hit 🎁
            <br />
          </li>
          <li>
            <b>Om du vil,</b> send feedback om BrowseIt til&nbsp;
            <a href="mailto:michael.johansen@knowit.no">
              michael.johansen@knowit.no
            </a>
            &nbsp; om hva som kunne vært bedre til neste år
          </li>
        </ul>
        <img src={fry} alt="" />
      </div>

      <div id="noob_description">
        <ul>
          <li>Nooblisten er ikke i rekkefølge, bare logisk gruppert.</li>
          <li>
            0 minutter/bootcamp betyr <b>"gjøres for deg"</b>.
          </li>
          <li>
            Ikke alt er relevant for <b>sommerjobbere</b>.
          </li>
          <li>
            Denne listen er kun for <b>din egen del.</b>
          </li>
          <li>
            Lagring skjer i <b>localStorage</b>.
          </li>
          <li>
            Om du jobber med <b>design</b> eller noe annet som ikke er
            utvikling, så er det mye du kan hoppe over. Lucky you.
          </li>
        </ul>
        <b>Tidsfeltet til venstre</b> gir et subjektivt og røft tidsestimat.
        Fyll gjerne inn hvor lang tid ting egentlig tok. Vi ønsker å tilpasse
        estimatene til virkeligheten ved å f.eks. ta en gjennomgang med
        håndsopprekning etterhvert. Det er <b>spesielt viktig</b> for de
        estimatene vi har tatt helt feil på.
      </div>
    </>
  );
};

export function Nooblist({
  checkbox_sections: checkboxSections,
  checkedBoxesCount,
  setCheckedBoxesCount,
}) {
  return (
    <section className="nooblist">
      {ststicContent()}
      <div>
        {checkboxSections.map((section, i) => (
          <div key={i}>
            <h3>{section.id}</h3>
            {section.boxes.map((b) => (
              <TodoItem
                key={b.id}
                label={b.label}
                id={b.id}
                placeholder={b.placeholder}
                href={b.href}
                checkedBoxesCount={checkedBoxesCount}
                setCheckedBoxesCount={setCheckedBoxesCount}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
