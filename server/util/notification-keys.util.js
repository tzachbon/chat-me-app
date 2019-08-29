module.exports = {
  publicKey: `BMOo-DGN52-xQhRI5_YGqjU6VUpADG942WnkbOFDR174yll9cR1WqGgBSexQmmUZ9EQ7-C66pgUfh2XdkG-Ebkc`,
  privateKey: `XJof96jL850kF4n39KqYhbcvVi_60u8qJ6xmfa_X64I`,
  notificationCreator: notification => {
    const { title, body, icon, url } = notification;

    const payload = {
      notification: {
        title,
        body,
        icon,
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1,
          url
        },
        actions: [
          {
            action: 'explore',
            title: 'Go to the site'
          }
        ]
      }
    };
    return JSON.stringify(payload);
  }
};
