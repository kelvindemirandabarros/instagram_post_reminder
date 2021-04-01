const Notifier = {
  async init () {
    // Navegador pede permissão ao usuário para mostrar notificações.
    const permission = await Notification.requestPermission();

    if ( permission !== 'granted' ) {
      throw new Error( 'Permissão de notificação negada.' );
    }
  },

  notify ({ title, body, icon }) {
    // Cria uma nova instância do Notification, personalizando-a.
    new Notification( title, {
      body,
      icon
    });
  },
};

export { Notifier };
