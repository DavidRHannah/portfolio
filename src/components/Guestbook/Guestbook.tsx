import React, { useEffect, useState } from 'react'
import './Guestbook.css';
import PageHeader from '../PageHeader/PageHeader'
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import { addDoc, collection, getDocs, initializeFirestore, serverTimestamp, Timestamp} from 'firebase/firestore';
import 'firebase/firestore';

interface Entry {
  id: string;
  [key: string]: any;
}

interface Comment {
  userId: string;
  username: string;
  profilePicture: string;
  comment: string;
  timestamp: Timestamp;
}

const Guestbook = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [user, setUser] = useState<FirebaseUser | null >(null);

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: "drh-portfolio",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  };

  const firestoreSettings = {
    // host: 'localhost:8081',
    // ssl:false
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = initializeFirestore(app, firestoreSettings);

  useEffect(()=>{
    // Fetch guestbook entries
    const guestbookCollection = collection(db, 'guestbookEntries');
    console.log(guestbookCollection);
    getDocs(guestbookCollection)
      .then((snapshot) => {
        const entriesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(entriesData);
        setEntries(entriesData);
      })
      .catch((error) => {
        console.error('Error fetching guestbook entries:', error);
      });

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
      });  
      return () => unsubscribe();
  }, [db]);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleGitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error('Error signing in with GitHub:', error);
    }
  };

  const handleNewEntry = async (newEntry:any) => {
    const guestbookCollection = collection(db, 'guestbookEntries');
    try {
      await addDoc(guestbookCollection, newEntry);
      getDocs(guestbookCollection)
        .then((snapshot) => {
          const entriesData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setEntries(entriesData);
        })
        .catch((error) => {
          console.error('Error fetching guestbook entries:', error);
        });
    } catch (error) {
      console.error('Error adding new entry:', error);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
      });
  };

  return (
    <div className="guestbook-container">
      <PageHeader title="Guestbook" description="Let me know your questions, comments, and thoughts!" />
      <div className="guestbook-content-container">
        {/* User Authentication Section */}
        {user ? (
          <>
            <h3>Welcome, {user.displayName}!</h3>
            
            {/* Form for adding new entries */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const userId = user.uid;
                const username = e.currentTarget.username.value;
                const profilePicture = user.photoURL;
                const comment = e.currentTarget.comment.value;
                const timestamp = Timestamp.fromDate(new Date());
                const newEntry = { userId, username, profilePicture, comment, timestamp, };
                handleNewEntry(newEntry);
                e.currentTarget.reset();
              }}
              className="entry-form"
            >
              <input type="text" id="username" name="username" required className="input-field" placeholder='Name' />
              <textarea id="comment" name="comment" required className="input-field" placeholder='Express yourself'></textarea>
              <div className="signed-in-buttons">
                <button onClick={handleSignOut} className="signout-button">
                  Sign Out
                </button>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>              
            </form>
          </>
        ) : (
          <>
            <div className="login-container">
              <div className="login-title-container">
                Share your thoughts:
              </div>
              <div className="login-buttons-container">
                <button onClick={handleGoogleSignIn} className="signin-button google">
                  Sign in with Google
                </button>
                <button onClick={handleGitHubSignIn} className="signin-button github">
                  Sign in with GitHub
                </button>
              </div>              
            </div>
          </>
        )}
        
        {/* Display guestbook entries */}
        {entries.map((entry) => (
          <div key={entry.id} className="entry-card">
            <div className="profile-picture-container">
              <img src={entry.profilePicture} alt={`${entry.username}'s profile`} className="profile-picture" />
            </div>
            <div className="comment-text-container">
              <div className="comment-header-container">
                <div className="comment-header-username">
                  <strong>{entry.username}</strong>
                  </div>
                <div className="comment-header-timestamp">
                  {entry.timestamp ? new Date(entry.timestamp.seconds * 1000).toLocaleString() : 'Unknown'}
                  </div>
              </div>
              <div className="comment-body">
                {entry.comment}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Guestbook
