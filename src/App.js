import { Notifier } from './Notifier.js';

const App = {
  async start () {
    try {
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
