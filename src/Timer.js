import { View } from './View.js';

const Timer = {
  time: 25 * 60,
  currentTime: 0,
  interval: null,

  timeToMinutes: time => Math.floor( time / 60 ),
  timeToSeconds: time => time % 60,

  // padStart() adiciona caracteres a uma string se ela tiver menos que determinada quantidade de caracteres.
  formatTime: time => String( time ).padStart( 2, '0' ),

  init ( time ) {
    Timer.time = time;
    Timer.currentTime = Timer.time;
    Timer.interval = setInterval( Timer.countdown, 1000 );
  },
  
  countdown () {
    Timer.currentTime -= 1;

    const minutes = Timer.formatTime( Timer.timeToMinutes( Timer.currentTime ) );
    const seconds = Timer.formatTime( Timer.timeToSeconds( Timer.currentTime ) );

    View.render({
      minutes,
      seconds,
    });

    if ( Timer.currentTime === 0 ) {
      clearInterval( Timer.interval );
    }
  }
};

export { Timer };
