import { Container } from '@mui/system';
import './Coc.css';
import COC from '../../img/COC.png';

function Coc() {
  return (
    <Container className='mainContainer'>
      <Container className='headerContainer' sx={{ mb: 5 }}>
        <h1 className='heading'>
          Code of<span> Conduct</span>
        </h1>
      </Container>
      <div className='rowC'>
        <div className=''>
          <h3 className='heading2'>AntiHarassment Policy</h3>
          <h3 className='heading3'>
            Why do we have an official Anti-Harassment policy for Google
            Developer Group?
          </h3>
          <ul className='unlists'>
            <li>
              It sets expectations for behavior at the event. Simply having an
              anti-harassment policy can prevent harassment.
            </li>
            <li>
              It encourages people to attend who have had bad experiences at
              other events
            </li>
            <li>
              It gives event staff/volunteers instructions on how to handle
              harassment quickly, with minimum amount of disruption for the
              event.
            </li>
          </ul>
          <h3 className='heading3'>
            Why do we have an official Anti-Harassment policy for GDG Kolkata
            cloud Community events?
          </h3>
          <ul className='unlists'>
            <li>Gender</li>
            <li>Sexual Orientation</li>
            <li>Disability</li>
            <li>Gender Identity</li>
            <li>Age</li>
            <li>Race</li>
            <li>Religion</li>
            <li>Nationality</li>
          </ul>
        </div>
        <div className='cocimg'>
          <img src={COC} alt='COC' width={370} />
        </div>
      </div>
      <p className='unlists'>
        The above is not an exhaustive list -- we do not tolerate harassment of
        event spanarticipants in any form.
      </p>
      <p className='para'>
        Sexual language and imagery is not appropriate for any event venue,
        including talks. Event participants violating these rules may be
        expelled from the event, and event banned from future events at the
        discretion of the event organizers/management.
      </p>
      <div>
        <h3 className='heading3'>
          Harassment includes (but is not limited to):
        </h3>
        <ul className='unlists'>
          <li>
            Offensive verbal comments related to gender, sexual orientation,
            disability, gender identity, age, race, religion.
          </li>
          <li>The use or display of sexual images in public spaces.</li>
          <li>Deliberate intimidation.</li>
          <li>
            Deliberate intimidation Stalking Harassing photography or recording
            Sustained disruption of talks or other events Inappropriate physical
            contact Unwelcome sexual attention
          </li>
          <li>Harassing photography or recording</li>
          <li>Stalking</li>
        </ul>
      </div>
    </Container>
  );
}

export default Coc;
