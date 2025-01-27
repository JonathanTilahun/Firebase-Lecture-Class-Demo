const handleEdit = () => {
  if (!lastMessageKey) {
    console.log('No message has been saved yet!');
    return;
  }

  const messageRef = ref(database, `messages/${lastMessageKey}`);
  set(messageRef, { text: message })
    .then(() => {
      console.log('Message updated to:', message);
      setMessage('');
    })
    .catch((err) => console.error(err));
};