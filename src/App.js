import React, { useState } from 'react';
import { database } from './firebase';
import { ref, push, set } from 'firebase/database';

function App() {
  const [message, setMessage] = useState('');
  const [lastMessageKey, setLastMessageKey] = useState(null);

  // Saves a new message, storing its unique key
  const handleSave = () => {
    const newMessageRef = push(ref(database, 'messages'), { text: message });
    newMessageRef
      .then(() => {
        console.log('Message saved with key:', newMessageRef.key);
        setLastMessageKey(newMessageRef.key);
        setMessage('');
      })
      .catch((err) => console.error(err));
  };

// TODO: Write the "handleEdit" function to update the last saved message in Firebase.
//
// "lastMessageKey" contains the unique key of the last saved message.
//
// Steps:
// 1) If "lastMessageKey" is missing, log "No message to edit!" and stop.
// 2) Use `set` to update the message at `messages/${lastMessageKey}` with the current "message" value.
//
// HINT: you can use
//   set(ref(database, `messages/${lastMessageKey}`), { text: message })
//   to update the last saved message using the message key variable

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Firebase Demo: Save & Edit</h1>
      <div>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: '8px', marginRight: '6px' }}
        />

        <button onClick={handleSave} style={{ padding: '8px 16px' }}>
          Save a message
        </button>

        <button onClick={handleEdit} style={{ padding: '8px 16px', marginLeft: '6px' }}>
          Edit the last saved message
        </button>
      </div>
    </div>
  );
}

export default App;