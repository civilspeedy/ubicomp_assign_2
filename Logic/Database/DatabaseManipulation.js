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
        setScore(_array)
      },
      (e) => console.error('err in getScore', e)
    )
  })
}

export async function createTaskTable() {
  database.transaction((trans) => {
    trans.executeSql('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR, format VARCHAR, page_count INTEGER, slide_cout INTEGER, word_count INTEGER, start_date DATE, due DATE, subject VARCHAR)',
      null,
      () => console.log('tasks table up'),
      (e) => console.error('err in createTaskTable ', e)
    )
  })
};

export async function addTask(task) {
  database.transaction((trans) => {
    trans.executeSql('INSERT INTO tasks (title, format, page_count, slide_count, word_count, start_date, due, subject) VALUES = (?, ?, ?, ?, ?, ?, ?, ?)',
      [task.title, task.type, task.maxPages, task.maxSlides, task.maxWords, task.startDate, task.dueDate, task.subject],
      () => console.log('Task ', task, ' added'),
      (e) => console.error('err in addTask ', e)
    )
  });
};

export async function getTasks(setTasks) {
  database.transaction((trans) => {
    trans.executeSql('SELECT * FROM tasks',
      null,
      (_, { rows: { _array } }) => {
        console.log('Got tasks from db ', _array)
        setTasks(_array)
      },
      (e) => console.error('err in getTasks', e)
    )
  })
};

// const [item1, item2] = await Promise.all([getfunc1, getFunt2]) <- saw on reddit meant to be a fast way of getting things
// https://www.reddit.com/r/reactnative/comments/t2cdwh/quicktip_to_perform_multiple_tasks_at_once_like_a/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button