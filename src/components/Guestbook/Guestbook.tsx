import React, { useCallback, useEffect, useState } from 'react';
import './Guestbook.css';
import PageHeader from '../PageHeader/PageHeader';
import {  signInWithPopup,  GoogleAuthProvider,  GithubAuthProvider,  onAuthStateChanged,  signOut, User as FirebaseUser } from 'firebase/auth';
import {  addDoc,  collection,  getDocs,  Timestamp} from 'firebase/firestore';
import 'firebase/firestore';
import { db, auth } from '../../firebase-config';

interface Entry {
  id: string;
  [key: string]: any;
}

const Guestbook = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const entriesCollectionRef = collection(db, 'guestbookEntries');

  const fetchGuestbookEntries = useCallback(async () => {
    try {
      const snapshot = await getDocs(entriesCollectionRef);
      const entriesData: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEntries(entriesData);
    } catch (error) {
      console.error('Error fetching guestbook entries:', error);
    }
  }, [entriesCollectionRef]);

  useEffect(() => {
    fetchGuestbookEntries();    

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });
    
    return () => unsubscribe();
  }, [auth]);

  const handleSignIn = async (provider: any) => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignOut = () => {
    signOut(auth).then(() => setUser(null)).catch((error) => console.error('Error signing out:', error));
  };

  const handleNewEntry = async (newEntry: any) => {
    try {
      await addDoc(entriesCollectionRef, newEntry);
      fetchGuestbookEntries();
    }
    catch (error){
      console.log("error while adding new entry: ", error);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const userId = user!.uid;
    const username = e.currentTarget.username.value;
    const profilePicture = user!.photoURL;
    const comment = e.currentTarget.comment.value;
    const newEntry = { userId, username, profilePicture, comment, timestamp: Timestamp.fromDate(new Date()) };
    
    handleNewEntry(newEntry);
    e.currentTarget.reset();
  };

  return (
    <div className="guestbook-container">
      <PageHeader title="Guestbook" description="Let me know your questions, comments, and thoughts!" />
      <div className="guestbook-content-container">
        {user ? (
          <>
            <h3>Welcome, {user.displayName}!</h3>
            <form onSubmit={onSubmit} className="entry-form">
              <input type="text" id="username" name="username" required className="input-field" placeholder='Name' />
              <textarea id="comment" name="comment" required className="input-field" placeholder='Express yourself'></textarea>
              <div className="signed-in-buttons">
                <button onClick={handleSignOut} className="signout-button">Sign Out</button>
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </>
        ) : (
          <div className="login-container">
            <div className="login-title-container">Share your thoughts:</div>
            <div className="login-buttons-container">
              <button onClick={() => handleSignIn(new GoogleAuthProvider())} className="signin-button google">Sign in with Google</button>
              <button onClick={() => handleSignIn(new GithubAuthProvider())} className="signin-button github">Sign in with GitHub</button>
            </div>
          </div>
        )}
        
        {/* Display guestbook entries */}
        {entries.map((entry) => (
          <div key={entry.id} className="entry-card">
            <div className="profile-picture-container">
              <img src={entry.profilePicture} alt={`${entry.username}'s profile`} className="profile-picture" />
            </div>
            <div className="comment-text-container">
              <div className="comment-header-container">
                <div className="comment-header-username"><strong>{entry.username}</strong></div>
                <div className="comment-header-timestamp">{entry.timestamp ? new Date(entry.timestamp.seconds * 1000).toLocaleString() : 'Unknown'}</div>
              </div>
              <div className="comment-body">{entry.comment}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
