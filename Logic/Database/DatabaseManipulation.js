import * as SQL from 'expo-sqlite'

const database = SQL.openDatabase('database.db')

// using fragments from ben's example files

export async function createStreakScoreTable() {
  database.transaction((trans) => {
    trans.executeSql('CREATE TABLE IF NOT EXISTS streak_score (streak INTEGER, score INTEGER)',
      null,
      () => { console.log('streak_score table up') },
      (e) => { console.error('err in createSteakScoreTable ', e) }
    )
  })
};

export async function resetStreakScore() {
  database.transaction((trans) => {
    trans.executeSql('INSERT INTO streak_score (streak, score) values (?, ?)',
      [0, 0],
      () => { console.log('streak and score have been set to 0') },
      (e) => { console.error('err in resetStreakScore ', e) }
    )
  })
};

export async function updateStreak(streak) {
  database.transaction((trans) => {
    trans.executeSql('UPDATE streak_score SET streak=?',
      streak,
      () => { console.log('Streak in db is now ', streak) },
      (e) => { console.error('err in updateStreak ', e) }
    )
  })
};

export async function updateScore(score) {
  database.transaction((trans) => {
    trans.executeSql('UPDATE streak_score SET score=?',
      score,
      () => { console.log('score in db is now ', score) },
      (e) => { console.error('err in updateScore ', e) }
    )
  })
};

export async function getStreak(setStreak) {
  database.transaction((trans) => {
    trans.executeSql('SELECT streak FROM streak_score',
      null,
      (_, { rows: { _array } }) => {
        console.log('got streak from db ', _array)
        setStreak(_array)
      },
      (e) => console.error('err in getStreak', e)
    )
  })
};

export async function getScore(setScore) {
  database.transaction((trans) => {
    trans.executeSql('SELECT score from streak_score',
      null,
      (_, { rows: { _array } }) => {
        console.log('got score from db', _array)
        setScore(_array) // probably wont work
      },
      (e) => console.error('err in getScore', e)
    )
  })
}

export async function createTaskTable() {
  database.transaction((trans) => {
    trans.executeSql(`CREATE TABLE IF NOT EXISTS 
    tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR, 
      format VARCHAR, page_count INTEGER, slide_count INTEGER, 
      word_count INTEGER, start_date DATE, due DATE, 
      subject VARCHAR, done BOOL)`,
      null,
      () => console.log('tasks table up'),
      (e) => console.error('err in createTaskTable ', e)
    )
  })
};

export async function dropTaskTable() {
  database.transaction((trans) => {
    trans.executeSql('DROP TABLE tasks',
      null,
      () => console.log('tasks table dropped'),
      (e) => console.error('err in dropTaskTable ', e)
    )
  })
};

export async function addTask(task) {
  // while asking chatGPT for debuging help it suggested putting transaction in a try statement
  try {
    database.transaction((trans) => {
      trans.executeSql(
        `INSERT INTO tasks 
        (title, format, page_count, slide_count, word_count, start_date, due, subject, done) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,

        [task._title, task._type, task._maxPages, task._maxSlides,
        task._maxWords, task._startDate, task._dueDate, task._subject,
        task.done],

        (_) => console.log('Task added: ', task._title),
        (_, e) => console.error('err in addTask ', e)
      );
    });
  } catch (e) {
    console.error('Unable to excute SQL, table may not be made', e);
  };
};

export async function deleteTask(taskName) {
  try {
    database.transaction((trans) => {
      trans.executeSql('DELETE FROM tasks WHERE title=?',
        [taskName],

        (_) => console.log('task deleted: ', taskName),
        (_, e) => console.error('err in deleteTask ', e)
      );
    })
  } catch (e) {
    console.error('Unable to excute SQL, table may not be made', e);
  };
};


export async function getTasks() {
  return new Promise((resolve, reject) => {
    database.transaction((trans) => {
      trans.executeSql(
        'SELECT * FROM tasks',
        null,
        (_, { rows: { _array } }) => {
          console.log('Got tasks from db');
          resolve(_array);
        },
        (e) => {
          console.error('err in getTasks', e);
          reject(e);
        }
      );
    });
  });
};

export async function updateTask(task, originalTitle) {
  try {
    database.transaction((trans) => {
      trans.executeSql(`UPDATE tasks 
      SET format = ?, 
      title = ?,
      page_count = ?,
      slide_count = ?,
      word_count = ?,
      start_date = ?,
      due = ?,
      subject = ?
      WHERE title = ?`,
        [task._format, task._title, task._pageCount, task._slideCount, task._wordCount,
        task._startDate, task._dueDate, task._subject, originalTitle],
        (_) => console.log('task updated'),
        (_, e) => console.error('err in updateTask ', e)
      );
    })
  } catch (e) {
    console.error(e);
  };
};

export async function setTaskDone(task, isDone) {
  try {
    database.transaction((trans) => {
      trans.executeSql('UPDATE tasks SET done = ? WHERE title = ?',
        [isDone, task.title],
        (_) => console.log(task.title, ' set to done')),
        (_, e) => console.error('err in setTaskToDone ', e
        );
    });
  } catch (e) {
    console.error(e);
  };
};