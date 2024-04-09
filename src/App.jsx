import PropTypes from 'prop-types';
import imguno from './assets/images/img-1.jpg';
import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import ListFruts from './components/fruts/ListFruts';
import ButtonState from './components/ButtonState';

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const App = () => {
  const handleClick = (name) => {
    name = 'yeison';
    console.log('clicked: ' + name);
  };
  const title = 'Mi titulo desde una constante';
  const classTitle = 'text-center';
  const classColor = {
    primary: 'text-primary',
    info: 'text-info',
  };
  const user = false;
  const fruts = ['🍕', '🍔', '🍟', '🌭', '🥐', '🌮', ];
  const frutsDos = ['🍗', '🥩', '🍤', '🍭']

  return (
    <div className={classTitle}>
      <ButtonState/>
      <h1 className={classColor.primary}>{title.toUpperCase()}</h1>
      <p className={classColor.info}>
        parrafo prueba parrafo prueba parrafo prueba
      </p>
      <img src={imguno} alt={`imagen-${title}`} />
      <MyButton text="boton 1" handleClick={handleClick} />

      <WelcomeText user={user} />
      <ListFruts fruts={fruts}/>
      <ListFruts fruts={frutsDos}/>
     
    </div>
  );
};

export default App;
