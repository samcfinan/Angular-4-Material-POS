import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {

  authState: any = null;
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    // Get auth data, then get Firestore user document, else null
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }

  signup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      this.authState = user;
    });
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      this.authState = user;
    });
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

}
