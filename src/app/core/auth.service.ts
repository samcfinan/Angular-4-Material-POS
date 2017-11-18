import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { User } from './user';
import { DatabaseService} from '../database.service';


@Injectable()
export class AuthService {

  authState: any = null;
  user: BehaviorSubject<User> = new BehaviorSubject(null);

  currentUID: string;
  admin: boolean;

  constructor(private afAuth: AngularFireAuth, private db: DatabaseService,
              private afs: AngularFirestore, private router: Router) {
    // Get auth data, then get Firestore user document, else null
    this.afAuth.authState
    .switchMap(auth => {
      if (auth) {
        /// signed in
        return this.afs.doc<User>('users/' + auth.uid).valueChanges();
      } else {
        /// not signed in
        return Observable.of(null);
      }
    })
    .subscribe(user => {
      this.user.next(user);
    });
  }

  signup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(userData => {
      const newUser: User = {email: email, cashier: true, admin: false};
      this.afs.collection('users').doc(userData.uid).set(newUser);
    });

  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      this.authState = user;
      console.log('Login success');
      this.currentUID = this.afAuth.auth.currentUser.uid;
      this.checkAdmin(this.currentUID);
      this.router.navigate(['/welcome']);
    });
  }

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.authState = user;
        console.log('Login success');
        this.currentUID = 'guest';
        this.checkAdmin(this.currentUID);
        this.router.navigate(['/welcome']);
      });
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'));
  }

  updateUserRole(id, roles) {
    this.db.updateUser(id, roles);
  }

  checkAdmin(uid) {
    if (uid !== 'guest') {
      this.db.getUser(uid).valueChanges().take(1).subscribe(data => this.admin = data.admin);
    } else {
      this.admin = false;
    }
  }

  signOut(): void {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
      this.authState = null;
      this.currentUID = null;
      this.admin = false;
    });
    console.log('Logged out');
  }

}
