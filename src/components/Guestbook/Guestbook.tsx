import React, { useEffect, useState } from 'react'
import PageHeader from '../PageHeader/PageHeader';
import { auth, googleProvider, db } from '../../../firebaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';

interface Comment {
  id: string;
  user: string;
  message: string;
  approved: boolean;
}

const Guestbook = () => {
  const [user, setUser] = useState<any>(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'guestbook'), where('approved', '==', true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData: Comment[] = [];
      snapshot.forEach((doc) => commentsData.push({ ...doc.data(), id: doc.id } as Comment));
      setComments(commentsData);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = (provider: string) => {
    const authProvider = googleProvider;
    signInWithPopup(auth, authProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.error(error));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error(error));
  };

  const handleSubmitComment = async () => {
    if (!user || !comment.trim()) return;
    
    try {
      await addDoc(collection(db, 'comments'), {
        user: user.displayName || user.email,
        message: comment,
        approved: false, // Initially not approved
      });
      setComment(''); // Clear input
      alert('Your comment is awaiting approval.');
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  return (
    <div className="guestbook-container">
      <h1>Guestbook</h1>
      {!user ? (
        <div className="auth-buttons">
          <button onClick={() => handleSignIn('google')}>Sign in with Google</button>
        </div>
      ) : (
        <div className="comment-section">
          <p>Welcome, {user.displayName || user.email}</p>
          <textarea 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            placeholder="Leave a comment" 
          />
          <button onClick={handleSubmitComment}>Submit Comment</button>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}

      <div className="comments-list">
        <h2>Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p><strong>{comment.user}</strong>: {comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
