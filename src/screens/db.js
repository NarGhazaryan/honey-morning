import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('favorites.db')

export class DB {
    static init() {
        return new Promise((res,rej) => {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, title TEXT, imgUrl TEXT, description TEXT, caty TEXT)',
                    [],
                    res,
                    (_, err) => rej(err) 
                )
            })
        })
    }

    static getPosts(){
        return new Promise((res, rej)=>{
            db.transaction(tx=>{
                tx.executeSql(
                    'SELECT * FROM posts',
                    [],
                    (_, result) => res(result.rows._array),
                    (_, err) => rej(err)
                )
            })
        })
    }

    static createPost({title, imgUrl, description, caty}){
        return new Promise((res,rej) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO posts (title, imgUrl, description, caty) VALUES (?, ?, ?, ?)`,
                    [title, imgUrl, description, caty],
                    (_, result) => res(result),
                    (_, err) => rej(err) 
                )
            })
        })
    }

    static removePost(id) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM posts WHERE id = ?',
          [id],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }
}