import { Notifier } from './Notifier.js';
import { Timer } from './Timer.js';

const App = {
  async start () {
    try {
      const time = 20 * 60;

      Timer.init( time );
      await Notifier.init();
      Notifier.notify({
        title: 'Hora do Post',
        body: 'Crie algum conteúdo para ajudar a comunidade.'
      });
    
    } catch ( error ) {
      console.log( error.message );
    }
  }
}

export { App };
